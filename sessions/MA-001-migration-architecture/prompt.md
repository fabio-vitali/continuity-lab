# MA-001 — Migration Architecture

You are running iteration **MA-001 — Migration Architecture** for the Continuity product-development program.

Use the uploaded `continuity-lab` repository as the only canonical project memory. Do not rely on previous chats.

Do not use, inspect, or request the Nestfolio repository by default. The canonical Current Runtime Map is the primary current-system authority. A narrowly scoped, read-only Nestfolio source request is permitted only under the explicit evidence-gap rule in the active MA-001 Context Pack.

This is an **L5 Migration and Delivery Architecture design iteration**. Do not implement Continuity, execute migration slices, or create implementation artifacts.

## 1. Verify authorization before doing any design work

Read `docs/90-state/program-state.md` first and stop without modifying files unless it records all of the following consistently:

- TA-002 is complete and G3 is passed and valid;
- VS-001 is complete and its historical FAIL is preserved;
- VS-001A is complete with PASS and G6 is passed on the combined evidence;
- PX-001 is complete with unconditional PASS and G4 is passed and valid;
- the accepted Product Experience is canonical;
- `DR-0022` authorizes MA-001 as the sole next iteration;
- the active MA-001 contract is prepared under `sessions/MA-001-migration-architecture/` and has status `authorized-not-started`;
- MA-001 has not run, `docs/60-migration/migration-plan.md` does not yet exist, and no G5 result exists;
- migration implementation, broader implementation, later vertical slices, Console implementation, universal integrations, hosted-service work, commercial-control-plane work, and broad Nestfolio migration remain blocked.

If any condition is inconsistent, apply the canonical contradiction rule: stop without modifying files, report the inconsistency, identify the owning artifacts, and do not silently choose an interpretation.

## 2. Read the active contract and canonical evidence in this exact order

After authorization verification, read:

1. `sessions/MA-001-migration-architecture/context-pack.yaml`
2. `docs/00-governance/product-development-operating-model.md`
3. `docs/00-governance/artifact-governance.md`
4. `docs/00-governance/design-levels.md`
5. `docs/10-product/product-foundation.md`
6. `docs/20-current-system/current-runtime-map.md`
7. `docs/30-target-architecture/target-architecture.md`
8. `docs/40-product-experience/product-experience.md`
9. `docs/70-implementation/vs-001-resumable-agent-work-session.md`
10. `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`
11. `docs/90-state/program-state.md`
12. `docs/90-state/artifact-index.md`
13. Decision Records `DR-0012` through `DR-0022`, in numeric order
14. `sessions/TA-002-target-architecture-revision/session-handoff.md`
15. `sessions/VS-001-resumable-agent-work-session/session-handoff.md`
16. `sessions/VS-001A-claude-code-session-confirmation/session-handoff.md`
17. `sessions/PX-001-product-experience/session-handoff.md`
18. `sessions/MA-001-migration-architecture/session-handoff.md` as a prepared, unused placeholder only

Do not use TA-001 as an active baseline. Do not use prior conversations or hidden executor state.

## 3. Primary question

> Can the accepted TA-002 architecture and PX-001 Product Experience be introduced incrementally and reversibly from the validated current runtime, with independent-value slices, explicit compatibility and rollback, preserved authority boundaries, and no big-bang rewrite?

Preserve these governing facts:

- Continuity is a repository-native framework for sustained coding-agent work;
- Claude Code is the first and primary executor;
- Nestfolio is the first dogfooding environment, not the universal framework model;
- Current Runtime Map facts are current-system authority;
- TA-002 owns target architecture and classification boundaries;
- PX-001 owns the cumulative adoption experience and truthful guarantees;
- VS-001 remains historical FAIL while its repository-mechanics evidence remains valid;
- VS-001A provides genuine Claude Code executor evidence and combined G6 PASS;
- G5 must be decided before any broader implementation or migration execution.

## 4. Build the current-to-target capability mapping

Create a traceable matrix covering every relevant current runtime feature family, ring, state family, entry point, workflow, and invariant needed for the migration decision.

For each current capability record:

