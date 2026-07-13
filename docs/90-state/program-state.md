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

**G2 — Current-system evidence**

Status: **failed on 2026-07-13 because the reviewed Nestfolio revision is not identifiable**.

RI-001 completed a neutral technical inventory of the supplied Nestfolio archive and recorded its archive SHA-256 in `docs/20-current-system/current-runtime-map.md`. The inventory maps responsibilities, state, entry points, workflows, dependency directions, project bindings, failure handling, tests, invariants, feature families, unknowns, and documentation/code contradictions.

G2 did not pass because `sources/nestfolio-runtime.yaml` still contains `reviewed_revision: TO_BE_SET_BEFORE_RI-001`, while the supplied Nestfolio archive contains no `.git` metadata. The archive can therefore be identified only by its byte hash, not proven to be the exact canonical Git revision required by the RI-001 Context Pack.

This failure does not invalidate the factual map of the supplied archive. It prevents that map from becoming sufficient canonical evidence for target architecture.

## Next iteration

**RI-001 continuation — Nestfolio revision provenance closure**

This is the only authorized next design iteration.

Its single objective is to bind the completed runtime inventory to an exact Git-addressable Nestfolio revision and verify whether the mapped evidence differs at that revision.

Required actions:

1. obtain the exact Nestfolio commit SHA corresponding to the supplied snapshot, or supply a new archive/check-out at a declared commit SHA;
2. set `reviewed_revision` in `sources/nestfolio-runtime.yaml` to that full SHA;
3. compare the declared revision with the archive inventoried by RI-001;
4. update only evidence that differs;
5. re-record G2 pass or fail.

No target architecture, bounded-context allocation, concept renaming, migration design, or product-experience work is authorized during this continuation.

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

RI-001 current-system evidence does not revise these product decisions. It records that the existing Nestfolio runtime implements a much broader guard/orchestration/learning surface, while Context Pack and executor-neutral Handoff artifacts are absent.

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

## Current-system evidence state

- `docs/20-current-system/current-runtime-map.md` is **provisional**.
- It is factual for Nestfolio archive SHA-256 `2a58ddd65ea3247c76a34ae0f1020d7709d3c8b2154f6a505d9fdcf61626ef74`.
- It is not yet bound to a Nestfolio commit SHA.
- Tests were inspected statically but not executed during RI-001 because the available environment did not satisfy the repository's declared Node/pnpm requirements and dependencies were absent.
- G2 remains closed until revision provenance is repaired and the map is checked against that revision.

## Iteration queue

1. PF-001 — Product Falsification — **complete**
2. RI-001 — Current Runtime Inventory — **inventory complete; provenance closure active**
3. TA-001 — Target Architecture — **blocked by G2 failure**
4. PX-001 — Product Experience — blocked
5. MA-001 — Migration Architecture — blocked
6. VS-001 — First Vertical Slice — blocked

Only the first incomplete iteration is active.

## Blockers

- G2 cannot pass until `sources/nestfolio-runtime.yaml` records an exact reviewed commit and the runtime map is verified against it.
- Target architecture is blocked until G2 passes.
- Target architecture may not silently restore the rejected broad control-plane boundary, Commitment entity, or preserve-feature-completeness constraint.
- The breadth of the current Nestfolio runtime is evidence, not a target feature-retention mandate.
- Final naming and category claims are blocked until a dedicated market and availability study supported by user evidence.
- Product expansion into Guard lifecycle, Learning, orchestration, organizational analytics, or a universal Console is blocked until the narrow wedge demonstrates comparative value.
- Migration design is blocked until G3 passes.
- Implementation is blocked until a vertical slice is approved.

## Required input for the RI-001 continuation

Use:

- the complete current `continuity-lab` repository;
- `sessions/RI-001-runtime-inventory/context-pack.yaml`;
- `docs/20-current-system/current-runtime-map.md`;
- a Nestfolio checkout/archive with an exact full Git commit SHA;
- an updated `sources/nestfolio-runtime.yaml` recording that SHA;
- no raw PF-001 or RI-001 chat transcript.

## Required output from the RI-001 continuation

- verified or corrected current-runtime evidence against the declared commit;
- updated source manifest;
- updated program state and artifact index if status changes;
- updated RI-001 handoff;
- final G2 pass or fail;
- exact changed-file list.

## G2 pass condition carried forward

G2 may pass only when:

- the current runtime is mapped without redesigning it;
- responsibilities, data, workflows, dependencies, invariants, and tests are documented;
- every major feature family has repository evidence;
- unknowns are explicit;
- the evidence is bound to the exact Nestfolio revision declared by the source manifest.

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
