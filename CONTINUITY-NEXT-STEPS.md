# Continuity — Execute MI-001A with Genuine Claude Code

## Current state

- MI-001 remains complete with unconditional **FAIL**.
- The exact Level 1 implementation candidate is retained; MI-001 C2, C4, C5, C6, and C7 remain passed.
- The MI-001A contract is prepared under `sessions/MI-001A-genuine-claude-code-invocation-confirmation/`.
- MI-001A has not executed.
- MI-001A becomes executable only from the exact user-reviewed and committed contract revision.
- MI-002 through MI-007 and all broader work remain blocked.

## 1. Review, commit, and push the MI-001A contract

Review the exact contract-authoring diff:

```bash
git status --short
git diff --check
git diff -- \
  CONTINUITY-NEXT-STEPS.md \
  docs/90-state/program-state.md \
  docs/90-state/artifact-index.md \
  sessions/MI-001A-genuine-claude-code-invocation-confirmation/context-pack.yaml \
  sessions/MI-001A-genuine-claude-code-invocation-confirmation/prompt.md \
  sessions/MI-001A-genuine-claude-code-invocation-confirmation/session-handoff.md
```

Confirm that:

- the contract closes only genuine MI-001 C1 and C3 evidence;
- no implementation or Nestfolio artifact was changed;
- MI-001 FAIL remains preserved;
- MI-002 through MI-007 remain blocked;
- the handoff is still an unused draft placeholder.

Then commit and push continuity-lab. Suggested commit message:

```text
Authorize MI-001A genuine Claude Code confirmation
```

Do not treat the generated ZIP as already reviewed or committed.

## 2. Prepare the genuine execution environment

Use an environment where Claude Code is really installed, authenticated, and able to start repository Sessions.

Before execution, verify and retain the output of:

```bash
claude --version
git -C /path/to/continuity-lab status --short
git -C /path/to/continuity-lab rev-parse HEAD
git -C /path/to/nestfolio status --short
git -C /path/to/nestfolio rev-parse HEAD
```

Both repositories must be clean and committed. Do not use a simulated executor, a test harness, or an adapter-only invocation as genuine evidence.

## 3. Upload both exact committed repositories

Create fresh archives from the exact commits after pushing:

```bash
git -C /path/to/continuity-lab archive --format=zip --output continuity-lab-MI-001A.zip HEAD
git -C /path/to/nestfolio archive --format=zip --output nestfolio-MI-001A.zip HEAD
```

Upload both archives together in a fresh isolated execution conversation and run only:

`sessions/MI-001A-genuine-claude-code-invocation-confirmation/prompt.md`

The executor must first verify the committed contract, exact Nestfolio revision, retained candidate identity, Claude Code version, authentication, and genuine Session provenance.

## 4. Execute only the contracted evidence scenarios

MI-001A may only:

1. invoke `/backlog-next` through the active retained Level 1 boundary in a genuine Claude Code Session;
2. capture the structured invocation result, normal visible Skill output, revisions, commands, timestamps, and provenance;
3. disable Level 1 using the existing mechanism;
4. start a separately invoked fresh genuine Claude Code Session and invoke `/backlog-next` directly;
5. prove Skill, backlog, checks, journal, runtime, Pack, Procedure, binding, lock, and implementation bytes remain preserved;
6. restore the delivered active Level 1 state;
7. issue unconditional PASS or FAIL.

Do not repair or change the Level 1 implementation during MI-001A. Any candidate drift, regression, inadmissible executor evidence, or failure of either scenario requires FAIL.

## Work that remains blocked

- MI-002 through MI-007;
- reusable multi-Procedure Pack composition;
- canonical Work, Working Set, Scope, Context Pack, Session, Run, effect, Checkpoint, Handoff, Assurance, Waiver, Guard, Decision, Observation, or Lesson state;
- broader implementation or migration;
- Console, universal integrations, hosted services, RBAC, analytics, billing, commercial packaging, and commercial control plane;
- broad or unrelated Nestfolio migration;
- promotion of project-specific behavior into Framework Core.
