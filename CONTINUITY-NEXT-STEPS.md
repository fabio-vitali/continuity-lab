# Continuity — MI-003-R2 Contract Publication Handoff

## Current state

- MI-002-R2 remains published with `UNCONDITIONAL PASS` at exact Nestfolio
  revision `fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6`.
- MI-003 remains one immutable `UNCONDITIONAL FAIL`, caused solely by reading
  its Context Pack before Program State. MI-003-R1 remains a separate immutable
  `UNCONDITIONAL FAIL`, caused solely by `CANONICAL_READ_PARTIAL` on its sixth
  canonical path. Neither result inspected or changed Nestfolio.
- MI-003-R2 is finalized and authorized-not-started as an exact nine-path
  contract publication candidate. Its sole correction defines deterministic,
  contiguous, non-interleaved UTF-8 segments of at most 4096 bytes,
  exact per-segment and whole-path proof, and a hard gate that prevents tool
  truncation from counting as completion. Program State remains the first and
  sole logical repository path until its proof closes.
- No R2 execution, Nestfolio content inspection, candidate, selection, Level 3
  artifact, test, mutation, dependency operation, external write, Claude Code,
  Skill, commit, or push occurred. MI-004 remains blocked.

## Next valid operation

Open a fresh control session and paste the following complete instruction:

```text
This is a fresh MI-003-R2 contract-publication control session only. It
authorizes review, commit, and push of the existing uncommitted and unstaged
exact nine-path continuity-lab contract-authoring candidate for MI-003-R2, and
nothing else. It does not authorize editing the candidate, executing MI-003-R2,
inspecting or modifying Nestfolio content, deriving or selecting a candidate,
implementing backlog work, beginning MI-004, invoking Claude Code or any Skill,
changing dependencies, creating external writes, or rewriting history.

Do not rely on previous chat state.

Before reading repository content, verify Git metadata separately for
continuity-workspace, continuity-lab, and Nestfolio. Require clean main branches
for continuity-workspace and Nestfolio and require continuity-lab main with no
staged changes. Require HEAD, local origin/main, upstream, and remote main
exactly aligned at continuity-workspace
eb990e114973e42af9935379f6b13f34f2e5e3b8, continuity-lab
323834ff98bdf066daaf96d24957e154c899393e, and Nestfolio
fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6. Require continuity-lab HEAD subject
"Record MI-003-R1 unconditional failure closure", exact single parent
6aa004ff01ba9caab242680fbf62e3d53730bf46, and exact published nine-path R1
closure delta. Require the only continuity-lab unstaged/untracked state to
normalize to exactly these nine status/path pairs:

M CONTINUITY-NEXT-STEPS.md
M README.md
M docs/70-implementation/README.md
M docs/90-state/artifact-index.md
M docs/90-state/program-state.md
A sessions/MI-003-R2-bounded-local-work-and-scope-segmented-canonical-complete-read-correction-retry/changed-files.txt
A sessions/MI-003-R2-bounded-local-work-and-scope-segmented-canonical-complete-read-correction-retry/context-pack.yaml
A sessions/MI-003-R2-bounded-local-work-and-scope-segmented-canonical-complete-read-correction-retry/prompt.md
A sessions/MI-003-R2-bounded-local-work-and-scope-segmented-canonical-complete-read-correction-retry/session-handoff.md

Treat Git `??` for the four untracked files as manifest status `A`. Stop before
content read on any contradiction. Do not fetch, pull, merge, rebase, reset,
checkout, restore, stash, clean, or rewrite history.

After the metadata gates pass, read docs/90-state/program-state.md first. Then
read the MI-003-R2 Context Pack, prompt, handoff, and authoring manifest; the
completed MI-003-R1 Context Pack, report, handoff, execution manifest, prompt,
and authoring manifest; the original MI-003 Context Pack, prompt, handoff, both
manifests, and report; and the four modified index/handoff documents. Do not
inspect Nestfolio content.

Review the complete continuity-lab diff against
323834ff98bdf066daaf96d24957e154c899393e. Require exactly five modified and
four added paths matching changed-files.txt, with no deletion, rename, mode
change, staged change, or additional path. Require every MI-003 and MI-003-R1
artifact and report and all MI-002 history to remain byte-identical to the base.

Confirm the sole R2 correction is the canonical complete-read protocol: one
logical path at a time; Program State first and sole until complete; greedy
contiguous readable UTF-8 payloads capped at 4096 bytes and ending only at
code-point boundaries; exactly one segment per tool response; deterministic
begin/end envelopes; exact blob, byte, line,
SHA-256, and contiguous-coverage proof; and advancement only when the tool
explicitly reports no truncation, clipping, omission, or elision. Confirm an
incomplete response can fail C1 but can never masquerade as completion.

Confirm the original MI-003 objective, human-selection boundary, conjunctive
verdict, Nestfolio scope, S1-S10, F1-F12, validation, preservation, rollback,
and prohibitions remain retained. Confirm MI-003 and MI-003-R1 remain separate
immutable `UNCONDITIONAL FAIL` results, all MI-002 history remains preserved,
execution is unauthorized, and MI-004 remains blocked.

Validate YAML parsing, Markdown front matter, exact manifest consistency,
whitespace, absence of conflict markers, and protected-path immutability.
Confirm the intended commit contains no secret, temporary file, Nestfolio
evidence, or unpermitted path. Do not edit any file. Any required correction
must stop publication and be reported for a new bounded authoring session.

If and only if every gate, review, and validation passes, stage exactly the nine
manifest paths. Verify the staged delta contains exactly five M and four A
entries and no unstaged or additional change, then create one commit with this
exact English subject:

Authorize MI-003-R2 segmented canonical complete-read correction retry

Require the new commit to have exact single parent
323834ff98bdf066daaf96d24957e154c899393e, exact subject, and exact nine-path
delta. Push only that commit to origin main. Verify HEAD, local origin/main,
upstream, and remote main align exactly at the new commit and the continuity-lab
worktree is clean. Do not amend or create another commit.

Report the published continuity-lab revision, exact subject, parent, nine-path
manifest, validations, unchanged continuity-workspace and Nestfolio bindings,
immutable MI-003/MI-003-R1/MI-002 disposition, and that MI-003-R2 was not
executed. Provide the preserved R2 prompt only as a future template requiring a
new explicit execution instruction with the exact published revision. Do not
execute it in the publication session. MI-004 remains blocked.
```
