# Current Execution Instructions

## Current canonical position

**MA-001 — Migration Architecture is complete with unconditional PASS. Gate G5 is passed and valid.**

Accepted evidence:

- `docs/60-migration/migration-plan.md`;
- `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`;
- `sessions/MA-001-migration-architecture/session-handoff.md`.

No migration slice was executed. No implementation artifact was created or modified.

The sole authorized next iteration is:

```text
MI-001 — Procedure-First Adoption
status: authorized-contract-required
execution: blocked
```

The next operation is **MI-001 contract authoring only**, not MI-001 execution.

## 1. Review the completed MA-001 result

Review these files in full:

1. `docs/60-migration/migration-plan.md`
2. `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`
3. `sessions/MA-001-migration-architecture/context-pack.yaml`
4. `sessions/MA-001-migration-architecture/session-handoff.md`
5. `docs/90-state/program-state.md`
6. `docs/90-state/artifact-index.md`
7. `README.md`
8. `docs/60-migration/README.md`
9. `docs/70-implementation/README.md`
10. `CONTINUITY-NEXT-STEPS.md`

Confirm all of the following:

- G5 is an unconditional PASS;
- scenarios M1 through M16 are all recorded as PASS;
- no blocking contradiction is recorded;
- the accepted path contains seven cumulative independently valuable slices;
- current and target mechanisms never have unqualified dual authority;
- existing current Runs drain under current rules and new target Runs use target Repository Infrastructure;
- active Runs are never transformed in place;
- external systems remain authoritative for their objects;
- Nestfolio-specific behavior remains in its project binding;
- MI-001 is the only authorized next iteration and requires a contract before execution;
- no migration slice was executed;
- no implementation artifact changed.

## 2. Verify the exact MA-001 changed-file boundary

From the root of the real Git repository, run:

```bash
git status --short
git diff --check
sha256sum sessions/MA-001-migration-architecture/prompt.md
```

The prompt hash must be:

```text
a6531bd13408e87f5c48fc06dc275bfea785949b5ad339a89da975b9791feb3b
```

The complete changed-file set must be exactly:

```text
README.md
CONTINUITY-NEXT-STEPS.md
decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md
docs/60-migration/README.md
docs/60-migration/migration-plan.md
docs/70-implementation/README.md
docs/90-state/artifact-index.md
docs/90-state/program-state.md
sessions/MA-001-migration-architecture/context-pack.yaml
sessions/MA-001-migration-architecture/session-handoff.md
```

Verify it with:

```bash
{
  git diff --name-only
  git ls-files --others --exclude-standard
} | sort -u
```

Do not commit if any file outside that list changed.

Also confirm that these canonical owners are unchanged:

```text
docs/10-product/product-foundation.md
docs/20-current-system/current-runtime-map.md
docs/30-target-architecture/target-architecture.md
docs/40-product-experience/product-experience.md
docs/50-validation/product-falsification-report.md
docs/70-implementation/vs-001-resumable-agent-work-session.md
docs/70-implementation/vs-001a-claude-code-session-confirmation.md
sessions/MA-001-migration-architecture/prompt.md
```

## 3. Commit and push MA-001 closure

Run:

```bash
git add \
  README.md \
  CONTINUITY-NEXT-STEPS.md \
  decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md \
  docs/60-migration/README.md \
  docs/60-migration/migration-plan.md \
  docs/70-implementation/README.md \
  docs/90-state/artifact-index.md \
  docs/90-state/program-state.md \
  sessions/MA-001-migration-architecture/context-pack.yaml \
  sessions/MA-001-migration-architecture/session-handoff.md

git diff --cached --check
git diff --cached
git commit -m "Complete MA-001 migration architecture"
git push
```

Do not stage or commit `sessions/MA-001-migration-architecture/prompt.md`; it must remain byte-identical to the executed instruction.

## 4. Create the repository ZIP for MI-001 contract authoring

After commit and push succeed, create a clean archive from committed `HEAD`:

```bash
git archive \
  --format=zip \
  --output=../continuity-lab-ma001-complete.zip \
  HEAD
```

Upload exactly:

```text
continuity-lab-ma001-complete.zip
```

Do not upload a working-tree ZIP with uncommitted changes. Do not upload Nestfolio during contract authoring.

## 5. Open a fresh conversation and author the MI-001 contract

Open a new ChatGPT conversation. Upload only `continuity-lab-ma001-complete.zip`. Paste the following prompt exactly.

