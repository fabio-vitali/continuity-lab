---
artifact_id: GUIDE-DEV
status: provisional
owner: program
last_updated: 2026-07-19
supersedes: []
superseded_by: null
---

# Continuity — Developer Guide

This guide explains what Continuity is and exactly how the validated system
works, for a developer who has never seen it before. It is **explanatory, not
normative**: every rule summarized here is owned by another canonical artifact
(see [Reading map](#reading-map)); on any conflict, the owning artifact wins.

---

## 1. What Continuity is

Continuity is a **repository-native framework for sustained coding-agent
work**, with Claude Code as the first executor. It answers one question:

> How can an agent work on a repository across many sessions — interruptions,
> crashes, model changes, human handoffs — without losing state, repeating
> effects, silently drifting out of scope, or claiming completion without
> proof?

Its answer is to make the **repository itself** the only durable memory:
work state, execution state, context contracts, evidence, decisions, and
lessons are all versioned files. Chat transcripts are **never** authority.

The core guarantees, all validated by executed iterations (see §8):

- **Bounded context** — an agent session receives a formed, digest-pinned
  Context Pack, not "the whole repo plus vibes".
- **Resumable execution** — work happens inside a durable Run that a fresh
  session can resume from repository state alone, with effect deduplication.
- **Evidence-bound completion** — a Work Item completes only when every
  completion criterion has linked, typed Evidence; otherwise the gate blocks.
- **Governed learning** — lessons and rule changes go through an explicit
  Observation → Lesson → Decision → owner-applied change lifecycle; nothing
  auto-promotes itself into policy.
- **Fail-closed everywhere** — every violated precondition stops with a typed
  diagnostic instead of degrading silently (§7).

## 2. Reading map

| You want | Read |
|---|---|
| Product intent, concepts, constraints, success criteria | `docs/10-product/product-foundation.md` |
| Full target architecture (bounded contexts, rings, state authority) | `docs/30-target-architecture/target-architecture.md` |
| UX / workflows / CLI responsibility / adoption stages | `docs/40-product-experience/product-experience.md` |
| Migration path from the incumbent runtime | `docs/60-migration/migration-plan.md` |
| How the program itself is run (iterations, gates, contracts) | `docs/00-governance/product-development-operating-model.md` |
| Where the program currently stands | `docs/90-state/program-state.md` |
| Per-iteration execution reports (what was actually proven) | `docs/70-implementation/*.md` |
| High-impact choices and their rationale | `decisions/DR-*.md` |

## 3. The three repositories

| Repository | Role |
|---|---|
| `continuity-lab` (this repo) | Canonical **program memory**: product/architecture docs, iteration contracts (`sessions/*/context-pack.yaml`), decision records, program state. Contains **no runtime code** (only program tooling under `scripts/`). |
| `nestfolio` | The **host and dogfooding target**. Contains the Continuity implementation (engine, stores, bindings — see §4) alongside the real product it manages, plus the incumbent "runtime" system Continuity is designed to eventually replace. |
| `continuity-workspace` | Local **control notes** for development sessions (Claude Code operating instructions). Not canonical memory. |

An important disambiguation inside nestfolio: there are **two systems** with
similar names.

- `runtime/` (minus `runtime/continuity/`) is the **incumbent** system — the
  `backlog-next` engine, gates, checks, and adapters that currently drive
  backlog work. Continuity's migration plan retires parts of it selectively;
  nothing has been retired yet.
- `runtime/continuity/` is the **Continuity engine** — the validated
  implementation this guide describes. It is intentionally small, isolated,
  and (currently) frozen under digest lock.

## 4. Where everything lives in the host repository

```text
nestfolio/
├── runtime/continuity/           # THE ENGINE (pinned read-only via engine-lock)
│   ├── lib/                      #   store.mjs, workflow.mjs, context.mjs,
│   │   ...                       #   pack-resolver.mjs, backlog-binding.mjs,
│   │                             #   errors.mjs, utils.mjs
│   ├── adapters/claude-code/     #   CLI + SessionStart/SessionEnd hooks
│   ├── tools/                    #   deterministic state validators
│   └── test/                     #   engine test suite
│
├── continuity/                   # DURABLE STORE (committed, canonical)
│   ├── artifacts/                #   one dir per artifact kind (see below)
│   ├── packs/                    #   reusable Packs (continuity-core, nestfolio)
│   ├── bindings/nestfolio/       #   project bindings: work-items, guards, decisions
│   ├── level-1/ … level-6/       #   per-level validated boundary assets (§8)
│   ├── evidence/                 #   per-iteration evidence trails (e.g. sd-001/)
│   └── dogfood/<slug>/           #   intermediate work products of dogfood items
│
├── .continuity/                  # OPERATIONAL STORE (inspectable, mechanical)
│   ├── runs/                     #   active Run state, leases, effects
│   ├── executor-sessions/        #   real Claude Code session provenance records
│   ├── audit.ndjson              #   append-only audit log (prefix-preserved)
│   └── derived/index.json        #   deterministic rebuildable index
│
└── tests/continuity-level-*.test.mjs   # published per-level suites (§8)
```

`continuity/artifacts/` holds one directory per **artifact kind**:
`work-items`, `working-sets`, `scopes`, `runs`, `sessions`, `checkpoints`,
`handoffs`, `context-packs`, `pack-locks`, `formation-traces`,
`validation-plans`, `validation-results`, `evidence`, `observations`,
`lessons`, `decisions`, `change-proposals`. Every artifact is a JSON file
with an explicit **revision number**; writes go through the store API with
`expectedRevision` optimistic concurrency, and a mismatch fails closed with
`REVISION_CONFLICT`. Artifacts recorded by closed iterations are immutable:
they are never edited, only superseded by higher revisions through authorized
transitions.

## 5. Core concepts (the domain model)

Owned by `product-foundation.md` §"Core operational concepts"; condensed here.

| Concept | What it is |
|---|---|
| **Work Item** | A bounded unit of agent-executable repository work: objective, scope + exclusions, completion criteria (testable or explicitly reviewable), validation requirements, state, evidence links. |
| **Working Set** | The explicitly selected set of Work Items (plus supporting context) a session may act on. Prevents "the whole backlog is active". |
| **Epic** | A coherent group of Work Items needing coordinated progress. An orchestration structure, not a Jira replica. |
| **Session** | One bounded interaction period (human + agent + repository). Session state is not durable memory until consolidated into artifacts. |
| **Run** | A durable, **resumable execution episode** for one bounded piece of work. First-class: it records inputs and context revision, completed effects, checkpoints, required decisions, failure state, and the exact continuation instruction. |
| **Scope** | What a Run/Work Item is authorized to change or inspect; exclusions are explicit. Enforced (out-of-scope writes fail closed). |
| **Context Pack** | A formed, versioned, digest-pinned **input contract** for a specific piece of work: selected artifacts and code slices, task state, constraints, applicable Decisions and Guards, required Evidence, exact objective. |
| **Handoff** | A durable continuation contract at a meaningful boundary (session end, interruption, executor change): done/pending, current position, changed artifacts, open questions, exact next action. |
| **Skill / Procedure** | A named, versioned executable procedure for recurring repository work. Represented and governed in the repository even when implemented with Claude Code facilities. |
| **Guard** | A condition meant to **stay true**, enforced deterministically, by measurement, or by explicit human review. Goals and Guards are deliberately separate concepts. |
| **Evidence** | A typed result supporting an execution/completion claim: test output, diffs, generated reports, human approvals, runtime observations. Completion claims must name their Evidence. |
| **Decision** | An explicit accepted/rejected/deferred/pending choice that materially affects work. Judgment decisions stay under human authority unless a policy explicitly delegates them. |
| **Lesson** | A reusable finding about how work should be done here. Recorded, linked to Evidence, reviewed, and only then applied or promoted — never automatically. |

## 6. Architecture in brief

Owned by `target-architecture.md`; the shape that matters day-to-day:

**Rings.** A small **Framework Core** (work coordination, context formation,
execution continuity, assurance, learning — pure repository-state logic) is
separated from **agent adapters** (Claude Code today: CLI, session hooks,
prompt/view production), from **reusable Packs** (portable procedures and
assets, e.g. `continuity-core`), and from **project bindings**
(`continuity/bindings/nestfolio/**`: this repo's work items, guards, applied
decisions). Dependencies point inward only; the Core never depends on an
adapter.

**Bounded contexts.** Work Coordination (backlog ↔ work items ↔ working
sets), Context Formation (candidate projection → recipe → digest-pinned
Context Pack + formation trace + human authorization record), Execution
Continuity (runs, effects, checkpoints, leases, handoffs, resume), Skills &
Packs (versioned procedures + lock files), Assurance (validation plans,
typed evidence, completion gate, guards, waivers), Decision & Learning
(observations, lessons, decisions, change proposals), Reference & Provenance
(audit, executor sessions, derived index).

**State authority.** Repository-native, two-class store: durable canonical
state under `continuity/` (committed, reviewed), operational state under
`.continuity/` (inspectable, mechanical, rebuildable where derived,
append-only where audit). No hidden databases, no transcript authority.

**Context formation pipeline** (validated at Levels 3–4): deterministic
candidate projection over the repository → explicit **human selection** →
recipe with pinned digests → formed Context Pack + formation trace →
validation (18 checks) → explicit human authorization record → adapter view
delivered to the executor **digest-matched** (the session proves it received
exactly the authorized bytes).

## 7. Fail-closed model

Every precondition violation raises a **typed diagnostic** (a
`ContinuityError` with a stable `code`) and stops before mutation. The full
set currently raised by the engine:

```text
BACKLOG_ID_MISMATCH        CHECKPOINT_REQUIRED       COMPLETED_EFFECT_DIVERGED
COMPLETION_GATE_BLOCKED    IMMUTABLE_ARTIFACT_EXISTS INVALID_ARGUMENT
INVALID_BACKLOG            INVALID_HANDOFF           INVALID_JSON
INVALID_PACK               LEASE_CONFLICT            LEASE_REQUIRED
MISSING_ARGUMENT           MISSING_ARTIFACT          MISSING_ASSET
MISSING_CAPABILITY         OUT_OF_SCOPE_EFFECT       PACKS_MISSING
PACK_LOCK_MISMATCH         PATH_OUTSIDE_REPOSITORY   PROCEDURE_ID_MISMATCH
REVISION_CONFLICT          RUN_NOT_RESUMABLE         SESSION_RUN_MISMATCH
SKILL_ASSET_MISMATCH       STALE_RUN                 UNKNOWN_EFFECT_REQUIRES_RECONCILIATION
UNKNOWN_VALIDATOR          WORKING_SET_NOT_READY     WORK_NOT_FOUND
WORK_NOT_READY
```

Key mechanisms behind them:

- **Freshness / staleness.** A Run binds to a repository fingerprint
  (including the git HEAD SHA). Resuming against a changed repository fails
  with `STALE_RUN` rather than continuing on wrong assumptions. Corollary:
  committing a Run's own artifacts advances HEAD and makes that Run
  non-resumable — resume *before* committing, or prepare a fresh Run
  against the new HEAD (see §10).
- **Leases.** One live executor per Run. A second session gets
  `LEASE_CONFLICT`; an interrupted session's lease is released by the
  recorded interrupt/recovery path, never silently.
- **Keyed effects.** Every side effect is recorded under an explicit key
  with a content digest. Replay after resume **deduplicates** (same key +
  same content → no-op); a divergent replay fails with
  `COMPLETED_EFFECT_DIVERGED`; an effect present on disk but unknown to the
  Run fails with `UNKNOWN_EFFECT_REQUIRES_RECONCILIATION`.
- **Scope enforcement.** Writes outside the Run's authorized paths fail with
  `OUT_OF_SCOPE_EFFECT` / `PATH_OUTSIDE_REPOSITORY`.
- **Optimistic concurrency + immutability.** `expectedRevision` on every
  write; `REVISION_CONFLICT` on mismatch; `IMMUTABLE_ARTIFACT_EXISTS` on
  attempts to recreate closed records.
- **Audit.** `.continuity/audit.ndjson` is append-only; validations prove
  the pre-existing byte prefix is preserved. `derived/index.json` must be
  reproducible by deterministic rebuild.

## 8. The validated capability levels

Continuity was cut over in **six levels**, each validated by contracted
iterations that ended in immutable PASS/FAIL results, each pinned by a
published test suite in nestfolio (`tests/continuity-level-N.test.mjs`) plus
per-level boundary assets under `continuity/level-N/`:

| Level | Capability | Boundary assets | Validated by |
|---|---|---|---|
| 1 | One governed project Procedure (`nestfolio.backlog-next@1.0.1`) exposed from a Pack, with 19 locked assets, activation, and doctor/verify diagnostics | `continuity/level-1/` (pack manifest, lock, activation, CLI) | MI-001…MI-001E-R1 |
| 2 | Reusable **Pack composition** (`continuity-core` + `nestfolio` packs, lock file, activation history) | `continuity/level-2/` | MI-002, MI-002-R2 |
| 3 | **Bounded local work and scope**: deterministic candidate projection, route, scope, work brief | `continuity/level-3/` | MI-003-R2 |
| 4 | **Authorized context introduction**: recipe → digest-pinned Context Pack + formation trace + validation (18 checks) + human authorization record + digest-matched adapter view | `continuity/level-4/` | MI-004, MI-004-R1 |
| 5 | **Resumable Run cutover**: the engine + two-class store run real work across two genuine sessions (start → keyed effect → checkpoint → handoff → interrupt → fresh resume → dedup → final checkpoint), engine digest-locked | `continuity/level-5/` (run-binding, engine-lock) | MI-005 (+ VS-001/VS-001A groundwork) |
| 6 | **Evidence-bound completion** (assurance: validation plan from criteria, typed evidence in deterministic / agent-review / human-review modes, completion gate, one classified Guard, truthful backlog write-back) and **governed learning** (observations → lessons → decision → change proposal → single owner-applied binding; retirement inventory) | `continuity/level-6/` (completion-binding, learning-binding, checks, engine-lock) | MI-006 (FAIL, instructive), MI-006-R1, MI-007 |

The selected effort **SE-001** (`dashboard-bff-awaiting-confirmation-activity-gap`)
was the real feature used to prove Levels 3–6 end-to-end: formed at Level 4,
implemented under a frozen writable boundary (SE-001-R3), published, then
Evidence-bound completed at Level 6 (MI-006-R1) and reviewed into governed
learning (MI-007).

Program history discipline: **failures are immutable results**, never
relabeled. The FAIL records (MI-001 family, MI-003/-R1, SE-001-R1/R2, MI-006)
each bought a structural discovery — e.g. MI-006's FAIL discovered that the
engine keys one Work Item per id, which produced the contracted rebinding
path in MI-006-R1.

## 9. The execution loop, end to end

This is the full lifecycle a piece of work goes through. Engine API names
from `runtime/continuity/lib/workflow.mjs`; CLI from
`runtime/continuity/adapters/claude-code/cli.mjs`.

```text
select → start → effect* → checkpoint → [interrupt ⇢ resume]* → validate → complete → learn
```

1. **Select** — `selectWork(root, {workId})` binds a backlog item to a Work
   Item artifact and a Working Set (`ws-<id>`). (During dogfooding, Working
   Set/Scope preparation may also be direct-authored through the store API —
   the MI-005/MI-006-R1 mechanism.)
2. **Start** — `startRun(root, {workingSetId, runId, sessionId})` creates the
   Run, acquires the lease, binds the repository fingerprint, and forms the
   validation plan from the Work Item's completion criteria.
3. **Execute effects** — `recordFileEffect(root, {runId, sessionId, key,
   path, content})`: every mutation is a **keyed effect**, scope-checked,
   digest-recorded.
4. **Checkpoint** — `checkpointRun(...)` records a verified position and the
   exact `nextAction`; `final: true` marks the closing checkpoint.
5. **Interrupt** — `interruptSession(...)` publishes the resumable Handoff
   and releases the lease. This is also the normal way to close a session
   with the Run still open.
6. **Resume** — `resumeRun(root, {runId, sessionId})` in a **fresh session**:
   validates freshness (else `STALE_RUN`), acquires the lease (else
   `LEASE_CONFLICT`), replays effects with deduplication, and continues from
   the recorded `nextAction` — using repository state only, never the old
   chat transcript.
7. **Validate** — `validateRun(...)` executes the validation plan; each
   criterion produces an immutable validation result + linked **Evidence**
   artifact in its declared mode (deterministic command, agent review, or
   human review with a verbatim, UTC-stamped authorization).
8. **Complete** — `completeRun(...)` enforces the completion gate (every
   criterion passed + evidence linked + lease held, else
   `COMPLETION_GATE_BLOCKED`), then atomically completes the Work Item and
   performs the **truthful backlog write-back** (dossier flips to
   `status: shipped` with a validation gate note). The write-back requires
   the dossier byte-identical to its selection-time hash — intermediate work
   products belong under `continuity/dogfood/<slug>/`, never in the dossier.
9. **Learn** — `recordLesson(...)` (or, for governed slices, the MI-007
   store-API path): Observations are reviewed live by the owner to
   accepted/duplicate/deferred/rejected, Lessons carry
   `promotion.automatic: false`, Decisions and Change Proposals are separate
   artifacts, and at most an explicitly owner-approved change is applied to
   a binding. **Nothing auto-promotes.**

### Claude Code integration (the adapter)

Sessions launched with a Continuity identity in the environment get real
executor provenance recorded by project-local hooks (`.claude/settings.json`):

```bash
CONTINUITY_ACTION=start|resume CONTINUITY_RUN_ID=<run> CONTINUITY_SESSION_ID=<session> \
  [CONTINUITY_WORKING_SET_ID=<ws>] claude "<minimal pointer prompt>"
```

- `session-start.mjs` records the real Claude Code session id, model, cwd,
  git revision, and requested identity; invokes the `start`/`resume` CLI;
  injects the digest-recorded adapter view into context. Inert without the
  `CONTINUITY_*` variables. It never reads transcript contents.
- `session-end.mjs` records the termination reason. Records live under
  `.continuity/executor-sessions/`, outside every scope fingerprint.

Diagnostics: `npm run continuity:doctor` and `npm run continuity:verify`
(Level 1/2 asset + lock health); `inspectRun` / `rebuildDerivedIndex` for
operational state; `runtime/continuity/tools/validate-*.mjs` for
iteration-specific deterministic proofs.

## 10. Current phase: SD-001 sustained dogfooding

Since **2026-07-18T19:39:42Z** the program is in the SD-001 sustained
dogfooding period: real, backlog-routed nestfolio work is executed through
Continuity Levels 1–6 with the engine frozen, measured contemporaneously in
an append-only ledger (`continuity/evidence/sd-001/dogfooding-ledger.md`)
against the twelve Product Foundation success criteria. Minimums before the
verdict (SD-002, separately contracted): ≥6 active weeks, ≥20 non-trivial
Work Items, ≥5 multi-item efforts (≥2 Epics), ≥15 resumptions.

During the period: no engine/hook/settings byte changes, no published-suite
edits, no immutable-record mutation, no Skills/Packs/bindings changes outside
the governed-learning path, no per-criterion or period-verdict claims.

### Sharp edges to know (real findings from dogfooding)

- **One Work Item per id.** An id used by any prior Run cannot host a fresh
  Level-6 completion through the current engine (MI-006's discovery); the
  contracted rebinding path (MI-006-R1) is the workaround.
- **Resume before committing.** Committing a Run's artifacts advances HEAD
  and staleness-invalidates the Run (accepted behavior; recorded for
  run-mi005 and run-e2e-live-budget).
- **No blocked/deferred Work Item state.** Owner dispositions that stop work
  without completing it are recorded as decision files + ledger entries; the
  store artifact stays `in_progress`.
- **Dossier byte-identity.** `completeRun`'s write-back fails if the backlog
  dossier changed since selection — keep intermediate products out of it.
- **Isolated committed copies** for suite validation must be real `git
  clone`s (hooks don't propagate; `cp` copies carry the repo's pre-commit
  gates), committed with `--no-verify` where contracted.

## 11. Program mechanics (how changes happen)

Continuity is developed through **bounded, contracted iterations**: a Context
Pack contract in `sessions/<ID>-…/context-pack.yaml` pins starting revisions,
permitted writes, mandatory failures, and the verdict rule; execution ends in
a single conjunctive **UNCONDITIONAL PASS/FAIL** recorded immutably;
publications are separate commits with exact contracted subjects. Since
DR-0024 the *development-process* choreography is lightened (aggregated
phases, targeted reads, per-session cheapest-adequate model selection —
DR-0026), while the *product-level* guarantees are explicitly not.

If you change anything: normative changes need a Decision Record and flow
through the owning artifact + `artifact-index.md` (see
`docs/00-governance/artifact-governance.md`); during SD-001, engine and
binding changes are blocked outside governed learning.

## 12. Glossary of repo-specific jargon

| Term | Meaning |
|---|---|
| MI-NNN / SE-NNN / SD-NNN | Migration/selected-effort/sustained-dogfooding iterations; `-RN` = bounded correction retry |
| Immutable result | A recorded PASS/FAIL that is never repaired or relabeled |
| Publication | A separate contracted commit landing recorded artifacts at an exact revision with an exact subject |
| Adapter view | The digest-matched context actually delivered to the executor session |
| Keyed effect | A recorded, deduplicable side effect (§7, §9) |
| Two-class store | Durable `continuity/**` (committed) + operational `.continuity/**` (inspectable/mechanical) |
| Engine lock | Digest pin (`continuity/level-5|6/engine-lock.json`) making `runtime/continuity/**` read-only |
| Truthful write-back | `completeRun` updating the backlog dossier to `shipped` only on a gated, evidenced completion |
| Governed learning | The MI-007 lifecycle: Observation → Lesson → Decision → Change Proposal → owner-applied change |
| Dogfood ledger | Append-only SD-001 measurement record with machine-captured UTC entries |
