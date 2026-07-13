# Superseded — Do Not Run

This PX-001 prompt was prepared from TA-001. PI-001 made TA-001 provisional and reopened G3. The sole authorized next iteration is TA-002. The original prompt is retained below as historical prepared material.

---

You are running iteration **PX-001 — Product Experience**.

This iteration is authorized only if Program State records that G1, G2, and G3 passed.

Upload the latest `continuity-lab` repository. Do not upload Nestfolio unless a narrow current-experience fact cannot be resolved from the canonical artifacts.

Read the governance artifacts, then:

1. `sessions/PX-001-product-experience/context-pack.yaml`
2. the validated Product Foundation;
3. the validated Target Architecture;
4. the Product Falsification Report;
5. Program State;
6. Decision Records DR-0004 through DR-0011;
7. the TA-001 session handoff.

Design the product experience without silently changing the Product Foundation or Target Architecture.

Define:

- onboarding and ten-minute first value;
- Context Pack formation, validation, authorization, export, expiration, and reformation workflows;
- Handoff creation, validation, publication, successor use, and takeover validation;
- progressive disclosure of authority, scope, exclusions, source selection, evidence, uncertainty, contradictions, and pending decisions;
- deterministic diagnostic versus judgment versus human-decision UX;
- executor switching and human-only workflows;
- provider failure, stale state, conflicting authority, interruption, and recovery journeys;
- bounded CLI responsibilities;
- whether an initial local Console is required and, if so, its non-authoritative role;
- progressive adoption that does not require migration of backlog, CI, Guards, or agent runtime.

Stress-test the experience against every scenario in the Context Pack and the retained PF-001 scenarios. Keep the first-use target at ten minutes for either a useful Context Pack/Handoff or a useful diagnostic.

Create or update:

- `docs/40-product-experience/product-experience.md`
- relevant `decisions/DR-*.md`
- `docs/90-state/program-state.md`
- `docs/90-state/artifact-index.md`
- `sessions/PX-001-product-experience/session-handoff.md`

Do not produce implementation code or a detailed migration plan.

At the end, return a ZIP containing the complete updated `continuity-lab` repository and list all changed files.
