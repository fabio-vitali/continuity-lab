---
artifact_id: VALIDATION-PF-PLAN
status: ratified
owner: validation
last_updated: 2026-07-12
---

# Product Falsification Plan

## Purpose

Attempt to prove that Continuity should not exist, that its proposed category is not distinct, or that its conceptual model is unnecessary or incoherent.

This is not a positioning exercise and not a supportive review.

## Falsification questions

### Problem

- Is engineering-context loss severe enough to justify a product?
- Are existing repositories, CI, ADRs, task trackers, and agent memory already sufficient?
- Is the problem limited to unusually complex teams?

### Buyer and adopter

- Who experiences the pain?
- Who has authority to adopt?
- Who maintains the product's knowledge and Guards?
- Is the maintenance burden larger than the saved cost?

### Category

- Is Engineering Continuity meaningfully distinct?
- Is it merely AI governance, developer productivity, policy-as-code, knowledge management, or agent orchestration?
- Can the value be explained without invented terminology?

### Central abstraction

- Does Commitment unify Goal and Guard usefully?
- Does it hide incompatible lifecycle semantics?
- Would separate Work Item and Policy concepts be clearer?
- Is Lesson first-class or merely provenance?

### Product completeness

- Do Work, Assurance, Execution, Learning, Trust, and Context Formation form one product?
- Are any of them separate products pretending to be modules?
- Can progressive adoption avoid requiring the whole system?

### Substitution

Attempt to reproduce the value using combinations of:

- GitHub/GitLab;
- CI;
- issue trackers;
- ADRs;
- documentation;
- policy-as-code;
- Semgrep/OPA;
- agent frameworks;
- memory/RAG systems;
- workflow engines;
- incident-management tools.

### Adoption

- Can a team obtain value within ten minutes?
- Can adoption begin without migrating backlog or agent workflows?
- Can the system avoid becoming a second source of truth?
- Can it remain useful when no autonomous agent is used?

### Context Formation

- Is intentionally formed context a product differentiator or an implementation detail?
- Can context packs be reproduced and explained?
- How does the system detect dangerous omissions?
- Does context formation become a new opaque retrieval system?

### Economics and maintenance

- Who writes and curates Guards?
- How is Guard rot prevented?
- Does the system create governance debt?
- Is local-first compatible with useful team analytics?

## Required scenario stress tests

PF-001 must model at least these scenarios:

1. single developer with one coding agent;
2. small team with existing CI and GitHub Issues;
3. large regulated organization;
4. monorepo with multiple teams;
5. incident produces a recurring prevention rule;
6. judgment-based architectural review;
7. long migration interrupted across sessions;
8. executor changes mid-Run;
9. contradictory or obsolete Guard;
10. human rejects an automatically proposed Guard;
11. no-agent adoption;
12. product repository dogfoods its own Context Formation.

For each scenario record:

- user;
- trigger;
- current alternative;
- product workflow;
- required concepts;
- maintenance cost;
- failure modes;
- decisive value;
- falsification result.

## Required outputs

- `docs/50-validation/product-falsification-report.md`
- revised `docs/10-product/product-foundation.md`
- Decision Records for retained or rejected central proposals
- updated program state
- PF-001 session handoff

## Pass conditions

G1 passes only if:

- the report states what would make the product fail;
- strongest substitutes are treated fairly;
- fatal flaws are separated from fixable design risks;
- central abstractions are explicitly retained, revised, or rejected;
- a credible narrow initial adopter and adoption wedge exist;
- the product boundary is clearer after the exercise.

A positive verdict is not required. A trustworthy verdict is required.
