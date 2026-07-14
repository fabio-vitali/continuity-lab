# PX-001 — Product Experience

You are running iteration **PX-001 — Product Experience** for the Continuity product-development program.

Use the uploaded `continuity-lab` repository as the only canonical project memory. Do not rely on previous chats. Do not use, inspect, or request the Nestfolio repository.

This is an **L4 Product Experience design iteration**. Do not implement Continuity, do not create migration architecture, and do not run another vertical slice.

## 1. Verify authorization before doing any design work

Read canonical Program State and stop without modifying files unless it records all of the following consistently:

- TA-002 is complete and its revised Target Architecture is accepted;
- G3 is passed and valid;
- VS-001 is complete and its historical FAIL is preserved;
- VS-001A is complete with PASS;
- G6 is passed on the combined VS-001 and VS-001A evidence;
- PX-001 — Product Experience is the sole authorized next iteration;
- the active PX-001 context pack and prompt are the newly authored contract dated 2026-07-14, not the superseded TA-001-derived versions preserved in Git history;
- MA-001, migration architecture, broader implementation, later vertical slices, and unrelated migration work remain blocked.

If any condition is inconsistent, apply the canonical contradiction rule: stop, record the inconsistency only if authorized to do so, and do not silently choose an interpretation.

## 2. Read in this order

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/PX-001-product-experience/context-pack.yaml`
5. `docs/10-product/product-foundation.md`
6. `docs/30-target-architecture/target-architecture.md`
7. `docs/50-validation/product-falsification-report.md`
8. `docs/70-implementation/vs-001-resumable-agent-work-session.md`
9. `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`
10. `docs/90-state/program-state.md`
11. `docs/90-state/artifact-index.md`
12. Decision Records `DR-0012` through `DR-0018`
13. `sessions/TA-002-target-architecture-revision/session-handoff.md`
14. `sessions/VS-001-resumable-agent-work-session/session-handoff.md`
15. `sessions/VS-001A-claude-code-session-confirmation/session-handoff.md`
16. `sessions/PX-001-product-experience/session-handoff.md` as a superseded unused placeholder only

Do not recover the old TA-001-derived PX-001 context pack or prompt from Git history except to verify provenance. They have no active design authority.

## 3. Primary question

> Can the validated repository-native Continuity loop be given a viable product experience — onboarding, primary workflows, progressive disclosure, adoption levels, error and recovery UX, human decision UX, and context explainability — without violating the accepted TA-002 architecture?

Preserve the practical product premise:

- Continuity is a repository-native framework for coding agents working on medium-to-complex repositories;
- Claude Code is the first and primary executor;
- Nestfolio is the first dogfooding environment;
- humans remain operators, reviewers, decision authorities, and collaborators;
- human-readable inspection and handoff are useful qualities, not an agentless product position;
- the operational loop is:

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

## 4. Design the complete product experience

Produce concrete, end-to-end, user-visible designs for all of the following.

### Installation, onboarding, and first value

Define:

- installation or invocation prerequisites;
- repository activation and safe discovery;
- the minimum initial configuration and how missing configuration is diagnosed;
- useful first value within ten minutes;
- what first value means at each adoption level;
- how a user can begin without migrating enterprise systems or adopting the complete Run model immediately;
- how the experience avoids false completeness when repository continuity artifacts are missing.

### Work selection and start

Define:

- discovery and selection of a Work Item or Working Set;
- candidate comparison, exclusions, dependencies, blockers, ranking rationale, and human override;
- visible Scope, exclusions, constraints, expected outputs, completion criteria, required Evidence, current revisions, and authority;
- Session and Run preparation and the point at which Claude Code is allowed to start;
- the difference between inspecting, preparing, authorizing, and executing.

### Context Pack lifecycle and explainability

Define concrete workflows for:

- formation;
- inspection;
- validation;
- authorization;
- delivery to Claude Code;
- rejection;
- expiration;
- revocation;
- staleness;
- refresh;
- reformation;
- supersession.

For every Context Pack, make explainable and actionable:

- included sources and why they were selected;
- excluded sources and why they were excluded;
- source authority and owning artifact or external authority;
- exact revisions, digests, Pack lock, and repository identity;
- known uncertainty and confidence limitations;
- contradictory inputs and required human Decisions;
- stale, missing, corrupt, or unavailable inputs;
- missing Evidence or completion coverage;
- what the executor received versus what remains available for inspection;
- what changed between versions;
- why the Context Pack is valid, invalid, rejected, stale, revoked, expired, or superseded.

Do not change the TA-002 Context Pack lifecycle or mutate an authorized Context Pack. Design the experience over the accepted semantics.

### Claude Code work continuity

Define the user experience for:

- starting Claude Code from an authorized adapter-produced view;
- understanding active Work, Working Set, Scope, Procedure, Guards, Decisions, and required Evidence;
- executing and recording material keyed effects;
- deliberate checkpointing;
- interruption, crash, or Session end;
- Handoff validation and publication;
- separately invoked fresh-session discovery and resume;
- repository, Context Pack, Pack lock, Skill asset, lease, and revision freshness checks;
- effect deduplication and outcome-unknown effects;
- validation and Evidence attachment;
- completion, cancellation, partial return, or return to backlog;
- recording an Observation and candidate Lesson without automatic promotion.

Preserve the validated VS-001 and VS-001A facts. Do not rerun, rewrite, or reinterpret `run-vs001` or `run-vs001a`.

### Human Decisions and judgment boundaries

Define how the experience requests, explains, records, defers, rejects, supersedes, and resumes after human Decisions for at least:

- Scope expansion;
- contradictory authority;
- Guard conflict or waiver;
- unavailable required validation;
- unsafe retry or unknown non-idempotent effect;
- judgment-based validation;
- degraded context authorization;
- concurrent ownership transfer;
- candidate Lesson acceptance or rejection;
- promotion into a Skill, Guard, validator, rule, Pack, or project binding.

Keep deterministic Evidence, agent judgment, human judgment, external references, and waivers visibly distinct. No narrative or model confidence may silently substitute for authority.

### Failure, recovery, and retry

Design the user-visible state, safe default, permitted actions, required authority, and recovery path for every required failure in the Context Pack, including:

- stale repository, Work, Scope, Context Pack, Decision, Guard, Pack, or Skill asset;
- lease conflict or concurrent writer;
- failed, missing, stale, invalid, unsupported, or unavailable Evidence;
- unavailable provider, validator, permission, external reference, or Claude capability;
- retryable, completed, deduplicated, compensated, failed, or outcome-unknown effect;
- corrupt or missing derived state;
- ambiguous canonical corruption or divergence;
- invalid Checkpoint or Handoff;
- hidden Scope expansion;
- unresolved human Decision;
- cancellation with partial work.

Do not use optimistic success language for blocked, unavailable, stale, invalid, conflicting, or corrupt state. Completion must remain impossible without passing criterion-linked Evidence or an explicit authorized waiver.

### Progressive adoption

Define cumulative, reversible adoption levels beginning with practical Claude Code use and ending with the complete validated loop. At minimum evaluate:

1. repository instructions and one Skills-only procedure;
2. reusable Skills/Procedures and Pack locking;
3. local Work selection, Working Set, Scope, and completion criteria;
4. formed and authorized Context Packs;
5. resumable Runs, Checkpoints, Handoffs, and fresh-session resume;
6. validation, Evidence-bound completion, Guards, Decisions, and reviewed learning.

For every level specify prerequisites, first value, canonical artifacts introduced, commands or interactions exposed, failure behavior, migration to the next level, reversibility, and what remains deliberately absent.

Do not create incompatible miniature products or state models. Earlier artifacts must remain valid inputs to later adoption.

### CLI, Console, and human inspection

Define the CLI as a non-authoritative command and inspection surface over application services and canonical state. Specify its responsibilities, command families, confirmation boundaries, machine-readable output, diagnostics, and forbidden responsibilities.

Make and record an explicit high-impact decision to **require, defer, or reject** a local non-authoritative Console. Evaluate whether it is needed for:

- first value;
- context and authority inspection;
- Run and Checkpoint visibility;
- human Decisions;
- failure diagnosis and recovery;
- team handoff;
- learning review.

A Console may never become a second source of truth, a hosted-service requirement, or a commercial control plane.

Design human-only inspection, review, export, transfer, and Handoff workflows where they add real continuity value. Do not position Continuity as an agentless product or require independent no-agent adoption viability.

### Nestfolio dogfooding

Define how the designed experience is dogfooded in Nestfolio using the accepted architecture and existing validation evidence only. Do not inspect the Nestfolio repository.

Make visible which behavior comes from:

- Framework Core;
- Application Services;
- Repository Infrastructure;
- Claude Code Adapter;
- reusable Packs;
- the Nestfolio Pack or project binding;
- external authorities.

Do not move Nestfolio-specific backlog conventions, repository topology, validators, deployment procedures, routing, or local Lessons into Framework Core without repeated evidence and a new Decision.

## 5. Required methods and evidence

Apply every method and scenario in the active Context Pack.

At minimum, the Product Experience document must contain:

- an actor and entry-point model;
- an information architecture for the primary objects and states;
- a complete workflow map for the operational loop;
- a first-install and ten-minute-value cognitive walkthrough;
- progressive-adoption levels;
- Context Pack explainability and lifecycle views;
- human Decision and judgment-boundary mapping;
- CLI responsibility model;
- explicit Console disposition;
- failure/recovery/retry matrix;
- conceptual scenario tests with pass/fail observations;
- a TA-002 conformance matrix;
- serious alternatives considered, accepted, deferred, or rejected;
- unresolved non-structural implementation questions clearly separated from blocking product-experience contradictions.

Compare the proposed experience against disciplined alternatives such as Claude Code Skills, repository instructions, a simple backlog file, Git, issues, CI, ADRs, manual notes, and manual handoffs. Do not claim value merely because the experience is more structured.

## 6. Architectural contradiction rule

Do not change accepted TA-002 architectural boundaries silently.

When a product-experience requirement appears impossible within TA-002:

1. state the exact user need and scenario;
2. identify the conflicting TA-002 Decision, ownership rule, lifecycle, authority, or invariant;
3. classify it as a blocking contradiction or a non-structural implementation question;
4. stop the affected design path;
5. record an Observation and explicit revision proposal;
6. create a Decision Record only if the higher-level revision is accepted under governance;
7. do not redesign L3 architecture inside the Product Experience document by implication.

A blocking unresolved contradiction forces G4 FAIL.

## 7. Prohibitions

Do not:

- create or modify implementation code, tests, Skills, hooks, adapters, stores, schemas, or Console code;
- create another implementation vertical slice;
- create migration architecture, migration stages, compatibility plans, or broad Nestfolio migration;
- create a hosted service, commercial control plane, universal Console, RBAC, analytics, billing, or market packaging;
- require universal executor, issue, CI/CD, policy, incident, catalog, or platform integrations;
- position the product as agentless;
- make hidden executor state, chat, transcript, CLI state, Console state, or provider cache canonical;
- introduce a second source of truth;
- combine Goal and Guard;
- permit automatic Observation/Lesson-to-Skill, Guard, validator, rule, Pack, or binding promotion;
- pre-authorize MA-001 or any later iteration before the G4 decision;
- alter Product Foundation, Target Architecture, VS-001/VS-001A reports, or DR-0012 through DR-0018 merely to make the UX easier.

## 8. Create or update these files

Create or update exactly as justified by the active Context Pack:

- `docs/40-product-experience/product-experience.md`
- relevant new superseding `decisions/DR-*.md`, using the next available identifiers
- `docs/90-state/program-state.md`
- `docs/90-state/artifact-index.md`
- `sessions/PX-001-product-experience/context-pack.yaml`
- `sessions/PX-001-product-experience/prompt.md`
- `sessions/PX-001-product-experience/session-handoff.md`

Rules for the session files:

- preserve the original active contract requirements in `context-pack.yaml`; append a final `result` section rather than rewriting the acceptance contract after seeing the outcome;
- preserve this exact executed prompt as the historical instruction; only add a clearly separated non-normative completion note if artifact governance requires it;
- replace the superseded unused handoff placeholder with the completed PX-001 handoff;
- preserve the old TA-001-derived contract only through Git history; do not create duplicate active or historical copies in the working tree.

Do not create `docs/60-migration/migration-plan.md` or any implementation artifact.

## 9. G4 decision and closure

Issue exactly one unconditional result:

- **PASS** only if every completion criterion in the Context Pack is satisfied, the complete validated operational loop has a coherent and conceptually tested experience, a credible ten-minute first-value path exists, failure and recovery fail safely, and no blocking TA-002 contradiction remains;
- **FAIL** if any essential workflow, authority boundary, explainability need, recovery path, adoption path, or human-decision boundary is not viable within accepted TA-002 constraints, or if a blocking contradiction remains unresolved.

Conditional or partial PASS is prohibited. Do not hide missing work or blocking uncertainty in a risk section while declaring PASS.

After PASS or FAIL:

- preserve all useful evidence and rejected alternatives;
- update Program State and Artifact Index consistently;
- authorize exactly one evidence-justified next iteration;
- do not assume the next iteration is MA-001;
- keep every other later iteration blocked;
- write an executable handoff that allows a competent fresh agent to continue without prior chat.

At the end, return a ZIP containing the complete updated `continuity-lab` repository and list every changed file.
