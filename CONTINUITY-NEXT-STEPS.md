# Continuity — MI-003-R1 Contract Publication Handoff

## Current state

- MI-002-R2 remains published with `UNCONDITIONAL PASS` at exact Nestfolio
  revision `fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6`.
- MI-003 remains one immutable `UNCONDITIONAL FAIL`, caused solely by reading
  its Context Pack before canonical Program State after valid metadata gates.
  It stopped before any Nestfolio content read or mutation.
- MI-003-R1 is finalized, reviewed, and `authorized-not-started`. Its sole
  correction makes Program State the first and only repository content in the
  first content-read operation and requires the rest of the canonical sequence
  to be read serially and completely.
- No retry execution, backlog inspection, candidate projection, human
  selection, Level 3 creation, selected-work implementation, Nestfolio test or
  mutation, Claude Code, Skill, dependency operation, or external write has
  occurred. MI-004 and broader work remain blocked.

## Next valid operation

Open a fresh control session and paste the following complete instruction:

```text
This is a fresh MI-003-R1 contract-publication control session only. It
authorizes review and publication of the existing uncommitted and unstaged
nine-path continuity-lab authoring candidate for MI-003-R1 — Bounded Local Work
and Scope Canonical Read-Order Correction Retry, using the exact commit subject
supplied below, and nothing else. It does not authorize editing the candidate,
executing MI-003-R1, reading or mutating Nestfolio content, deriving or
selecting a backlog candidate, implementing backlog work, MI-004, Claude Code,
any Skill, dependency changes, external writes, broader implementation,
unrelated work, or history rewriting.

Do not rely on previous chat state.

Before reading repository content, verify Git metadata separately for
continuity-workspace, continuity-lab, and Nestfolio. Require
continuity-workspace clean on main at
eb990e114973e42af9935379f6b13f34f2e5e3b8 with HEAD, local origin/main,
upstream, and remote main exactly aligned. Require Nestfolio clean on main at
fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6 with HEAD, local origin/main,
upstream, and remote main exactly aligned. Require continuity-lab on main with
HEAD, local origin/main, upstream, and remote main exactly aligned at start
revision 55e81e441e9e2facfda5382c3de57d1b8b3f5c9e; require HEAD subject
"Record MI-003 unconditional failure closure", exact single parent
2e90dd1ffa944d5a633e65e0f2c1c52f751af4ad, and no staged changes. Require the
only unstaged/untracked state to normalize to exactly these nine status/path
pairs:

M CONTINUITY-NEXT-STEPS.md
M README.md
M docs/70-implementation/README.md
M docs/90-state/artifact-index.md
M docs/90-state/program-state.md
A sessions/MI-003-R1-bounded-local-work-and-scope-canonical-read-order-correction-retry/changed-files.txt
A sessions/MI-003-R1-bounded-local-work-and-scope-canonical-read-order-correction-retry/context-pack.yaml
A sessions/MI-003-R1-bounded-local-work-and-scope-canonical-read-order-correction-retry/prompt.md
A sessions/MI-003-R1-bounded-local-work-and-scope-canonical-read-order-correction-retry/session-handoff.md

Treat Git `??` for the four untracked files as manifest status `A` during this
pre-publication comparison. Stop before content read on any contradiction. Do
not fetch, pull, merge, rebase, reset, checkout, restore, stash, clean, or
rewrite history.

After the metadata gates pass, read continuity-lab
docs/90-state/program-state.md first, before any other repository content. Then
read, in order,
sessions/MI-003-R1-bounded-local-work-and-scope-canonical-read-order-correction-retry/context-pack.yaml,
sessions/MI-003-R1-bounded-local-work-and-scope-canonical-read-order-correction-retry/prompt.md,
sessions/MI-003-R1-bounded-local-work-and-scope-canonical-read-order-correction-retry/session-handoff.md,
and
sessions/MI-003-R1-bounded-local-work-and-scope-canonical-read-order-correction-retry/changed-files.txt.
Then read
docs/70-implementation/mi-003-bounded-local-work-and-scope.md,
sessions/MI-003-bounded-local-work-and-scope/context-pack.yaml,
sessions/MI-003-bounded-local-work-and-scope/prompt.md,
sessions/MI-003-bounded-local-work-and-scope/session-handoff.md,
sessions/MI-003-bounded-local-work-and-scope/execution-changed-files.txt,
CONTINUITY-NEXT-STEPS.md, README.md, docs/70-implementation/README.md, and
docs/90-state/artifact-index.md. Do not inspect Nestfolio content.

Review the complete continuity-lab diff against exact start revision
55e81e441e9e2facfda5382c3de57d1b8b3f5c9e. Require exactly five modified and
four added paths, exactly matching changed-files.txt, with no deletion, rename,
mode change, staged change, or additional path. Require every original MI-003
artifact and report to remain byte-identical to the start revision.

Confirm the exact contract identity is "MI-003-R1 — Bounded Local Work and
Scope Canonical Read-Order Correction Retry" and its state is finalized,
reviewed, and authorized-not-started without execution authorization. Confirm
its bindings are continuity-workspace
eb990e114973e42af9935379f6b13f34f2e5e3b8, continuity-lab authoring base
55e81e441e9e2facfda5382c3de57d1b8b3f5c9e, and Nestfolio
fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6.

Confirm MI-003 remains one immutable UNCONDITIONAL FAIL caused solely by the
recorded canonical-read-order deviation and that all MI-002 history remains
preserved. Confirm R1 retries the original objective, human-selection boundary,
conjunctive verdict, exact bindings, Nestfolio read/create/immutable boundaries,
S1-S10, F1-F12, deterministic evidence, rollback, and prohibitions. Confirm the
sole correction requires complete Program State to be the first and only
repository content read in the first content-read operation after all metadata
gates pass, followed by one-at-a-time complete reads in exact order.

Confirm the contract selects no candidate, reads no backlog content during
authoring or publication, creates no Level 3 state, authorizes no selected-work
implementation, invokes no Claude Code or Skill, changes no dependency, creates
no external write or Level 4-6 authority, does not execute MI-004, and does not
reinterpret the historical MI-003 failure.

Validate YAML parsing, Markdown front matter, exact manifest consistency,
whitespace, and absence of conflict markers. Confirm the intended commit will
contain no secret, generated temporary file, Nestfolio evidence, or
unpermitted path. Do not edit any file. Any required correction must stop
publication and be reported for a new bounded contract-correction session.

If and only if every review and validation passes, stage exactly the nine
manifest paths, verify the staged delta still contains exactly those five M and
four A entries and that no unstaged or additional change remains, then create
one commit with this exact English subject:

Authorize MI-003-R1 canonical read-order correction retry

Require the new commit to have exact single parent
55e81e441e9e2facfda5382c3de57d1b8b3f5c9e, the exact nine-path delta, and the
exact subject. Push only that commit to origin main. Verify HEAD, local
origin/main, upstream, and remote main exactly align at the new commit and the
continuity-lab worktree is clean. Do not amend or create any further commit.

Report the published continuity-lab revision, exact commit subject and parent,
exact nine-path manifest, validations, unchanged continuity-workspace and
Nestfolio bindings, and immutable MI-003/MI-002 disposition. State explicitly
that MI-003-R1 execution remains unauthorized and MI-004 remains blocked.
Provide the next fresh-session MI-003-R1 execution handoff with the exact
published contract revision inserted; do not execute the retry in the
publication session.
```
