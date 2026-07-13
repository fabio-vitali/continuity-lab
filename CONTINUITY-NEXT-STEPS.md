# Current Execution Instructions

## 1. Review and commit TA-002

After replacing the local repository with the returned ZIP contents:

```bash
cd continuity-lab
git diff
git add .
git commit -m "TA-002 revise target architecture"
git push
```

Confirm before committing that:

- `target-architecture.md` contains the complete TA-001 salvage matrix and Current Runtime Map classification;
- Work Items, Working Sets, Sessions, Runs, Checkpoints, Context Packs, Handoffs, Guards, Evidence, Decisions, and Lessons have explicit ownership;
- Framework Core, application services, repository infrastructure, Claude Code Adapter, Packs, and Nestfolio bindings are separated;
- DR-0007 through DR-0010 are superseded by DR-0013 through DR-0016;
- DR-0011 is retained inside the complete operational loop;
- DR-0017 governs Assurance and Learning promotion;
- DR-0018 authorizes VS-001 before broader migration;
- G3 is PASS;
- VS-001 is the sole authorized next iteration;
- PX-001, migration, and broader implementation remain blocked.

## 2. Prepare the VS-001 session

Create a fresh conversation and upload:

1. the latest complete `continuity-lab` ZIP;
2. the Nestfolio repository at the exact implementation baseline you intend to use.

Use:

```text
sessions/VS-001-resumable-agent-work-session/context-pack.yaml
sessions/VS-001-resumable-agent-work-session/prompt.md
sessions/TA-002-target-architecture-revision/session-handoff.md
```

Paste the VS-001 prompt unchanged.

Before implementation begins, require the session to record the exact full Nestfolio Git commit. Do not overwrite RI-001's historical evidence binding.

## 3. Keep the slice bounded

VS-001 must prove only:

```text
select work
→ form a Working Set
→ declare Scope and completion criteria
→ resolve Skills, Guards, Decisions, and context
→ execute with Claude Code
→ checkpoint
→ end the Session
→ resume in a fresh Session
→ validate and attach Evidence
→ update Work state
→ record a candidate Lesson
```

Do not expand into broad runtime migration, all current feature families, external writes, universal integrations, multi-executor parity, hosted collaboration, full Epic orchestration, or automatic Guard/Lesson promotion.

## Still blocked

- PX-001;
- MA-001;
- broader implementation;
- unrelated Nestfolio work;
- commercial or universal-control-plane design.

## Permanent rules

- Chat and Canvas are not canonical.
- Review every generated Git diff before committing.
- Keep Goal and Guard separate.
- Keep external systems authoritative for their own objects.
- Keep hidden Claude Code state non-authoritative.
- Keep Nestfolio-specific behavior outside Framework Core.
- Require criterion-linked Evidence for completion.
- Never promote an Observation or Lesson automatically.
