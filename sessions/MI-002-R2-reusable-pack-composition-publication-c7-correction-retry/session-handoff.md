---
artifact_id: SESSION-HANDOFF-MI-002-R2
status: ratified
owner: session
last_updated: 2026-07-15
supersedes: []
superseded_by: null
---

# MI-002-R2 — C7 Correction Retry Contract Handoff

## Contract status

**MI-002-R2 is finalized, reviewed, and authorized-not-started.**

Contract authorization does not imply execution authorization. No MI-002-R2
execution instruction has been received, no Nestfolio content was inspected
beyond exact Git metadata, no Nestfolio test ran, and no Nestfolio or historical
MI-002/MI-002-R1 artifact was modified.

## Exact bindings

The contract is authored from exact published continuity-lab MI-002-R1
failure-closure revision
`60ac7397aa399de1f8f4d0e3456999a797136dd3`. It binds
continuity-workspace `eb990e114973e42af9935379f6b13f34f2e5e3b8`,
published Nestfolio `cc4e772f0a74886caebd07cff9b5d69d8f12ab48`,
and that Nestfolio revision's exact single immutable parent
`8f923240b6be1e0373b25b090f6be76139e4b256`.

A later execution requires all three repositories clean, pushed, on `main`,
and exactly aligned across HEAD, local `origin/main`, upstream, and remote
main. continuity-lab must then be at the exact published revision containing
this unchanged contract.

## Preserved result and correction boundary

MI-002-R1 remains one immutable UNCONDITIONAL FAIL caused solely by reading
`CONTINUITY-NEXT-STEPS.md` and the R1 Context Pack before canonical Program
State. It stopped before reproduction, Nestfolio mutation, validation, or
evidence regeneration.

The original MI-002 UNCONDITIONAL PASS remains factual at its exact execution
condition: Nestfolio HEAD
`8f923240b6be1e0373b25b090f6be76139e4b256`, MI-002 23/23, retained Level 1
14/14, backlog-next 68/68, 10/10 success scenarios, and 15/15 mandatory
failures. Published Nestfolio remains exact and unchanged at
`cc4e772f0a74886caebd07cff9b5d69d8f12ab48`; no affected evidence was
regenerated, and the published C7 22/23
`ROLLBACK_RECOVERY_IDENTITY_MISMATCH` remains unresolved.

R2 retries only the R1 design: bind the two isolated recovery reads to exact
immutable predecessor objects, verify their locked sizes and SHA-256 values
before fixture use, rerun bounded validation, regenerate only directly affected
MI-002 evidence, and update only necessary canonical publication/state
bindings. Production Level 2, Pack/Procedure identities, locks, activation,
retained Level 1, dependencies, package files, MI-003, and broader work remain
outside scope.

## Required execution order

After valid metadata gates, a later separately authorized execution must read
`docs/90-state/program-state.md` first, before this contract or any other
repository content, then follow the full canonical order in the Context Pack.
The verdict remains conjunctive, unconditional, and single-result.

## Next valid program operation

The immediate next operation is a separate MI-002-R2 contract-publication
session. It may review, commit, and push only the exact nine-path
continuity-lab contract-authoring change. It may not execute R2, inspect or
modify Nestfolio content, run Nestfolio tests, author MI-003, invoke Claude Code
or any Skill, or perform broader work.

Canonical contract:
`sessions/MI-002-R2-reusable-pack-composition-publication-c7-correction-retry/context-pack.yaml`.

Preserved future execution prompt:
`sessions/MI-002-R2-reusable-pack-composition-publication-c7-correction-retry/prompt.md`.

Exact contract-authoring manifest:
`sessions/MI-002-R2-reusable-pack-composition-publication-c7-correction-retry/changed-files.txt`.
