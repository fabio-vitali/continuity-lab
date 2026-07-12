---
artifact_id: GOV-DESIGN-LEVELS
status: ratified
owner: program
last_updated: 2026-07-12
---

# Design Levels

Continuity is designed across distinct levels. Each level answers a different question and owns different artifacts.

## L0 — Development governance

Question:

> How do humans and agents produce trustworthy design and implementation decisions?

Owns:

- operating model;
- artifact governance;
- Context Pack format;
- phase gates;
- handoff rules.

May constrain every lower level.

## L1 — Product and category

Question:

> What problem is worth solving, for whom, and what enduring value is promised?

Owns:

- category;
- target users;
- problem;
- product thesis;
- non-goals;
- adoption premise;
- product success metrics.

Primary artifact:

- `docs/10-product/product-foundation.md`

## L2 — Conceptual domain model

Question:

> What stable concepts and relationships express the product independently of implementation?

Owns candidates such as:

- Commitment;
- Goal;
- Guard;
- Observation;
- Evidence;
- Run;
- Decision;
- Lesson;
- Event.

Currently contained in the Product Foundation until mature enough for a dedicated domain-model artifact.

## L3 — System architecture

Question:

> Which bounded contexts, ownership rules, contracts, persistence choices, and dependency directions implement the conceptual model?

Owns:

- kernel boundary;
- modules;
- providers;
- packs;
- state authority;
- command/event contracts;
- context-formation architecture.

Primary artifact:

- `docs/30-target-architecture/target-architecture.md`

## L4 — Product experience

Question:

> How do users adopt, understand, operate, debug, and trust the product?

Owns:

- CLI;
- Console;
- onboarding;
- progressive adoption;
- human decisions;
- explainability;
- recovery;
- learning review.

Primary artifact:

- `docs/40-product-experience/product-experience.md`

## L5 — Migration and delivery architecture

Question:

> How does the existing runtime evolve into the target product without destroying working capabilities?

Owns:

- migration stages;
- compatibility boundaries;
- vertical slices;
- strangler paths;
- rollback;
- deprecation.

Primary artifact:

- `docs/60-migration/migration-plan.md`

## L6 — Implementation

Question:

> How is one approved vertical slice built and verified?

Owns:

- code-level plans;
- ADRs;
- tests;
- schemas;
- package layout;
- release changes.

Location:

- `docs/70-implementation/`

## L7 — Validation

Question:

> What evidence shows the product thesis, architecture, and implementation are useful and correct?

Owns:

- falsification;
- scenarios;
- experiments;
- user evidence;
- comparative evaluation;
- dogfooding metrics.

Location:

- `docs/50-validation/`

## Cross-level change rule

A lower-level discovery may challenge a higher level only by producing:

1. an Observation;
2. repository or experiment Evidence;
3. an explicit revision Proposal;
4. a Decision Record if accepted.

No implementation convenience may silently redefine the product.
