# PI-001 — Product Intent Realignment

You are running iteration **PI-001 — Product Intent Realignment** for the Continuity product-design program.

Use the uploaded `continuity-lab` repository as the only canonical project memory. Do not rely on previous chats.

This iteration is required because Product Falsification and the subsequent Target Architecture were based on an incorrectly framed product objective.

The actual stakeholder intent is:

* Continuity is a practical framework supporting coding agents working on medium-to-complex enterprise repositories.
* Its first and primary executor is Claude Code.
* It must help a developer or team use Claude Code across long-running development work without losing tasks, scope, decisions, constraints, evidence, learned procedures, or session state.
* Its practical evolution path is `Claude Code → skills → backlog and work orchestration → resumable execution → guards and learning`.
* The current objective is not to create a standalone commercial product, establish a new market category, support agentless adoption, or integrate universally with every engineering platform.
* Nestfolio is the reference implementation and first dogfooding environment.
* Practical capabilities may be implemented directly when they solve real agentic-development problems.
* Project-specific behavior may remain in a Nestfolio-specific Pack or binding rather than entering the universal framework core.

Read, in this order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `docs/10-product/product-foundation.md`
5. `docs/50-validation/product-falsification-report.md`
6. `docs/20-current-system/current-runtime-map.md`
7. `docs/30-target-architecture/target-architecture.md`
8. all current `decisions/DR-*.md`
9. `docs/90-state/program-state.md`
10. `docs/90-state/artifact-index.md`
11. the latest TA-001 session handoff

Primary question:

> What product are we actually building, for whom, and according to which success criteria, when Continuity is a repository-native framework for effective and continuous coding-agent work rather than a commercial universal control plane?

Determine explicitly:

* the primary user and operating environment;
* whether using a coding agent is a product premise;
* the meaning of Claude Code-first without unnecessarily coupling canonical artifacts to Claude Code;
* the role of skills and executable procedures;
* whether Continuity may own repository-local agent work state;
* the role of backlog items, working sets, epics, sessions, Runs, scope, and completion criteria;
* the role of Context Packs and Handoffs within the larger framework;
* the role of Guards, Evidence, Decisions, Lessons, and learning;
* the relationship between framework core, agent adapters, reusable Packs, and Nestfolio-specific behavior;
* which PF-001 conclusions remain valid;
* which parts of DR-0006 must be superseded;
* which constraints created by the commercial/control-plane framing must be removed;
* concrete success criteria based on sustained Nestfolio dogfooding.

The corrected product direction must support this operational loop:

`select work → form context → execute through skills and agents → validate → record state and learning → continue`

Preserve these conclusions unless contradicted by canonical evidence:

* Continuity must not claim an established “Engineering Continuity” market category.
* Continuity must not become a replacement for enterprise systems of record.
* Goal and Guard remain separate concepts.
* External integrations must be implemented only when required by concrete usage.
* Context Packs and Handoffs remain important capabilities but do not constitute the complete product.

Create or update:

* `docs/10-product/product-foundation.md`
* `docs/50-validation/product-falsification-report.md`
* one or more relevant `decisions/DR-*.md`
* `docs/30-target-architecture/target-architecture.md`
* `docs/90-state/program-state.md`
* `docs/90-state/artifact-index.md`
* `sessions/PI-001-product-intent-realignment/context-pack.yaml`
* `sessions/PI-001-product-intent-realignment/prompt.md`
* `sessions/PI-001-product-intent-realignment/session-handoff.md`

For `docs/30-target-architecture/target-architecture.md`, only:

* mark TA-001 as provisional;
* state that it was derived from a superseded product interpretation;
* declare that it is not authorized as an implementation baseline;
* require revision through TA-002.

Do not redesign the architecture during PI-001.

Create a Decision Record that:

* reframes Continuity as a repository-native agentic-development framework;
* supersedes the overly restrictive parts of DR-0006;
* preserves PF-001 as valid evidence against the commercial universal-control-plane hypothesis;
* records that the narrow Context Pack/Handoff wedge is insufficient as the complete product definition.

Program State must:

* preserve RI-001 and G2 as valid;
* record that the previous G1 interpretation has been revised;
* reopen G3 because the Product Foundation changed;
* mark TA-001 as provisional;
* authorize exactly one next iteration: `TA-002 — Target Architecture Revision`;
* block migration planning and implementation until TA-002 is complete.

Do not:

* design implementation code;
* design a commercial product;
* require usefulness without coding agents;
* require universal backlog integrations;
* prioritize theoretical executor portability over current practical value;
* silently promote proposals into decisions;
* delete historical falsification or architecture evidence;
* automatically restore every existing Nestfolio feature without classifying its role;
* start TA-002.

At the end, return a ZIP containing the complete updated `continuity-lab` repository and list every changed file.
