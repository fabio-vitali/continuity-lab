---
artifact_id: STATE-PROGRAM
status: ratified
owner: program
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Program State

## Current phase

**MA-001 — Migration Architecture is complete with unconditional PASS. Gate G5 is passed and valid.**

The accepted migration architecture is canonical in `docs/60-migration/migration-plan.md`. It demonstrates a complete, cumulative, independently valuable, authority-safe, reversible path from the validated current runtime to the accepted TA-002 architecture and PX-001 Product Experience without a big-bang rewrite.

`DR-0023` accepts a cumulative strangler migration ordered by Product Experience guarantee level. Current and target mechanisms may coexist only through explicit per-procedure or per-effort routing with one qualified authority for each object. Current Runs drain in the current journal; newly cut-over Runs use target Repository Infrastructure. Active Runs are never converted in place.

No migration slice was executed during MA-001. No implementation artifact was created or modified.

The sole authorized next iteration is **MI-001 — Procedure-First Adoption**. Its reviewed session contract is now prepared under `sessions/MI-001-procedure-first-adoption/`. Contract authorization is complete, but execution authorization becomes effective only after the contract is reviewed, committed, and supplied unchanged to a fresh isolated execution session.

## Gate history and current validity

| Gate | Current result | Date | Owning evidence |
|---|---|---|---|
| G0 — Bootstrap | passed; valid | 2026-07-12 | governance artifacts, repository state, DR-0001 to DR-0003 |
| G1 — Product survivability | passed under PI-001-corrected interpretation; valid | 2026-07-13 | PF-001 evidence, revised Product Foundation, DR-0012 |
| G2 — Current-system evidence | passed; valid | 2026-07-13 | validated Current Runtime Map and exact RI-001 Nestfolio binding |
| G3 — Target architecture coherence | passed; valid | 2026-07-13 | TA-002 architecture, DR-0013 to DR-0018, TA-002 handoff |
| G4 — Product experience viability | passed; valid | 2026-07-14 | Product Experience, DR-0019 to DR-0021, PX-001 scenario and conformance evidence |
| G5 — Migration viability | **passed; valid** | 2026-07-14 | accepted Migration Plan, DR-0023, MA-001 scenario results and completed handoff |
| G6 — Implementation validation | passed; valid | 2026-07-13 | combined VS-001 repository mechanics and VS-001A genuine Claude Code executor provenance |

## MA-001 result

**Unconditional decision: PASS.**

Primary evidence:

- `docs/60-migration/migration-plan.md`;
- a complete current-to-target capability matrix covering current rings, feature families, state families, entry points, workflows, invariants, ownership, writers, readers, authority, target classification, disposition, compatibility, rollback, and retirement;
- an authority and source-of-truth ledger that forbids unqualified dual authority;
- compatibility, coexistence, state-transformation, audit, cutover, recovery, deprecation, and retirement contracts;
- seven independently valuable migration slices mapped cumulatively to all six PX-001 adoption levels;
- component transition paths for Framework Core, Application Services, Repository Infrastructure, Claude Code Adapter, reusable Packs, the Nestfolio project binding, and external authorities;
- criterion-linked validation and Evidence requirements for every slice;
- PASS observations for scenarios M1 through M16, including rollback, stale/corrupt/divergent state, concurrent current/target mechanisms, no-Console adoption, and the complete no-big-bang path;
- explicit rejection or deferral of big-bang rewrite, migrate-everything, indefinite duplicate runtimes, premature universalization, direct Level 6 migration, mandatory Console, hosted/commercial control planes, universal integrations, premature multi-executor parity, and automatic project-to-Core promotion;
- no blocking architectural contradiction;
- no required Nestfolio source inspection because the canonical Current Runtime Map supplied sufficient evidence for G5.

Accepted migration decision:

- `DR-0023` — cumulative strangler migration by guarantee level.

## Accepted migration sequence

1. **MI-001 — Procedure-First Adoption** — PX Level 1: repository instructions and one Skills-only Procedure.
2. **MI-002 — Reusable Pack Composition** — PX Level 2: reusable Procedures and exact Pack locking.
3. **MI-003 — Bounded Local Work and Scope** — PX Level 3: local Work selection, Working Set, Scope, and completion criteria.
4. **MI-004 — Authorized Context Introduction** — PX Level 4: formed, validated, and explicitly authorized Context Packs.
5. **MI-005 — Resumable Run Cutover** — PX Level 5: Runs, effects, Checkpoints, Handoffs, and fresh-session resume.
6. **MI-006 — Evidence-Bound Completion and Guard Coexistence** — PX Level 6 Assurance: Validation Results, Evidence, Guards, Waivers, and truthful completion.
7. **MI-007 — Governed Learning and Selective Current-Runtime Retirement** — PX Level 6 Learning: Decisions, Observations, Lessons, Change Proposals, and selective retirement.

