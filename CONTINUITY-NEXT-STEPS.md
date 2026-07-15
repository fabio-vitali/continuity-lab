# Continuity — MI-003 Contract-Publication Handoff

## Current state

- MI-002-R2 is published with `UNCONDITIONAL PASS` at exact Nestfolio revision
  `fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6`.
- MI-002-R1 remains one immutable `UNCONDITIONAL FAIL` caused solely by its
  canonical-read-order deviation. The original MI-002 `UNCONDITIONAL PASS` and
  exact execution conditions remain preserved.
- The MI-003 — Bounded Local Work and Scope contract is fully authored,
  reviewed, and finalized as an uncommitted, unstaged nine-path publication
  candidate. Contract authorization does not authorize execution. No backlog
  item is selected and MI-003 remains unstarted.

## Next valid operation

Open a fresh control session and paste the following complete instruction:

```text
This is a fresh MI-003 contract-publication control session only. It authorizes
review and publication of the existing uncommitted and unstaged nine-path
MI-003 — Bounded Local Work and Scope contract-authoring candidate in
continuity-lab, using the exact commit subject supplied below, and nothing else.
It does not authorize editing the candidate, MI-003 execution, backlog item
selection or implementation, Nestfolio content inspection or mutation, Claude
Code, any Skill, dependency changes, broader implementation, unrelated work, or
history rewriting.

Do not rely on previous chat state.

Before reading repository content, verify Git metadata separately for
continuity-workspace, continuity-lab, and Nestfolio. Require
continuity-workspace clean on main at
eb990e114973e42af9935379f6b13f34f2e5e3b8 with HEAD, local origin/main,
upstream, and remote main exactly aligned. Require Nestfolio clean on main at
fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6 with HEAD, local origin/main,
upstream, and remote main exactly aligned. Require continuity-lab on main with
HEAD, local origin/main, upstream, and remote main exactly aligned at start
revision 1563cc65b06cacae7557734a08be418cae0ae47a; require HEAD subject
"Close MI-002-R2 C7 correction retry", exact single parent
62f1e2f1ef2838c3ac3e40649526ad39617a81de, and no staged changes. Require the
only unstaged/untracked state to normalize to exactly these nine status/path
pairs:

M CONTINUITY-NEXT-STEPS.md
M README.md
M docs/70-implementation/README.md
M docs/90-state/artifact-index.md
M docs/90-state/program-state.md
A sessions/MI-003-bounded-local-work-and-scope/changed-files.txt
A sessions/MI-003-bounded-local-work-and-scope/context-pack.yaml
A sessions/MI-003-bounded-local-work-and-scope/prompt.md
A sessions/MI-003-bounded-local-work-and-scope/session-handoff.md

Treat Git `??` for the four untracked files as manifest status `A` during this
pre-publication comparison. Stop before content read on any contradiction. Do
not fetch, pull, merge, rebase, reset, checkout, restore, stash, clean, or
rewrite history.

After the metadata gates pass, read continuity-lab
docs/90-state/program-state.md first, before any other repository content. Then
read, in order, sessions/MI-003-bounded-local-work-and-scope/context-pack.yaml,
sessions/MI-003-bounded-local-work-and-scope/prompt.md,
sessions/MI-003-bounded-local-work-and-scope/session-handoff.md,
sessions/MI-003-bounded-local-work-and-scope/changed-files.txt,
CONTINUITY-NEXT-STEPS.md, README.md, docs/70-implementation/README.md, and
docs/90-state/artifact-index.md. Do not inspect Nestfolio content.

Review the complete continuity-lab diff against exact start revision
1563cc65b06cacae7557734a08be418cae0ae47a. Require exactly five modified and
four added paths, exactly matching the manifest, with no deletion, rename,
mode change, staged change, or additional path. Confirm the contract is
internally consistent and defines exact repository bindings, canonical read
order, objective, read/create/immutable paths, preconditions, S1-S10,
F1-F12 typed diagnostics, deterministic evidence, preservation and rollback,
the C1-C7 conjunctive unconditional verdict, explicit prohibited actions, and
the later separate execution-authorization and human-selection rules. Confirm
it does not select or execute a backlog item, inspect or mutate Nestfolio,
invoke Claude Code or any Skill, change dependencies, create Level 4-6
authority, or alter any MI-002 history.

Validate YAML parsing, Markdown front matter, exact manifest consistency,
whitespace, and absence of conflict markers. Confirm the intended commit will
contain no secret, generated temporary file, or execution evidence. Do not edit
any file. Any required correction must stop publication and be reported for a
new bounded authoring session.

If and only if every review and validation passes, stage exactly the nine
manifest paths, verify the staged delta still contains exactly those five M and
four A entries and that no unstaged or additional change remains, then create
one commit with this exact English subject:

Authorize MI-003 bounded local work and scope contract

Require the new commit to have exact single parent
1563cc65b06cacae7557734a08be418cae0ae47a, the exact nine-path delta, and the
exact subject. Push only that commit to origin main. Verify HEAD, local
origin/main, upstream, and remote main exactly align at the new commit and the
continuity-lab worktree is clean. Do not amend or create any further commit.

Report the published continuity-lab revision, exact commit subject and parent,
exact nine-path manifest, validations, and preserved MI-002 history. State
explicitly that publication authorizes the contract only: MI-003 execution and
backlog item selection/implementation remain unauthorized. Provide the next
fresh-session execution handoff with the exact new revision inserted, but do
not execute MI-003.
```
