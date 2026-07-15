# MI-002-R2 — Reusable Pack Composition Publication-Dependent C7 Correction Retry

Run MI-002-R2 only when its published Context Pack remains
`authorized-not-started`, all exact repository gates pass, and a separate user
instruction explicitly orders MI-002-R2 execution. Contract authoring, review,
finalization, authorization, commit, push, or publication does not authorize or
start execution.

Before reading any repository content, verify Git metadata separately for
continuity-workspace, continuity-lab, and Nestfolio. Require clean pushed
`main` with HEAD, local `origin/main`, upstream, and remote main exactly
identical. Require continuity-workspace at
`eb990e114973e42af9935379f6b13f34f2e5e3b8`; continuity-lab at the exact
final published revision containing this unchanged contract, based exactly on
MI-002-R1 failure-closure revision
`60ac7397aa399de1f8f4d0e3456999a797136dd3`; and Nestfolio at
`cc4e772f0a74886caebd07cff9b5d69d8f12ab48` with exactly one parent,
`8f923240b6be1e0373b25b090f6be76139e4b256`. Stop before content read on
any contradiction. Do not fetch, pull, merge, rebase, reset, checkout, restore,
stash, clean, or rewrite history.

After valid gates, read
`docs/90-state/program-state.md` first, before this Context Pack or any other
repository content. Then read the R2 Context Pack and follow its complete
canonical order. Any read-order deviation is MI-002-R2 UNCONDITIONAL FAIL and
requires stop before Nestfolio inspection, tests, or mutation.

Preserve MI-002-R1 as one immutable UNCONDITIONAL FAIL caused solely by its
canonical-read-order deviation. Preserve the original MI-002 result and exact
execution conditions. Require Nestfolio initially exact and unchanged at the
published revision, with no affected evidence regenerated and the published
C7 `ROLLBACK_RECOVERY_IDENTITY_MISMATCH` and 22/23 discrepancy unresolved.

Reproduce exactly that 22/23 result and sole typed diagnostic. Then change only
the isolated C7 recovery fixture so both recovery files come from immutable
revision `8f923240b6be1e0373b25b090f6be76139e4b256` and are verified before
use against their contracted SHA-256 values and byte sizes. Perform only the
bounded validation, directly affected MI-002 evidence regeneration, and
necessary canonical publication/state binding updates allowed by the contract.

Do not change production Level 2, either Pack or Procedure, locks, activation,
retained Level 1, dependencies, `package.json`, `package-lock.json`,
historical R1 artifacts, or unaffected evidence. Do not invoke Claude Code or
any Skill, execute a selected backlog item, create Level 3-6 state, author or
authorize MI-003, commit, push, or modify any path outside the exact contract
scope. Issue exactly one unconditional MI-002-R2 result under the conjunctive
single-result verdict.
