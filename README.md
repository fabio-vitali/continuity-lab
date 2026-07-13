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
- evidence about what exists today;
- first practical dogfooding of Continuity.

Nestfolio is the reference implementation and proving ground. Project-specific behavior may remain in a Nestfolio Pack or binding instead of entering framework core.

## Current product direction

Continuity is a repository-native framework for sustained coding-agent work.

Primary executor: **Claude Code**.

Operational loop:

```text
select work
→ form context
→ execute through skills and agents
→ validate
→ record state and learning
→ continue
```

Context Packs and Handoffs are important capabilities inside this loop, not the complete product.

## Current program position

Completed:

1. **PF-001 — Product Falsification** — evidence retained; narrow interpretation later revised.
2. **RI-001 — Current Runtime Inventory** — G2 passed and remains valid.
3. **TA-001 — Target Architecture** — completed historically; now provisional.
4. **PI-001 — Product Intent Realignment** — product direction corrected; G3 reopened.

Sole authorized next iteration:

5. **TA-002 — Target Architecture Revision**

PX-001, migration, and implementation are blocked.

See `docs/90-state/program-state.md` for the canonical current state.

## Before every AI session

1. Pull the latest `continuity-lab`.
2. Export or ZIP the repository.
3. Upload only the inputs listed in that session's Context Pack or handoff.
4. Paste the corresponding prompt unchanged.
5. Do not paste earlier chat transcripts.
6. At the end, download the produced files.
7. Review the Git diff.
8. Commit the iteration output only after confirming status and gate changes.

## Next session

Run **TA-002 — Target Architecture Revision** in a fresh conversation.

Use:

- `sessions/TA-002-target-architecture-revision/context-pack.yaml`;
- `sessions/TA-002-target-architecture-revision/prompt.md`;
- `sessions/PI-001-product-intent-realignment/session-handoff.md`;
- the latest complete repository ZIP.

Do not run the prepared PX-001 session. Do not start migration or implementation.

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Current runtime evidence: `docs/20-current-system/current-runtime-map.md`
- Provisional TA-001 architecture: `docs/30-target-architecture/target-architecture.md`
- Active product decision: `decisions/DR-0012-repository-native-agentic-development-framework.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`

## Rule

A chat answer is not project memory.

A result becomes project memory only after it is:

1. classified;
2. written to the correct artifact;
3. reviewed through a diff;
4. committed to this repository.
