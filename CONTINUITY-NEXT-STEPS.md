# Continuity — Exact Next Steps After MI-001 Contract Authoring

## Current state

- MA-001 is complete with unconditional PASS; G5 is passed and valid.
- DR-0023 and the Migration Plan remain canonical.
- The MI-001 contract is prepared.
- MI-001 is `authorized-not-started`, contracted, and not executed.
- MI-001 remains the sole authorized iteration.
- This repository contains no MI-001 implementation result.

## 1. Review the contract-authoring diff

Only these files may have changed:

```text
README.md
CONTINUITY-NEXT-STEPS.md
docs/60-migration/README.md
docs/70-implementation/README.md
docs/90-state/artifact-index.md
docs/90-state/program-state.md
sessions/MI-001-procedure-first-adoption/context-pack.yaml
sessions/MI-001-procedure-first-adoption/prompt.md
sessions/MI-001-procedure-first-adoption/session-handoff.md
```

Verify:

```bash
{
  git diff --name-only
  git ls-files --others --exclude-standard
} | sort -u

git diff --check
git diff
```

Do not commit if any other path changed. Confirm that no implementation code, tests, schemas, adapters, stores, Skills, hooks, Pack assets, Console code, Decision Record, or Nestfolio artifact changed.

Review especially:

```text
sessions/MI-001-procedure-first-adoption/context-pack.yaml
sessions/MI-001-procedure-first-adoption/prompt.md
sessions/MI-001-procedure-first-adoption/session-handoff.md
```

The selected Level 1 Procedure is `nestfolio.backlog-next`, entered through `/backlog-next`, with current asset source `.claude/skills/backlog-next/**` and an exact per-asset SHA-256 lock to be created during execution.

## 2. Commit and push the contract

Run:

```bash
git add \
  README.md \
  CONTINUITY-NEXT-STEPS.md \
  docs/60-migration/README.md \
  docs/70-implementation/README.md \
  docs/90-state/artifact-index.md \
  docs/90-state/program-state.md \
  sessions/MI-001-procedure-first-adoption/context-pack.yaml \
  sessions/MI-001-procedure-first-adoption/prompt.md \
  sessions/MI-001-procedure-first-adoption/session-handoff.md

git diff --cached --check
git diff --cached
git commit -m "Prepare MI-001 procedure-first adoption contract"
git push
```

## 3. Create clean committed archives

Create the canonical contract archive from committed `HEAD`:

```bash
git archive \
  --format=zip \
  --output=../continuity-lab-mi001-contracted.zip \
  HEAD
```

For MI-001 execution, also prepare the Nestfolio implementation repository at the exact revision/precondition required by the contract. The baseline recorded in `sources/nestfolio-runtime.yaml` is:

```text
3aa8f4773955541415f615abd80a0a9702bcb416
```

Do not use an unreviewed moving branch. Do not copy Nestfolio into continuity-lab.

## 4. Execute MI-001 in a fresh isolated conversation

Open a new conversation. Upload:

```text
continuity-lab-mi001-contracted.zip
```

and the exact bounded Nestfolio archive/repository input required by the contract.

Paste the complete contents of this file without modification:

```text
sessions/MI-001-procedure-first-adoption/prompt.md
```

Do not summarize, shorten, merge, or supplement the prompt with prior-chat assumptions. Do not execute MI-001 in the contract-authoring conversation.

## 5. Required execution outcome

The fresh executor must:

- implement only the contracted PX Level 1 slice;
- modify only the paths explicitly permitted by the contract;
- validate every success and failure scenario;
- provide criterion-linked Evidence C1-C7;
- issue an unconditional PASS or FAIL;
- select exactly one evidence-justified next iteration only after that result;
- return exact changed-file manifests and complete updated repository ZIPs.

A PASS does not automatically authorize MI-002.

## Work that remains blocked

- MI-001 execution anywhere except the separate fresh committed-contract session;
- MI-002 through MI-007 until predecessor Evidence and explicit Program State authorization;
- reusable multi-Procedure Pack composition and Level 2 conflict/compatibility machinery;
- canonical Work, Working Set, Scope, or backlog migration;
- Context Packs;
- resumable Runs, effects, Checkpoints, and Handoffs;
- Assurance, Guards, Waivers, and trusted completion;
- governed Decisions, Observations, Lessons, and automatic promotion;
- broader implementation and later vertical slices;
- reproduction or migration of the complete current runtime;
- Console implementation;
- universal executor/platform integrations;
- hosted services, RBAC, analytics, billing, commercial packaging, and commercial control plane;
- broad or unrelated Nestfolio migration;
- promotion of Nestfolio-specific behavior into Framework Core without repeated cross-project evidence and a new Decision.
