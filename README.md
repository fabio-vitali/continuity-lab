---
artifact_id: LAB-README
status: ratified
owner: program
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Continuity Lab

This repository is the canonical design and development workspace for the product currently known as **Continuity**. It is deliberately separate from Nestfolio.

## Repository responsibilities

### `continuity-lab`

Canonical for:

- development governance;
- product thesis and conceptual model;
- architecture and Decision Records;
- current-system evidence;
- validation-slice contracts and results;
- product experience and migration decisions when authorized;
- Program State and session handoffs.

### `nestfolio`

Canonical for:

- the current runtime implementation and tests;
- project-specific bindings;
- VS-001 implementation and dogfooding evidence;
- practical proof of Continuity in a medium-to-complex repository.

Nestfolio-specific backlog conventions, repository rules, deployment procedures, Guards, Skills, and Lessons may remain in a Nestfolio Pack or binding.

## Current product direction

Continuity is a repository-native framework for sustained coding-agent work.

Primary executor: **Claude Code**.

```text
select work
→ form context
→ execute through skills and agents
→ checkpoint or resume
→ validate
→ attach evidence
→ update work state
→ record learning
→ continue
```

## Current program position

Completed:

1. **PF-001 — Product Falsification** — evidence retained; interpretation revised by PI-001.
2. **RI-001 — Current Runtime Inventory** — G2 passed and remains valid.
3. **TA-001 — Target Architecture** — historical and superseded as the active baseline.
4. **PI-001 — Product Intent Realignment** — corrected the product direction.
5. **TA-002 — Target Architecture Revision** — completed; **G3 passed**; revised architecture accepted.

Sole authorized next iteration:

6. **VS-001 — Resumable Agent Work Session**

PX-001, migration architecture, broader implementation, and unrelated Nestfolio work remain blocked.

See `docs/90-state/program-state.md` for canonical state.

## Accepted architecture boundaries

- Framework Core owns portable Work, Run, Checkpoint, Context, Assurance, Decision, and Learning semantics.
- Application Services coordinate use cases through declared ports.
- Repository Infrastructure owns artifacts, operational state, Git inspection, leases, and recovery.
- The Claude Code Adapter owns native commands, skills, hooks, subagents, session bootstrap, and result capture.
- Packs contain reusable procedures and adapter assets without redefining Core semantics.
- Nestfolio behavior remains project-specific unless evidence justifies promotion.

## Before every AI session

1. Pull the latest canonical repositories.
2. Export or ZIP only the repositories required by the session.
3. Upload the exact inputs listed in the session Context Pack.
4. Paste the corresponding prompt unchanged.
5. Do not paste earlier chat transcripts.
6. Review every returned diff.
7. Commit only after confirming artifact status, gate changes, and the sole next iteration.

## Next session

Run **VS-001 — Resumable Agent Work Session** in a fresh conversation.

Use:

- `sessions/VS-001-resumable-agent-work-session/context-pack.yaml`;
- `sessions/VS-001-resumable-agent-work-session/prompt.md`;
- `sessions/TA-002-target-architecture-revision/session-handoff.md`;
- the latest complete `continuity-lab` repository;
- the Nestfolio repository at the exact implementation baseline declared by VS-001.

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Current runtime evidence: `docs/20-current-system/current-runtime-map.md`
- Accepted target architecture: `docs/30-target-architecture/target-architecture.md`
- Active product decision: `decisions/DR-0012-repository-native-agentic-development-framework.md`
- Active architecture decisions: `decisions/DR-0013-*.md` through `decisions/DR-0018-*.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`

## Rule

A chat answer is not project memory.

A result becomes project memory only after it is classified, written to the correct artifact, reviewed through a diff, and committed.
