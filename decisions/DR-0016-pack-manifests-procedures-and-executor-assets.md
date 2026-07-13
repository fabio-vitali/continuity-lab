---
artifact_id: DR-0016
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes:
  - DR-0010
superseded_by: null
---

# DR-0016 — Separate Pack Manifests, Canonical Procedures, and Executor Assets

## Context

TA-001 correctly separated reusable Pack Definitions from concrete Context Packs, but restricted Packs to declarative formation and validation content. The corrected product makes Skills and executable procedures central and permits Claude Code-specific assets. Packs must therefore carry executable development knowledge without redefining Core semantics or turning arbitrary code into trusted domain state.

## Decision

Retain the distinction between a reusable **Pack** and a concrete **Context Pack**, and refine the Pack model into three layers.

### Pack manifest

A versioned canonical manifest declares:

- identity, version, digest, compatibility, publisher, and trust status;
- contained Skills, Procedures, Work templates, Guards, validators, context recipes, Evidence collectors, and integration bindings;
- prerequisites, required capabilities, expected outputs, verification, failure behavior, and permissions;
- composition rules, conflicts, overrides, deprecation, and supersession.

### Canonical procedure specification

A Skill or Procedure has a vendor-independent repository description of intent and contract:

- objective and applicability;
- inputs and prerequisites;
- ordered or stateful steps where determinism matters;
- expected outputs and side effects;
- checkpoint points;
- validation and Evidence requirements;
- failure, retry, and rollback guidance;
- version and provenance.

### Executor assets

A Pack may include adapter-specific executable assets, including Claude Code skill files, commands, hooks, subagent prompts, and helper scripts. These assets are selected and invoked by the relevant adapter. They may not redefine Work, Run, Guard, Decision, or Lesson lifecycle semantics.

Packs may be reusable engineering Packs, technology Packs, organization Packs, or project bindings. Nestfolio-specific behavior remains in a Nestfolio Pack or binding until repeated evidence justifies promotion.

Pack composition is explicit and digest-locked. Conflicts are blocking unless an allowed, recorded override exists. No silent last-write-wins behavior is permitted.

## Status

Validated by TA-002 and accepted as the active Pack and Skills decision.

## Alternatives considered

### Retain purely declarative TA-001 Packs

Rejected because they cannot carry the executable skills and procedures central to the product premise.

### Make every executable script a Core extension

Rejected because it would couple the Core to tools, technologies, and project semantics.

### Treat Claude Code skill files as the only canonical procedure

Rejected because the reusable contract, prerequisites, outputs, and validation would be hidden in one adapter format.

### Copy all Nestfolio content into a universal starter Pack

Rejected because project-specific rules and deploy procedures are not automatically reusable.

## Risks

- executable Pack assets increase supply-chain and permission risk;
- canonical procedure specs and adapter assets can drift;
- excessive Pack granularity can make composition hard to understand.

## Validation requirements

- Pack self-validation must detect missing or mismatched executor assets.
- VS-001 must resolve at least one reusable procedure and one Nestfolio-specific procedure without changing Core semantics.
- every invoked asset must be traceable to a locked Pack version and declared capability.

## Consequences

- `DR-0010` is superseded.
- Context Packs reference the exact Pack lock and resolved Skill/Procedure versions.
- executable behavior is permitted outside Core under explicit capability and governance rules.

## Supersedes

`DR-0010 — Separate Pack Definitions from Context Packs`.

## Superseded by

None.