- Current Runtime Map evidence and implementation status: implemented, partially implemented, documented but not implemented, test-only, or absent;
- current owner, writer, storage, readers, and authority;
- accepted target classification: Framework Core, Application Services, Repository Infrastructure, Claude Code Adapter, reusable Pack, Nestfolio Pack or project binding, external integration, deferred, or rejected;
- disposition: retain, wrap, adapt, migrate, replace, defer, reject, or retire;
- target owner and authority;
- migration slice or explicit reason no migration is required;
- compatibility, coexistence, cutover, rollback, and retirement implications;
- canonical evidence and Decision references.

Do not assume every current capability should migrate. Do not infer missing current facts from desired target behavior.

## 5. Define independently valuable migration slices

Define a bounded sequence of migration slices. Every slice must:

- have a stable identifier and descriptive name;
- deliver independent user value rather than only internal scaffolding;
- map explicitly to one or more PX-001 cumulative adoption levels;
- state prerequisites and dependencies;
- state the current capability and target capability delta;
- state which architectural components participate: Framework Core, Application Services, Repository Infrastructure, Claude Code Adapter, reusable Packs, Nestfolio Pack or project binding, and external authorities;
- identify current, transitional, and target source-of-truth ownership;
- define explicit coexistence rules when current and target mechanisms overlap;
- define artifact, state, procedure, command, and operational compatibility;
- identify data or state interpretation/transformation ownership without schemas, code, or implementation design;
- define criterion-linked validation and required Evidence;
- define required failure cases;
- define rollback, abandonment, recovery, cutover, deprecation, and retirement paths;
- state explicit exclusions and adjacent work that remains blocked;
- state the evidence produced by the slice and how it justifies or invalidates the next slice.

The sequence must preserve practical first value and follow risk and evidence, not feature breadth or a desire to reproduce the whole current runtime.

## 6. Map slices to the PX-001 cumulative adoption levels

Use the accepted six levels exactly:

1. repository instructions and one Skills-only Procedure;
2. reusable Skills/Procedures and Pack locking;
3. local Work selection, Working Set, Scope, and completion criteria;
4. formed, validated, and authorized Context Packs;
5. resumable Runs, Checkpoints, Handoffs, and fresh-session resume;
6. validation, Evidence-bound completion, Guards, Decisions, and reviewed learning.

For every slice and level transition define:

- active and absent guarantees;
- artifacts introduced or reused;
- compatibility with earlier-level artifacts;
- optional upgrade path;
- downgrade or disable behavior;
- history preservation;
- failure behavior;
- conditions under which a repository may remain at that level safely.

Do not create incompatible miniature products, automatic upgrades, silent downgrade, or false completion guarantees.

## 7. Define compatibility, coexistence, authority, and transformation ownership

Produce an authority and source-of-truth ledger for all migration-relevant state, including as applicable:

- current checks, triggers, exclusions, findings, lessons, backlog items, journal state, audit evidence, and projections;
- Work Items, WorkSelection, Working Sets, Epics, Scope, criteria, Context Packs, Formation Traces, Pack locks, Sessions, Runs, effects, Checkpoints, Handoffs, Validation Results, Evidence, Guards, Waivers, Decisions, Observations, Lessons, and Change Proposals;
- Git, issue, PR, CI, deployment, security, ADR, and other external objects.

For every transition specify:

- current owner;
- temporary transitional owner;
- target owner;
- permitted writers and readers;
- synchronization or derivation direction;
- conflict and staleness handling;
- audit and provenance requirements;
- cutover and retirement conditions.

Never allow dual unqualified authority. External systems remain authoritative for their objects; Continuity remains authoritative for its local agent-work representation and execution history.

Where state must be interpreted, imported, exported, bridged, shadowed, frozen, superseded, or transformed, assign ownership and validation obligations without designing schemas or code. Preserve revisions, digests, provenance, effect keys, Decisions, Evidence, and readable history.

## 8. Define component transition paths

Define the incremental transition of:

- **Framework Core** — stable lifecycle and authority semantics only;
- **Application Services** — orchestration through declared commands and ports;
- **Repository Infrastructure** — canonical artifacts, operational Run state, repository identity, atomicity, CAS, leases, recovery, audit, and rebuildable projections;
- **Claude Code Adapter** — executor commands, Skills, hooks, start/resume views, capability mapping, and result capture without canonical executor-owned state;
- **reusable Packs** — portable Procedures, validators, Guards, context recipes, Evidence collectors, and executor assets with exact locking;
- **Nestfolio Pack or project binding** — project-specific backlog, topology, validators, deploy procedures, routing, Guards, and Lessons;
- **external authorities and integration ports** — only narrow concrete-use integrations with explicit ownership.

