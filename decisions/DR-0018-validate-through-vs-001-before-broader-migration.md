---
artifact_id: DR-0018
status: validated
owner: program
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# DR-0018 — Validate the Architecture Through VS-001 Before Broader Migration

## Context

TA-002 defines a complete architecture, but the corrected product premise is explicitly practical and dogfood-driven. A broad migration plan or product-experience program before proving one resumable Claude Code work session would risk formalizing unvalidated machinery.

The next step must not be an unrestricted implementation or a migration of the current Nestfolio runtime. It must exercise the smallest complete operational path and produce evidence for or against the architecture.

## Decision

After G3 passes, authorize exactly one next iteration:

**VS-001 — Resumable Agent Work Session**.

VS-001 is a bounded architecture-validation slice in Nestfolio. It may implement only the components required to prove:

```text
select work → form context → execute → checkpoint → resume → validate → attach Evidence → update work → record candidate Lesson
```

VS-001 must not:

- begin broad migration of the existing runtime;
- establish final package boundaries or universal APIs beyond the slice;
- implement external backlog synchronization;
- implement multi-executor parity;
- auto-promote Lessons into Guards or procedures;
- redesign unrelated Nestfolio workflows;
- authorize later slices automatically.

PX-001, MA-001, and broader implementation remain blocked. The VS-001 handoff must evaluate the slice and authorize exactly one next iteration based on evidence.

## Status

Validated by TA-002 and accepted as the active program-sequence decision.

## Alternatives considered

### Run broad migration architecture first

Rejected because the target must prove present usefulness before planning extraction of the broad runtime.

### Resume PX-001 immediately

Rejected because the most important unresolved experience is inseparable from the concrete resumable work loop and can be observed in the slice.

### Implement the whole corrected architecture

Rejected because it would recreate sunk-cost pressure before the Run/Checkpoint model is proven.

### Stop after architecture

Rejected because the Product Foundation requires sustained dogfooding evidence.

## Risks

- slice-specific shortcuts could be mistaken for the final architecture;
- Nestfolio coupling could leak into shared components;
- a successful single slice does not validate the full product.

## Validation requirements

VS-001 must use the acceptance criteria and non-goals defined in `docs/30-target-architecture/target-architecture.md` and produce observable repository evidence.

## Consequences

- G3 PASS authorizes VS-001 only.
- broader migration and unrelated implementation remain blocked.
- no G4, G5, or G6 gate is passed by this Decision.

## Supersedes

None.

## Superseded by

None.
