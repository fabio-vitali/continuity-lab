---
artifact_id: DR-0022
status: validated
owner: program
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# DR-0022 — Authorize MA-001 After G4 PASS and Keep Implementation Blocked

## Context

The program now has:

- a corrected Product Foundation;
- validated Current Runtime evidence and G2;
- accepted TA-002 architecture and G3;
- validated bounded implementation mechanics plus genuine Claude Code executor evidence and G6;
- a complete Product Experience with a credible ten-minute path, safe failure/recovery semantics, cumulative adoption, and no blocking architecture contradiction;
- unconditional G4 PASS.

The next missing gate is G5 — Migration viability. Broader implementation without migration architecture could duplicate current Nestfolio behavior, introduce a big-bang rewrite, or violate the product-experience adoption sequence. Another architecture or implementation slice is not justified before defining incremental compatibility, rollback, and ordering.

## Decision

Authorize exactly one next iteration:

**MA-001 — Migration Architecture**.

MA-001 must determine how the accepted target architecture and Product Experience can be introduced incrementally and reversibly while preserving working behavior and external authorities.

MA-001 is a design iteration. It must not implement migration, create a broad rewrite, rerun VS-001/VS-001A, or pre-authorize implementation slices. It must issue unconditional G5 PASS or FAIL and authorize exactly one next iteration based on its evidence.

Before MA-001 execution, an active session contract must be authored from the current Program State and PX-001 handoff. The Current Runtime Map is the primary current-system input; any later source inspection must be narrowly justified by that contract.

## Status

Validated by the PX-001 G4 decision and program sequence assessment.

## Supporting evidence

- `docs/00-governance/product-development-operating-model.md`, Gate G5;
- `docs/20-current-system/current-runtime-map.md`;
- `docs/30-target-architecture/target-architecture.md`;
- `docs/40-product-experience/product-experience.md`;
- VS-001 and VS-001A reports;
- `docs/90-state/program-state.md` after PX-001.

## Alternatives considered

### Authorize another implementation vertical slice

Rejected because migration ownership, compatibility, rollback, and sequence are not yet defined.

### Run an additional conceptual Product Experience iteration

Rejected because every G4 criterion is satisfied and remaining questions are non-structural implementation details.

### Begin sustained dogfooding immediately

Rejected as the sole program iteration because broad dogfooding changes could become accidental migration without an accepted migration architecture. Dogfooding evidence remains required after an authorized implementation path exists.

### Stop after G4

Rejected because the product still lacks an accepted path from current runtime to target experience.

## Rejected alternatives

- automatic authorization of broader implementation after G4;
- big-bang replacement;
- treating VS-001 code as the final migration plan;
- assuming every current Nestfolio capability must migrate.

## Risks

- migration design may overfit to current Nestfolio structure;
- excessive compatibility could preserve rejected complexity;
- a migration plan may become too broad.

Mitigation: use the Current Runtime Map, accepted classification boundaries, cumulative adoption levels, and independent-value slices; keep implementation blocked until G5.

## Validation requirements

MA-001 must prove:

- no big-bang rewrite is required;
- each proposed slice has independent user value and an explicit adoption level;
- compatibility and rollback are defined;
- current and target authorities do not conflict;
- project-specific behavior remains in the Nestfolio binding;
- order is justified by risk and evidence;
- exactly one next iteration is authorized after G5.

## Consequences

- MA-001 becomes the sole authorized next iteration;
- no implementation or migration execution is authorized;
- G5 remains pending;
- all later slices, broader implementation, universal integrations, and hosted-service work remain blocked.

## Supersedes

None.

## Superseded by

None.