Do not move Nestfolio-specific behavior into Framework Core without repeated cross-project evidence and a new Decision.

## 9. Evaluate every required migration scenario

Run and record PASS or FAIL observations for all scenarios `M1` through `M16` in the active Context Pack, including:

- Level 1 procedure-first adoption;
- Pack locking and reusable-procedure coexistence;
- local Work and Scope transition;
- Context Pack introduction and explicit authorization;
- operational Run-state transition;
- genuine fresh-session continuity;
- Assurance and completion transition;
- governed Decision and learning transition;
- Nestfolio project-binding preservation;
- external-authority coexistence;
- partial adoption and downgrade;
- failed-slice rollback;
- concurrent current and target mechanisms;
- stale, corrupt, or divergent state;
- no-Console migration;
- complete no-big-bang path.

Walk through rollback and recovery, not only happy paths. A scenario cannot pass merely because an implementation detail might be solved later; authority, compatibility, reversibility, ownership, and evidence must already be structurally clear.

## 10. Order migration by risk and evidence

Justify ordering using at least:

- user value and time to first useful adoption;
- uncertainty reduction;
- authority and source-of-truth risk;
- reversibility and blast radius;
- dependency unlocks;
- availability of current evidence;
- ability to produce decisive validation Evidence;
- protection against premature generalization;
- maintenance and coexistence cost.

Identify explicit cutover, deprecation, and retirement points. Do not preserve rejected complexity merely for compatibility.

## 11. Evaluate serious alternatives

Evaluate, and accept, defer, or reject with rationale:

- big-bang rewrite;
- preserve and migrate every current Nestfolio capability;
- greenfield target runtime beside the current runtime with indefinite duplication;
- schema-first or universal-API-first generalization;
- direct migration from current implementation to full Level 6;
- mandatory local Console;
- hosted service or commercial control plane;
- universal integrations;
- multi-executor parity before concrete evidence;
- automatic promotion of project behavior into Framework Core.

Big-bang rewrite and premature generalization must remain rejected unless new canonical evidence exposes a genuine contradiction requiring a higher-level revision.

## 12. Handle current-system evidence gaps narrowly

Treat `docs/20-current-system/current-runtime-map.md` as the primary current-system authority.

Do not request or inspect Nestfolio unless all conditions in `future_nestfolio_source_inspection` are satisfied. Before any permitted request, record:

- the exact unresolved fact;
- why it is essential to G5;
- why a bounded assumption or later implementation discovery is unsafe;
- the exact repository revision;
- exact paths, symbols, tests, or evidence requested;
- the maximum inspection scope;
- the migration conclusion that remains blocked without it.

If essential evidence is unavailable, stop the affected conclusion and do not fabricate G5 PASS. Do not conduct broad source discovery and do not modify Nestfolio.

## 13. Architectural contradiction rule

Do not change Product Foundation, TA-002, PX-001, validation reports, or accepted Decisions silently.

When a viable migration appears impossible within accepted boundaries:

1. state the exact migration need and scenario;
2. identify the conflicting owning artifact, Decision, lifecycle, authority rule, or invariant;
3. classify it as a blocking contradiction or a non-structural implementation question;
4. stop the affected migration path;
5. record an Observation and explicit revision proposal;
6. create a Decision Record only if a genuine high-impact choice is justified and accepted under governance;
7. do not rewrite L1, L3, or L4 inside the migration plan by implication.

An unresolved blocking contradiction forces G5 FAIL. Non-structural implementation questions must be separated, assigned to the slice where evidence becomes available, and given a safe default or stop condition.

## 14. Prohibitions

Do not:

