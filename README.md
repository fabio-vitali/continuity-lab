---
artifact_id: LAB-README
status: ratified
owner: program
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Continuity Lab

This repository is the canonical design and development workspace for the product currently known as **Continuity**.

It is deliberately separate from Nestfolio.

## Repository responsibilities

### `continuity-lab`

Canonical for:

- development operating model;
- product thesis and conceptual model;
- design decisions;
- current-system analysis;
- target architecture;
- product experience;
- falsification and validation;
- migration strategy;
- implementation-slice specifications;
- program state and session handoffs.

### `nestfolio`

Canonical for:

- the current runtime implementation;
- current tests;
- project-specific bindings;
- evidence about what exists today.

Nestfolio is an implementation source and experimental proving ground. It is not the canonical source for the future product definition.

## Current program position

Completed:

1. **PF-001 — Product Falsification** — G1 passed with material revision.
2. **RI-001 — Current Runtime Inventory** — G2 passed.
3. **TA-001 — Target Architecture** — G3 passed.

Sole authorized next iteration:

4. **PX-001 — Product Experience**

Migration and implementation remain blocked.

See `docs/90-state/program-state.md` for the canonical current state.

## Before every AI session

1. Pull the latest `continuity-lab`.
2. Export or ZIP the repository.
3. Upload only the inputs listed in that session's Context Pack.
4. Paste the corresponding `prompt.md` unchanged.
5. Do not paste earlier chat transcripts.
6. At the end, download the produced files.
7. Review the Git diff.
8. Commit the iteration output using the commit message declared by the current execution instructions.

## Next session

Use:

- `sessions/PX-001-product-experience/context-pack.yaml`
- `sessions/PX-001-product-experience/prompt.md`

Run PX-001 in a fresh ChatGPT conversation using the latest repository ZIP. Do not upload Nestfolio unless the session identifies a narrow missing current-experience fact.

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Current runtime evidence: `docs/20-current-system/current-runtime-map.md`
- Target architecture: `docs/30-target-architecture/target-architecture.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`

## Rule

A chat answer is not project memory.

A result becomes project memory only after it is:

1. classified;
2. written to the correct artifact;
3. reviewed through a diff;
4. committed to this repository.
