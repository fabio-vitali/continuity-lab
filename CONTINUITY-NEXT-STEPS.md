# Continuity — Authorize and Execute MI-001

## Current state

- MA-001 is complete with unconditional PASS; G5 is passed and valid.
- `docs/60-migration/migration-plan.md` and DR-0023 remain accepted and canonical.
- The MI-001 contract under `sessions/MI-001-procedure-first-adoption/` was reviewed and committed in revision `5a179ef22b1c27146a89d6e63823cb4cc6eb33c6`.
- This update corrects the stale authorization wording that still described review and commit as pending.
- MI-001 is the sole authorized execution iteration with status `authorized-not-started`.
- MI-001 has not executed and its result is pending.
- MI-002 through MI-007 and all broader work remain blocked.

## 1. Apply and review this authorization-state correction

Only these files must differ from revision `5a179ef22b1c27146a89d6e63823cb4cc6eb33c6`:

```text
CONTINUITY-NEXT-STEPS.md
docs/90-state/program-state.md
```

Verify:

```bash
git status --short
git diff --name-only
git diff --check
git diff
```

Do not continue if any other file changed.

The following MI-001 contract files must remain unchanged:

```text
sessions/MI-001-procedure-first-adoption/context-pack.yaml
sessions/MI-001-procedure-first-adoption/prompt.md
sessions/MI-001-procedure-first-adoption/session-handoff.md
```

The handoff remains an unused placeholder until MI-001 actually executes.

## 2. Commit and push the correction

Run:

```bash
git add \
  CONTINUITY-NEXT-STEPS.md \
  docs/90-state/program-state.md

git diff --cached --check
git diff --cached

git commit -m "Authorize committed MI-001 execution contract"
git push
```

Do not amend or rewrite the already reviewed MI-001 contract.

## 3. Create the canonical committed archive

After the push succeeds:

```bash
REVISION="$(git rev-parse HEAD)"

git archive \
  --format=zip \
  --output="../continuity-lab-${REVISION}.zip" \
  HEAD

unzip -z "../continuity-lab-${REVISION}.zip"
```

The ZIP comment must show the same full commit SHA returned by `git rev-parse HEAD`.

Prepare Nestfolio at the exact revision required by the active contract:

```text
3aa8f4773955541415f615abd80a0a9702bcb416
```

Do not use a moving branch or an uncommitted Nestfolio working tree.

## 4. Execute MI-001 in a fresh isolated conversation

Open a new conversation and upload:

```text
continuity-lab-<NEW-COMMIT-SHA>.zip
nestfolio-3aa8f4773955541415f615abd80a0a9702bcb416.zip
```

Paste the complete, unchanged contents of:

```text
sessions/MI-001-procedure-first-adoption/prompt.md
```

Do not summarize or supplement the prompt with assumptions from earlier conversations.

The authorization check should now find all of these conditions consistently recorded:

```text
MA-001 PASS and G5 valid
migration plan accepted and canonical
DR-0023 validated and active
MI-001 contract reviewed and committed
MI-001 sole authorized execution iteration
MI-001 authorized-not-started
MI-001 not executed
MI-001 result pending
MI-002 through MI-007 and broader work blocked
```

## 5. Required MI-001 outcome

The fresh executor must:

- implement only the contracted Level 1 `nestfolio.backlog-next` slice;
- modify only paths permitted by the active Context Pack;
- execute every required success and failure scenario;
- produce criterion-linked Evidence C1 through C7;
- issue exactly one unconditional PASS or FAIL;
- return complete updated ZIP archives for every modified repository;
- select exactly one evidence-justified next iteration only after the verdict.

A PASS does not automatically authorize MI-002.

## Work that remains blocked

- MI-001 execution in the contract-authoring or authorization-correction conversation;
- MI-002 through MI-007 until predecessor Evidence and explicit Program State authorization;
- reusable multi-Procedure composition and Level 2 machinery;
- canonical Work, Working Set, Scope, Context Pack, Session, Run, effect, Checkpoint, Handoff, Assurance, Waiver, Guard, Decision, Observation, or Lesson state beyond the contracted slice;
- broader implementation or migration;
- Console implementation;
- universal executor or platform integrations;
- hosted services, RBAC, analytics, billing, commercial packaging, and commercial control-plane work;
- broad or unrelated Nestfolio migration;
- promotion of Nestfolio-specific behavior into Framework Core without repeated cross-project evidence and a new Decision.
