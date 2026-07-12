You are running iteration **TA-001 — Target Architecture**.

This iteration is authorized only if Program State records that G1 and G2 passed.

Upload the latest `continuity-lab` repository. Upload the Nestfolio repository only if targeted source inspection is necessary; prefer the canonical Current Runtime Map over rereading the whole repository.

Read the governance artifacts, then:

1. `sessions/TA-001-target-architecture/context-pack.yaml`
2. the validated Product Foundation;
3. the Product Falsification Report;
4. the Current Runtime Map;
5. Program State and relevant Decision Records.

Design the target architecture without silently changing the Product Foundation.

The architecture must define:

- bounded contexts;
- owned entities and state;
- lifecycle ownership;
- commands, events, and transition authority;
- kernel boundary;
- first-party product modules;
- provider contracts;
- Pack model;
- local-first persistence;
- event-ledger role;
- Context Formation subsystem;
- failure and recovery behavior;
- dependency rules;
- placement of planner, worker, orchestrator, journal, assurance, trust, learning, and console;
- complete current-to-target mapping.

Stress-test the architecture against the scenarios retained by PF-001.

Create or update:

- `docs/30-target-architecture/target-architecture.md`
- relevant `decisions/DR-*.md`
- `docs/90-state/program-state.md`
- `docs/90-state/artifact-index.md`
- `sessions/TA-001-target-architecture/session-handoff.md`

Do not produce implementation code or a detailed migration plan.

At the end, return a ZIP containing the complete updated `continuity-lab` repository and list all changed files.
