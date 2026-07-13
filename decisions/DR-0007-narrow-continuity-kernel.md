---
artifact_id: DR-0007
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# DR-0007 — Define a Narrow Continuity Kernel

## Context

PF-001 retained Context Pack, Handoff, Evidence references, pending human Decisions, explicit scope, exclusions, and uncertainty. It rejected the broad control-plane boundary, a shared Commitment entity, and ownership of work, Guards, execution, incidents, and learning.

RI-001 showed that the existing Nestfolio runtime has a clean engine/adapters direction in places, but its domain surface centers on checks, work orchestration, backlog state, and learning rather than the retained product wedge.

## Decision

Create a dependency-free Continuity Kernel containing only stable product semantics needed across bounded contexts:

- Context Pack and Handoff lifecycle primitives;
- typed external references and provenance primitives;
- scope, exclusion, constraint, uncertainty, pending-decision, and output-contract value objects;
- validation and diagnostic primitives;
- provider capability descriptors;
- internal command/event envelopes.

Do not include:

- filesystem, Git, network, shell, database, model, or vendor code;
- product-owned Goal, Guard, Commitment, Lesson, Observation, Event, or public Run aggregates;
- backlog planning, engineering workers, orchestration, deployment, policy enforcement, or Console projections.

Context Pack and Handoff remain separate aggregates owned by their respective bounded contexts. Typed references do not transfer authority from external systems.

## Status

Validated, not ratified.

## Supporting evidence

- `docs/10-product/product-foundation.md`
- `docs/50-validation/product-falsification-report.md`
- `docs/20-current-system/current-runtime-map.md`
- `decisions/DR-0005-separate-goal-and-guard.md`
- `decisions/DR-0006-narrow-product-boundary.md`
- `docs/30-target-architecture/target-architecture.md`

## Alternatives considered

### Preserve the existing check/work kernel

Rejected because it would make current implementation breadth the future product boundary.

### One universal Continuity aggregate

Rejected because the retained concepts have different owners and lifecycle authority.

### No shared kernel

Rejected because duplicate reference, provenance, version, validation, and lifecycle semantics would drift across bounded contexts.

## Rejected alternatives

- shared Commitment base entity;
- product-owned Goal and Guard stores;
- vendor-specific executor state in the kernel;
- generic arbitrary-execution capabilities in the kernel.

## Risks

- The narrow kernel may initially appear too small.
- Over-generalizing typed references could recreate a generic metadata platform.
- Later implementation may place convenience code in the kernel and erode the boundary.

## Validation requirements

- Architecture and implementation dependency tests must prove the kernel has no adapter or infrastructure dependencies.
- At least two executor adapters and one human-only workflow must use the same aggregate contracts.
- Adding a new provider must not require changing Context Pack or Handoff lifecycle semantics.

## Consequences

- Current Nestfolio schemas are evidence, not compatibility contracts.
- Provider and executor integrations live outside the kernel.
- Goal, Guard, Lesson, and execution state remain external or deferred.

## Supersedes

None.

## Superseded by

None.
