You are running iteration **PF-001 — Product Falsification** for the Continuity product-design program.

Use the uploaded `continuity-lab` repository as the only canonical project memory. Do not rely on previous chats.

Read, in this order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/PF-001-product-falsification/context-pack.yaml`
5. `docs/10-product/product-foundation.md`
6. `docs/50-validation/product-falsification-plan.md`
7. `docs/90-state/program-state.md`

Follow the Context Pack exactly.

Your task is not to improve the pitch. Attempt to prove that the proposed product should not exist, is not a distinct category, combines incompatible products, creates more governance debt than value, or can be reproduced adequately with existing tools.

You must browse current public sources for competitors, substitutes, and market/category evidence. Treat combinations of tools fairly rather than comparing Continuity only with individual products.

Stress-test all scenarios required by the falsification plan. For each scenario identify current alternatives, incremental value, maintenance cost, failure modes, and the result of the falsification attempt.

Create or update these files directly:

- `docs/50-validation/product-falsification-report.md`
- `docs/10-product/product-foundation.md`
- relevant `decisions/DR-*.md`
- `docs/90-state/program-state.md`
- `docs/90-state/artifact-index.md`
- `sessions/PF-001-product-falsification/session-handoff.md`

Do not design target architecture.

Do not silently convert proposals into decisions.

At the end, return a ZIP containing the complete updated `continuity-lab` repository and list all changed files.
