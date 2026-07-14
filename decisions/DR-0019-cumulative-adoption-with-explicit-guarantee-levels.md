---
artifact_id: DR-0019
status: validated
owner: product-experience
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# DR-0019 — Use Cumulative Adoption with Explicit Guarantee Levels

## Context

Continuity must provide practical Claude Code value before a repository adopts the complete Work, Context Pack, Run, Assurance, and Learning model. A single all-or-nothing onboarding path would delay value and increase abandonment risk. Separate miniature products or incompatible state models would create dead ends and migration debt.

The Product Foundation already defines a practical evolution from Claude Code instructions and Skills through resumable execution, Guards, and learning. TA-002 defines stable artifacts that can be introduced cumulatively.

## Decision

Adopt six cumulative product-experience levels:

1. repository instructions and one Skills-only Procedure;
2. reusable Skills/Procedures and Pack locking;
3. local Work selection, Working Set, Scope, and completion criteria;
4. formed, validated, and authorized Context Packs;
5. resumable Runs, Checkpoints, Handoffs, and fresh-session resume;
6. validation, Evidence-bound completion, Guards, Decisions, and reviewed learning.

Every user-visible entry point must state:

- the active level;
- the guarantees currently active;
- the guarantees deliberately absent;
- the next optional level and prerequisites.

Earlier-level artifacts remain valid inputs to later levels. Downgrading disables higher-level guarantees and command families without rewriting or deleting historical canonical artifacts.

No lower level may imply that unavailable higher-level guarantees exist. In particular:

- finishing a Skill is not completion;
- a generated brief is not an authorized Context Pack;
- a Session ending without Level 5 is not resumable;
- completion without Level 6 Assurance is not trusted by Continuity.

## Status

Validated by PX-001 conceptual walkthroughs and scenario tests.

## Supporting evidence

- `docs/10-product/product-foundation.md`, especially the progressive practical evolution and kill/revise conditions;
- `docs/30-target-architecture/target-architecture.md`, which separates Packs, Work, Context Formation, Execution Continuity, Assurance, and Learning without incompatible models;
- `docs/70-implementation/vs-001-resumable-agent-work-session.md` and `vs-001a-claude-code-session-confirmation.md`, which prove the higher-level mechanics can coexist;
- `docs/40-product-experience/product-experience.md`, sections 6 and 12.

## Alternatives considered

### Require the complete validated loop at installation

Rejected because it creates high setup cost before practical value and conflicts with the Product Foundation's Claude Code-first evolution.

### Offer separate lightweight and full products

Rejected because artifacts and user expectations would diverge and later migration would require semantic conversion.

### Hide partial adoption and expose only available commands

Rejected because users could mistake absent guarantees for implicit behavior.

## Rejected alternatives

- incompatible state models by level;
- automatic upgrade when artifacts are detected;
- silent downgrade after a failure;
- completion claims at lower levels without the Level 6 gate.

## Risks

- users may remain at a low level and never obtain full continuity;
- guarantee labels may feel repetitive;
- different Work Items may use different levels and confuse teams.

Mitigation: show the level on every active effort, make upgrades optional and concrete, and prevent command families from implying absent guarantees.

## Validation requirements

Dogfooding must measure:

- time to Level 1 first value;
- whether users can accurately state active and absent guarantees;
- successful reuse of lower-level artifacts after upgrade;
- whether downgrade/reversal preserves readable history;
- maintenance cost at each level.

## Consequences

- onboarding begins with practical Claude Code use;
- the full loop remains the target product rather than a prerequisite for first value;
- Product Experience and future implementation must expose truthful guarantee levels;
- migration architecture must preserve cumulative artifact compatibility.

## Supersedes

None.

## Superseded by

None.
