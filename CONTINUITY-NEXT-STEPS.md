# Continuity — MI-002-R1 Contract Publication Handoff

## Current state

- MI-002 is published in Nestfolio at
  `cc4e772f0a74886caebd07cff9b5d69d8f12ab48` and continuity-lab at
  `eb49bf54acb97ef2aca32afafaec25985820f41b`.
- Original execution at Nestfolio HEAD
  `8f923240b6be1e0373b25b090f6be76139e4b256` produced 23/23.
- Published HEAD makes the isolated C7 fixture select the 6945-byte Level 2
  `package.json` instead of the locked 6467-byte Level 1 predecessor, producing
  `ROLLBACK_RECOVERY_IDENTITY_MISMATCH` and 22/23.
- MI-002-R1 is finalized, reviewed, and `authorized-not-started`. It permits
  only immutable digest-verified predecessor recovery bytes, bounded MI-002
  revalidation, affected evidence regeneration, and publication/state binding
  correction.
- No correction was executed and Nestfolio remains clean and unchanged.
- MI-003 is unauthorized and blocked while MI-002-R1 is pending.

## Next valid operation

Open a fresh control session and paste the following complete instruction:

```text
This is an MI-002-R1 contract-publication session only. It is not authorization to execute the correction, modify Nestfolio, execute MI-003, or perform broader work.

Before reading repository content, verify Git metadata separately for continuity-workspace, continuity-lab, and Nestfolio. Require continuity-workspace clean main at eb990e114973e42af9935379f6b13f34f2e5e3b8, Nestfolio clean main at cc4e772f0a74886caebd07cff9b5d69d8f12ab48, and both exactly aligned with local origin/main and remote main. Require continuity-lab main based on eb49bf54acb97ef2aca32afafaec25985820f41b with exactly the nine paths and statuses recorded in sessions/MI-002-R1-reusable-pack-composition-publication-c7-correction/changed-files.txt and no other change. Stop on any contradiction.

Read continuity-lab Program State first, then the MI-002-R1 Context Pack, prompt, contract handoff, and exact changed-file manifest. Review the complete diff against eb49bf54acb97ef2aca32afafaec25985820f41b. Confirm that the contract is authorized-not-started, binds future execution to Nestfolio cc4e772f0a74886caebd07cff9b5d69d8f12ab48 and immutable predecessor 8f923240b6be1e0373b25b090f6be76139e4b256, limits the correction to the C7 recovery fixture and affected evidence/state, and prohibits production Level 2, Pack, lock, activation, Level 1, dependency, package-lock.json, MI-003, and broader changes.

If and only if the manifest and review pass, commit and push only continuity-lab main with a concise English commit message. Then verify continuity-lab is clean and its HEAD, local origin/main, upstream, and remote main are exactly identical. Do not modify or run tests in Nestfolio, execute MI-002-R1, modify continuity-workspace, invoke Claude Code or any Skill, commit or push another repository, authorize MI-003, or rewrite history.

Report the exact published continuity-lab revision and commit subject. The next valid operation after successful publication is a new fresh MI-002-R1 execution session requiring a separate explicit user instruction; provide its complete copy-paste-ready prompt with the exact published contract revision inserted.
```
