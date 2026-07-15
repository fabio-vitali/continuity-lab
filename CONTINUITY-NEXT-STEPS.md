# Continuity — MI-002-R1 Failure-Closure Publication Handoff

## Current state

- MI-002-R1 is complete with `UNCONDITIONAL FAIL` because its required
  canonical read order was not followed after valid execution start.
- The correction stopped before pre-edit reproduction and before any Nestfolio
  mutation, validation, or evidence regeneration.
- Nestfolio remains clean, pushed, and byte-exact at
  `cc4e772f0a74886caebd07cff9b5d69d8f12ab48`; the published C7 22/23
  discrepancy remains unresolved.
- MI-002-R2 is selected only as `selected-contract-required`. It is not
  authored, authorized, or started.
- MI-003 remains unauthorized and blocked.

## Next valid operation

Open a fresh control session and paste the following complete instruction:

```text
This is an MI-002-R1 unconditional-FAIL closure publication session only. It authorizes review, commit, and push of the exact continuity-lab closure; it does not authorize any Nestfolio mutation or test, MI-002-R2 contract authoring or execution, MI-003, Claude Code, any Skill, or broader work.

Before reading repository content, verify Git metadata separately for continuity-workspace, continuity-lab, and Nestfolio. Require continuity-workspace clean pushed main at eb990e114973e42af9935379f6b13f34f2e5e3b8 and Nestfolio clean pushed main at cc4e772f0a74886caebd07cff9b5d69d8f12ab48, whose exact single parent is 8f923240b6be1e0373b25b090f6be76139e4b256. Require each clean repository's HEAD, local origin/main, upstream, and remote main to be exactly identical. Require continuity-lab main based exactly on f46b12a02989c000069313e9178d4929ee38b4c2 with exactly the eleven paths and statuses recorded in sessions/MI-002-R1-reusable-pack-composition-publication-c7-correction/execution-changed-files.txt and no other change. Stop before content read on any contradiction. Do not fetch, pull, merge, rebase, reset, checkout, restore, stash, clean, or rewrite history.

After the metadata gates pass, read docs/90-state/program-state.md first, then sessions/MI-002-R1-reusable-pack-composition-publication-c7-correction/context-pack.yaml, session-handoff.md, and execution-changed-files.txt. Review the complete continuity-lab diff against f46b12a02989c000069313e9178d4929ee38b4c2. Confirm that it records exactly one MI-002-R1 UNCONDITIONAL FAIL caused by the canonical-read-order deviation, preserves the original MI-002 execution result, proves Nestfolio remained exact and unchanged, leaves the published C7 discrepancy unresolved, selects only MI-002-R2 as selected-contract-required, and keeps MI-003 blocked.

If and only if the exact manifest and review pass, commit and push only continuity-lab main with a concise English commit message. Then verify continuity-lab is clean and its HEAD, local origin/main, upstream, and remote main are exactly identical. Do not modify continuity-workspace or Nestfolio, run Nestfolio tests, author or execute MI-002-R2, author or execute MI-003, invoke Claude Code or any Skill, commit or push another repository, or perform broader work.

Report the exact published continuity-lab revision and commit subject. The next valid operation after successful publication is a fresh MI-002-R2 contract-authoring session requiring a separate explicit user instruction; provide a complete copy-paste-ready prompt with the exact published failure-closure revision inserted. Do not author that contract in the publication session.
```
