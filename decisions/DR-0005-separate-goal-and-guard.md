---
artifact_id: DR-0005
status: validated
owner: product
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# DR-0005 — Separate Goal and Guard; Reject Commitment as a Shared Entity

## Context

The Product Foundation proposed an Engineering Commitment with two modes:

- Goal — a condition the project commits to making true;
- Guard — a condition the project commits to keeping true.

PF-001 tested whether the duality justified one public abstraction, entity, or schema.

Goals and Guards can be related, but their ownership and lifecycle semantics differ materially. Goals are time-bound work normally owned by issue and project systems. Guards are ongoing policies or expectations normally owned by CI, policy engines, review processes, security tools, or scorecards. Guards also require applicability, evaluator semantics, exceptions, false-positive handling, versioning, and retirement.

## Decision

Reject `Commitment` as a shared public entity, schema, lifecycle, or storage assumption.

Retain Goal and Guard as separate conceptual and externally referenceable types:

- Goal: a condition intended to become true through time-bound work;
- Guard: a condition intended to remain true through enforcement, measurement, or explicit human review.

`Commitment` may remain optional umbrella vocabulary only. It has no independent authority or lifecycle.

A violated Guard may create or link to a Goal, and completing a Goal may create or modify a Guard. These relationships do not imply shared ownership or representation.

## Status

Validated, not ratified.

## Supporting evidence

See `docs/50-validation/product-falsification-report.md`, especially:

- Central abstraction;
- Scenario 5 — incident produces a recurring prevention rule;
- Scenario 6 — judgment-based architectural review;
- Scenario 9 — contradictory or obsolete Guard;
- Cortex separation of ongoing Scorecards and time-bound Initiatives.

## Alternatives considered

### One Commitment entity with a mode field

Rejected because it hides incompatible lifecycle, authority, and maintenance semantics.

### Separate entities sharing a common schema base

Not decided. Shared technical fields may be discovered later, but no conceptual or architectural assumption is authorized.

### Separate concepts linked by explicit relationships

Accepted.

### Remove Goal and Guard entirely

Rejected. Both remain useful established concepts when referenced from their authoritative systems.

## Rejected alternatives

- A unified `Commitment` registry owned by the product.
- One evaluator lifecycle for deterministic and judgment-based Guards.

## Risks

- The product loses an elegant unifying story.
- Cross-system relationships may be more complex to present.
- Later implementation may duplicate common metadata if abstraction is avoided too aggressively.

## Validation requirements

RI-001 should identify how the current runtime actually represents work and checks without forcing a shared model.

A later conceptual-model iteration may propose shared vocabulary or metadata only if it does not collapse authority and lifecycle differences.

## Consequences

- Target architecture may not assume a Commitment aggregate or common Goal/Guard persistence model.
- Product experience should use familiar Goal and Guard language only where useful.
- Observation, Lesson, and Event remain separately unresolved.

## Supersedes

The shared Engineering Commitment proposal in the 2026-07-12 Product Foundation.

## Superseded by

None.
