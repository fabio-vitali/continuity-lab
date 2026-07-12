You are running iteration **RI-001 — Current Runtime Inventory**.

Upload two archives:

1. the latest `continuity-lab` repository after PF-001;
2. the Nestfolio repository at the revision recorded in `sources/nestfolio-runtime.yaml`.

Use `continuity-lab` as canonical design memory and Nestfolio as canonical current-implementation evidence.

Read:

1. the operating model;
2. artifact governance;
3. design levels;
4. `sessions/RI-001-runtime-inventory/context-pack.yaml`;
5. current Product Foundation;
6. Product Falsification Report;
7. Program State;
8. the Nestfolio source manifest.

Build a factual technical map of the existing runtime. Inspect implementation and tests. Trace entry points, workflows, state transitions, dependency directions, adapters, project bindings, and failure handling.

For each feature family classify it as:

- implemented;
- partially implemented;
- documented but not implemented;
- test-only;
- absent;
- unclear.

Do not redesign, rename, simplify, or propose target bounded contexts. Record interpretations separately from observations.

Create or update:

- `docs/20-current-system/current-runtime-map.md`
- `docs/90-state/program-state.md`
- `docs/90-state/artifact-index.md`
- `sessions/RI-001-runtime-inventory/session-handoff.md`

At the end, return a ZIP containing the complete updated `continuity-lab` repository and list all changed files.