This sequence is an accepted architecture, not an execution record. Reaching a later slice requires accepted evidence from every required earlier slice and a new explicit authorization.

## Governing migration invariants

- Adoption is cumulative; a repository may remain safely at any completed level.
- Upgrades are optional and never automatic.
- Downgrade or disable behavior is explicit, preserves readable history, and never silently weakens completion claims.
- A current and a target mechanism may coexist only with an explicit route and one qualified writer for each canonical object.
- Existing active current Runs finish or are abandoned under current rules; only new Runs may cut over to target Repository Infrastructure.
- External systems remain authoritative for their Git, issue, PR, CI, deployment, security, ADR, and other external objects.
- Continuity is authoritative only for its repository-local agent-work representation, execution history, Evidence, and governed learning.
- CLI, Console, transcript, chat, provider cache, hidden executor state, and rebuildable projections are never canonical.
- Revisions, digests, provenance, effect keys, Decisions, Evidence, and readable history are preserved across interpretation, import, export, shadowing, freezing, supersession, or transformation.
- Nestfolio-specific behavior remains in the Nestfolio Pack or project binding unless repeated cross-project evidence and a new Decision justify promotion.
- No Console is required for migration.
- No migration slice is authorized merely because G5 passed; each slice requires its own reviewed contract and explicit program authorization.

## PX-001 result

**Unconditional decision: PASS. Gate G4 remains passed and valid.**

The accepted Product Experience defines six cumulative adoption levels, ten-minute first value, Work and Context workflows, explainability, Claude Code continuity, human Decisions, safe failure and recovery, a non-authoritative CLI, and a deferred local Console.

Active Product Experience decisions:

- `DR-0019` — cumulative adoption with explicit guarantee levels;
- `DR-0020` — explicit human Context Pack authorization by default, with opt-in accepted deterministic policy;
- `DR-0021` — defer a local non-authoritative Console;
- `DR-0022` — authorize MA-001 after G4 PASS and keep implementation blocked until G5.

## VS-001 result (historical, preserved)

**Unconditional decision: FAIL.** This verdict remains historical and is not rewritten by VS-001A or MA-001.

Valid repository-mechanics evidence includes Work selection, Working Set, Scope, Context Pack, Formation Trace, Pack lock, Guards, Decisions, repository fingerprint, keyed effects and deduplication, verified Checkpoints and Handoff, stale-state and lock failure behavior, lease and revision safety, criterion-linked validation, candidate/rejected learning, projection rebuild, and six passing deterministic tests.

The historical failure was genuine Claude Code executor provenance. Canonical report: `docs/70-implementation/vs-001-resumable-agent-work-session.md`.

## VS-001A result

**Unconditional decision: PASS. Gate G6 remains passed on combined VS-001 and VS-001A evidence.**

Two separately invoked genuine Claude Code Sessions proved adapter bootstrap, first-Session completion through verified Checkpoint and Handoff, fresh-process resume from repository-local state, Skill and Pack freshness checks, keyed-effect deduplication, criterion-linked Evidence, and completion. Canonical report: `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`.

## Accepted target architecture

TA-002 remains the active accepted architecture. MA-001 changes no L1, L3, or L4 owner. It defines only the L5 path into that accepted target.

### Framework Core

Portable lifecycle and authority semantics for Work, Working Sets, Scope, Sessions, Runs, Checkpoints, Context, Assurance, Decisions, Observations, Lessons, revisions, leases, and effect keys.

### Application Services and Repository Infrastructure

Application Services coordinate declared commands through ports. Repository Infrastructure owns tracked canonical artifacts, operational Run state, repository identity, atomic writes, compare-and-swap revisions, leases, recovery, audit, and rebuildable projections.

### Claude Code Adapter

The adapter owns executor commands, Skills, hooks, start/resume views, capability mapping, and structured result capture. Claude-specific state is not canonical.

### Packs and Nestfolio binding

Reusable Procedure semantics and executor assets are exact-lockable through Packs. Nestfolio-specific backlog, topology, validators, deployment procedures, routing, Guards, and Lessons remain in its Pack or project binding unless later evidence and a Decision justify promotion.

## Active decisions

### Product and architecture

- `DR-0012` — repository-native agentic-development framework;
- `DR-0013` — bounded agent-work Core;
- `DR-0014` — repository-local canonical state and operational Run store;
- `DR-0015` — concrete integration ports and Claude Code Adapter;
- `DR-0016` — Pack manifests, Procedures, executor assets, and project bindings;
- `DR-0017` — governed Assurance and Learning promotion;
- `DR-0018` — bounded validation before broader migration.

