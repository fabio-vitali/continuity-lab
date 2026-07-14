---
artifact_id: LAB-README
status: ratified
owner: program
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Continuity Lab

This repository is the canonical design and development workspace for **Continuity**. It is separate from Nestfolio.

## Product direction

Continuity is a repository-native framework for sustained coding-agent work, with Claude Code as the primary executor.

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

## Repository responsibilities

`continuity-lab` is canonical for governance, product/architecture/experience decisions, iteration contracts, validation reports, Program State, and handoffs.

Nestfolio is canonical for implementation code, tests, project bindings, and dogfooding evidence when a session contract explicitly authorizes its use.

## Current program position

Completed:

1. PF-001 — Product Falsification;
2. RI-001 — Current Runtime Inventory — G2 valid;
3. TA-001 — historical architecture;
4. PI-001 — Product Intent Realignment;
5. TA-002 — Target Architecture Revision — G3 passed;
6. VS-001 — Resumable Agent Work Session — **FAIL** (historical, preserved);
7. VS-001A — Interactive Claude Code Session Confirmation — **PASS**; **G6 passed** on combined VS-001 + VS-001A evidence;
8. PX-001 — Product Experience — **PASS**; **G4 passed**.

The accepted Product Experience defines cumulative adoption, ten-minute first value, Work and Context workflows, Context Pack explainability, Claude Code continuity, human Decisions, safe failure/recovery, a non-authoritative CLI, and a deferred local Console.

Sole authorized next iteration:

9. **MA-001 — Migration Architecture** (Gate G5).

MA-001 must first receive a newly authored active session contract from the completed PX-001 evidence. Migration implementation, broader implementation, later vertical slices, Console implementation, universal integrations, and unrelated Nestfolio work remain blocked.

## Next session

Use a fresh session to author the MA-001 contract from:

- `docs/90-state/program-state.md`;
- `docs/40-product-experience/product-experience.md`;
- `sessions/PX-001-product-experience/session-handoff.md`;
- the exact ordered inputs and completion contract declared in that handoff.

Do not execute an improvised migration prompt. Do not implement migration. The Current Runtime Map is the primary current-system authority; any later source inspection must be explicitly and narrowly authorized by the MA-001 contract.

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Current runtime evidence: `docs/20-current-system/current-runtime-map.md`
- Target architecture: `docs/30-target-architecture/target-architecture.md`
- Product Experience: `docs/40-product-experience/product-experience.md`
- VS-001 report: `docs/70-implementation/vs-001-resumable-agent-work-session.md`
- VS-001A report: `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`

## Rule

Chat is not project memory. A result becomes canonical only when classified, written to the owning artifact, reviewed through a diff, and committed.