- create or modify implementation code, tests, schemas, adapters, stores, Skills, hooks, Console code, Pack assets, or Nestfolio artifacts;
- execute a migration slice or broad feature migration;
- inspect or request Nestfolio except under the exact narrowly scoped evidence-gap rule;
- rerun, rewrite, or reinterpret `run-vs001` or `run-vs001a`;
- silently modify Product Foundation, Target Architecture, Product Experience, validation reports, or accepted Decisions;
- move Nestfolio-specific behavior into Framework Core without repeated evidence and a Decision;
- create universal integrations, multi-executor parity, hosted services, RBAC, analytics, billing, commercial packaging, or a commercial control plane;
- make CLI, Console, transcript, chat, hidden executor state, provider cache, or derived projection canonical;
- combine Goal and Guard;
- permit automatic Observation/Lesson promotion;
- pre-authorize implementation before G5;
- declare a conditional, partial, provisional, or caveated G5 PASS;
- authorize more than one next iteration.

## 15. Create or update only these files

Create or update exactly as justified by this contract:

- `docs/60-migration/migration-plan.md`
- relevant new `decisions/DR-*.md` only when a genuine high-impact migration choice or accepted contradiction resolution requires one
- `docs/90-state/program-state.md`
- `docs/90-state/artifact-index.md`
- `sessions/MA-001-migration-architecture/context-pack.yaml`
- `sessions/MA-001-migration-architecture/prompt.md`
- `sessions/MA-001-migration-architecture/session-handoff.md`
- `README.md`
- `CONTINUITY-NEXT-STEPS.md`
- `docs/60-migration/README.md`
- `docs/70-implementation/README.md` only if needed to keep implementation authorization and blockers consistent with the result

Do not modify any other file. If a required contradiction resolution would need changes outside this list, record the blocking revision proposal, issue G5 FAIL when appropriate, and authorize a separate next iteration rather than expanding MA-001 silently.

Rules for session files:

- preserve the original contract requirements in `context-pack.yaml`; append a clearly separated `final_result` section rather than rewriting the contract after seeing the outcome;
- preserve this prompt byte-for-byte as the exact executed instruction; do not rewrite it to match the result;
- replace the prepared unused `session-handoff.md` placeholder with the completed MA-001 handoff;
- include exact observations, decisions, scenario results, contradictions, changed files, G5 result, and exactly one next authorized iteration in the completed handoff.

## 16. Required migration-plan contents

`docs/60-migration/migration-plan.md` must contain at least:

- authority, scope, epistemic framing, and the primary question;
- validated current-state summary;
- current-to-target capability matrix;
- migration principles and invariants;
- authority and source-of-truth ledger;
- compatibility and coexistence matrix;
- independently valuable migration slices with PX-001 adoption-level mapping;
- component transition paths;
- state transformation ownership and audit requirements without implementation detail;
- validation and criterion-linked Evidence contract for every slice;
- rollback, abandonment, recovery, cutover, deprecation, and retirement paths;
- risk- and evidence-based ordering and dependencies;
- results for every required scenario;
- serious accepted, deferred, and rejected alternatives;
- blocking contradictions separated from non-structural implementation questions;
- unconditional G5 PASS or FAIL rationale;
- exactly one evidence-justified next iteration.

## 17. G5 decision and closure

Issue exactly one unconditional result:

- **PASS** only if every completion criterion in the Context Pack is satisfied conjunctively and the accepted TA-002/PX-001 target can be reached through independently valuable, compatible, authority-safe, reversible slices with no big-bang rewrite;
- **FAIL** if any essential capability has no safe target disposition, any required transition needs ambiguous dual authority or an unavoidable coordinated rewrite, any required slice lacks independent value or rollback, any required scenario fails structurally, essential current-system evidence is unavailable, or any blocking contradiction remains unresolved.

Conditional or partial PASS is prohibited. Do not hide failed criteria or missing essential evidence under risks, assumptions, future work, or implementation questions while declaring PASS.

After PASS or FAIL:

- preserve useful evidence and rejected alternatives;
- append the final result to the Context Pack without rewriting the original contract;
- update Program State, Artifact Index, navigation, and blockers consistently;
- authorize exactly one evidence-justified next iteration;
- do not assume the next iteration is implementation;
- keep every other iteration blocked;
- write an executable completed handoff that allows a competent fresh agent to continue without prior chat.

## 18. Return

Return a ZIP containing the complete updated `continuity-lab` repository.

Also return an exact changed-file manifest and state explicitly:

- the unconditional G5 result;
- whether a blocking contradiction was found;
- that no migration slice was executed;
- that no implementation artifact was created or modified;
- the exactly one next authorized iteration;
- all work that remains blocked.
