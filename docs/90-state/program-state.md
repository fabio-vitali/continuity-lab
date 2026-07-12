---
artifact_id: STATE-PROGRAM
status: ratified
owner: program
last_updated: 2026-07-12
---

# Program State

## Current phase

**G0 — Bootstrap**

Status: complete when this repository is created and committed.

## Next iteration

**PF-001 — Product Falsification**

This is the only authorized next design iteration.

## Current accepted decisions

- Use a separate canonical repository named `continuity-lab`.
- Keep Nestfolio canonical for the current implementation.
- Keep design/process/product artifacts out of Nestfolio until implementation work requires synchronized documentation.
- Use artifact-first, context-isolated iterations.
- Do not treat chat or Canvas as canonical.
- Run product falsification before target architecture.
- Run a neutral current-runtime inventory before target architecture.
- Preserve all current runtime feature families unless a later explicit Decision changes the constraint.

## Current provisional product proposals

- Category: Engineering Continuity.
- Working name: Continuity.
- Central abstraction: Commitment.
- Commitment modes: Goal and Guard.
- Product structure: Kernel, first-party modules, Providers, Packs.
- First-party modules: Assurance, Work, Execution, Learning, Trust, Console.
- Context Formation is a core product capability.

## Iteration queue

1. PF-001 — Product Falsification
2. RI-001 — Current Runtime Inventory
3. TA-001 — Target Architecture
4. PX-001 — Product Experience
5. MA-001 — Migration Architecture
6. VS-001 — First Vertical Slice

Only the first incomplete iteration is active.

## Blockers

- Target architecture is blocked until G1 and G2 pass.
- Final naming is blocked until a dedicated market and availability study.
- Migration design is blocked until G3 passes.
- Implementation is blocked until a vertical slice is approved.

## Required input for PF-001

Upload:

- the current `continuity-lab` repository as ZIP.

Do not upload Nestfolio unless the falsification session requests a specific implementation fact. PF-001 evaluates product coherence, substitutes, scenarios, and adoption.

## Required output from PF-001

- `docs/50-validation/product-falsification-report.md`
- revised `docs/10-product/product-foundation.md`
- relevant Decision Records
- updated `docs/90-state/program-state.md`
- updated `docs/90-state/artifact-index.md`
- `sessions/PF-001-product-falsification/session-handoff.md`
