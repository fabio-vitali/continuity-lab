---
artifact_id: STATE-ARTIFACT-INDEX
status: ratified
owner: program
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Artifact Index

| Artifact | Status | Owner | Role |
|---|---|---|---|
| `README.md` | Ratified | Program | Repository entry point; records VS-001A PASS, G6 passed, and PX-001-only authorization |
| `CONTINUITY-NEXT-STEPS.md` | Ratified | Program | Exact VS-001A review and PX-001 contract-authoring instructions |
| `docs/00-governance/product-development-operating-model.md` | Ratified | Program | Governs iterations and phase gates |
| `docs/00-governance/artifact-governance.md` | Ratified | Program | Governs canonical files and changes |
| `docs/00-governance/design-levels.md` | Ratified | Program | Separates levels of design |
| `docs/10-product/product-foundation.md` | Provisional | Product | Owns corrected repository-native agentic-development product direction and dogfooding success criteria |
| `docs/20-current-system/README.md` | Ratified | Current-system analysis | Defines current-system artifact scope |
| `docs/20-current-system/current-runtime-map.md` | Validated | Current-system analysis | Maps exact Nestfolio runtime revision; remains valid G2 evidence |
| `docs/30-target-architecture/README.md` | Ratified | Architecture | Identifies TA-002 architecture as active G3 baseline |
| `docs/30-target-architecture/target-architecture.md` | Validated | Architecture | Accepted TA-002 architecture, salvage matrix, current-feature classification, state/workflow/recovery model, and VS-001 definition |
| `docs/40-product-experience/README.md` | Ratified | Product experience | Records PX-001 as the sole authorized next iteration, requiring a new session contract |
| `docs/50-validation/product-falsification-plan.md` | Ratified | Validation | Governs PF-001 |
| `docs/50-validation/product-falsification-report.md` | Validated | Validation | Preserves PF-001 evidence and PI-001 correction |
| `docs/60-migration/README.md` | Ratified | Migration | Records migration as blocked until after VS-001A evidence and later authorization |
| `docs/70-implementation/README.md` | Ratified | Implementation | Records VS-001 historical FAIL and VS-001A PASS; no further implementation slice authorized |
| `docs/70-implementation/vs-001-resumable-agent-work-session.md` | Validated | Implementation | Maps all VS-001 evidence, records strict FAIL, revisions, limitations, and sole next iteration (historical) |
| `docs/70-implementation/vs-001a-claude-code-session-confirmation.md` | Validated | Implementation | Maps all VS-001A executor-provenance evidence, records PASS, exact revisions, and the G6 PASS rationale |
| `docs/90-state/program-state.md` | Ratified | Program | Records VS-001A PASS, G6 passed, preserved VS-001 historical FAIL, and PX-001-only authorization |
| `docs/90-state/artifact-index.md` | Ratified | Program | Index of canonical artifacts and statuses |
| `sources/nestfolio-runtime.yaml` | Ratified | Sources | Binds RI-001 evidence to exact Nestfolio revision and archive hash |
| `decisions/DR-0001-separate-canonical-design-repository.md` | Ratified | Program | Repository separation |
| `decisions/DR-0002-artifact-first-context-isolation.md` | Ratified | Program | Context and canonical-memory protocol |
| `decisions/DR-0003-falsification-before-architecture.md` | Ratified | Program | Historical phase ordering and gate prerequisites |
| `decisions/DR-0004-do-not-establish-engineering-continuity-category.md` | Validated | Product | Rejects an established market-category claim |
| `decisions/DR-0005-separate-goal-and-guard.md` | Validated | Product | Separates Goal and Guard and rejects Commitment as a shared entity |
| `decisions/DR-0006-narrow-product-boundary.md` | Superseded | Product | Historical PF-001 boundary superseded by DR-0012 |
| `decisions/DR-0007-narrow-continuity-kernel.md` | Superseded | Architecture | Historical narrow Kernel; superseded by DR-0013 |
| `decisions/DR-0008-local-first-artifact-authority.md` | Superseded | Architecture | Historical artifact/ledger authority; superseded by DR-0014 |
| `decisions/DR-0009-typed-read-oriented-providers.md` | Superseded | Architecture | Historical read-oriented provider decision; superseded by DR-0015 |
| `decisions/DR-0010-separate-pack-definitions-from-context-packs.md` | Superseded | Architecture | Historical declarative Pack decision; superseded by DR-0016 |
| `decisions/DR-0011-explicit-context-formation-pipeline.md` | Validated | Architecture | Retained explicit reproducible Context Formation pipeline inside the complete operational loop |
| `decisions/DR-0012-repository-native-agentic-development-framework.md` | Validated | Product | Active product-boundary decision |
| `decisions/DR-0013-bounded-agent-work-core.md` | Validated | Architecture | Active Framework Core boundary with first-class Work and Run semantics |
| `decisions/DR-0014-repository-local-canonical-state.md` | Validated | Architecture | Active dual canonical storage and recovery authority decision |
| `decisions/DR-0015-concrete-integration-ports-and-claude-code-adapter.md` | Validated | Architecture | Active typed integration and Claude Code Adapter decision |
| `decisions/DR-0016-pack-manifests-procedures-and-executor-assets.md` | Validated | Architecture | Active Pack, Procedure, executor-asset, and project-binding decision |
| `decisions/DR-0017-govern-assurance-and-learning-promotion.md` | Validated | Architecture | Active Guard, Evidence, waiver, Observation, Lesson, and promotion governance decision |
| `decisions/DR-0018-validate-through-vs-001-before-broader-migration.md` | Validated | Program | Authorizes VS-001 only before broader migration or implementation |
| `sessions/PF-001-product-falsification/context-pack.yaml` | Ratified | Session | Historical PF-001 input contract |
| `sessions/PF-001-product-falsification/prompt.md` | Ratified | Session | Historical executable PF-001 instruction |
| `sessions/PF-001-product-falsification/session-handoff.md` | Ratified | Session | Historical PF-001 closure |
| `sessions/RI-001-runtime-inventory/context-pack.yaml` | Ratified | Session | Historical RI-001 input contract |
| `sessions/RI-001-runtime-inventory/prompt.md` | Ratified | Session | Historical executable RI-001 instruction |
| `sessions/RI-001-runtime-inventory/session-handoff.md` | Validated | Session | Closes RI-001 and records still-valid G2 result |
| `sessions/TA-001-target-architecture/context-pack.yaml` | Ratified | Session | Historical TA-001 input contract |
| `sessions/TA-001-target-architecture/prompt.md` | Ratified | Session | Historical executable TA-001 instruction |
| `sessions/TA-001-target-architecture/session-handoff.md` | Superseded | Session | Historical TA-001 closure and superseded G3/PX authorization |
| `sessions/PX-001-product-experience/context-pack.yaml` | Superseded | Session | Prepared PX-001 input; not authorized |
| `sessions/PX-001-product-experience/prompt.md` | Superseded | Session | Prepared PX-001 instruction; must not be run |
| `sessions/PX-001-product-experience/session-handoff.md` | Superseded | Session | Unused placeholder from superseded PX-001 plan |
| `sessions/PI-001-product-intent-realignment/context-pack.yaml` | Ratified | Session | PI-001 input contract |
| `sessions/PI-001-product-intent-realignment/prompt.md` | Ratified | Session | Executable PI-001 instruction |
| `sessions/PI-001-product-intent-realignment/session-handoff.md` | Validated | Session | Closes PI-001 and historically authorizes TA-002 |
| `sessions/TA-002-target-architecture-revision/context-pack.yaml` | Validated | Session | Completed TA-002 input/output contract and result |
| `sessions/TA-002-target-architecture-revision/prompt.md` | Ratified | Session | Preserves executable TA-002 instruction |
| `sessions/TA-002-target-architecture-revision/session-handoff.md` | Validated | Session | Closes TA-002, records G3 PASS, and authorizes VS-001 only |
| `sessions/VS-001-resumable-agent-work-session/context-pack.yaml` | Validated | Session | Completed VS-001 contract, FAIL result, revisions, and acceptance summary |
| `sessions/VS-001-resumable-agent-work-session/prompt.md` | Ratified | Session | Executable VS-001 instruction |
| `sessions/VS-001-resumable-agent-work-session/session-handoff.md` | Validated | Session | Closes VS-001 with FAIL and authorizes VS-001A only |
| `sessions/VS-001-resumable-agent-work-session/changed-files.txt` | Validated | Session | Exact continuity-lab changed-file manifest for VS-001 closure |
| `sessions/VS-001A-claude-code-session-confirmation/context-pack.yaml` | Validated | Session | Completed VS-001A contract, PASS result, exact revisions, and executor provenance |
| `sessions/VS-001A-claude-code-session-confirmation/prompt.md` | Ratified | Session | Historical executable VS-001A instruction |
| `sessions/VS-001A-claude-code-session-confirmation/session-handoff.md` | Validated | Session | Closes VS-001A with PASS, records G6 PASS, and authorizes PX-001 only |
