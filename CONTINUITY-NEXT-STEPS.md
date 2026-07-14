# Current Execution Instructions

## Current canonical position

**MA-001 — Migration Architecture is authorized and contracted, but it has not been executed.**

The active contract is under:

```text
sessions/MA-001-migration-architecture/
  context-pack.yaml
  prompt.md
  session-handoff.md
```

Gate G5 is pending. No migration architecture or implementation is accepted.

## 1. Review the prepared MA-001 contract

Review these newly created contract files in full:

1. `sessions/MA-001-migration-architecture/context-pack.yaml`
2. `sessions/MA-001-migration-architecture/prompt.md`
3. `sessions/MA-001-migration-architecture/session-handoff.md`

Confirm that:

- `context-pack.yaml` authorizes MA-001 as L5 with status `authorized-not-started`;
- the Current Runtime Map is the primary current-system authority;
- Nestfolio source inspection is prohibited by default and permitted only through the narrowly justified evidence-gap rule;
- required methods, scenarios, migration slices, adoption-level mapping, compatibility, authority, validation, Evidence, rollback, abandonment, recovery, contradiction handling, and G5 criteria are complete;
- G5 allows only unconditional PASS or FAIL;
- the contract does not pre-authorize an implementation slice or any specific next iteration;
- `prompt.md` is self-contained and operationally executable in a fresh isolated session;
- `session-handoff.md` is visibly a prepared, unused placeholder and contains no fabricated execution result.

Also review the state and navigation updates:

4. `README.md`
5. `CONTINUITY-NEXT-STEPS.md`
6. `docs/60-migration/README.md`
7. `docs/90-state/program-state.md`
8. `docs/90-state/artifact-index.md`

Confirm that every file distinguishes:

```text
MA-001 authorized and contracted
```

from:

```text
MA-001 executed and G5 decided
```

## 2. Confirm what must not exist yet

Before committing, verify that all of the following are true:

- `docs/60-migration/migration-plan.md` does **not** exist;
- no new Decision Record was created merely for contract preparation;
- `sessions/MA-001-migration-architecture/context-pack.yaml` still has a pending result and no fabricated `final_result`;
- the MA-001 handoff is still the unused placeholder;
- no G5 PASS or FAIL is recorded;
- no implementation code, tests, schemas, adapters, stores, Skills, hooks, Pack assets, Console code, or Nestfolio artifacts changed;
- Product Foundation, Current Runtime Map, Target Architecture, Product Experience, and VS-001/VS-001A reports are unchanged;
- migration implementation, broader implementation, later vertical slices, Console implementation, universal integrations, hosted-service work, commercial-control-plane work, and broad Nestfolio migration remain blocked.

Run:

```bash
test ! -e docs/60-migration/migration-plan.md
git status --short
git diff --check
git diff -- \
  README.md \
  CONTINUITY-NEXT-STEPS.md \
  docs/60-migration/README.md \
  docs/90-state/program-state.md \
  docs/90-state/artifact-index.md \
  sessions/MA-001-migration-architecture/context-pack.yaml \
  sessions/MA-001-migration-architecture/prompt.md \
  sessions/MA-001-migration-architecture/session-handoff.md
```

## 3. Commit the reviewed contract

From the root of the real `continuity-lab` Git repository, run:

```bash
git add \
  README.md \
  CONTINUITY-NEXT-STEPS.md \
  docs/60-migration/README.md \
  docs/90-state/program-state.md \
  docs/90-state/artifact-index.md \
  sessions/MA-001-migration-architecture/context-pack.yaml \
  sessions/MA-001-migration-architecture/prompt.md \
  sessions/MA-001-migration-architecture/session-handoff.md

git diff --cached --check
git diff --cached
git commit -m "Prepare MA-001 migration architecture contract"
git push
```

Do not commit if the staged diff contains any file outside the reviewed list or any execution result.

## 4. Create the exact repository ZIP for MA-001 execution

After the commit and push succeed, create a clean ZIP from the committed repository state:

```bash
git archive \
  --format=zip \
  --output=../continuity-lab-ma001-contract.zip \
  HEAD
```

The exact repository ZIP to upload in the next session is:

```text
continuity-lab-ma001-contract.zip
```

Do not upload a working-tree ZIP containing uncommitted changes.

## 5. Run MA-001 in a separate fresh conversation

Open a new ChatGPT conversation. Do not continue in the contract-authoring conversation.

Upload only:

```text
continuity-lab-ma001-contract.zip
```

Then paste the **complete, unmodified contents** of:

```text
sessions/MA-001-migration-architecture/prompt.md
```

Do not paraphrase, summarize, or append an improvised migration instruction.

Do not upload Nestfolio. A later narrowly scoped Nestfolio source request is allowed only if the reviewed MA-001 contract's evidence-gap rule is triggered during execution and the executing session identifies the exact revision, paths, question, and maximum inspection scope.

## Still blocked until MA-001 decides G5

- migration implementation and execution of any migration slice;
- broader implementation and later vertical slices;
- local Console implementation;
- universal executor or platform integrations;
- hosted-service, RBAC, analytics, billing, or commercial-control-plane work;
- broad or unrelated Nestfolio migration;
- promotion of Nestfolio-specific behavior into Framework Core without repeated evidence and a Decision.

## Permanent rules

- Chat, transcripts, CLI state, Console state, and hidden executor state are not canonical.
- Review every generated Git diff before committing.
- Preserve accepted Product Foundation, TA-002, and PX-001 boundaries unless a contradiction is raised explicitly.
- Keep Goal and Guard separate.
- Keep Nestfolio-specific behavior outside Framework Core.
- Require criterion-linked Evidence or an explicit waiver for completion.
- Never promote an Observation or Lesson automatically.
- Authorize exactly one next iteration only after the current gate result.
