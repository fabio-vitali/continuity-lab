---
artifact_id: SESSION-HANDOFF-MI-002-R1
status: validated
owner: session
last_updated: 2026-07-15
supersedes: []
superseded_by: null
---

# MI-002-R1 — Publication-Dependent C7 Correction Contract Handoff

## Status

**Contract finalized and reviewed — authorized-not-started.**

No correction was executed. Nestfolio was inspected only within the explicit
read boundary and remains clean, pushed, and byte-unchanged at
`cc4e772f0a74886caebd07cff9b5d69d8f12ab48`. No commit, push, history rewrite,
MI-003 work, Skill invocation, dependency operation, or broader work occurred.

## Exact discrepancy and correction

The published MI-002 commit is the direct child of
`8f923240b6be1e0373b25b090f6be76139e4b256`. The C7 recovery fixture currently
reads `git show HEAD:package.json`. At the original execution condition, HEAD
was the predecessor and selected the required 6467-byte Level 1 package with
SHA-256 `b69da6f561a3ca51b80511efc7cc615412e6e98ba16339f1944218b96e059677`.
At published HEAD it selects the 6945-byte Level 2 package with SHA-256
`07b935ab66c83752ebffdeea942a57abac598b18c568b39c027534c6edd2357c`,
causing `ROLLBACK_RECOVERY_IDENTITY_MISMATCH` and 22/23 tests.

MI-002-R1 permits only one fixture correction: read both recovery files from
the exact immutable predecessor revision and verify their locked digest and
size before use. Production Level 2, all four Pack/Procedure identities, both
aggregate locks, activation, Level 1, dependencies, and package files are
immutable.

## Publication and execution boundary

This continuity-lab contract must first be reviewed, committed, and pushed in a
separate publication session without touching Nestfolio. Correction execution
then requires another fresh session and a separate explicit instruction. The
execution revision placeholder in the Context Pack is resolved only by the
clean pushed contract-publication commit.

MI-003 is blocked while this correction is pending. It is neither authored nor
authorized by this contract.

Canonical contract:
`sessions/MI-002-R1-reusable-pack-composition-publication-c7-correction/context-pack.yaml`.

Preserved future execution prompt:
`sessions/MI-002-R1-reusable-pack-composition-publication-c7-correction/prompt.md`.
