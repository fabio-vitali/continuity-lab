---
artifact_id: LAB-README
status: ratified
owner: program
last_updated: 2026-07-13
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

`continuity-lab` is canonical for governance, product/architecture decisions, slice contracts, validation reports, Program State, and handoffs.

Nestfolio is canonical for implementation code, tests, project bindings, and dogfooding evidence.

## Current program position

Completed:

1. PF-001 — Product Falsification;
2. RI-001 — Current Runtime Inventory — G2 valid;
3. TA-001 — historical architecture;
4. PI-001 — Product Intent Realignment;
5. TA-002 — Target Architecture Revision — G3 passed;
6. VS-001 — Resumable Agent Work Session — **FAIL**.

VS-001 implemented and validated the bounded repository-native mechanics, but the environment lacked Claude Code. Actual executor bootstrap, first-Session end, and fresh-Session resume remain unproven.

Sole authorized next iteration:

7. **VS-001A — Interactive Claude Code Session Confirmation**.

PX-001, migration architecture, broader implementation, later vertical slices, and unrelated Nestfolio work remain blocked.

## Next session

Use a fresh conversation with:

- `sessions/VS-001A-claude-code-session-confirmation/context-pack.yaml`;
- `sessions/VS-001A-claude-code-session-confirmation/prompt.md`;
- `sessions/VS-001-resumable-agent-work-session/session-handoff.md`;
- the latest complete `continuity-lab` repository;
- Nestfolio at commit `67e21251ee4e64ff8051c4b239a8466dac296dd2` or an upstream descendant containing it.

The real Claude Code executable is a hard precondition. Do not substitute a Node/shell harness.

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Current runtime evidence: `docs/20-current-system/current-runtime-map.md`
- Target architecture: `docs/30-target-architecture/target-architecture.md`
- VS-001 report: `docs/70-implementation/vs-001-resumable-agent-work-session.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`

## Rule

Chat is not project memory. A result becomes canonical only when classified, written to the owning artifact, reviewed through a diff, and committed.
