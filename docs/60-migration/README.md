---
artifact_id: MIGRATION-INDEX
status: ratified
owner: migration
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Migration

**MA-001 — Migration Architecture is complete with unconditional PASS. Gate G5 is passed and valid.**

Canonical migration authority:

- `migration-plan.md`;
- `../../decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`;
- `../../sessions/MA-001-migration-architecture/session-handoff.md`.

## Accepted approach

Continuity migrates cumulatively by PX-001 guarantee level through a Procedure- or effort-level strangler path. Current and target mechanisms may coexist only with explicit routing and one qualified authority for every canonical object.

Existing current Runs drain, complete, or are abandoned under current journal rules. New target Runs begin in target Repository Infrastructure only after their effort is cut over. Active Run state is never transformed in place.

External systems remain authoritative for their objects. Nestfolio-specific behavior remains in the Nestfolio Pack or project binding. CLI and any later Console are non-authoritative.

## Accepted slices

| Slice | Level | Independent value |
|---|---:|---|
| MI-001 — Procedure-First Adoption | 1 | One useful Skills-only Procedure invoked from repository instructions |
| MI-002 — Reusable Pack Composition | 2 | Reusable Procedures and exact Pack locking |
| MI-003 — Bounded Local Work and Scope | 3 | Local Work selection, Working Set, Scope, and completion criteria |
| MI-004 — Authorized Context Introduction | 4 | Formed, validated, explained, and authorized Context Packs |
| MI-005 — Resumable Run Cutover | 5 | Runs, Checkpoints, Handoffs, and genuine fresh-session resume |
| MI-006 — Evidence-Bound Completion and Guard Coexistence | 6 | Criterion-linked Evidence, Guards, Waivers, and truthful completion |
| MI-007 — Governed Learning and Selective Current-Runtime Retirement | 6 | Decisions, reviewed learning, and selective legacy retirement |

Every slice has explicit compatibility, coexistence, authority, validation, Evidence, rollback, abandonment, recovery, cutover, deprecation, retirement, and exclusions in `migration-plan.md`.

## Current contract position

MI-001 through MI-001E-R1 are complete with their historical results preserved.
The **MI-002 contract is complete and reviewed**, but neither contract nor
execution authorization exists. Its exact Level 2 boundary is recorded in
`../../sessions/MI-002-reusable-pack-composition/context-pack.yaml`.

```text
MI-002: reviewed-not-authorized; not executed
authorization in this session: prohibited
execution in this session: prohibited
MI-003 through MI-007: blocked
```

The reviewed contract composes exact local Pack versions only. It introduces no
Work, Context, Run, Assurance, Learning, remote registry, dependency solver, or
broader migration authority.

The next permitted operation requires a separate user instruction and is limited
to publication of the reviewed contract without authorization. Exact binding,
authorization, and execution remain later separate operations. The exact
handoff is in `../../CONTINUITY-NEXT-STEPS.md`.
