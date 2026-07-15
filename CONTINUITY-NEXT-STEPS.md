# Continuity — MI-002-R2 Contract Publication Handoff

## Current state

- MI-002-R1 remains one immutable `UNCONDITIONAL FAIL`, caused solely by its
  canonical-read-order deviation after valid repository gates.
- Nestfolio remains clean, pushed, and unchanged at
  `cc4e772f0a74886caebd07cff9b5d69d8f12ab48`; no affected MI-002 evidence
  was regenerated, and the published C7 22/23
  `ROLLBACK_RECOVERY_IDENTITY_MISMATCH` remains unresolved.
- MI-002-R2 is finalized, reviewed, and `authorized-not-started`. Contract
  authorization does not imply execution authorization.
- R2 execution, Nestfolio tests or mutation, MI-003, Claude Code, every Skill,
  and broader work remain unauthorized.

## Next valid operation

Open a fresh control session and paste the following complete instruction:

```text
This is an MI-002-R2 contract-publication session only. It authorizes review, commit, and push of the exact finalized MI-002-R2 contract-authoring change in continuity-lab. It does not authorize MI-002-R2 execution, any Nestfolio content inspection, mutation, or test, MI-003, Claude Code, any Skill, or broader work.

Do not rely on previous chat state.

Before reading repository content, verify Git metadata separately for continuity-workspace, continuity-lab, and Nestfolio. Require continuity-workspace clean pushed main at eb990e114973e42af9935379f6b13f34f2e5e3b8; Nestfolio clean pushed main at cc4e772f0a74886caebd07cff9b5d69d8f12ab48, whose exact single parent is 8f923240b6be1e0373b25b090f6be76139e4b256; and continuity-lab main based exactly on published MI-002-R1 failure-closure revision 60ac7397aa399de1f8f4d0e3456999a797136dd3 with exactly the nine paths and statuses recorded in sessions/MI-002-R2-reusable-pack-composition-publication-c7-correction-retry/changed-files.txt and no staged or additional change. For each clean repository require HEAD, local origin/main, upstream, and remote main to be exactly identical; for dirty continuity-lab require HEAD, local origin/main, upstream, and remote main all exactly 60ac7397aa399de1f8f4d0e3456999a797136dd3 before publication. Stop before content read on any contradiction. Do not fetch, pull, merge, rebase, reset, checkout, restore, stash, clean, or rewrite history.

After the metadata gates pass, read docs/90-state/program-state.md first. Then read, in order, sessions/MI-002-R2-reusable-pack-composition-publication-c7-correction-retry/context-pack.yaml, prompt.md, session-handoff.md, and changed-files.txt. Review the complete continuity-lab diff against 60ac7397aa399de1f8f4d0e3456999a797136dd3.

Confirm that the contract is finalized, reviewed, and authorized-not-started; that contract authorization explicitly does not imply execution authorization; that it binds continuity-workspace eb990e114973e42af9935379f6b13f34f2e5e3b8, continuity-lab failure-closure base 60ac7397aa399de1f8f4d0e3456999a797136dd3, published Nestfolio cc4e772f0a74886caebd07cff9b5d69d8f12ab48, and exact immutable predecessor 8f923240b6be1e0373b25b090f6be76139e4b256; that it preserves MI-002-R1 as one immutable UNCONDITIONAL FAIL caused solely by its canonical-read-order deviation; that it preserves the original MI-002 result and exact execution conditions; and that it retries only the unresolved publication-dependent C7 recovery-fixture correction with bounded validation, directly affected evidence regeneration, and necessary canonical publication/state binding updates. Confirm the conjunctive unconditional single-result verdict and all prohibited expansion boundaries.

If and only if the exact manifest and review pass, commit and push only continuity-lab main with the English commit subject "Authorize MI-002-R2 C7 correction retry contract". Then verify continuity-lab is clean and its HEAD, local origin/main, upstream, and remote main are exactly identical. Reverify continuity-workspace and Nestfolio remain clean, pushed, and at their exact required revisions, including the Nestfolio single-parent relation.

Do not modify continuity-workspace or Nestfolio, run any Nestfolio test, execute MI-002-R2, modify historical MI-002-R1 artifacts, author or execute MI-003, invoke Claude Code or any Skill, commit or push another repository, or perform broader work.

Report the exact published continuity-lab revision and commit subject. State that MI-002-R2 execution remains unauthorized. The next valid operation after successful publication is a fresh MI-002-R2 execution session requiring another separate explicit user instruction; provide a complete copy-paste-ready execution prompt with the exact published contract revision inserted. Do not execute R2 in the publication session.
```
