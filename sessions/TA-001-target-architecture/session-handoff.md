---
artifact_id: TA-001-TARGET-ARCHITECTURE-HANDOFF
status: validated
owner: session
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Session Handoff

## Iteration closed

**TA-001 — Target Architecture**

## Gate result

**G3 — Target architecture coherence: PASS on 2026-07-13.**

TA-001 was authorized because Program State recorded G1 and G2 as passed. The validated Current Runtime Map supplied sufficient implementation evidence; no additional Nestfolio source inspection was required.

## Primary outcome

The target is not a redesigned copy of the broad Nestfolio runtime.

Continuity is architected as a local-first protocol and toolchain centered on two product-owned durable aggregates:

- Context Pack;
- Handoff.

The product also owns continuity Validation Reports, Formation Traces, Pack Definitions and lock state, typed external references, local operation recovery, and an internal audit ledger.

It references rather than owns:

- work and Goals;
- Guards and policy outcomes;
- source code, commits, PRs, CI, tests, builds, and deployments;
- incidents and postmortems;
- organization catalogs;
- agent runtime checkpoints and vendor memory.

## Validated architecture decisions

- `DR-0007` — narrow dependency-free Continuity Kernel.
- `DR-0008` — repository artifacts are authoritative; operation journal and event ledger are secondary.
- `DR-0009` — typed, read-oriented provider contracts; no external writes initially.
- `DR-0010` — Pack Definitions and concrete Context Packs are separate concepts.
- `DR-0011` — Context Formation is an explicit, reproducible, resumable pipeline.

These Decision Records are validated, not ratified.

## Target bounded contexts

1. Context Formation
2. Handoff
3. Reference and Provenance
4. Continuity Assurance
5. Workspace and Packs

The Continuity Kernel is a shared domain nucleus, not a bounded external authority or universal control plane.

## Critical ownership rules

- Context Formation owns Context Pack lifecycle.
- Handoff owns Handoff lifecycle.
- Continuity Assurance produces read-only reports; aggregate owners apply transitions.
- Providers resolve external references but never transfer authority.
- Workspace persists accepted transitions but does not infer them.
- CLI and Console invoke application services and never write stores directly.
- Authorized Context Pack and published Handoff versions are immutable.
- Pending human decisions must exist in the product artifact, not only in an operation journal.
- Work execution, worker/orchestrator state, policy enforcement, deployment, learning, and backlog planning remain external.

## Architecture stress-test result

The architecture directly supports the strongest PF-001 scenarios:

- long migrations interrupted across sessions;
- executor changes mid-work;
- small teams referencing existing issue/CI authority;
- monorepo/path-scoped continuation;
- human-only handoffs;
- repository dogfooding.

It deliberately does not absorb the rejected initial scenarios into the product boundary:

- enterprise-wide governance control plane;
- incident-to-Guard minting lifecycle;
- generic judgment-based Guard enforcement;
- Guard conflict/retirement authority;
- automatic policy proposal governance.

## Open questions carried into product experience

- exact first-use flow that reaches value within ten minutes;
- how users distinguish “formed,” “validated,” and “authorized” without false confidence;
- default authorization policy and where explicit human confirmation is required;
- how scope, exclusions, source rationale, uncertainty, and pending decisions are shown progressively;
- how recovery and provider failures are explained without exposing infrastructure detail;
- executor-neutral export and executor-switch workflow;
- human-only Handoff workflow;
- whether a local Console adds value beyond CLI and repository artifacts;
- how Pack Definition versus Context Pack terminology is presented;
- takeover-validation experience and evidence capture;
- how omission diagnostics communicate limitations and avoid warning fatigue.

These are L4 questions. PX-001 may propose architecture revision only through an explicit cross-level Observation, Evidence, Proposal, and Decision Record.

## Sole next objective

Run **PX-001 — Product Experience**.

Primary question:

> How can the validated Context Pack and Handoff architecture deliver useful first value within ten minutes, remain understandable and recoverable, and preserve authority boundaries across human and executor handoffs?

## Required inputs for PX-001

Read in this order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/PX-001-product-experience/context-pack.yaml`
5. `docs/10-product/product-foundation.md`
6. `docs/30-target-architecture/target-architecture.md`
7. `docs/50-validation/product-falsification-report.md`
8. `docs/90-state/program-state.md`
9. `decisions/DR-0004-do-not-establish-engineering-continuity-category.md`
10. `decisions/DR-0005-separate-goal-and-guard.md`
11. `decisions/DR-0006-narrow-product-boundary.md`
12. `decisions/DR-0007-narrow-continuity-kernel.md`
13. `decisions/DR-0008-local-first-artifact-authority.md`
14. `decisions/DR-0009-typed-read-oriented-providers.md`
15. `decisions/DR-0010-separate-pack-definitions-from-context-packs.md`
16. `decisions/DR-0011-explicit-context-formation-pipeline.md`
17. this handoff

## Explicit exclusions for PX-001

- raw PF-001, RI-001, or TA-001 chat transcripts;
- full Nestfolio repository unless a narrow experience fact requires it;
- implementation code;
- detailed migration sequencing;
- final commercial naming, packaging, or pricing;
- reintroduction of product-owned backlog, Guard lifecycle, execution orchestration, learning, or universal Console;
- hosted organization governance and analytics.

## Required PX-001 outputs

- `docs/40-product-experience/product-experience.md`;
- relevant Decision Records for high-impact experience choices;
- updated `docs/90-state/program-state.md` with G4 result;
- updated `docs/90-state/artifact-index.md`;
- `sessions/PX-001-product-experience/session-handoff.md`;
- complete changed-file list and updated repository ZIP.

## PX-001 completion criteria

- onboarding and ten-minute first value are concrete;
- Context Pack formation, validation, authorization, export, expiration, and reformation are understandable;
- Handoff creation, publication, successor use, and takeover validation are concrete;
- scope, exclusions, authority, evidence, uncertainty, and pending decisions are explainable;
- deterministic diagnostics and judgment/human decisions are visibly distinct;
- provider failure, stale state, contradiction, interrupted operation, and recovery UX are specified;
- executor switching and human-only adoption are supported;
- CLI and optional Console roles remain bounded and non-authoritative;
- progressive adoption does not require backlog, CI, Guard, or agent migration;
- G4 passes or fails explicitly without silently changing L1-L3 decisions.

## Continuity test

A new competent agent can start PX-001 from the repository, its Context Pack, and this handoff without reading the TA-001 conversation.
