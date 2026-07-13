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

Status: **passed on 2026-07-13**.

RI-001 is complete. The current Nestfolio runtime is factually mapped in `docs/20-current-system/current-runtime-map.md`, including responsibilities, state ownership, entry points, workflows, transitions, dependency directions, adapters, project bindings, invariants, failure handling, feature-family classifications, tests, explicit absences, and remaining limitations.

The validated evidence is bound to:

- Nestfolio revision `3aa8f4773955541415f615abd80a0a9702bcb416`;
- uploaded archive `nestfolio-3aa8f4773955541415f615abd80a0a9702bcb416.zip`;
- archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`;
- the matching full revision embedded in the archive ZIP comment and recorded in `sources/nestfolio-runtime.yaml`.

The exact-revision re-check confirmed the prior inventory and corrected revision-specific evidence for the generic item driver, themes driver, runtime-path provenance, and per-area static test distribution.

## Next iteration

**TA-001 — Target Architecture**

This is the sole authorized next design iteration. It has not been started by RI-001.

TA-001 must use the validated Product Foundation, Product Falsification Report, Current Runtime Map, Program State, relevant Decision Records, and `sessions/TA-001-target-architecture/context-pack.yaml`. Targeted Nestfolio source inspection is permitted only when the validated Current Runtime Map is insufficient.

TA-001 may not silently revise the Product Foundation, restore rejected concepts or scope, or treat current runtime breadth as a mandatory target feature set.

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

- `docs/20-current-system/current-runtime-map.md` is **validated**.
- It is bound to Nestfolio revision `3aa8f4773955541415f615abd80a0a9702bcb416` and archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`.
- Every exact repository path cited as implementation or test evidence was rechecked against the uploaded revision.
- All major feature families have repository evidence or explicit implemented/partial/documented-only/test-only/absent/unclear status.
- Tests were inspected statically but not executed because the available environment provided Node `22.16.0`, no pnpm, and no installed dependencies, while Nestfolio requires Node `>=24`, pnpm `>=10`, and declares `pnpm@10.30.3`.
- Static inspection found 79 test files and 421 top-level `test(...)` declarations; `runtime/GUIDE.md` states 422.
- G2 passed despite the execution limitation because test execution was not a prerequisite when repository runtime requirements could not be satisfied.

## Iteration queue

1. PF-001 — Product Falsification — **complete**
2. RI-001 — Current Runtime Inventory — **complete; G2 passed**
3. TA-001 — Target Architecture — **sole authorized next iteration**
4. PX-001 — Product Experience — blocked pending G3
5. MA-001 — Migration Architecture — blocked
6. VS-001 — First Vertical Slice — blocked

No iteration after TA-001 is authorized yet.

## Active constraints and blockers

- Target architecture may not silently restore the rejected broad control-plane boundary, Commitment entity, or preserve-feature-completeness constraint.
- The breadth of the current Nestfolio runtime is evidence, not a target feature-retention mandate.
- Final naming and category claims are blocked until a dedicated market and availability study supported by user evidence.
- Product expansion into Guard lifecycle, Learning, orchestration, organizational analytics, or a universal Console is blocked until the narrow wedge demonstrates comparative value.
- Migration design is blocked until G3 passes.
- Implementation is blocked until a vertical slice is approved.

## Required input for TA-001

Use:

- the complete current `continuity-lab` repository;
- `sessions/TA-001-target-architecture/context-pack.yaml`;
- `docs/00-governance/product-development-operating-model.md`;
- `docs/00-governance/artifact-governance.md`;
- `docs/00-governance/design-levels.md`;
- `docs/10-product/product-foundation.md`;
- `docs/20-current-system/current-runtime-map.md`;
- `docs/50-validation/product-falsification-report.md`;
- `docs/90-state/program-state.md`;
- relevant validated or ratified Decision Records;
- targeted Nestfolio runtime slices only when the validated map is insufficient;
- no raw PF-001 or RI-001 chat transcript.

## G2 completion record

G2 passed because:

- the current runtime is mapped without redesign;
- responsibilities, state, workflows, dependencies, transitions, invariants, failure handling, bindings, and tests are documented;
- every major feature family has repository evidence or explicit unknown/absence status;
- observations and interpretations remain separated;
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
