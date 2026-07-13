# TA-002 — Target Architecture Revision

Run **TA-002 — Target Architecture Revision** using the uploaded `continuity-lab` repository as the only canonical project memory. Do not rely on previous chats.

TA-001 is provisional architecture derived from a superseded product interpretation. Recover everything compatible with the corrected Product Foundation, explicitly revise incompatible parts, and preserve rejected material as historical evidence.

Read, in order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/PI-001-product-intent-realignment/context-pack.yaml`
5. `docs/10-product/product-foundation.md`
6. `docs/50-validation/product-falsification-report.md`
7. `docs/20-current-system/current-runtime-map.md`
8. `docs/30-target-architecture/target-architecture.md`
9. all `decisions/DR-*.md`
10. `docs/90-state/program-state.md`
11. `docs/90-state/artifact-index.md`
12. `sessions/PI-001-product-intent-realignment/session-handoff.md`
13. the complete TA-001 session directory and handoff

Before modifying architecture, verify that Program State records PI-001 complete, RI-001/G2 valid, TA-001 provisional, G3 reopened, and TA-002 as the sole next iteration. Stop on inconsistency.

Product premise:

- Continuity is a practical repository-native framework for coding agents on medium-to-complex repositories.
- Claude Code is the first and primary executor.
- Nestfolio is the first dogfooding environment.
- The operational loop is:

```text
select work → form context → execute through skills and agents → checkpoint or resume → validate → attach evidence → update work state → record learning → continue
```

Produce:

1. an explicit TA-001 salvage matrix using only `retain`, `revise`, `move to framework core`, `move to Claude Code adapter`, `move to reusable pack`, `move to Nestfolio pack`, `defer`, or `reject`;
2. a classification of every Current Runtime Map feature family as framework, Claude Code adapter, reusable Pack, Nestfolio-specific, implementation detail to replace, deferred, or rejected;
3. explicit boundaries for Framework Core, Claude Code Adapter, Skills/Procedures, Packs/project bindings, repository-local Work, Context Formation, Execution Continuity, Assurance, and Learning;
4. allowed dependency direction between Core, application services, repository infrastructure, adapters, Packs, Nestfolio, and external systems;
5. canonical ownership, storage, mutability, lifecycle, versioning, references, concurrency, recovery, and audit for Work Item, Working Set, Scope, Run, Checkpoint, Context Pack, Handoff, Skill reference, Guard, Evidence, Decision, and Lesson;
6. ten concrete end-to-end operational workflows;
7. explicit failure and recovery semantics;
8. a complete definition, but no implementation, of `VS-001 — Resumable Agent Work Session`;
9. an unconditional G3 PASS or FAIL.

Preserve Goal/Guard separation, external authority for external objects, repository-readable durable state, human authority for judgment and governance changes, and practical Claude Code-first value.

Do not design a commercial control plane, universal integrations, agentless utility, broad migration, implementation code, or automatic learning-to-rule promotion.

Create or update:

- `docs/30-target-architecture/target-architecture.md`
- relevant `decisions/DR-*.md`
- `docs/90-state/program-state.md`
- `docs/90-state/artifact-index.md`
- `sessions/TA-002-target-architecture-revision/context-pack.yaml`
- `sessions/TA-002-target-architecture-revision/prompt.md`
- `sessions/TA-002-target-architecture-revision/session-handoff.md`

Prefer new superseding Decision Records to destructive edits of TA-001 history.

If G3 passes, mark TA-002 complete, accept the revised architecture, pass G3, authorize exactly `VS-001 — Resumable Agent Work Session`, and keep broader migration and unrelated implementation blocked.

Return a ZIP of the complete updated repository and list every changed or created file.
