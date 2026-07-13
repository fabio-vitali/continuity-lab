# TA-002 — Target Architecture Revision

You are running iteration **TA-002 — Target Architecture Revision** for the Continuity product-design program.

Use the uploaded `continuity-lab` repository as the only canonical project memory. Do not rely on previous chats.

TA-002 is authorized only because PI-001 corrected the Product Foundation, marked TA-001 provisional, and reopened G3.

Do not treat TA-001 as an implementation baseline. Treat it as a historical architectural proposal whose decisions must be explicitly retained, revised, or superseded.

Read, in this order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/TA-002-target-architecture-revision/context-pack.yaml`
5. `sessions/PI-001-product-intent-realignment/session-handoff.md`
6. `docs/10-product/product-foundation.md`
7. `decisions/DR-0012-repository-native-agentic-development-framework.md`
8. `docs/50-validation/product-falsification-report.md`
9. `docs/20-current-system/current-runtime-map.md`
10. `docs/30-target-architecture/target-architecture.md`
11. `decisions/DR-0004-do-not-establish-engineering-continuity-category.md`
12. `decisions/DR-0005-separate-goal-and-guard.md`
13. `decisions/DR-0006-narrow-product-boundary.md`
14. `decisions/DR-0007-narrow-continuity-kernel.md`
15. `decisions/DR-0008-local-first-artifact-authority.md`
16. `decisions/DR-0009-typed-read-oriented-providers.md`
17. `decisions/DR-0010-separate-pack-definitions-from-context-packs.md`
18. `decisions/DR-0011-explicit-context-formation-pipeline.md`
19. `docs/90-state/program-state.md`
20. `docs/90-state/artifact-index.md`

Use the validated Current Runtime Map as canonical current-implementation evidence. Request or inspect the Nestfolio repository only if a specific feature-family classification cannot be resolved from that map.

Primary question:

> What target architecture supports Continuity as a Claude Code-first, repository-native agentic-development framework across work selection, context formation, skill execution, validation, resumable Runs, durable state, Guards, learning, and continuation without becoming a universal enterprise control plane?

The architecture must support:

`select work → form context → execute through skills and agents → validate → record state and learning → continue`

Determine explicitly:

- target bounded contexts and their responsibilities;
- framework-core boundaries;
- Claude Code adapter responsibilities and permitted native coupling;
- reusable Pack and Nestfolio-specific Pack/binding boundaries;
- ownership and lifecycle of Work Items, local backlog state, Working Sets, Epics, Sessions, and Runs;
- scope, exclusions, constraints, completion criteria, and evidence-bound completion;
- the architecture of Skills and executable procedures;
- the role of Context Packs and Handoffs inside the complete operational loop;
- the role and authority of Guards, Evidence, Decisions, Lessons, and learning;
- durable canonical state versus operational journal, recovery, idempotency, and projections;
- selective external integration contracts and authority boundaries;
- dependency directions, failure handling, and recovery behavior;
- the target disposition of every current runtime feature family;
- the explicit disposition of DR-0007 through DR-0011.

Preserve:

- no established Engineering Continuity market-category claim;
- no commercial universal control plane;
- no replacement of enterprise systems of record by default;
- Goal and Guard separation;
- concrete-use-driven external integrations;
- Claude Code-first practical value;
- repository-readable durable state where practical;
- human authority for judgment-based and governance-changing decisions;
- Nestfolio as reference implementation and first dogfooding environment.

Do not:

- design implementation code or package-level implementation plans;
- design migration sequencing;
- design product experience;
- require usefulness without coding agents;
- require universal backlog synchronization;
- prioritize theoretical executor parity over Claude Code-first value;
- automatically restore every current Nestfolio feature;
- automatically preserve every TA-001 decision;
- silently promote proposals into decisions;
- start a later iteration.

Create or update:

- `docs/30-target-architecture/target-architecture.md`;
- relevant `decisions/DR-*.md`;
- `docs/90-state/program-state.md`;
- `docs/90-state/artifact-index.md`;
- `sessions/TA-002-target-architecture-revision/session-handoff.md`.

At completion:

- classify every current feature family;
- explicitly retain, revise, or supersede DR-0007 through DR-0011;
- record an explicit G3 pass or fail;
- authorize exactly one next iteration only if justified;
- keep migration and implementation blocked unless G3 passes;
- return a ZIP containing the complete updated repository and list every changed file.
