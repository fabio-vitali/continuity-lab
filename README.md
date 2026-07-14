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

Continuity is a repository-native framework for sustained coding-agent work, with Claude Code as the first and primary executor.

```text
select work
→ form and authorize context
→ execute through Procedures and agents
→ checkpoint, hand off, and resume
→ validate and attach Evidence
→ complete or stop truthfully
→ review Decisions and learning
→ continue
```

## Repository responsibilities

`continuity-lab` is canonical for governance, product intent, current-system evidence, target architecture, Product Experience, migration architecture, iteration contracts, validation reports, Program State, Decisions, and handoffs.

Nestfolio is the first dogfooding environment and remains canonical for its implementation code, tests, and project-specific binding only when an active reviewed contract explicitly authorizes narrowly scoped use.

## Current program position

Completed:

1. PF-001 — Product Falsification;
2. RI-001 — Current Runtime Inventory — G2 valid;
3. TA-001 — historical architecture, no longer an active baseline;
4. PI-001 — Product Intent Realignment;
5. TA-002 — Target Architecture Revision — G3 passed;
6. VS-001 — Resumable Agent Work Session — **FAIL** (historical, preserved);
7. VS-001A — Interactive Claude Code Session Confirmation — **PASS**; G6 passed on combined VS-001 and VS-001A evidence;
8. PX-001 — Product Experience — **PASS**; G4 passed;
9. MA-001 — Migration Architecture — **PASS**; G5 passed.

The accepted migration architecture is:

- `docs/60-migration/migration-plan.md`;
- `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`.

It defines seven cumulative, independently valuable, reversible slices from a Skills-only Procedure through governed Level 6 Assurance and Learning. It rejects big-bang rewrite, unqualified dual authority, mandatory Console adoption, and premature universalization.

No migration slice was executed during MA-001. No implementation artifact was created or modified.

## Sole authorized next iteration

**MI-001 — Procedure-First Adoption** is the sole authorized next iteration.

Current status:

```text
authorized-contract-required
not contracted
not executed
```

MI-001 execution is not yet authorized. The immediate operation is to author and review its session contract in a fresh isolated contract-authoring session. That operation must not implement MI-001.

All later migration slices, broader implementation, Console work, universal integrations, hosted or commercial control-plane work, and broad Nestfolio migration remain blocked.

## Next human action

Review and commit the completed MA-001 artifacts. Create a clean ZIP from committed `HEAD`. Then open a separate fresh conversation, upload only that ZIP, and paste the exact MI-001 contract-authoring prompt provided in `CONTINUITY-NEXT-STEPS.md`.

Do not proceed directly to MI-001 implementation.

## Accepted migration slices

1. MI-001 — Procedure-First Adoption — PX Level 1
2. MI-002 — Reusable Pack Composition — PX Level 2
3. MI-003 — Bounded Local Work and Scope — PX Level 3
4. MI-004 — Authorized Context Introduction — PX Level 4
5. MI-005 — Resumable Run Cutover — PX Level 5
6. MI-006 — Evidence-Bound Completion and Guard Coexistence — PX Level 6 Assurance
7. MI-007 — Governed Learning and Selective Current-Runtime Retirement — PX Level 6 Learning

Only MI-001 contract authoring is currently permitted. This list is an accepted sequence, not blanket execution authorization.

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Current runtime evidence: `docs/20-current-system/current-runtime-map.md`
- Target architecture: `docs/30-target-architecture/target-architecture.md`
- Product Experience: `docs/40-product-experience/product-experience.md`
- Migration architecture: `docs/60-migration/migration-plan.md`
- Migration navigation: `docs/60-migration/README.md`
- Implementation evidence: `docs/70-implementation/README.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`
- MA-001 closure: `sessions/MA-001-migration-architecture/session-handoff.md`
- Current execution instructions: `CONTINUITY-NEXT-STEPS.md`

## Rule

Chat is not project memory. A result becomes canonical only when classified, written to its owning artifact, reviewed through a diff, and committed. Every new iteration uses a fresh isolated session and exactly one active reviewed contract.
