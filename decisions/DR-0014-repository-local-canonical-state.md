---
artifact_id: DR-0014
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes:
  - DR-0008
superseded_by: null
---

# DR-0014 — Use Repository-Local Canonical Artifacts and Declared Operational State

## Context

TA-001 made repository artifacts authoritative and treated the operation journal and event ledger as secondary. That is correct for immutable Context Packs and Handoffs, but the corrected product also owns active Runs and Checkpoints. For resumable execution, a declared operational store must be authoritative for current Run progression while remaining inspectable and recoverable.

Treating every intermediate Run mutation as a committed Git artifact would create noise and merge contention. Treating the journal as merely disposable would make crash recovery non-authoritative.

## Decision

Continuity uses two explicit repository-local canonical storage classes.

### Versioned repository artifacts

Human-reviewable artifacts are authoritative for durable collaborative state:

- Work Items, Working Sets, and Epics;
- reusable or project-local Scope definitions;
- authorized Context Packs and published Handoffs;
- Pack manifests, Pack locks, Skill/Procedure descriptors, Guards, Decisions, Evidence envelopes, and accepted Lessons.

These artifacts are suitable for Git review. Immutable versions are corrected through a new version and explicit supersession.

### Declared operational state store

A human-inspectable repository-local state store is authoritative for active execution state:

- Session records;
- Run head and lifecycle state;
- immutable Checkpoints;
- keyed completed effects and retry records;
- active leases and concurrency tokens;
- recovery diagnostics and operation audit records.

The store may be Git-ignored when high-frequency mutation would be harmful, but its location, format, ownership, backup expectations, and export behavior must be declared. Hidden Claude Code memory or conversation text is never authoritative.

At a durable sharing boundary, the active Run must be represented by an immutable Checkpoint and Handoff that can be transferred with the repository or attached as an artifact.

Derived indexes, caches, projections, and optional event streams are rebuildable and non-authoritative. A generic event-sourced primary model is not adopted.

## Status

Validated by TA-002 and accepted as the active state-authority decision.

## Authority rules

1. External systems remain authoritative for their own objects.
2. Continuity artifacts are authoritative for local agent-work semantics.
3. The declared Run store is authoritative for the active Run and latest verified Checkpoint.
4. Evidence envelopes are authoritative for Continuity's claim and provenance metadata, not for the external system's underlying result.
5. Git history supports provenance but does not replace explicit lifecycle metadata.
6. A cache, projection, or event record cannot create domain state without a corresponding canonical artifact or Run-state transition.

## Recovery rules

- immutable Checkpoints are append-only and digest-addressed;
- Run head updates use compare-and-swap against the expected revision;
- completed keyed effects are replayed rather than repeated;
- an artifact-written/audit-missing state is repaired after digest verification;
- an audit-present/artifact-missing state is never projected as committed;
- loss of indexes or caches is recovered from canonical artifacts and the Run store;
- ambiguous divergence blocks continuation and requires a human Decision.

## Alternatives considered

### Keep DR-0008 unchanged

Rejected because it does not authorize active Run/Checkpoint state as first-class canonical operational state.

### Store all Run transitions in Git

Rejected as the default because it creates high-frequency churn, conflicts, and pressure to commit incomplete repository work.

### Store Run state only inside Claude Code

Rejected because session loss and executor changes would erase the recovery boundary.

### Event-source all product state

Rejected because replay infrastructure would displace direct repository inspection without proven benefit.

## Risks

- two storage classes require clear tooling and backup behavior;
- local operational state can be lost if users delete ignored files before publishing a Handoff;
- shared-team concurrency needs explicit lease and transfer rules.

## Validation requirements

VS-001 must demonstrate:

- a Run survives Claude Code session termination;
- a new session resumes from the latest verified Checkpoint;
- deleting projections does not lose work state;
- stale or conflicting Run revisions are detected;
- completed effects are not duplicated after retry.

## Consequences

- `DR-0008` is superseded.
- repository-native does not mean Git-commit-every-step.
- Checkpoint and Handoff are the transfer boundary for active operational state.
- optional event-ledger implementation remains deferred until a concrete audit need exists.

## Supersedes

`DR-0008 — Make Repository Artifacts Authoritative and Keep Ledger State Secondary`.

## Superseded by

None.
