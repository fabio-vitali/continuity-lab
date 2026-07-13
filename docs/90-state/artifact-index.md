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
| `README.md` | Ratified | Program | Repository entry point and current authorized iteration |
| `docs/00-governance/product-development-operating-model.md` | Ratified | Program | Governs iterations and phase gates |
| `docs/00-governance/artifact-governance.md` | Ratified | Program | Governs canonical files and changes |
| `docs/00-governance/design-levels.md` | Ratified | Program | Separates levels of design |
| `docs/10-product/product-foundation.md` | Provisional | Product | Owns revised product thesis, boundary, concepts, constraints, adopter, and wedge |
| `docs/20-current-system/README.md` | Ratified | Current-system analysis | Defines current-system artifact scope |
| `docs/20-current-system/current-runtime-map.md` | Validated | Current-system analysis | Maps the exact Nestfolio runtime revision and records G2-passing evidence |
| `docs/30-target-architecture/README.md` | Ratified | Architecture | Points to the validated target architecture and G3 result |
| `docs/30-target-architecture/target-architecture.md` | Validated | Architecture | Owns bounded contexts, state and lifecycle authority, Kernel, providers, Packs, persistence, Context Formation, failure behavior, dependencies, and current-to-target mapping |
| `docs/40-product-experience/README.md` | Ratified | Product experience | Records PX-001 as the sole authorized next iteration and defines L4 scope |
| `docs/50-validation/product-falsification-plan.md` | Ratified | Validation | Governs PF-001 |
| `docs/50-validation/product-falsification-report.md` | Validated | Validation | Records PF-001 evidence, scenario tests, kill criteria, and verdict |
| `docs/60-migration/README.md` | Ratified | Migration | Defines migration artifact scope; blocked pending G4 |
| `docs/70-implementation/README.md` | Ratified | Implementation | Defines implementation artifact scope; blocked |
| `docs/90-state/program-state.md` | Ratified | Program | Records G1-G3 history, G3 pass, architecture state, and PX-001 authorization |
| `docs/90-state/artifact-index.md` | Ratified | Program | Index of canonical artifacts and statuses |
| `sources/nestfolio-runtime.yaml` | Ratified | Sources | Binds implementation evidence to exact revision `3aa8f4773955541415f615abd80a0a9702bcb416` and reviewed archive hash |
| `decisions/DR-0001-separate-canonical-design-repository.md` | Ratified | Program | Repository separation |
| `decisions/DR-0002-artifact-first-context-isolation.md` | Ratified | Program | Context and canonical-memory protocol |
| `decisions/DR-0003-falsification-before-architecture.md` | Ratified | Program | Phase ordering |
| `decisions/DR-0004-do-not-establish-engineering-continuity-category.md` | Validated | Product | Rejects current category claim and retains only an internal domain label |
| `decisions/DR-0005-separate-goal-and-guard.md` | Validated | Product | Separates Goal and Guard and rejects Commitment as a shared entity |
| `decisions/DR-0006-narrow-product-boundary.md` | Validated | Product | Narrows the product wedge and rejects mandatory feature completeness |
| `decisions/DR-0007-narrow-continuity-kernel.md` | Validated | Architecture | Defines the narrow dependency-free Kernel and excluded concepts |
| `decisions/DR-0008-local-first-artifact-authority.md` | Validated | Architecture | Makes repository artifacts authoritative and journal/ledger state secondary |
| `decisions/DR-0009-typed-read-oriented-providers.md` | Validated | Architecture | Defines typed read-oriented provider boundaries and excludes initial external writes |
| `decisions/DR-0010-separate-pack-definitions-from-context-packs.md` | Validated | Architecture | Separates reusable Pack Definitions from objective-specific Context Packs |
| `decisions/DR-0011-explicit-context-formation-pipeline.md` | Validated | Architecture | Defines explicit reproducible Context Formation stages and limitations |
| `sessions/PF-001-product-falsification/context-pack.yaml` | Ratified | Session | Defines PF-001 inputs, exclusions, methods, and output contract |
| `sessions/PF-001-product-falsification/prompt.md` | Ratified | Session | Preserves the executable PF-001 instruction |
| `sessions/PF-001-product-falsification/session-handoff.md` | Ratified | Session | Closes PF-001 and prepares RI-001 |
| `sessions/RI-001-runtime-inventory/context-pack.yaml` | Ratified | Session | Defines RI-001 inputs, constraints, methods, and completion criteria |
| `sessions/RI-001-runtime-inventory/prompt.md` | Ratified | Session | Preserves the executable RI-001 instruction |
| `sessions/RI-001-runtime-inventory/session-handoff.md` | Validated | Session | Closes RI-001, records G2 pass, and authorizes TA-001 only |
| `sessions/TA-001-target-architecture/context-pack.yaml` | Ratified | Session | Defines TA-001 inputs, scope, methods, and output contract |
| `sessions/TA-001-target-architecture/prompt.md` | Ratified | Session | Preserves the executable TA-001 instruction |
| `sessions/TA-001-target-architecture/session-handoff.md` | Validated | Session | Closes TA-001, records G3 pass, and prepares PX-001 |
| `sessions/PX-001-product-experience/context-pack.yaml` | Ratified | Session | Defines PX-001 inputs, scenarios, constraints, and completion criteria |
| `sessions/PX-001-product-experience/prompt.md` | Ratified | Session | Preserves the executable PX-001 instruction |
| `sessions/PX-001-product-experience/session-handoff.md` | Draft | Session | Placeholder to be completed by PX-001 |