### Product Experience and program sequence

- `DR-0019` — cumulative adoption with explicit guarantee levels;
- `DR-0020` — explicit human Context Pack authorization by default;
- `DR-0021` — deferred local non-authoritative Console;
- `DR-0022` — MA-001 authorization after G4 PASS;
- `DR-0023` — cumulative strangler migration by guarantee level.

## Sole authorized next iteration

### MI-001 — Procedure-First Adoption

Status:

```text
authorized-not-started
contracted; review-and-commit required before execution
not executed
```

Purpose:

> Introduce PX-001 Level 1 through repository instructions and one Skills-only Procedure, its minimal Pack/project binding, exact asset lock, and Claude Code entry point, without Work state, Context Packs, resumable Runs, Assurance, or governed learning.

Required next operation:

1. review the prepared MI-001 contract and exact changed-file manifest;
2. commit and push the contract-authoring changes;
3. create a clean ZIP from committed `HEAD`;
4. open a fresh isolated execution session with the committed repository and the bounded Nestfolio implementation input required by the contract;
5. execute the complete unmodified `sessions/MI-001-procedure-first-adoption/prompt.md`;
6. do not execute MI-001 in the contract-authoring session.

Contract selection:

- Procedure: `nestfolio.backlog-next`;
- Claude Code entry point: `/backlog-next`;
- current asset authority: `.claude/skills/backlog-next/**`;
- target boundary: one minimal project Pack, one project binding, exact asset lock, activation/inspect/invoke path, truthful Level 1 guarantees;
- no canonical Work, Context Pack, Run, Assurance, Decision, Observation, or Lesson state.

The contract does not pre-authorize MI-002 or any broader implementation.

## Iteration queue

1. PF-001 — Product Falsification — **complete; interpretation revised by PI-001**
2. RI-001 — Current Runtime Inventory — **complete; G2 valid**
3. TA-001 — Target Architecture — **historical; superseded as active baseline**
4. PI-001 — Product Intent Realignment — **complete**
5. TA-002 — Target Architecture Revision — **complete; G3 passed**
6. VS-001 — Resumable Agent Work Session — **complete; historical FAIL preserved**
7. VS-001A — Interactive Claude Code Session Confirmation — **complete; PASS; G6 passed on combined evidence**
8. PX-001 — Product Experience — **complete; PASS; G4 passed**
9. MA-001 — Migration Architecture — **complete; PASS; G5 passed**
10. MI-001 — Procedure-First Adoption — **sole authorized next iteration; contract prepared; authorized-not-started; not executed**
11. MI-002 through MI-007 — **architecturally sequenced but blocked pending prior-slice evidence and explicit authorization**
12. broader implementation and unrelated migration — **blocked**

## Active blockers

- MI-001 execution is blocked in this contract-authoring session and until the prepared contract is reviewed and committed; after that, only a separate fresh session using the exact committed prompt may execute it.
- MI-002 through MI-007 are blocked until their predecessors produce accepted Evidence and Program State explicitly authorizes exactly one of them.
- No migration slice may be executed under the MA-001 prompt or handoff.
- Broader implementation, later vertical slices, or reproduction of the whole current runtime remain blocked.
- Console implementation remains deferred and blocked.
- Universal executor or platform integrations remain blocked.
- Hosted-service, RBAC, analytics, billing, commercial packaging, and commercial-control-plane work remain blocked.
- Broad or unrelated Nestfolio migration remains blocked.
- Nestfolio-specific behavior may not move into Framework Core without repeated cross-project evidence and a new Decision.
- Automatic Observation or Lesson promotion remains prohibited.
- Product Foundation, Current Runtime Map, TA-002, PX-001, validation reports, and accepted Decisions may not be changed implicitly by a migration or implementation slice.

## Evidence bindings

- Product truth: `docs/10-product/product-foundation.md`
- Current-system truth: `docs/20-current-system/current-runtime-map.md`
- Target-architecture truth: `docs/30-target-architecture/target-architecture.md`
- Product Experience truth: `docs/40-product-experience/product-experience.md`
- Migration-architecture truth: `docs/60-migration/migration-plan.md`
- VS-001 historical result: `docs/70-implementation/vs-001-resumable-agent-work-session.md`
- VS-001A executor confirmation: `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`
- Active program truth: this file
- Artifact registry: `docs/90-state/artifact-index.md`
- MA-001 closure: `sessions/MA-001-migration-architecture/session-handoff.md`
- Accepted migration Decision: `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`

## Fresh-session rule

Every contract-authoring or execution session must use the committed `continuity-lab` repository as its only canonical project memory unless the active contract explicitly permits a bounded external evidence request. Prior chat, hidden executor state, and uncommitted working-tree assumptions are not authority.