```text
# Prepare the new MI-001 session contract

Use the uploaded `continuity-lab` repository as the only canonical project memory. Do not rely on previous chats.

Do not use, inspect, or request the Nestfolio repository. This is a contract-authoring operation only.

Do not execute MI-001. Do not create or modify implementation code, tests, schemas, adapters, stores, Skills, hooks, Pack assets, Console code, or Nestfolio artifacts.

## 1. Verify authorization before modifying files

Read `docs/90-state/program-state.md` first. Stop without modifying files unless it records all of the following consistently:

- MA-001 is complete with unconditional PASS and G5 is passed and valid;
- `docs/60-migration/migration-plan.md` is accepted and canonical;
- `DR-0023` is validated and active;
- MI-001 — Procedure-First Adoption is the sole authorized next iteration;
- MI-001 has status `authorized-contract-required`, is not contracted, and has not executed;
- MI-002 through MI-007, broader implementation, later vertical slices, Console work, universal integrations, hosted-service work, commercial-control-plane work, and broad Nestfolio migration remain blocked.

If any condition is inconsistent, apply the canonical contradiction rule: stop without modifying files, report the inconsistency, and identify the owning artifacts.

## 2. Read in this exact order

1. `docs/60-migration/migration-plan.md`
2. `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`
3. `docs/00-governance/product-development-operating-model.md`
4. `docs/00-governance/artifact-governance.md`
5. `docs/00-governance/design-levels.md`
6. `docs/10-product/product-foundation.md`
7. `docs/20-current-system/current-runtime-map.md`
8. `docs/30-target-architecture/target-architecture.md`
9. `docs/40-product-experience/product-experience.md`
10. `docs/70-implementation/vs-001-resumable-agent-work-session.md`
11. `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`
12. `docs/90-state/program-state.md`
13. `docs/90-state/artifact-index.md`
14. Decision Records `DR-0012` through `DR-0023`, in numeric order
15. `sessions/MA-001-migration-architecture/session-handoff.md`

Do not use TA-001 as an active baseline. Do not infer implementation details from prior chats or hidden executor state.

## 3. Author the MI-001 contract only

Create a complete, self-contained, executable contract for **MI-001 — Procedure-First Adoption**, bounded exactly to PX-001 Level 1:

> repository instructions and one useful Skills-only Procedure with its minimal Pack/project binding and exact asset lock, but no Work or Run state.

The contract must select one concrete high-value Procedure and repository entry point justified by the accepted Migration Plan and current evidence. It must define:

- the independent user value and ten-minute adoption path;
- actors, preconditions, entry point, inputs, outputs, and visible result;
- active Level 1 guarantees, including the single Procedure Pack/project binding and exact asset lock, and explicitly absent Level 2–6 guarantees;
- current capability disposition and target component ownership;
- Framework Core, Application Services, Repository Infrastructure, Claude Code Adapter, the minimal single-Procedure Pack, and project-binding participation or explicit non-participation;
- compatibility with existing repository instructions, current content, current checks, the current asset source, and Claude Code behavior;
- exact authority boundaries for the Procedure, Pack manifest, project binding, executor asset, and Pack lock, plus confirmation that no canonical Work, Context Pack, Run, Assurance Evidence, Decision, or Lesson state is introduced;
- required success and failure scenarios;
- criterion-linked validation and required Evidence;
- rollback, removal, disable, abandonment, and history behavior;
- the exact repository and implementation scope that a later MI-001 execution may modify;
- explicit exclusions preventing reusable multi-Procedure Pack composition, Level 2 compatibility/conflict machinery, Work/Scope state, Context Packs, resumable Runs, Assurance, governed Learning, Console work, broad migration, and unrelated Nestfolio changes;
- an unconditional completion decision for MI-001 execution;
- exactly one evidence-justified next iteration to be selected only after MI-001 execution.

The contract must not pre-authorize MI-002 or any implementation beyond MI-001.

## 4. Create or update only these files

- `sessions/MI-001-procedure-first-adoption/context-pack.yaml`
- `sessions/MI-001-procedure-first-adoption/prompt.md`
- `sessions/MI-001-procedure-first-adoption/session-handoff.md` as a clearly marked prepared, unused placeholder
- `docs/90-state/program-state.md`
- `docs/90-state/artifact-index.md`
- `README.md`
- `CONTINUITY-NEXT-STEPS.md`
- `docs/60-migration/README.md`
- `docs/70-implementation/README.md`

Do not modify any other file. Do not create a Decision Record merely to prepare the contract.

## 5. Contract integrity rules

- `context-pack.yaml` must have status `authorized-not-started` and a pending result;
- `prompt.md` must contain the exact complete instruction a fresh isolated executor needs to run MI-001;
- `session-handoff.md` must state clearly that it is an unused placeholder and contain no fabricated result;
- Program State must distinguish contract authorization from execution authorization;
- navigation must give exact review, commit, ZIP, and fresh-session execution instructions;
- MI-001 remains the sole authorized iteration;
- all later work remains blocked.

## 6. Return

Return a ZIP containing the complete updated `continuity-lab` repository.

Also return the exact changed-file manifest and state explicitly:

- that this was contract authoring only;
- that MI-001 was not executed;
- that no implementation artifact was created or modified;
- that MI-001 remains the sole authorized iteration;
- all work that remains blocked.
```

## 6. After MI-001 contract authoring

Review the returned contract and changed-file manifest. Commit and push it. Create a clean ZIP from that committed `HEAD`. Then open another fresh conversation and paste the complete unmodified `sessions/MI-001-procedure-first-adoption/prompt.md` to execute MI-001.

Do not execute MI-001 in the contract-authoring conversation.

## Work that remains blocked

- MI-001 execution until its reviewed contract is committed and separately invoked;
- MI-002 through MI-007 until predecessor Evidence and explicit authorization;
- broader implementation and later vertical slices;
- reproduction or migration of the whole current runtime;
- local Console implementation;
- universal executor or platform integrations;
- hosted-service, RBAC, analytics, billing, commercial packaging, or commercial-control-plane work;
- broad or unrelated Nestfolio migration;
- promotion of Nestfolio-specific behavior into Framework Core without repeated cross-project evidence and a new Decision;
- automatic Observation or Lesson promotion.

## Permanent rules

- Chat, transcripts, CLI state, Console state, provider cache, and hidden executor state are not canonical.
- Review every generated Git diff before committing.
- Preserve Product Foundation, Current Runtime Map, TA-002, PX-001, accepted validation reports, and Decisions unless a contradiction is raised explicitly.
- Keep Goal and Guard separate.
- Keep Nestfolio-specific behavior outside Framework Core.
- Require criterion-linked Evidence or an explicit waiver for completion.
- Never promote an Observation or Lesson automatically.
- Authorize exactly one next iteration only after the current iteration's unconditional result.
