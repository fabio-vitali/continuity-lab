---
artifact_id: DR-0010
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# DR-0010 — Separate Pack Definitions from Context Packs

## Context

The word “Pack” can refer either to reusable installation content or to the concrete context formed for one objective. Collapsing them would mix reusable recipes and validators with live task-specific state and make reproducibility, versioning, and authority unclear.

## Decision

Use two distinct concepts:

- **Pack Definition** — a reusable, versioned, declarative package containing formation recipes, source selectors, continuity validators, templates, provider capability requirements, permissions, compatibility, and conflict rules.
- **Context Pack** — a concrete, versioned continuation artifact formed for one bounded objective from authoritative sources, explicit choices, exclusions, and a locked set of Pack Definitions.

Pack composition is explicit and digest-locked. Conflicts produce diagnostics; there is no silent last-write-wins behavior.

Pack Definitions may not:

- contain live work or copied authoritative state;
- redefine Kernel lifecycle or authority semantics;
- silently execute arbitrary code;
- weaken mandatory higher-trust validation rules.

Executable integrations are separately installed providers with declared capabilities and permissions.

## Status

Validated, not ratified.

## Supporting evidence

- starter-pack and content-ring observations in `docs/20-current-system/current-runtime-map.md`;
- adoption-wedge and low-maintenance constraints in `docs/10-product/product-foundation.md`;
- Pack model in `docs/30-target-architecture/target-architecture.md`.

## Alternatives considered

### Use “Pack” only for concrete Context Packs

Rejected because reusable recipes and validators still require a versioned distribution model.

### Make Packs executable plugins

Rejected as the default because arbitrary code weakens trust, portability, and explainability.

### Copy provider data into reusable Packs

Rejected because it creates stale duplicate authority.

## Rejected alternatives

- implicit Pack activation;
- undocumented workspace overrides;
- content-based last-write-wins conflicts;
- using starter Packs to recreate the current generic Guard registry.

## Risks

- Two similarly named concepts may confuse users.
- Declarative Packs may be insufficient for some integrations.
- Pack distribution and trust can become a product of its own.

## Validation requirements

- Product experience must make the distinction understandable.
- A formation trace must reproduce the exact Pack lock and overrides.
- Pack conflict and compatibility diagnostics must be deterministic.

## Consequences

- Context Packs carry a Pack lock and Formation Trace.
- Pack management belongs to Workspace and Packs, while Context Pack lifecycle belongs to Context Formation.
- Final naming may change at L4 without changing the architectural separation.

## Supersedes

None.

## Superseded by

None.
