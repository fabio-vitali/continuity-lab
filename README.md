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

`continuity-lab` is canonical for governance, product/architecture decisions, slice contracts, validation reports, Program State, and handoffs.

Nestfolio is canonical for implementation code, tests, project bindings, and dogfooding evidence.

## Current program position

Completed:

1. PF-001 — Product Falsification;
2. RI-001 — Current Runtime Inventory — G2 valid;
3. TA-001 — historical architecture;
4. PI-001 — Product Intent Realignment;
5. TA-002 — Target Architecture Revision — G3 passed;
6. VS-001 — Resumable Agent Work Session — **FAIL** (historical, preserved);
7. VS-001A — Interactive Claude Code Session Confirmation — **PASS**; **G6 passed** on combined VS-001 + VS-001A evidence.

Two genuine Claude Code Sessions (version 2.1.207) proved adapter bootstrap, first-Session end after a verified Checkpoint/Handoff, fresh-Session resume from repository-local state, and keyed-effect deduplication on Run `run-vs001a`.

Sole authorized next iteration:

8. **PX-001 — Product Experience** (Gate G4) — sole authorized next iteration; the active context pack and prompt were authored on 2026-07-14 and are ready to run. G4 remains pending.

MA-001, broader implementation, later vertical slices, and unrelated Nestfolio work remain blocked.

## Next session

Run only the active PX-001 contract in a fresh conversation with:

- `sessions/PX-001-product-experience/context-pack.yaml`;
- `sessions/PX-001-product-experience/prompt.md`;
- the latest complete `continuity-lab` repository.

Do not upload or request Nestfolio. Do not restore the superseded TA-001-derived PX-001 contract from Git history. The active contract already names the VS-001/VS-001A reports, accepted TA-002 architecture, Decisions, and handoffs that must be read.

Nestfolio VS-001A evidence identity: baseline `7db8688c1586b685ec295dcfa28c17f0ad798ebc`, result revision `2b47cddc3e38e26cdde47da38e2d8dc3e862c436` (both on `main`).

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Current runtime evidence: `docs/20-current-system/current-runtime-map.md`
- Target architecture: `docs/30-target-architecture/target-architecture.md`
- VS-001 report: `docs/70-implementation/vs-001-resumable-agent-work-session.md`
- VS-001A report: `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`

## Rule

Chat is not project memory. A result becomes canonical only when classified, written to the owning artifact, reviewed through a diff, and committed.
