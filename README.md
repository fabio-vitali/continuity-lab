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

`continuity-lab` is canonical for governance, product, architecture, experience, migration design, iteration contracts, validation reports, Program State, and handoffs.

Nestfolio is canonical for implementation code, tests, project bindings, and dogfooding evidence only when a reviewed session contract explicitly authorizes narrowly scoped use.

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

## Sole authorized next iteration

9. **MA-001 — Migration Architecture** (Gate G5).

MA-001 is **authorized and contracted**. Its active contract is prepared under:

```text
sessions/MA-001-migration-architecture/
```

MA-001 has **not** been executed. `docs/60-migration/migration-plan.md` does not exist, no G5 result exists, and no implementation slice is authorized.

Migration implementation, broader implementation, later vertical slices, Console implementation, universal integrations, hosted-service work, commercial-control-plane work, and broad or unrelated Nestfolio migration remain blocked.

## Next human action

Review and commit the prepared MA-001 contract and state/navigation changes. Then create `continuity-lab-ma001-contract.zip` from the committed `HEAD`, open a separate fresh conversation, upload that ZIP, and paste the complete unmodified contents of:

```text
sessions/MA-001-migration-architecture/prompt.md
```

Exact commands and checks are in `CONTINUITY-NEXT-STEPS.md`.

Do not upload Nestfolio by default. The Current Runtime Map is the primary current-system authority. A narrowly scoped source request is permitted only if the reviewed MA-001 contract's evidence-gap rule is triggered during execution.

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Current runtime evidence: `docs/20-current-system/current-runtime-map.md`
- Target architecture: `docs/30-target-architecture/target-architecture.md`
- Product Experience: `docs/40-product-experience/product-experience.md`
- Migration navigation: `docs/60-migration/README.md`
- VS-001 report: `docs/70-implementation/vs-001-resumable-agent-work-session.md`
- VS-001A report: `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`
- Active MA-001 contract: `sessions/MA-001-migration-architecture/context-pack.yaml`
- Executable MA-001 prompt: `sessions/MA-001-migration-architecture/prompt.md`

## Rule

Chat is not project memory. A result becomes canonical only when classified, written to the owning artifact, reviewed through a diff, and committed.
