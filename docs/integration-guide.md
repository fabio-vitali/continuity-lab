---
artifact_id: GUIDE-INT
status: provisional
owner: program
last_updated: 2026-07-19
supersedes: []
superseded_by: null
---

# Continuity — Integration Guide

This guide explains how a target repository integrates Continuity, using the
real, validated integration in **Nestfolio** as the worked example throughout.
It assumes no prior knowledge of Continuity; §1 gives the minimum background,
and `docs/developer-guide.md` covers the system itself in depth. Like that
guide, this one is **explanatory, not normative**: every rule summarized here
is owned by another canonical artifact (see [Reading map](#12-reading-map));
on any conflict, the owning artifact wins.

One caveat up front: the exact CLI command spellings and distribution
packaging are explicitly deferred design questions
(`docs/40-product-experience/product-experience.md` §6.1, §13). The stable,
callable surface today is the engine API in
`runtime/continuity/lib/workflow.mjs` (in the host repository) plus the
`CONTINUITY_*` environment-variable hook protocol shown in §6. Command
examples below are the current adapter-CLI spellings as validated in
Nestfolio, not a frozen interface.

---

## 1. What Continuity is, in three paragraphs

Continuity is a **repository-native framework for sustained coding-agent
work**, with Claude Code as the first executor. It answers one question: how
can an agent work on a repository across many sessions — interruptions,
crashes, model changes, human handoffs — without losing state, repeating
effects, silently drifting out of scope, or claiming completion without
proof?

Its answer is to make the **repository itself** the only durable memory. Work
state, execution state, context contracts, evidence, decisions, and lessons
are all versioned files; chat transcripts are **never** authority. A session
that dies mid-task leaves behind a Run whose next action a fresh session can
read from disk and continue, with already-performed effects deduplicated.

The core guarantees — all validated by executed iterations — are: **bounded
context** (a session receives a formed, digest-pinned Context Pack, not "the
whole repo plus vibes"), **resumable execution** (durable Runs with keyed,
exactly-once effects), **evidence-bound completion** (a Work Item completes
only when every criterion has linked, typed Evidence), **governed learning**
(no lesson auto-promotes itself into policy), and **fail-closed behavior
everywhere** (every violated precondition stops with a typed diagnostic).

## 2. What "integrating" means

Continuity ships no service and no daemon. Integrating it means giving one
Git repository — the **target system** — a small set of committed and
operational file trees, plus adapter wiring for the executor (Claude Code).
Three repositories participate in the reference setup:

| Repository | Role |
|---|---|
| `continuity-lab` (this repo) | Canonical **program memory**: product/architecture docs, iteration contracts, decision records, program state. Contains **no runtime code**. |
| `nestfolio` | The **target system** and worked example of this guide: an Nx + pnpm monorepo (Angular micro-frontends, AWS CDK backends) whose backlog-routed development work runs through Continuity. It hosts the engine and all integration artifacts described below. |
| `continuity-workspace` | Local control notes for development sessions. Not canonical. |

The integration contract is defined as **narrow typed ports**
(`decisions/DR-0015-concrete-integration-ports-and-claude-code-adapter.md`):
repository read/revision inspection, effect observation, work-reference
resolution, Evidence collection, Decision resolution, Guard invocation,
Skill/Procedure resolution, agent-runtime session control, and actor
identity/time. The Claude Code adapter is the first implementation of the
agent-runtime port; nothing in the engine core imports Claude Code or
Nestfolio semantics (dependencies point inward only).

## 3. Integration footprint at a glance

An integrated repository gains five things. In Nestfolio they are:

```text
nestfolio/
├── runtime/continuity/            # 1. THE ENGINE (vendored, digest-locked)
│   ├── lib/                       #    workflow.mjs, store.mjs, context.mjs,
│   │                              #    pack-resolver.mjs, backlog-binding.mjs,
│   │                              #    errors.mjs, utils.mjs
│   ├── adapters/claude-code/      #    cli.mjs + SessionStart/SessionEnd hooks
│   ├── tools/                     #    deterministic state validators
│   └── test/                      #    engine test suite
├── continuity/                    # 2. DURABLE STORE (committed, canonical)
│   ├── artifacts/                 #    one dir per lifecycle noun: runs/,
│   │                              #    checkpoints/, handoffs/, evidence/, …
│   ├── packs/                     #    Pack manifests + procedures
│   ├── bindings/nestfolio/        #    project binding: work-items, guards,
│   │                              #    decisions
│   ├── level-1/ … level-6/        #    per-adoption-level validated assets
│   ├── evidence/                  #    per-iteration evidence trails
│   └── dogfood/<slug>/            #    intermediate work products
├── .continuity/                   # 3. OPERATIONAL STORE (inspectable)
│   ├── runs/<run>/                #    head.json, lease.json, effects.json
│   ├── executor-sessions/         #    real Claude Code session provenance
│   ├── audit.ndjson               #    append-only operation ledger
│   └── derived/                   #    rebuildable index + execution views
├── .claude/                       # 4. EXECUTOR ADAPTER WIRING
│   ├── settings.json              #    registers the two session hooks
│   └── skills/continuity-*/       #    executor-facing procedure skills
└── package.json                   # 5. npm scripts: continuity:doctor,
                                   #    continuity:verify, continuity:pack:*, …
```

The split between 2 and 3 is deliberate (DR-0014): `continuity/**` holds
canonical collaborative artifacts (reviewed, committed, immutable where
declared); `.continuity/**` holds mechanical operational state (active Run
heads, leases, audit log, derived views) that is inspectable but rebuildable.

## 4. Prerequisites and minimum activation configuration

From `docs/40-product-experience/product-experience.md` §6.1/§6.3, an
integrating repository must provide:

- a local Git working copy with a resolvable root and identity;
- Claude Code installed and authenticated;
- write permission for the declared repository-local artifact locations and
  the operational store;
- a **project binding** declaring: repository identity, selected adoption
  level, default executor (`claude-code`), Pack manifest references with an
  exact **Pack lock**, allowed artifact/operational-state locations,
  capability and permission declarations, and optional external authority
  references.

In Nestfolio the project binding lives under `continuity/bindings/nestfolio/`
(subdirectories `work-items/`, `guards/`, `decisions/`), with the Level-1
identity assets at `continuity/level-1/project-binding.json`,
`pack-lock.json`, `pack-manifest.json`, and `procedure-contract.json`.

The engine is Node.js ESM (`.mjs`); tests run with `node --test`. No other
runtime dependency is required.

## 5. Packs: how procedures reach the repository

Reusable behavior arrives as **Packs** (DR-0016): a Pack provides a
`PackManifest`, immutable versions, an `InstalledPackLock`, Skill
descriptors, and `ProcedureSpec`s. A Pack may **not** add core lifecycle
states, merge Goal and Guard, bypass human decision floors, silently acquire
capabilities, or mutate external systems without a declared typed adapter.

Nestfolio composes two packs:

- `continuity-core` (`continuity/packs/continuity-core/manifest.json`) — the
  generic `resumable-agent-work` procedure;
- `nestfolio-binding` (`continuity/packs/nestfolio/manifest.json`) — the
  project-specific `nestfolio-backlog-and-evidence` procedure, which binds
  Continuity Work state to Nestfolio's own planning authority
  (`docs/backlog/<id>.md` dossiers).

The validated Level-1/2 composition is `nestfolio.level-1@1.0.1` +
`continuity.repository-tools@1.0.0`, with procedures
`nestfolio.backlog-next@1.0.1` + `continuity.repository-status@1.0.0`.
Installed versions are pinned in `continuity/level-2/packs.lock.json`; a
mismatch fails closed with `PACK_LOCK_MISMATCH`.

## 6. Executor wiring: the Claude Code adapter

Integration with the executor is two project-local hooks registered in
`.claude/settings.json`, pointing at
`runtime/continuity/adapters/claude-code/hooks/`:

- `session-start.mjs` — records the real Claude Code session id, model, cwd,
  git revision, and requested identity; invokes the `start` or `resume` CLI
  operation; injects the digest-recorded adapter view into the session. It is
  **inert without `CONTINUITY_*` environment variables** and never reads
  transcript contents.
- `session-end.mjs` — records the termination reason.

Session provenance lands under `.continuity/executor-sessions/` (outside
every scope fingerprint). A Continuity-driven session is launched as:

```bash
CONTINUITY_ACTION=start|resume CONTINUITY_RUN_ID=<run> \
CONTINUITY_SESSION_ID=<session> [CONTINUITY_WORKING_SET_ID=<ws>] \
claude "<minimal pointer prompt>"
```

The prompt stays minimal on purpose: the session's real instructions are the
adapter-produced execution view (§8), not the chat text.

Three executor-facing skills complete the wiring in Nestfolio:
`.claude/skills/continuity-resumable-work/`,
`continuity-nestfolio-binding/`, and `continuity-repository-status/`. The
first one states the operating rules an integrating team should copy:

```markdown
Use the adapter CLI; do not reconstruct state from chat.
  node runtime/continuity/adapters/claude-code/cli.mjs select --work-id <id>
  node runtime/continuity/adapters/claude-code/cli.mjs start \
    --working-set-id <id> --run-id <run> --session-id <session>
  … checkpoint … interrupt … resume … validate … complete
Rules:
1. Read the generated `.continuity/derived/execution-views/<run>-<session>.md`.
2. Every material retryable effect uses a stable effect key.
3. Only a verified Checkpoint may be resumed.
5. Failed or missing required Evidence blocks completion.
6. Record Observations and candidate Lessons; never promote them automatically.
```

## 7. Digest pinning: how the integration stays honest

Everything that carries authority is pinned by content digest, so the session
can prove it received exactly the authorized bytes and the engine can prove
it was not modified:

- **Engine lock** — `continuity/level-5/engine-lock.json` (and the Level-6
  copy) records `sha256` + `size` for all 20 engine files, an
  `aggregate_engine_digest`, the SHA of `.claude/settings.json`, and the hook
  registration digest, with `engine_modification_permitted: false`.
- **Source ledger** — every Context Pack pins each input file by
  `source_path` + `source_revision` (git SHA) + `source_blob_sha1` +
  `source_sha256` + `byte_count`, with an explicit disposition
  (`included-delivered` / `included-referenced` / `inspect-only` /
  `excluded`).
- **Repository binding** — `bindings.repository.revision` pins the whole repo
  to one commit; contracts are frozen at the commit they were formed against,
  not at the moving HEAD.
- **Run freshness** — `.continuity/runs/<run>/head.json` carries a
  `repository_fingerprint` bound to git HEAD; any HEAD change makes the Run
  `STALE_RUN` and non-resumable. Practical consequence: **resume before
  committing** (§11).

Artifact serialization is canonical JSON — recursively sorted object keys,
UTF-8, two-space indentation, one LF terminator — and every artifact carries
an explicit revision number; writes go through the store API with
`expectedRevision` optimistic concurrency (`REVISION_CONFLICT` on mismatch).

## 8. The execution loop, end to end

The engine API (`runtime/continuity/lib/workflow.mjs`) implements:

```text
select → start → effect* → checkpoint → [interrupt ⇢ resume]* → validate → complete → learn
```

| Step | API | What it does |
|---|---|---|
| select | `selectWork(root, {workId})` | Binds a backlog item to a Work Item + Working Set. |
| start | `startRun(root, {workingSetId, runId, sessionId})` | Creates the Run, acquires the lease, binds the repository fingerprint, forms the validation plan. |
| effect | `recordFileEffect(root, {runId, sessionId, key, path, content})` | Keyed, scope-checked, digest-recorded file write — exactly-once per key. |
| checkpoint | `checkpointRun(…)` | Records position and the exact `nextAction`; `final: true` closes the Run. |
| interrupt | `interruptSession(…)` | Publishes a resumable Handoff and releases the lease. |
| resume | `resumeRun(root, {runId, sessionId})` | Fresh session: validates freshness (`STALE_RUN`), acquires the lease (`LEASE_CONFLICT`), replays effects with dedup. |
| validate | `validateRun(…)` | Executes the validation plan; each criterion produces an immutable ValidationResult with linked Evidence. |
| complete | `completeRun(…)` | Enforces the completion gate (`COMPLETION_GATE_BLOCKED` otherwise), completes the Work Item, performs the truthful backlog write-back. |
| learn | `recordLesson(…)` | Governed-learning path: Observation → Lesson → Decision → Change Proposal. |

Ops helpers: `inspectRun`, `rebuildDerivedIndex`.

What this looks like on disk in Nestfolio, for the executed VS-001/VS-001A
slices:

**Audit ledger** — every CLI operation appends one line to
`.continuity/audit.ndjson`:

```json
{"command":"continuity effect","operation_id":"op-9e09a4ee-…","actor":"developer-via-claude-code-adapter","authority_policy":"vs-001-configured-policy","run_id":"run-vs001","session_id":"session-vs001-1","adapter":"claude-code","target":"effect/vs001-material-effect","before":{"sha256":null},"after":{"sha256":"09c9622554c3…","path":"continuity/dogfood/vs001-effect.txt"},"result":"ok","timestamp":"2026-07-13T11:13:57.308Z"}
```

**Keyed effect state** — `.continuity/runs/run-vs001a/effects.json` proves
the exactly-once contract:

```json
"effects": [ { "key": "vs001a-material-effect",
  "path": "continuity/dogfood/vs001a-effect.txt",
  "effect_class": "repository-file-write", "status": "completed",
  "before_sha256": null, "after_sha256": "f8ee4384…",
  "session_id": "session-vs001a-1" } ]
```

**Execution view** — the adapter generates
`.continuity/derived/execution-views/<run>-<session>.md`, a human-readable
projection with the Run/Session/Working-Set/Scope/Context-Pack ids, the pack
lock digest, `Transcript dependency: **none**`, the objective, checkbox
completion criteria, scope exclusions, resolved procedures, applicable
Guards, accepted Decisions, and an explicit **"Exact next action"** line. It
ends: *"Use only canonical artifacts and this adapter-produced view. Do not
reconstruct state from an earlier chat."*

## 9. Bounded context delivery (Level 4)

The context layer turns "what should the agent see" into a verifiable
contract. Lifecycle: `draft → formed → validated → authorized → stale →
superseded`, with explicit human authorization required before delivery
(DR-0020). The Nestfolio Level-4 assets live under `continuity/level-4/`:
`context-recipe.json`, `formation-trace.json`, `context-pack.json`,
`validation-result.json`, `authorization-record.json`, `adapter-view.json`, a
JSON Schema (`schema/context-artifacts.schema.json`), and the CLI
(`bin/continuity-context.mjs`).

**Context Pack** (`continuity/level-4/context-pack.json`, formed for the real
selected effort `dashboard-bff-awaiting-confirmation-activity-gap`):

```json
"identity": "nestfolio.context.dashboard-bff-awaiting-confirmation-activity-gap",
"kind": "continuity.level4.context-pack",
"authorization": {
  "carries_execution_authorization": false,
  "policy": "explicit-human-only (DR-0020); a formed or validated version is not executable and not deliverable until one exact human authorization matches this identity, version, and digest"
},
"bindings": { "repository": {
  "remote_role": "origin/main equals HEAD at the bound revision",
  "revision": "b9d7264082322e09cfd233819b79f128ef912e31" } }
```

with one pinned source-ledger entry per input, e.g. the backlog dossier
delivered whole:

```json
{ "byte_count": 2016, "disposition": "included-delivered",
  "owner": "nestfolio (committed tracked byte at the bound revision; read-only input)",
  "reason": "primary planning source of the selected effort; full text delivered",
  "slice_boundary": "whole-file",
  "source_path": "docs/backlog/dashboard-bff-awaiting-confirmation-activity-gap.md",
  "source_revision": "b9d7264082322e09cfd233819b79f128ef912e31",
  "source_sha256": "b656733991c96c4275d11e9a9f2bff7f5ac72cdd298cbc68a4b94b6799dc742d" }
```

**Adapter view** (`continuity/level-4/adapter-view.json`) is the
deterministic projection actually handed to the executor — rebuildable
byte-identically and carrying **no authority of its own**:

```json
"delivery_provenance": {
  "deliverer": "continuity/level-4/bin/continuity-context.mjs adapter-view",
  "derived": "deterministic projection of the authorized Context Pack; rebuildable byte-identically; carries no authority of its own",
  "derived_from_sha256": "e58c9bc1978d6799cccda96c2520ea1f7f41ab8b88e8a055ff968cd7b8ce15c1" }
```

It embeds the full delivered source text plus the scope block (§10).

## 10. Scope and writable boundaries

Scope is declared, not inferred. Two layers exist in Nestfolio:

1. **Procedure-level write paths** — the `nestfolio-backlog-and-evidence`
   procedure (`continuity/packs/nestfolio/procedures/backlog-and-evidence.json`)
   declares `repository_rules.write_paths`: `runtime/continuity`,
   `continuity`, `.continuity`, the two continuity skills, the VS-001 backlog
   dossiers, and `docs/BACKLOG.md`. Everything else is
   `unrelated_product_paths: excluded`.
2. **Per-effort Scope** — each effort tightens this further with
   `allowed_read_paths`, `allowed_write_paths` (with effect classes),
   `fingerprint_paths`, `immutable_paths`, and `excluded_paths`. The SE-001
   adapter view, for example, allows writes under
   `services/investor/dashboard-bff/**`, declares "every pre-existing tracked
   byte of the Nestfolio repository at the pinned source revision" immutable,
   and lists `prohibited_effects` such as "no dependency or package.json
   change" and "no Level 4–6 state creation".

An out-of-scope write fails closed with `OUT_OF_SCOPE_EFFECT` (or
`PATH_OUTSIDE_REPOSITORY`) **before** mutation.

## 11. Evidence-bound completion

Completion criteria are data, and each embeds its own validator. From the
real Work Item binding
`continuity/bindings/nestfolio/work-items/continuity-vs001a-claude-code-session-confirmation.json`:

```json
{ "id": "vs001a-keyed-effect-materialized",
  "required_evidence_type": "repository-file",
  "validator": { "type": "file",
                 "path": "continuity/dogfood/vs001a-effect.txt",
                 "contains": "VS-001A keyed effect completed exactly once." } }
```

Command-type criteria invoke deterministic tools, e.g.:

```bash
node runtime/continuity/tools/validate-vs001a-executor-provenance.mjs \
  --run-id run-vs001a --criterion actual-fresh-session-resume
```

`validateRun` produces one immutable ValidationResult per criterion with a
linked, typed Evidence envelope (evidence types are separated:
`DETERMINISTIC` / `AGENT JUDGMENT` / `HUMAN APPROVAL` / `EXTERNAL AUTHORITY`
/ `AUTHORIZED WAIVER`). `completeRun` then performs the **truthful backlog
write-back**: the selected dossier's frontmatter flips to `status: shipped`
only if the dossier is byte-identical to the version pinned at selection
(expected SHA-256), after which Nestfolio's own `backlog-lint --fix`
regenerates `docs/BACKLOG.md`. Missing or failed Evidence blocks the gate
with `COMPLETION_GATE_BLOCKED` — the framework cannot claim completion
without proof.

Per-iteration evidence trails accumulate under `continuity/evidence/<iter>/`
as numbered JSON step files capturing verbatim command stdout/stderr, exit
codes, UTC timestamps, and the SHAs of all three participating repositories.
The sustained-dogfooding period additionally keeps an append-only narrative
ledger, `continuity/evidence/sd-001/dogfooding-ledger.md`, whose header
states its own rule: previously appended bytes are never modified or deleted,
and the ledger carries no rule authority and is never read by the engine.

## 12. Governed learning

Lessons never self-promote. The MI-007 slice
(`continuity/artifacts/lessons/lesson-mi007-01-*.json` +
`continuity/level-6/learning-binding.json`) shows the shape: a Lesson has
`promotion.automatic: false`, a recorded `safety_review.outcome`, and a
verbatim human acceptance statement; the binding's `no_auto_promotion` rule
states that no learning record directly mutates a Skill, Guard, validator,
Pack, or binding — the single applied file appears only after the recorded
owner Decision and acceptance. The one applied learning rule from MI-007
lives at
`continuity/bindings/nestfolio/decisions/mi007-deterministic-evidence-boundary-rule.json`.

## 13. Progressive adoption: the six levels

Adoption is cumulative and reversible (DR-0019); each level states both its
active guarantees and its deliberate absences. All six are validated and cut
over in Nestfolio, with one asset directory per level
(`continuity/level-1/` … `level-6/`):

| Level | Adds | Key Nestfolio assets |
|---|---|---|
| 1 | Project identity, binding, first pack + procedure | `level-1/project-binding.json`, `pack-lock.json`, `cli.mjs` |
| 2 | Composed packs under a single lock | `level-2/packs.lock.json`, `packs/continuity.repository-tools/` |
| 3 | Work selection: routes, scopes, working sets, backlog projection | `level-3/route.json`, `scope.json`, `work-selection.json`, `candidates.json` |
| 4 | Bounded, digest-pinned, human-authorized context delivery | `level-4/context-pack.json`, `adapter-view.json`, `schema/` |
| 5 | Resumable Runs under a frozen engine | `level-5/engine-lock.json`, `run-binding.json` |
| 6 | Evidence-bound completion + governed learning | `level-6/completion-binding.json`, `learning-binding.json`, `checks/` |

Diagnostics available at any time:

```bash
npm run continuity:doctor    # identity, binding, pack health
npm run continuity:verify    # asset lock verification
node --test tests/continuity-level-1.test.mjs   # per-level published suites
```

## 14. Fail-closed diagnostics

Every violated precondition stops with a stable typed code before any
mutation. The full set (from the engine's `errors.mjs`, summarized in
`docs/developer-guide.md` §7) includes, most commonly encountered during
integration:

`WORK_NOT_FOUND`, `WORK_NOT_READY`, `WORKING_SET_NOT_READY`,
`LEASE_CONFLICT`, `LEASE_REQUIRED`, `STALE_RUN`, `RUN_NOT_RESUMABLE`,
`SESSION_RUN_MISMATCH`, `OUT_OF_SCOPE_EFFECT`, `PATH_OUTSIDE_REPOSITORY`,
`CHECKPOINT_REQUIRED`, `COMPLETED_EFFECT_DIVERGED`,
`UNKNOWN_EFFECT_REQUIRES_RECONCILIATION`, `COMPLETION_GATE_BLOCKED`,
`IMMUTABLE_ARTIFACT_EXISTS`, `REVISION_CONFLICT`, `PACK_LOCK_MISMATCH`,
`PACKS_MISSING`, `INVALID_PACK`, `SKILL_ASSET_MISMATCH`,
`PROCEDURE_ID_MISMATCH`, `BACKLOG_ID_MISMATCH`, `INVALID_BACKLOG`,
`INVALID_HANDOFF`, `INVALID_JSON`, `MISSING_ARTIFACT`, `MISSING_ASSET`,
`MISSING_CAPABILITY`, `UNKNOWN_VALIDATOR`, `INVALID_ARGUMENT`,
`MISSING_ARGUMENT`.

## 15. Sharp edges (learned in the Nestfolio integration)

- **One Work Item per id.** An id used by any prior Run cannot host a fresh
  Level-6 completion (discovered by the MI-006 FAIL); rebind under a new id
  instead.
- **Resume before committing.** Committing a Run's own artifacts advances
  HEAD and staleness-invalidates the Run (§7).
- **No blocked/deferred Work Item state exists.** Owner stops are recorded as
  decision files and ledger entries; the store artifact stays `in_progress`.
- **Dossier byte-identity.** `completeRun`'s write-back fails if the backlog
  dossier changed since selection; keep intermediate products in
  `continuity/dogfood/<slug>/`.
- **Isolated committed copies must be real `git clone`s** when validating
  suites — `cp` copies carry pre-commit gates, and hooks do not propagate.

## 16. Reading map

| You want | Read |
|---|---|
| The system explained end to end (concepts, levels, loop) | `docs/developer-guide.md` |
| Product intent, concepts, constraints, success criteria | `docs/10-product/product-foundation.md` |
| Full target architecture (bounded contexts, rings, ports) | `docs/30-target-architecture/target-architecture.md` |
| UX, workflows, CLI responsibility, adoption stages | `docs/40-product-experience/product-experience.md` |
| Integration port contract | `decisions/DR-0015-concrete-integration-ports-and-claude-code-adapter.md` |
| Pack, procedure, and executor-asset contract | `decisions/DR-0016-pack-manifests-procedures-and-executor-assets.md` |
| Two-class store split | `decisions/DR-0014-two-class-repository-state-store.md` |
| A real end-to-end iteration contract | `sessions/MI-004-authorized-context-introduction/context-pack.yaml` |
| Where the program currently stands | `docs/90-state/program-state.md` |
