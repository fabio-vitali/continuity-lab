# Current Execution Instructions

## 1. Review and commit the PX-001 contract

Review the complete diff for the contract-authoring operation and confirm that:

- `sessions/PX-001-product-experience/context-pack.yaml` is the active 2026-07-14 contract;
- `sessions/PX-001-product-experience/prompt.md` is the active executable instruction;
- the old TA-001-derived context pack and prompt are preserved only by the real repository Git history, not duplicated in the working tree;
- `sessions/PX-001-product-experience/session-handoff.md` remains the superseded unused placeholder and will be replaced only when PX-001 executes;
- Program State, Artifact Index, `README.md`, and `docs/40-product-experience/README.md` consistently record PX-001 as contracted but not executed;
- no Product Foundation, Target Architecture, implementation report, or Decision Record changed;
- G4 remains pending and no later iteration is authorized.

Commit the reviewed changes in the real `continuity-lab` Git repository so the replaced contract remains recoverable through Git history.

## 2. Run only PX-001

Start a fresh AI session using:

1. the latest committed complete `continuity-lab` repository;
2. `sessions/PX-001-product-experience/context-pack.yaml`;
3. `sessions/PX-001-product-experience/prompt.md`.

Do not upload, inspect, or request Nestfolio. Do not provide prior chats. The active prompt contains the complete read order, design scope, methods, deliverables, prohibitions, completion criteria, and G4 semantics.

PX-001 must produce the Product Experience design, conceptually test all required scenarios, issue an unconditional G4 PASS or FAIL, and authorize exactly one evidence-justified next iteration.

## Still blocked

- MA-001 and all migration architecture;
- broader implementation;
- later vertical slices;
- universal executor or platform integrations;
- hosted-service or commercial-control-plane work;
- broad or unrelated Nestfolio migration.

## Permanent rules

- Chat, transcripts, UI state, and hidden executor state are not canonical.
- Review every generated Git diff before committing.
- Preserve accepted TA-002 boundaries unless a blocking contradiction is raised explicitly.
- Keep Goal and Guard separate.
- Keep Nestfolio-specific behavior outside Framework Core.
- Require criterion-linked Evidence for completion.
- Never promote an Observation or Lesson automatically.
- Authorize exactly one next iteration only after the current gate result.
