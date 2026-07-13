# VS-001 — Resumable Agent Work Session

You are running **VS-001 — Resumable Agent Work Session**.

Use the uploaded `continuity-lab` repository as the only canonical design memory and the uploaded Nestfolio repository as the canonical implementation and dogfooding target. Do not rely on previous chats.

Read, in this order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/VS-001-resumable-agent-work-session/context-pack.yaml`
5. `docs/10-product/product-foundation.md`
6. `docs/30-target-architecture/target-architecture.md`
7. `decisions/DR-0012-repository-native-agentic-development-framework.md`
8. `decisions/DR-0013-bounded-agent-work-core.md`
9. `decisions/DR-0014-repository-local-canonical-state.md`
10. `decisions/DR-0015-concrete-integration-ports-and-claude-code-adapter.md`
11. `decisions/DR-0016-pack-manifests-procedures-and-executor-assets.md`
12. `decisions/DR-0017-govern-assurance-and-learning-promotion.md`
13. `decisions/DR-0018-validate-through-vs-001-before-broader-migration.md`
14. `docs/20-current-system/current-runtime-map.md`
15. `docs/90-state/program-state.md`
16. `docs/90-state/artifact-index.md`
17. `sessions/TA-002-target-architecture-revision/session-handoff.md`

First verify that Program State records TA-002 complete, G3 passed, and VS-001 as the sole authorized next iteration. Verify and record the exact full Nestfolio Git commit used as the implementation baseline. Do not overwrite RI-001's historical revision binding.

Implement only the minimum architecture-validation path required to prove:

```text
select work
→ form a Working Set
→ declare Scope and completion criteria
→ resolve Skills, Guards, Decisions, and context
→ start a Claude Code Run
→ record a material keyed effect
→ persist a verified Checkpoint
→ end the Session
→ resume in a fresh Session without old-chat reconstruction
→ avoid duplicate effects
→ validate
→ attach Evidence
→ update Work state
→ record a candidate Lesson without promotion
```

Use existing Nestfolio capabilities when they fit the accepted architecture and are cheaper than replacement. Place project-specific behavior in a Nestfolio Pack or binding. Do not promote current implementation structure into Framework Core automatically.

The slice must deliberately test:

- unexpected or simulated Session termination;
- stale repository or Context Pack on resume;
- missing required Evidence;
- failed validation;
- conflicting second writer or Session;
- missing or mismatched Skill asset;
- an unsafe candidate Lesson that is rejected or remains unpromoted.

Do not implement broad migration, all feature families, external writes, universal integrations, parallel fan-out, full Epic orchestration, multi-executor parity, hosted collaboration, a universal Console, or automatic Guard/Lesson promotion.

Create/update in `continuity-lab`:

- `docs/70-implementation/vs-001-resumable-agent-work-session.md`;
- relevant Decision Records only for structural discoveries;
- `docs/90-state/program-state.md`;
- `docs/90-state/artifact-index.md`;
- the complete VS-001 session directory and handoff.

Modify Nestfolio only for the authorized slice and its tests/dogfood artifacts.

At completion:

- map observable Evidence to every VS-001 acceptance criterion;
- record exact baseline/result revisions and test environment;
- set VS-001 to unconditional PASS or FAIL;
- authorize exactly one next iteration based on evidence;
- keep all unrelated work blocked;
- return complete updated repository ZIPs or explicitly scoped patches and list every changed file.
