---
artifact_id: STATE-PROGRAM
status: ratified
owner: program
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Program State

## Current phase

**G1 — Product survivability**

Status: **passed with material product revision on 2026-07-13**.

PF-001 falsified the broad Engineering Continuity Control Plane proposal and retained a narrower repository-native continuity hypothesis centered on explicit Context Packs, executor-neutral Handoffs, Evidence references, scope, exclusions, uncertainty, and pending human Decisions.

G1 passage does not ratify the market category, product name, commercial viability, conceptual model, or target architecture.

## Next iteration

**RI-001 — Current Runtime Inventory**

This is the only authorized next design iteration.

RI-001 must inventory the current runtime neutrally. It must not redesign the system or force current features into either the rejected broad control-plane model or the revised narrow product hypothesis.

## Current ratified decisions

- Use a separate canonical repository named `continuity-lab`.
- Keep Nestfolio canonical for the current implementation.
- Keep design/process/product artifacts out of Nestfolio until implementation work requires synchronized documentation.
- Use artifact-first, context-isolated iterations.
- Do not treat chat or Canvas as canonical.
- Run product falsification before target architecture.
- Run a neutral current-runtime inventory before target architecture.

## PF-001 validated decisions awaiting ratification

- `DR-0004` — do not establish Engineering Continuity as a market category.
- `DR-0005` — separate Goal and Guard; reject Commitment as a shared entity or schema.
- `DR-0006` — narrow the initial product boundary and reject preserve-feature-completeness as a product constraint.

These Decision Records are validated outputs of PF-001. They are canonical for subsequent investigation unless superseded, but their `validated` status must not be represented as `ratified`.

## Current provisional product hypothesis

A repository-native continuity layer may reduce rediscovery and unsafe continuation by producing explicit, evidence-bound Context Packs and Handoffs that remain portable across humans, sessions, and executors, while leaving work, CI, policy enforcement, incidents, and runtime execution in their existing systems of record.

Current plain-language description:

> Repository-native, evidence-bound context and handoffs for resumable engineering work across humans and coding agents.

## Current conceptual state

- Context Pack — provisional candidate public concept.
- Handoff — provisional candidate public concept.
- Evidence Reference — provisional candidate public concept.
- Decision — retained as a human-governed reference concept.
- Run — provisional and requires evidence of executor-neutral necessity.
- Goal — retained as a separate external concept, normally owned by issue/project systems.
- Guard — retained as a separate external concept, normally owned by policy, CI, review, or scorecard systems.
- Commitment — rejected as a shared entity or schema; optional umbrella vocabulary only.
- Observation — deferred as an initial public object.
- Lesson — rejected for the initial wedge.
- Event — rejected for the initial wedge.
- Context Formation — retained as a product hypothesis, not an established differentiator.

## Initial adopter and wedge hypothesis

Initial adopter:

- senior developer, technical lead, or small platform-minded team;
- one or a few repositories;
- long-running, interrupted, or transferred work;
- one or more coding executors;
- existing Git, CI, issues, and repository documentation;
- ability to adopt repository-local conventions without enterprise procurement.

Initial wedge:

- reference existing work rather than import backlog;
- form or validate one explicit Context Pack;
- create or validate one executor-neutral Handoff;
- reference authoritative Evidence and Decisions;
- prove that another human or executor can continue without prior conversation.

## Iteration queue

1. PF-001 — Product Falsification — **complete**
2. RI-001 — Current Runtime Inventory — **active next**
3. TA-001 — Target Architecture — blocked
4. PX-001 — Product Experience — blocked
5. MA-001 — Migration Architecture — blocked
6. VS-001 — First Vertical Slice — blocked

Only the first incomplete iteration is active.

## Blockers

- Target architecture is blocked until G2 passes.
- Target architecture may not silently restore the rejected broad control-plane boundary, Commitment entity, or preserve-feature-completeness constraint.
- Final naming and category claims are blocked until a dedicated market and availability study supported by user evidence.
- Product expansion into Guard lifecycle, Learning, orchestration, organizational analytics, or a universal Console is blocked until the narrow wedge demonstrates comparative value.
- Migration design is blocked until G3 passes.
- Implementation is blocked until a vertical slice is approved.

## Required input for RI-001

Use:

- the complete current `continuity-lab` repository;
- `sessions/RI-001-runtime-inventory/context-pack.yaml`;
- the exact Nestfolio repository revision declared by the RI-001 Context Pack and source manifest;
- no raw PF-001 chat transcript.

PF-001 conclusions must be consumed through canonical artifacts and Decision Records only.

## Required output from RI-001

- a neutral current-runtime map with repository evidence;
- complete inventory of responsibilities, data, workflows, dependencies, invariants, tests, and feature families;
- explicit unknowns and contradictions;
- mapping from observed current capabilities to source locations without target redesign;
- updated program state and artifact index;
- RI-001 session handoff;
- G2 pass or fail.

## PF-001 kill criteria carried forward

The surviving product hypothesis must later be killed or revised if:

- disciplined repository templates and existing tools provide equivalent takeover quality with lower maintenance;
- Context Packs and Handoffs do not materially reduce rediscovery or unsafe assumptions;
- useful first value cannot be obtained in ten minutes;
- the product creates a second authoritative state;
- omission diagnostics are unreliable;
- maintenance cost exceeds saved cost;
- vendor-native agent capabilities absorb the remaining gap;
- no adopter both experiences the pain and can maintain the product.
