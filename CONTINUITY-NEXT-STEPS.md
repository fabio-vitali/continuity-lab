# Current Execution Instructions

## 1. Review and commit the PX-001 result

Review the complete diff and confirm that:

- `docs/40-product-experience/product-experience.md` contains the complete accepted L4 design;
- G4 is an unconditional PASS;
- all twenty-one required scenarios and the TA-002 conformance matrix are present;
- `DR-0019` through `DR-0022` record the durable Product Experience and program-sequence decisions;
- the active PX-001 Context Pack preserves its original contract and appends `final_result`;
- the PX-001 prompt is unchanged;
- the old unused handoff placeholder has been replaced by the validated PX-001 handoff;
- Program State, Artifact Index, README files, and next-step instructions consistently authorize MA-001 only;
- no Product Foundation, Target Architecture, VS-001/VS-001A report, or implementation artifact changed;
- no migration plan or implementation artifact was created.

Commit the reviewed changes in the real `continuity-lab` Git repository.

## 2. Author the MA-001 contract

Start a fresh AI session with the latest committed complete `continuity-lab` repository.

Use `sessions/PX-001-product-experience/session-handoff.md` as the executable handoff for:

- the exact ordered inputs;
- the MA-001 primary question;
- the output contract;
- explicit exclusions;
- G5 completion criteria.

Create a new active session directory:

```text
sessions/MA-001-migration-architecture/
  context-pack.yaml
  prompt.md
  session-handoff.md
```

The contract-authoring operation must verify that PX-001 is complete, G4 is valid, MA-001 is the sole authorized next iteration, and all implementation remains blocked. It must not execute MA-001 or create `docs/60-migration/migration-plan.md` yet.

## 3. Run only the reviewed MA-001 contract

After the contract is reviewed and committed, execute MA-001 in a new isolated session.

MA-001 is L5 design only. It must produce migration architecture, issue unconditional G5 PASS or FAIL, and authorize exactly one evidence-justified next iteration.

## Still blocked

- migration implementation;
- broader implementation;
- later vertical slices;
- local Console implementation;
- universal executor or platform integrations;
- hosted-service or commercial-control-plane work;
- broad or unrelated Nestfolio migration.

## Permanent rules

- Chat, transcripts, CLI state, Console state, and hidden executor state are not canonical.
- Review every generated Git diff before committing.
- Preserve accepted TA-002 and PX-001 boundaries unless a contradiction is raised explicitly.
- Keep Goal and Guard separate.
- Keep Nestfolio-specific behavior outside Framework Core.
- Require criterion-linked Evidence or an explicit waiver for completion.
- Never promote an Observation or Lesson automatically.
- Authorize exactly one next iteration only after the current gate result.
