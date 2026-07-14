---
artifact_id: PRODUCT-EXPERIENCE
status: validated
owner: product-experience
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Product Experience

## 1. Purpose, authority, and PX-001 result

This artifact is the accepted L4 Product Experience produced by **PX-001 — Product Experience**.

It answers:

> Can the validated repository-native Continuity loop be given a viable product experience — onboarding, primary workflows, progressive disclosure, adoption levels, error and recovery UX, human decision UX, and context explainability — without violating the accepted TA-002 architecture?

**Answer: yes. Gate G4 passes unconditionally on 2026-07-14.**

The experience is viable because it can:

- provide useful Claude Code value before the complete Run model is adopted;
- disclose exactly which continuity guarantees are and are not active;
- keep repository-local artifacts and the declared operational store authoritative;
- make Context Pack authority, provenance, omissions, revisions, and invalidity inspectable;
- resume a fresh Claude Code Session from a verified Checkpoint and Handoff without transcript authority;
- fail closed on stale, conflicting, unavailable, invalid, or corrupt state;
- preserve human authority for material judgment and governance changes;
- support cumulative adoption without incompatible miniature products;
- remain operable through a non-authoritative CLI and Claude Code adapter without requiring a Console or hosted service.

No blocking contradiction with TA-002 was found. Expiration and rejection are presented as user-visible causes or dispositions over the accepted Context Pack lifecycle, not as new Core lifecycle states. Exact serialization, packaging, command spelling, and visual presentation remain non-structural implementation questions.

Decision references:

- `DR-0019` — cumulative adoption with explicit guarantee levels;
- `DR-0020` — explicit human Context Pack authorization by default;
- `DR-0021` — defer a local non-authoritative Console;
- `DR-0022` — authorize MA-001 after G4 PASS while keeping implementation blocked.

## 2. Epistemic framing

### Validated observations

- TA-002 defines coherent Work, Scope, Context Pack, Session, Run, Checkpoint, Handoff, Evidence, Decision, Guard, Pack, and Learning lifecycles.
- VS-001 demonstrated repository-local state, revision safety, leases, effect deduplication, failure handling, Evidence-bound completion, and rebuildable derived state.
- VS-001A demonstrated real Claude Code bootstrap, a first Session boundary, a separately invoked fresh Session, freshness validation, and keyed-effect deduplication without transcript dependence.
- The repository-native loop can therefore be exposed rather than invented by Product Experience.
- A universal Console, hosted service, enterprise-system migration, and broad integration surface are not required for the loop.

### Accepted experience decisions

- Adoption is cumulative across six levels; every level states its active guarantees and deliberate absences.
- A formed Context Pack is inspected and explicitly authorized by a human by default. Deterministic auto-authorization is opt-in policy, never an implicit convenience.
- The initial product surfaces are Claude Code, a non-authoritative CLI, and human-readable repository artifacts.
- A local Console is deferred until evidence shows that CLI and artifact inspection are insufficient.
- Every blocked, stale, invalid, unavailable, conflicting, or corrupt condition uses literal non-success language and presents only safe actions.

### Rejected experience assumptions

- “Installed” does not mean “fully governed.”
- A generated summary is not authoritative context.
- A commit is not proof of completion.
- Model confidence is not authority.
- An old transcript is not a resume mechanism.
- A dashboard is not required to make the product understandable.
- Existing issue, CI, Git, ADR, or policy systems are not copied merely to make Continuity appear complete.

## 3. Experience principles

1. **Show the active guarantee level.** Every entry point states which Continuity guarantees are active and which are absent.
2. **Inspect before effect.** Discovery and diagnostics are read-only until the user invokes a command with a declared transition.
3. **Separate preparation from authorization.** Forming, validating, authorizing, delivering, and executing are distinct steps.
4. **No silent authority.** Every source, Decision, Guard, waiver, override, and external reference shows its owner and revision.
5. **No optimistic failure language.** “Blocked,” “stale,” “invalid,” “unavailable,” “conflicting,” and “corrupt” are not softened into “ready with warnings.”
6. **Resume from durable state.** The exact next action comes from the verified Checkpoint and published Handoff, not from remembered conversation.
7. **Make omissions visible.** Excluded, unavailable, over-limit, and intentionally deferred sources are listed with reasons.
8. **Preserve immutable evidence.** Authorized Context Packs, verified Checkpoints, published Handoffs, Evidence envelopes, and resolved Decisions are not rewritten for convenience.
9. **Prefer the smallest useful layer.** Users may begin with Skills and Packs before adopting Work, Context Packs, Runs, or Assurance.
10. **Keep project semantics in the project binding.** Nestfolio conventions remain visibly supplied by the Nestfolio Pack or binding.

## 4. Actors and entry-point model

| Actor | Primary intent | Entry points | Authority | Must never do directly |
|---|---|---|---|---|
| Developer/operator | Select, authorize, start, inspect, pause, resume, validate, complete, or return work | Claude Code commands, CLI, repository artifacts | Human authority for declared local work and delegated policies | Edit operational state to force transitions; treat chat as state |
| Reviewer/decision authority | Resolve judgment, approve waivers, review Evidence, accept or reject Lessons | CLI decision/review commands, Markdown/YAML review, exported review bundle | Explicit named or role-based authority for the decision scope | Convert agent confidence into approval; approve hidden Scope |
| Claude Code executor | Perform bounded procedure steps and report structured results | Adapter-produced start/resume view, Skills, hooks, subagents | Only the capabilities and Scope delivered by the authorized Run | Write canonical stores directly; redefine lifecycle or authority |
| Application service | Coordinate commands and transitions | Invoked by CLI or adapter | Aggregate transition authority under accepted policy | Invent authority or bypass preconditions |
| Repository infrastructure | Persist, compare revisions, lease, inspect repository, rebuild projections | Internal port implementation | Storage and recovery authority only | Decide product meaning or human judgment |
| Pack or project binding | Supply procedures, ranking rules, validators, Guards, context recipes, and local conventions | Pack resolution during activation, context formation, and execution | Authority declared by manifest, binding, and lock | Add Core states, silently weaken Guards, or acquire undeclared capabilities |
| External authority | Remain authoritative for an external issue, CI result, PR, ADR, security result, or deployment state | Typed reference and resolver | Authority over the referenced external object | Mutate Continuity aggregates or imply local completion |
| Human-only successor | Inspect and take over work without an active agent | Handoff, inspection bundle, CLI read commands | Human review and explicit takeover authority | Depend on hidden executor state |

### Entry-point modes

Every entry point is visibly one of four modes:

| Mode | Meaning | May mutate canonical state? | Example |
|---|---|---:|---|
| **Inspect** | Read canonical state, derived views, and diagnostics | No | `continuity context show`, `continuity run status` |
| **Prepare** | Build a candidate or request a transition whose preconditions are not yet satisfied | Candidate artifacts only; no execution effects | `continuity run prepare`, `continuity context form` |
| **Authorize** | Apply explicit human or configured policy authority to a validated candidate | Yes, through application services | `continuity context authorize`, `continuity waiver authorize` |
| **Execute** | Begin or continue effects under an authorized Run | Yes, within Scope and effect rules | `continuity run start`, adapter procedure execution |

The interface always names the current mode. A command that starts in inspect mode cannot acquire mutation authority because a prompt was ambiguous.

## 5. Information architecture

### 5.1 Primary objects

The primary experience is organized around the current **Work effort**, not around files or a global dashboard.

```text
Work Item / Working Set
  ├─ Scope and completion criteria
  ├─ selected Procedure and Pack lock
  ├─ Context Pack and Formation Trace
  ├─ Run
  │   ├─ Session(s)
  │   ├─ keyed Effects
  │   ├─ Checkpoint(s)
  │   ├─ Handoff(s)
  │   └─ Validation Plan
  ├─ Evidence and Waivers
  ├─ Decisions and Guards
  └─ Observations, candidate Lessons, and Change Proposals
```

### 5.2 Primary user-visible views

These are logical views. They may be rendered by Claude Code, CLI text, machine-readable output, or a future Console.

| View | Purpose | Always visible content |
|---|---|---|
| **Activation Diagnostic** | Explain repository readiness and available adoption levels | repository identity, detected artifacts, missing prerequisites, installed Packs, available guarantees, next safe action |
| **Work Candidates** | Compare executable work | candidates, exclusions, dependencies, blockers, ranking inputs, stale metadata, external-reference status, override boundary |
| **Work Brief** | Confirm what is being attempted | objective, exact revision, Working Set, Scope, exclusions, constraints, outputs, criteria, Evidence, authority |
| **Context Review** | Explain and authorize the exact Context Pack | lifecycle state, sources, exclusions, owners, revisions, Pack lock, uncertainty, contradictions, validation, executor delivery view |
| **Run Header** | Keep active execution bounded | Run and Work ids/revisions, Scope digest, Context Pack digest, Procedure, Guards, Decisions, required Evidence, lease, next step |
| **Checkpoint/Resume Card** | Make continuation exact | latest verified Checkpoint, completed effects, unknown effects, changed files, missing Evidence, exact next action, freshness result |
| **Decision Request** | Expose a material judgment boundary | question, trigger, affected objects, options, consequences, Evidence, authority, safe default, blocked transition |
| **Completion Gate** | Prevent unsupported completion | criterion-to-Evidence matrix, Guard status, waivers, stale/conflict checks, unresolved Decisions, final allowed action |
| **Recovery Report** | Diagnose and recover without data loss | failure class, authoritative state, derived state, last known good digest, unsafe actions, permitted recovery, required authority |
| **Learning Review** | Curate reuse without automatic promotion | Observation, Evidence, duplicates, candidate Lesson, target owner, proposed change, validation plan, reviewer outcome |

### 5.3 State vocabulary

| Visible term | User meaning | Safe default |
|---|---|---|
| **Ready** | All declared start/continue preconditions pass | User may explicitly start or continue |
| **Blocked** | A known dependency, Decision, Guard, provider, permission, or capability prevents progress | Do not execute; resolve named blocker |
| **Stale** | A material dependency changed after authorization or checkpointing | Do not continue; classify and refresh/re-form/reconcile |
| **Invalid** | Structure, digest, references, validation, or required content failed | Do not authorize, resume, or publish |
| **Unavailable** | A required actor, provider, validator, permission, or external reference cannot currently be used | Retry only when classified safe; otherwise block or request waiver |
| **Conflicting** | Concurrent ownership or contradictory authority exists | Fail closed; choose owner or resolve Decision |
| **Corrupt** | Integrity cannot be established | Stop mutation; preserve evidence; recover only from verified state |
| **Validation failed** | Required criterion or Guard produced failing Evidence | Completion prohibited |
| **Cancelled with partial work** | Execution intentionally ended but effects or changes remain | Preserve checkpoint/evidence; never mark completed |
| **Completed** | Completion gate passed and authoritative state was updated atomically | No further effects in the completed Run |

### 5.4 Progressive disclosure

| View depth | Intended user | Shown by default | Available on demand |
|---|---|---|---|
| **Novice** | First installation or first procedure | adoption level, one next action, blocking prerequisites, no more than one recommended path | detailed source ledger, revisions, audit |
| **Routine** | Daily operator | Work Brief, Run Header, active blockers, next action, Evidence progress | Formation Trace, full effect journal, authority chain |
| **Diagnostic** | Recovery or conflict | exact revisions/digests, stale reasons, lease owner, unknown effects, last verified state, repair actions | raw canonical artifacts and audit records |
| **Expert/governance** | Pack owner, reviewer, architect | authority, policy, overrides, waivers, promotion proposals, conformance | full provenance, version diffs, machine-readable envelopes |

Progressive disclosure never hides Scope, blocking Guards, unresolved Decisions, required Evidence, stale state, or authorization status from an execution-start screen.

## 6. Installation, activation, onboarding, and ten-minute value

### 6.1 Prerequisites

Minimum prerequisites for inspect-only activation:

- a local Git working copy with a resolvable repository root and identity;
- permission to read repository instructions and selected paths;
- a Continuity distribution capable of invoking the CLI and application services.

Additional prerequisites for Claude Code execution:

- Claude Code installed, authenticated, and capability-detectable;
- permission to install or resolve the selected Pack and executor assets;
- write permission for declared repository-local artifacts and the operational store;
- a project binding or minimal default binding that declares repository identity, executor, Pack lock, and allowed Continuity locations.

Not required:

- a hosted account;
- enterprise procurement;
- issue-tracker migration;
- CI migration;
- external write integrations;
- a Console;
- complete adoption of Work, Run, Assurance, or Learning.

Exact package manager, binary distribution, runtime version, and serialization path are implementation questions for a later authorized iteration.

### 6.2 Safe repository discovery

The first command is read-only:

```text
continuity doctor --repo .
```

It produces an **Activation Diagnostic** and makes no canonical changes. It inspects only bounded repository metadata and declared conventional locations. It reports:

- repository root, identity, branch/worktree, revision, and working-tree state;
- Claude Code availability and relevant capabilities;
- detected repository instructions and executor assets;
- existing Continuity artifacts and their integrity;
- project binding and Pack lock status;
- detectable Work, Scope, Context Pack, Run, Checkpoint, Handoff, Evidence, Decision, Guard, and Learning artifacts;
- external references that are resolvable, stale, unavailable, or not configured;
- the highest adoption level currently supported;
- missing prerequisites for each higher level;
- any corruption, contradiction, stale state, or unsafe partial installation;
- one recommended next safe action and alternatives.

Discovery never scans or uploads the entire repository merely because it is available. It follows declared path policies and reports uninspected areas.

### 6.3 Minimum activation configuration

Activation introduces only the minimum repository-local configuration required for the chosen level:

- repository identity;
- selected adoption level;
- default executor (`claude-code` initially);
- project binding;
- Pack manifest references and exact lock;
- allowed Continuity artifact and operational-state locations;
- capability and permission declarations;
- optional existing external authority references.

The logical configuration is canonical and reviewable. Its exact path and serialization are deferred.

Missing configuration is diagnosed by field and consequence. Example:

```text
BLOCKED: project binding is missing.
Needed for: resolving repository paths and the selected Procedure.
Not affected: inspect-only repository diagnostic.
Safe actions:
  1. create a minimal binding from detected repository facts;
  2. select an existing project Pack;
  3. remain in inspect-only mode.
```

The interface never invents defaults that expand write Scope, authorize capabilities, choose an external authority, or claim a missing validator.

### 6.4 First-install cognitive walkthrough

Target: useful first value within ten minutes in an existing repository without migrating enterprise systems.

| Elapsed target | User action | System response | Cognitive check |
|---:|---|---|---|
| 0–2 min | Run `continuity doctor --repo .` | Activation Diagnostic with repository identity, Claude availability, current guarantees, and blockers | User can explain what Continuity found and did not inspect |
| 2–4 min | Choose **Level 1 — one Skills-only procedure** | Preview of files/configuration to add, exact Pack/asset digest, permissions, and deliberate absences | User knows this does not provide Work, Run, resume, or Evidence-bound completion |
| 4–6 min | Activate the selected Pack/procedure | Canonical Pack lock and project binding are written through application services; self-validation runs | User can identify the procedure authority and remove/disable it later |
| 6–8 min | Inspect the procedure against one real repository task | Claude-ready procedure card shows objective, prerequisites, proposed read/write boundary, expected outputs, and stop conditions | User sees what Claude will receive and what remains ungoverned |
| 8–10 min | Start Claude Code through the adapter | Claude begins from the exact procedure view; the interface continues to show Level 1 guarantees | User receives a practical, bounded repository procedure without a false claim of resumability or completion assurance |

**Ten-minute first value at Level 1:** a real Claude Code procedure is installed, inspected, digest-locked, and launched against a bounded task with explicit prerequisites, permissions, outputs, and stop conditions.

This is stronger than adding an opaque prompt, but deliberately weaker than the full Continuity loop. The product states that difference visibly.

### 6.5 First value by adoption level

| Level | First useful value | Explicitly not claimed |
|---:|---|---|
| 1 | One repository-aware Claude Code procedure can be inspected and run repeatably | work selection, Context Pack authority, Run recovery, Evidence-bound completion |
| 2 | Multiple reusable procedures resolve from an exact Pack lock with capability and asset validation | local backlog semantics, bounded active work, resumability |
| 3 | A user selects coherent local Work, sees ranking/exclusions, declares Scope and completion criteria | formed/authorized context, Checkpoints, Handoffs, completion gate |
| 4 | Claude starts from an explainable, validated, authorized Context Pack | durable interruption recovery and effect deduplication unless Level 5 is active |
| 5 | A Run can checkpoint, publish a Handoff, and resume in a fresh Claude Code Session without transcript dependence | Evidence-bound completion, Guard/waiver governance, reviewed learning unless Level 6 is active |
| 6 | The complete validated loop blocks completion without criterion-linked Evidence or waiver and records reviewed learning | hosted control plane, universal integrations, automatic learning promotion |

### 6.6 Avoiding false completeness

Every routine output includes a compact guarantee header:

```text
Continuity adoption: Level 3 of 6
Active guarantees: Pack lock, local Work selection, Working Set, versioned Scope, completion criteria
Not active: authorized Context Packs, resumable Runs, Evidence-bound completion, governed learning
```

Rules:

- Absent artifacts are reported as **not configured**, not inferred from chat or repository convention.
- A lower level cannot invoke a higher-level transition.
- A generated preview cannot be labeled “authorized Context Pack.”
- A procedure finishing cannot mark Work completed without Level 6 completion semantics.
- A Session ending at Levels 1–4 does not claim resumability.
- Upgrade suggestions are optional and never block the value already available at the current level.

## 7. Work discovery, selection, and start

### 7.1 Candidate discovery

Conceptual command:

```text
continuity work candidates [--for <objective>] [--json]
```

The default candidate set contains only valid `ready` Work Items. The view shows:

- stable id and exact revision;
- objective and optional external authority reference;
- priority/ranking inputs and the Pack rule that interpreted them;
- hard dependencies and blockers;
- active Run or lease conflicts;
- required metadata that is stale or missing;
- proposed Scope breadth;
- expected outputs and completion criteria coverage;
- external-reference status;
- explicit reason each item is included or excluded.

No item is silently chosen when candidates are materially equivalent or ranking data is incomplete.

### 7.2 Candidate comparison and override

The user may:

- accept the top candidate;
- compare two or more candidates;
- exclude an item with rationale;
- request a Working Set proposal;
- override ranking.

A human override records:

- chosen item or set;
- rejected alternatives;
- rationale;
- actor and authority;
- exact candidate revisions;
- whether a dependency or blocker was waived, deferred, or remains blocking.

An override cannot silently bypass a hard dependency, conflicting lease, missing required authority, or invalid Work artifact. Those require the corresponding Decision or recovery flow.

### 7.3 Work Brief

Before selection becomes active, the user sees:

- Work Item and Working Set revisions;
- objective;
- exact Scope and exclusions;
- repository/branch/worktree identity;
- constraints and applicable Decisions;
- expected outputs;
- completion criteria;
- required Evidence and validation modes;
- applicable Guards;
- dependencies, blockers, and external references;
- selected or candidate Procedure;
- ownership and authority;
- current state and allowed next transitions.

### 7.4 Preparing the Session and Run

Preparation sequence:

1. select Work or approve a Working Set;
2. declare or bind an exact Scope version;
3. select a Procedure or explicit execution mode;
4. prepare a planned Run;
5. resolve Pack lock, prerequisites, capabilities, Decisions, Guards, and validation requirements;
6. form and validate a Context Pack;
7. inspect and authorize that exact version;
8. acquire the Run lease;
9. generate a digest-matched Claude Code adapter view;
10. explicitly start.

Claude Code is allowed to begin effects only when the Run is `ready` and the interface confirms:

- authorized Context Pack;
- exact repository and Work revisions;
- valid Pack lock and executor assets;
- no unresolved blocking Decision or Guard;
- required capability grants;
- active lease;
- known effect-key policy;
- declared completion criteria and required Evidence.

A user may inspect or prepare without granting execution authority.

## 8. Context Pack lifecycle and explainability

### 8.1 Experience model over the accepted lifecycle

The accepted TA-002 lifecycle remains:

```text
draft → formed → validated → authorized → stale → superseded
                  ↘ invalid      ↘ revoked
```

Product Experience adds no Core state. It exposes two additional user-visible classifications:

- **rejected** — an authorization request for a non-authorized candidate was explicitly rejected; the candidate remains non-authorized and is retained with its rejection disposition and rationale;
- **expired** — a time or freshness policy caused an authorized version to become `stale`, with `expired` as the reason code.

This preserves TA-002 while making the requested user concepts explicit.

### 8.2 Lifecycle workflow

| User concept | Canonical transition or disposition | What the user sees | Allowed next actions |
|---|---|---|---|
| **Formation** | `draft → formed` plus immutable Formation Trace | selected sources, exclusions, reasons, unresolved gaps, proposed executor view | inspect, change inputs before validation, validate |
| **Inspection** | no transition | full explainability views and version diff | validate, abandon candidate, correct inputs |
| **Validation** | `formed → validated` or `formed → invalid` | structural, authority, digest, Scope, capability, contradiction, and completeness results | authorize validated version; correct and form a new candidate if invalid |
| **Authorization** | `validated → authorized` | authorizer/policy, timestamp, exact digest, permitted Run/Scope, expiry/freshness policy | deliver to adapter, revoke later, form successor |
| **Delivery** | no Context Pack transition; adapter view is derived and digest-linked | exactly what Claude received, omitted inspect-only material, adapter/session provenance | start Run or reject delivery mismatch |
| **Rejection** | explicit non-authorization disposition on candidate | rejecting authority, rationale, required correction, preserved version | change Work/Scope/input and form a new version; abandon |
| **Expiration** | `authorized → stale` with reason `expired` | policy, elapsed condition, affected references, whether effects remain reusable | refresh or re-form; do not continue automatically |
| **Revocation** | `authorized → revoked` | revoking authority, reason, affected Runs, immediate safe state | stop/pause affected Run; resolve authority; form and authorize a successor if allowed |
| **Staleness** | usable version → `stale` under policy | exact changed dependency, old/new revisions, classification, effect impact | refresh, re-form, reconcile, or abandon |
| **Refresh** | creates a new formed version when only refreshable snapshots/freshness changed | inherited semantics, refreshed references, complete diff | validate and authorize the new version |
| **Reformation** | creates a new formed version after material Work/Scope/Decision/Guard/Pack/source change | changed semantic inputs and invalidated assumptions | validate and authorize; reconcile existing Run/effects |
| **Supersession** | old authorized/stale version → `superseded` after a newer accepted version replaces it | successor id/version, reason, affected Runs and Handoffs | use successor only after its own authorization and Run reconciliation |

Authorized Context Packs are never edited in place.

### 8.3 Context Review structure

Every Context Pack exposes the following views.

#### Overview

- id, version, lifecycle state, digest;
- Work, Working Set, Run, Scope, and repository identities/revisions;
- objective and exact execution instruction;
- authorizer and authorization policy;
- freshness/expiry policy;
- current permitted actions.

#### Source ledger

For every included or excluded source:

- source identity and locator;
- type: canonical local, operational local, external authority, derived view, or executor asset;
- owner/authority;
- exact revision, digest, observed-at time, and freshness;
- required or optional classification;
- inclusion or exclusion reason;
- selected excerpt/range or bounded locator;
- whether it was delivered to Claude, retained for inspection only, or unavailable;
- uncertainty and limitation.

#### Authority map

- owning artifact or external system;
- accepted Decision or Guard that made it applicable;
- conflicts with other authorities;
- pending human Decision;
- whether an override or waiver exists and its scope.

#### Integrity and lock

- repository identity, branch/worktree, base revision, working-tree fingerprint;
- Work, Working Set, Scope, Decision, Guard, Procedure, and Pack revisions;
- Pack lock and executor-asset digests;
- Context Pack and Formation Trace digests;
- adapter-view digest.

#### Gaps, contradictions, and uncertainty

- missing, stale, corrupt, or unavailable inputs;
- contradictory sources and why no silent winner was chosen;
- known unknowns;
- confidence limitations for agent judgments;
- required Decision or action;
- whether the gap blocks validation, authorization, start, continuation, or completion.

#### Validation and completion coverage

- each completion criterion;
- required validation mode;
- available/missing Evidence;
- applicable Guards;
- unsupported or unavailable validators;
- waiver eligibility and authority.

#### Version difference

- previous and current version ids/digests;
- source additions/removals;
- revision changes;
- Scope/Decision/Guard/Pack changes;
- changed uncertainty;
- changed executor delivery;
- whether existing effects remain valid, require reconciliation, or are unusable.

### 8.4 Bounded executor delivery

The canonical Context Pack may be larger than the Claude execution view. The Context Review distinguishes:

- **required and delivered**;
- **required but step-partitioned**;
- **available for inspection, not delivered**;
- **excluded by policy**;
- **unavailable**.

Scope, blocking Decisions, Guards, completion criteria, required Evidence, and the exact current objective are never silently omitted. If a required material source cannot be safely delivered or summarized, the Context Pack is invalid or the Run is blocked pending reformation.

## 9. Claude Code work continuity

### 9.1 Start experience

The adapter starts Claude Code only from a digest-matched view produced after authorization. The first visible block is the **Run Header**:

```text
RUN READY
Work: <id>@<revision>
Working Set: <id>@<revision>
Run: <id>@<revision>
Scope: <id>@<version> <digest>
Context Pack: <id>@<version> AUTHORIZED <digest>
Procedure / Pack lock: <procedure>@<version> / <lock-digest>
Blocking Guards: none
Pending Decisions: none
Required Evidence: 4 criteria, 0 satisfied
Lease: held by this Session
Next action: <exact action>
Stop conditions: Scope change, unknown effect, stale dependency, Guard conflict, unavailable required validation
```

The executor can request details, but cannot suppress this boundary information.

### 9.2 Active execution

Claude Code receives:

- active Work and Working Set;
- Scope, exclusions, read/write boundaries, and expansion policy;
- Procedure and exact locked executor assets;
- applicable Guards and stop conditions;
- accepted Decisions and unresolved questions;
- required Evidence and completion criteria;
- prior relevant Checkpoint/Handoff information;
- exact current step and expected outputs.

Material effects are recorded through application services:

1. declare the effect key and intended side effect;
2. record `planned`;
3. record `started` immediately before invocation;
4. record `completed`, `failed`, `compensated`, or `unknown` with result/Evidence;
5. never replay a `completed` key;
6. block automatic retry of `unknown` or unsafe non-idempotent effects.

### 9.3 Deliberate checkpointing

A user, procedure, or hook may request a Checkpoint. The experience shows a preflight summary:

- completed steps/effects;
- current repository fingerprint and changed artifacts;
- unresolved/unknown effects;
- pending Decisions and blockers;
- produced and missing Evidence;
- current Scope and Context/Pack versions;
- exact next action.

A captured Checkpoint becomes resumable only after verification. An invalid Checkpoint remains visible but is labeled unusable.

### 9.4 Session end, interruption, or crash

- A deliberate boundary requests a Checkpoint and, when continuity value warrants it, a Handoff.
- An unexpected stop marks the Session interrupted and does not infer completed effects from transcript text.
- Recovery begins from the latest verified Checkpoint and the operational effect records.
- Effects left `started` without observable outcome become `unknown` until reconciled.
- If no verified Checkpoint exists, the Run is failed or blocked and the user receives a recovery report rather than a fabricated resume instruction.

### 9.5 Handoff validation and publication

A Handoff draft includes:

- current Work/Working Set/Run state and revisions;
- latest verified Checkpoint;
- completed and pending work;
- completed, failed, and unknown effects;
- changed artifacts;
- Decisions, blockers, uncertainty, and risks;
- Evidence produced and still required;
- exact next action;
- required repository, Context Pack, Pack lock, Skill asset, lease, and freshness checks.

Validation fails if the Handoff lacks an exact next action, references an invalid Checkpoint, omits known blockers/unknown effects, or depends on a transcript. Publication creates an immutable version.

### 9.6 Fresh-session discovery and resume

A separately invoked Claude Code process starts with an adapter discovery step. It may show:

```text
RESUMABLE RUN FOUND
Run: <id> PAUSED
Checkpoint: <id> VERIFIED
Handoff: <id> PUBLISHED
Last exact action: <...>
Freshness checks: 7 passed, 1 requires review
Unknown effects: 0
Actions: inspect | resume | abandon | transfer ownership
```

Before `ResumeRun`, Continuity verifies:

- repository identity, branch/worktree, and fingerprint;
- Run and Checkpoint integrity;
- Work, Working Set, Scope, Context Pack, Decision, Guard, and Pack revisions;
- exact Skill/executor-asset digests;
- lease ownership and expected revisions;
- effect-key outcomes;
- Handoff validity and exact next action;
- required capabilities and permissions.

The result is exactly one of:

- **ready to resume**;
- **stale — refresh/reformation required**;
- **blocked — Decision/capability/conflict required**;
- **corrupt — recovery required**;
- **not resumable — completed/cancelled or no verified Checkpoint**.

### 9.7 Validation and completion

When execution stops producing effects, the user invokes validation. The Run enters `validating`; the repository revision is frozen for the declared plan.

The Completion Gate shows each criterion as:

- passed by deterministic Evidence;
- supported by agent-judgment Evidence;
- accepted by human judgment;
- supported by an external authoritative reference;
- explicitly waived;
- failed;
- missing;
- stale;
- invalid;
- unsupported;
- unavailable.

Only passing Evidence, declared human approval, or an authorized waiver can satisfy a criterion. A waiver remains visibly distinct from a pass.

Completion atomically records:

- final Run and Work transitions;
- final verified Checkpoint;
- criterion-linked Evidence and waivers;
- repository effects and Scope conformance;
- updated Working Set state;
- optional boundary Handoff.

A commit, Claude statement, or green-looking summary cannot complete Work by itself.

### 9.8 Cancellation, partial return, and return to backlog

The user may:

- cancel the Run and Work;
- cancel the Run but return Work to `ready`;
- return Work as `blocked` or `validation_failed`;
- split explicit follow-up Work;
- transfer ownership through a Handoff.

The flow captures completed effects, changed artifacts, Evidence, missing criteria, latest Checkpoint, and exact next action before releasing the lease. Partial work is never represented as complete.

### 9.9 Observation and candidate Lesson

Postflight may record an Observation from success, failure, repeated correction, or review. The user sees:

- source Run/Evidence;
- factual observation;
- proposed applicability;
- duplicates or contrary evidence;
- candidate Lesson wording;
- possible target: Skill, Procedure, validator, Guard, Pack, or project binding;
- required reviewer and validation plan.

Recording creates no executable authority. Acceptance of a Lesson and promotion of a separate target artifact remain distinct human/governance actions.

## 10. Human Decisions and judgment boundaries

### 10.1 Decision Request model

Every material Decision Request contains:

- question and triggering event;
- affected Work, Scope, Context Pack, Run, Guard, Evidence, Pack, or Lesson revisions;
- why the agent/application service cannot decide;
- available options, including reject/defer where valid;
- consequences and reversibility of each option;
- supporting deterministic, agent, human, or external Evidence, visibly typed;
- required authority;
- safe default while unresolved;
- transition currently blocked;
- whether resolution requires refresh, reformation, new Scope, new Context Pack, or new validation.

Actions:

- **accept**;
- **reject**;
- **defer** with explicit effect on the Run;
- **request more Evidence**;
- **supersede** a prior outcome through a new Decision version.

A deferred material Decision keeps the affected transition blocked unless a declared policy says the work can continue outside the undecided area.

### 10.2 Required judgment boundaries

| Decision boundary | Trigger | Safe default | Required authority | Resume path |
|---|---|---|---|---|
| Scope expansion | Proposed read/write path, system, or effect class outside active Scope | Stop the effect; keep Run blocked | Scope owner or accepted project policy; material expansion is explicit | Create new Scope version, re-form/authorize context, reconcile effects |
| Contradictory authority | Two canonical/external sources give incompatible requirements | No silent winner; block affected action | Owner(s) of the conflicting authorities or designated adjudicator | Record accepted/rejected/deferred Decision; refresh/re-form affected context |
| Guard conflict or waiver | Requested work violates or cannot evaluate a blocking Guard | Block start/continue/complete | Guard owner or declared waiver authority | Revise work, resolve Guard change, or attach explicit waiver and revalidate |
| Required validation unavailable | Required validator/provider cannot run | Treat as unavailable, not pass | Criterion owner/waiver authority | Restore validator, use accepted alternate Evidence, or authorize scoped waiver |
| Unsafe retry or unknown non-idempotent effect | Effect outcome cannot be established | Do not retry automatically | Human operator with effect/system authority | Inspect external/local outcome; mark completed/failed/compensated or authorize retry |
| Judgment-based validation | Criterion requires architecture, UX, risk, or domain judgment | Await explicit review | Named person/role | Record human Evidence/Decision; resume completion gate |
| Degraded context authorization | Optional/required source unavailable or stale | Reject if material; otherwise remain non-authorized until explicit choice | Context authorizer and source owner where applicable | Authorize only a declared degraded scope or re-form with complete inputs |
| Concurrent ownership transfer | Another Session holds lease or responsibility changes | Second writer remains read-only/blocked | Current owner and accepting owner, or declared transfer policy | Publish Handoff, release/acquire lease, revalidate revisions |
| Candidate Lesson acceptance/rejection | Candidate reaches review | No change to executable artifacts | Lesson reviewer/governance owner | Accept/reject/defer Lesson; separate Change Proposal if accepted |
| Promotion to Skill/Guard/validator/rule/Pack/binding | Accepted Lesson proposes canonical change | No automatic promotion | Target artifact owner and required governance authority | Version target artifact, validate proposal, update Pack lock/context as needed |

### 10.3 Evidence-type separation

| Type | Visible label | May satisfy |
|---|---|---|
| Deterministic | `DETERMINISTIC` | only criteria declared deterministic and reproduced under accepted inputs |
| Agent judgment | `AGENT JUDGMENT` | declared judgment criteria where human authority is not required |
| Human judgment | `HUMAN APPROVAL` or `HUMAN REJECTION` | declared scope of the named authority |
| External reference | `EXTERNAL AUTHORITY` | observed claim owned by the referenced system and revision |
| Waiver | `AUTHORIZED WAIVER` | permits completion despite visible failed/unavailable criterion within exact scope; never displayed as pass |

Model confidence may accompany agent judgment as provenance, but never upgrades its authority class.

## 11. Failure, recovery, and retry matrix

| Failure or state | User-visible status | Safe default | Permitted actions | Required authority | Recovery and completion impact |
|---|---|---|---|---|---|
| Repository revision/fingerprint changed | `STALE: repository drift` | Stop effects/validation | inspect diff; classify harmless/refreshable/conflicting; refresh or re-form | operator; human reconciliation for conflict | completion blocked until active revision is accepted and Evidence refreshed |
| Work or Working Set revision changed | `STALE: work changed` | Stop continuation | compare versions; accept successor; split/return work; re-form | Work owner | existing effects retained but must be reconciled; no automatic completion |
| Scope changed | `STALE: scope revision changed` | Stop out-of-scope action | inspect old/new Scope; reject expansion; authorize new version | Scope owner | Context Pack and Run may stale; out-of-scope effects block completion |
| Context Pack stale | `STALE: context dependency changed` | Do not deliver/continue | refresh, re-form, reconcile, abandon | context authorizer when material | old version remains historical; completion blocked if active Run depends on it |
| Decision changed/superseded | `STALE: decision authority changed` | Stop affected action | inspect effect; accept new Decision; re-form context | Decision authority | affected effects/criteria revalidated |
| Guard changed/suspended/superseded | `STALE/BLOCKED: guard changed` | Do not assume old Guard | resolve applicability; re-form plan; request waiver | Guard owner | completion blocked until current Guard set is evaluated |
| Pack lock changed | `STALE: pack lock mismatch` | Do not run asset | reinstall exact lock or authorize update | workspace owner | new lock requires context reformation and effect compatibility review |
| Skill/executor asset digest mismatch | `BLOCKED: skill asset mismatch` | Do not execute/resume | restore exact digest; choose compatible Procedure; update Pack explicitly | Pack/workspace owner | old Context Pack unusable for execution until resolved |
| Lease conflict or concurrent writer | `CONFLICT: active owner <id>` | Second Session read-only | inspect; wait; request transfer; create truly non-conflicting Scope | current and accepting owner or transfer policy | conflicting writes/completion rejected |
| Evidence missing | `BLOCKED: criterion has no Evidence` | Keep criterion unsatisfied | collect Evidence; request human review; request eligible waiver | collector/reviewer/waiver authority | completion prohibited absent accepted Evidence or waiver |
| Evidence failed | `VALIDATION FAILED` | Do not complete | fix and rerun; return Work; request waiver if policy permits | operator and waiver authority | immutable failure remains; new Evidence may supersede claim, not rewrite history |
| Evidence stale | `BLOCKED: Evidence stale` | Do not reuse | rerun/reobserve at current revision | evidence owner/collector | completion blocked until fresh Evidence or waiver |
| Evidence invalid/corrupt | `INVALID EVIDENCE` | Exclude from completion | repair locator only through new envelope; recollect; investigate corruption | evidence owner | invalid envelope retained; cannot satisfy criterion |
| Evidence unsupported/wrong criterion | `UNSUPPORTED` | Do not count it | choose supported validator/mode; revise criterion through authority | criterion owner | completion blocked |
| Evidence unavailable | `UNAVAILABLE` | Not a pass | retry provider; alternate accepted Evidence; waiver | provider owner or waiver authority | completion blocked absent alternate/waiver |
| External provider/reference unavailable | `UNAVAILABLE: external authority` | Preserve last observation as stale; do not fabricate | retry; continue only if non-required; authorize degraded path | context/criterion authority | required external state blocks start/complete |
| Validator unavailable or permission denied | `UNAVAILABLE: validator/permission` | Do not treat as skipped success | obtain permission; use accepted alternate; waiver | permission owner/waiver authority | required criterion remains unsatisfied |
| Claude Code unavailable or lacks required capability | `BLOCKED: executor capability` | Do not start/continue Procedure | restore Claude; choose compatible Procedure; explicitly downgrade level where safe | operator/workspace owner | no hidden manual substitution; Run remains planned/blocked |
| Effect `retryable failed` | `FAILED — RETRYABLE` | Do not retry until policy confirms | retry with same effect key; fix prerequisite; cancel | accepted retry policy or human if risk | successful retry records new attempt under same key |
| Effect `completed` replay requested | `DEDUPLICATED` | Do not repeat | inspect existing result/Evidence | none beyond normal read | prior result reused; duplicate effect prevented |
| Effect `failed non-retryable` | `FAILED — NON-RETRYABLE` | Stop | compensate if declared; create follow-up Work; cancel/return | operator and effect owner | completion blocked unless criterion does not require effect and authority revises plan |
| Effect `compensated` | `COMPENSATED` | Do not assume original objective achieved | validate compensation; decide alternate path | operator/effect owner | criterion remains unsatisfied unless alternate Evidence passes |
| Effect outcome unknown | `BLOCKED: OUTCOME UNKNOWN` | No automatic retry | inspect local/external outcome; reconcile; compensate; authorize risky retry | human with system authority | completion and related effects blocked until classified |
| Derived index/read model missing or corrupt | `RECOVERABLE DERIVED STATE FAILURE` | Stop commands that depend on it; preserve canonical state | rebuild deterministically; compare digests | repository infrastructure; no human if unambiguous | canonical state remains authoritative; lifecycle resumes after rebuild validation |
| Canonical artifact/store corruption | `CORRUPT CANONICAL STATE` | Stop all affected mutation | preserve bytes; locate last verified artifact/checkpoint/audit; restore only when unambiguous | human recovery authority if ambiguous | no lifecycle transition or completion until integrity established |
| Canonical divergence/ambiguous authority | `CONFLICTING CANONICAL STATE` | Fail closed | identify owners; record Decision; preserve both candidates | owning authorities | no silent recency winner; completion blocked |
| Checkpoint invalid | `INVALID CHECKPOINT — NOT RESUMABLE` | Do not resume from it | use latest verified predecessor; create recovery checkpoint; abandon Run | operator/recovery authority | invalid checkpoint remains historical |
| Checkpoint stale | `STALE CHECKPOINT` | Reject automatic resume | reconcile repo/effects; re-form; create new verified checkpoint | operator/human for conflicts | old checkpoint cannot be current |
| Handoff invalid | `INVALID HANDOFF` | Do not transfer/resume from it | regenerate from Run/latest verified Checkpoint | publisher/operator | publication/resume blocked |
| Handoff expired | `EXPIRED HANDOFF` | Inspect but do not assume current | resolve current Run/Checkpoint; publish successor | operator/publisher | old Handoff historical only |
| Hidden Scope expansion detected | `BLOCKED: OUT-OF-SCOPE EFFECT` | Stop effect and further mutation | revert/compensate if safe; revise Scope explicitly; investigate | Scope owner | completion blocked until all effects conform or are reconciled |
| Human Decision unresolved | `BLOCKED: DECISION REQUIRED` | No implicit default | accept/reject/defer/request evidence | named authority | dependent transition remains blocked; material result refreshes/re-forms context |
| Cancellation with partial work | `CANCELLED/PARTIAL` | Preserve state and release lease only after checkpoint attempt | return Work ready/blocked/cancelled; publish Handoff; create follow-up | operator/work owner | partial effects/Evidence retained; Work not completed |

## 12. Progressive adoption

The levels are cumulative and reversible in operation. They do not define separate products or incompatible state models.

### Level 1 — Repository instructions and one Skills-only procedure

| Dimension | Definition |
|---|---|
| Prerequisites | Git repository, Claude Code, minimal project binding, one Pack/Procedure and executor asset |
| First value | Inspect and execute one repeatable repository-aware procedure within ten minutes |
| Canonical artifacts introduced | Pack manifest/version, Procedure spec, executor asset, project binding, Pack lock |
| Interactions | `doctor`, `activate`, `skill inspect`, `skill run` |
| Failure behavior | missing/mismatched asset or capability blocks execution; no fallback to hidden prompt |
| Migration to next | add reusable procedures and capability/compatibility rules to the same Pack model |
| Reversibility | disable/remove Pack from active lock; retain version history and reviewable artifacts |
| Deliberately absent | Work Items, Working Sets, Context Packs, Runs, Checkpoints, Evidence-bound completion, Learning |

### Level 2 — Reusable Skills/Procedures and Pack locking

| Dimension | Definition |
|---|---|
| Prerequisites | Level 1 plus multiple procedures or reusable/technology Packs |
| First value | Consistent procedure resolution with exact versions, assets, prerequisites, permissions, and conflicts |
| Canonical artifacts introduced | additional Pack manifests, compatibility/self-validation results, composed Pack lock |
| Interactions | `pack list/install/resolve/verify`, `procedure compare`, `skill run` |
| Failure behavior | conflicts, missing capabilities, or digest drift block selection/execution |
| Migration to next | define local Work Items using existing procedures as execution references |
| Reversibility | pin older compatible lock or remove a Pack through explicit lock update |
| Deliberately absent | product-owned work selection, Scope authority, Context Packs, durable Runs |

### Level 3 — Local Work selection, Working Set, Scope, and completion criteria

| Dimension | Definition |
|---|---|
| Prerequisites | Level 2 plus valid local Work artifacts and project ranking/binding rules |
| First value | Select coherent work without reconstructing backlog context in chat; see explicit Scope and completion boundary |
| Canonical artifacts introduced | Work Item, WorkSelection, optional Working Set, versioned Scope, criteria and Evidence requirements |
| Interactions | `work candidates/show/select/return`, `set create/show`, `scope show/revise` |
| Failure behavior | missing metadata, blocker, incompatible Scope, or corrupt index blocks selection/activation |
| Migration to next | form Context Packs from exact Work/Scope/Pack revisions |
| Reversibility | return Work to ready, pause/cancel Working Set; retain revisions and history |
| Deliberately absent | authorized Context Pack, durable Run, fresh-session resume, completion gate execution |

### Level 4 — Formed and authorized Context Packs

| Dimension | Definition |
|---|---|
| Prerequisites | Level 3 plus resolvable repository sources, Decisions, Guards, and context recipe |
| First value | Claude begins from an explainable, bounded, immutable, authorized input contract |
| Canonical artifacts introduced | Context Pack, Formation Trace, validation/authorization result, adapter-view provenance |
| Interactions | `context form/show/diff/validate/authorize/reject/refresh/reform/revoke` |
| Failure behavior | stale, contradictory, missing, corrupt, oversized, or unauthorized context blocks start |
| Migration to next | bind exact authorized Context Pack to a durable Run and checkpoint policy |
| Reversibility | revoke or supersede version; return to Level 3 execution without claiming Context Pack guarantees |
| Deliberately absent | durable Run resume and effect deduplication unless Level 5 is enabled |

### Level 5 — Resumable Runs, Checkpoints, Handoffs, and fresh-session resume

| Dimension | Definition |
|---|---|
| Prerequisites | Level 4 plus operational store, leases, effect keys, adapter start/resume support |
| First value | Deliberately interrupt and resume the same bounded effort in a fresh Claude Code Session without old transcript |
| Canonical artifacts introduced | Session, Run, effect records, Checkpoints, published Handoffs, audit/recovery records |
| Interactions | `run prepare/start/status/checkpoint/pause/resume/retry/cancel`, `handoff validate/publish/show` |
| Failure behavior | stale state, lease conflict, invalid checkpoint, unknown effect, or asset mismatch blocks resume |
| Migration to next | attach Validation Plan, Evidence, Guards, Decisions, waivers, and Learning review |
| Reversibility | pause/cancel Runs and continue using lower-level artifacts; never down-convert or erase history |
| Deliberately absent | trusted completion unless Level 6 Assurance is active |

### Level 6 — Validation, Evidence-bound completion, Guards, Decisions, and reviewed learning

| Dimension | Definition |
|---|---|
| Prerequisites | Level 5 plus criterion-linked Validation Plan, Evidence stores/references, Guard and Decision authority, Learning review |
| First value | Complete work only when every criterion is supported by accepted Evidence or explicit authorized waiver; reuse a reviewed Lesson safely |
| Canonical artifacts introduced | Validation Results, Evidence, Guards, Waivers, Decisions, Observations, Lessons, Change Proposals |
| Interactions | `run validate/complete`, `evidence attach/verify`, `decision resolve`, `waiver authorize`, `lesson review/propose` |
| Failure behavior | failed/missing/unavailable Evidence, Guard conflict, unresolved Decision, stale/corrupt state blocks completion |
| Migration to next | no higher product model is implied; later work may improve dogfooding, migration, or optional surfaces |
| Reversibility | suspend/retire Guards, reject Lessons, cancel/return Work through normal lifecycles; evidence/history retained |
| Deliberately absent | automatic rule promotion, hosted control plane, universal integration, agentless positioning |

### Adoption invariants

- Earlier artifacts remain valid inputs to later levels.
- Upgrading creates or activates additional canonical objects; it does not rewrite prior history into a new schema by implication.
- Downgrading disables guarantees and command families; it does not pretend higher-level artifacts never existed.
- A repository may use different levels for different Work Items only when the active guarantee level is explicit on each effort.
- No level silently imports enterprise backlog, CI, policy, or deployment state.

## 13. CLI responsibility model

### 13.1 Decision

The CLI is the initial general-purpose human command and inspection surface over Application Services and read models. It is non-authoritative.

### 13.2 Command families

| Family | Responsibilities |
|---|---|
| `doctor` / `adoption` | repository discovery, integrity, capability, current guarantee level, missing prerequisites |
| `pack` / `skill` / `procedure` | inspect, install, lock, verify, compare, and invoke reusable behavior through declared services |
| `work` / `set` / `scope` | candidates, selection, Working Set, Scope, criteria, blockers, return/cancel paths |
| `context` | form, inspect, diff, validate, authorize, reject, refresh, re-form, revoke, show executor view |
| `run` / `session` / `effect` | prepare, start, status, checkpoint, pause, resume, retry, reconcile, validate, complete, cancel |
| `handoff` | create, inspect, validate, publish, export, acknowledge/take over through accepted commands |
| `decision` / `guard` / `waiver` | inspect authority, request/resolve Decisions, evaluate Guard conflicts, authorize explicit waivers |
| `evidence` / `validation` | inspect plan, invoke supported validators, attach/verify immutable Evidence, show coverage |
| `lesson` / `observation` | record, triage, review, reject, accept, and propose separate promotion |
| `recover` / `index` | diagnose integrity, rebuild derived state, reconcile revisions/effects, preserve corrupt evidence |
| `inspect` / `export` | human-readable and machine-readable non-authoritative views and transfer bundles |

### 13.3 Confirmation boundaries

Explicit confirmation or a supplied authoritative Decision/policy is required for:

- Context Pack authorization or revocation;
- material Scope expansion;
- capability/permission grants with side effects;
- ownership/lease transfer;
- retry of unknown or unsafe non-idempotent effects;
- waiver authorization;
- cancellation when partial work exists;
- completion with any waiver;
- acceptance/promotion of a Lesson;
- Pack lock update that changes executable assets or permissions;
- recovery when canonical authority is ambiguous.

A generic `--yes` may confirm routine low-risk prompts, but cannot substitute for an authority id, Decision, waiver, or policy required by the command.

### 13.4 Machine-readable output and diagnostics

Every command supports a stable machine-readable envelope conceptually equivalent to:

```json
{
  "operation": "...",
  "result": "ready|blocked|stale|invalid|unavailable|conflicting|corrupt|completed|cancelled",
  "target": {"id": "...", "revision": "..."},
  "authority": {"required": "...", "observed": "..."},
  "reasons": [],
  "allowed_actions": [],
  "artifacts": [],
  "diagnostic_id": "..."
}
```

Exact schema and exit codes are deferred, but these semantic requirements are fixed:

- non-success conditions return non-zero and preserve their specific classification;
- warnings never convert a blocked/invalid result into success;
- output includes exact revisions/digests needed for automation;
- human and JSON views derive from the same application result;
- diagnostics identify the authoritative artifact and next safe action.

### 13.5 Forbidden CLI responsibilities

The CLI must not:

- write canonical files or operational records directly;
- infer lifecycle transitions from edited text;
- own hidden local state that changes product meaning;
- make external SDK calls except through declared application ports/adapters;
- auto-authorize context, waivers, or governance changes by default;
- hide stale, invalid, or unavailable inputs;
- treat terminal history as continuation state;
- become a second source of truth.

## 14. Local Console disposition

### 14.1 Decision: defer

A local non-authoritative Console is **deferred**, not required and not permanently rejected.

| Need | Is a Console required now? | Initial surface | Re-evaluation signal |
|---|---:|---|---|
| First value | No | `doctor`, activation flow, Claude procedure card | users cannot reach Level 1 value through CLI/Claude within ten minutes |
| Context and authority inspection | No | structured CLI views plus canonical Markdown/YAML and diffs | source/authority inspection repeatedly requires many manual joins or causes wrong authorization |
| Run and Checkpoint visibility | No | Run Header, `run status`, Checkpoint/Resume Card | operators cannot identify current state/next action reliably |
| Human Decisions | No | Decision Request in CLI/Claude and reviewable artifact | decision queues become hard to triage or authority errors increase |
| Failure diagnosis and recovery | Not initially; potentially useful | Recovery Report and `recover` commands | multi-object recovery remains too error-prone in dogfooding |
| Team handoff | No | published Handoff and export bundle | reviewers cannot take over without custom manual compilation |
| Learning review | No; likely useful later | `lesson review` and repository diff | volume/duplication makes review impractical |

If later required, the Console must:

- run locally by default;
- read through application services/read models;
- issue commands only through the same application services as CLI/adapter;
- show exact canonical source links, revisions, and digests;
- have no independent database of authoritative product state;
- remain optional for all canonical workflows;
- not imply a hosted service, commercial control plane, RBAC platform, analytics product, or agentless positioning.

## 15. Human-only inspection, review, export, transfer, and handoff

Humans may inspect Continuity without an active agent because reviewability and transfer improve agentic continuity.

### Human inspection bundle

Conceptual command:

```text
continuity inspect --run <id> --human --export <path>
```

The bundle contains:

- manifest with repository identity, revisions, and digests;
- Work Brief and Scope;
- Context Pack summary, source/exclusion ledger, and executor delivery view;
- current Run state and latest verified Checkpoint;
- effect ledger with unknown/retry risk;
- Evidence/criterion matrix and waivers;
- Decisions, Guards, blockers, and uncertainty;
- published Handoff and exact next action;
- references to canonical artifacts rather than copied authority where possible.

The bundle is a non-authoritative snapshot. Its manifest states source repository, generation time, and staleness policy.

### Review

A reviewer may record a Decision or human Evidence only through an authoritative command or canonical review artifact. Annotating an exported copy does not mutate the source repository.

### Transfer and takeover

A transfer requires:

1. a validated published Handoff;
2. a verified Checkpoint;
3. current repository and artifact revisions;
4. release of the current lease;
5. acceptance by the successor;
6. freshness validation in the successor environment;
7. a new Session record.

Human takeover may end in review, further Decision, or a new Claude Code Session. It does not require an agentless product mode.

## 16. Nestfolio dogfooding experience

PX-001 uses only accepted architecture and existing VS-001/VS-001A evidence; it does not inspect Nestfolio source.

### 16.1 Visible source of behavior

Every command/view can explain where behavior came from:

| Behavior | Visible source |
|---|---|
| Work, Scope, Run, Checkpoint, Evidence, Decision, Guard, and Lesson semantics | **Framework Core** |
| selection, context formation, start/resume, validation, completion, recovery coordination | **Application Services** |
| repository identity, artifacts, operational state, CAS, leases, digests, audit, rebuild | **Repository Infrastructure** |
| Claude commands, Skills, hooks, start/resume view, capability mapping, structured result capture | **Claude Code Adapter** |
| portable procedures, generic Git/repository checks, common Evidence collectors | **Reusable Packs** |
| Nestfolio backlog conventions, repository topology, validators, deployment procedures, routing, local Guards and Lessons | **Nestfolio Pack or project binding** |
| Git, issue/PR, CI, ADR, deployment, security, or other observed objects | **External authority** |

A routine view may use labels such as:

```text
Selection rule: Nestfolio binding / backlog-next procedure
Run lifecycle: Framework Core
Resume hook: Claude Code Adapter
Repository fingerprint: Repository Infrastructure
Validation: Nestfolio validator via project binding
CI result: External authority
```

### 16.2 Dogfooding path

1. Run the Activation Diagnostic against the existing validated environment.
2. Classify existing behavior by the six adoption levels without moving it between architectural owners.
3. Exercise Level 1 first value with one existing procedure and explicit guarantee labeling.
4. Exercise Level 3 work selection and Scope against a real bounded Work Item.
5. Exercise Level 4 Context Review and authorization.
6. Reuse the already validated Level 5/6 mechanics for a new, authorized dogfood Run; never rerun or rewrite `run-vs001` or `run-vs001a`.
7. Measure first-action time, selection clarity, resume correctness, duplicated exploration/effects, Evidence coverage, decision confusion, and maintenance overhead.
8. Record Observations and project candidate Lessons; promote nothing automatically.
9. Consider promotion from the Nestfolio binding only after repeated cross-project evidence and a new Decision.

### 16.3 Dogfooding safety

- Existing Nestfolio issue/backlog/CI/Git authorities remain authoritative for their owned objects.
- Continuity owns only its local agent-work representation and execution history.
- No broad migration is implied by proving one experience path.
- Any missing generic capability is first recorded as an Observation; it is not patched into Framework Core during dogfooding by convenience.

## 17. Complete operational workflow map

```text
1. DISCOVER
   doctor → repository identity → adoption guarantees → blockers/next action

2. SELECT WORK
   candidates → compare/exclusions/dependencies → human choice/override → WorkSelection

3. BOUND WORK
   Working Set → Scope/exclusions → outputs → completion criteria → required Evidence

4. PREPARE RUN
   Procedure + Pack lock → Run planned → capabilities/lease → Validation Plan

5. FORM CONTEXT
   bind revisions → include/exclude with reasons → detect gaps/conflicts → formed

6. VALIDATE AND AUTHORIZE CONTEXT
   valid/invalid → inspect → human default authorization or opt-in deterministic policy

7. DELIVER AND START
   digest-matched Claude view → Run ready → explicit StartRun → running

8. EXECUTE
   bounded steps → keyed effects → structured results → Observations

9. CHECKPOINT OR INTERRUPT
   capture → verify → current → optional pause → Handoff validate/publish

10. FRESH SESSION RESUME
    discover Run → verify repository/context/lock/assets/lease/effects → resume or fail closed

11. VALIDATE
    freeze effects → run deterministic/agent/human/external validation → attach Evidence

12. COMPLETE OR RETURN
    completion gate → atomic complete, or validation_failed/blocked/ready/cancelled with partial state

13. LEARN
    Observation → triage → candidate Lesson → human review → separate Change Proposal

14. CONTINUE
    select next Work using updated canonical state
```

## 18. Comparative baseline analysis

| Baseline | What it already does well | Where Continuity must add measurable value | Product disposition |
|---|---|---|---|
| `CLAUDE.md`/`AGENTS.md` plus one Claude Skill | fast, familiar, low maintenance, repository-native instructions and procedure reuse | exact work/scope authority, context formation trace, immutable authorization, durable Run recovery, effect dedup, criterion-linked completion | **Accepted as Level 1 baseline; rejected as complete substitute only when long-running continuity needs exist** |
| Multiple Skills and scripts | repeatable operations and deterministic checks | Pack locking, capability visibility, procedure provenance, conflict handling, explicit active work and state | **Accepted as Level 2 baseline and input** |
| Simple backlog Markdown/YAML | cheap local task visibility and easy review | candidate rationale, bounded Working Set, versioned Scope, active Run ownership, evidence/decision linkage | **Accepted as source/form at Level 3; no forced replacement with complex issue clone** |
| Git plus issues/PRs | authoritative code history, planning, review, and collaboration | local agent-execution representation, exact resume point, context omissions, effect outcomes, continuation | **Retained as external authority** |
| CI and policy tools | authoritative automated validation and enforcement | criterion mapping, freshness/provenance, missing/unavailable visibility, human/agent/waiver distinctions | **Retained and referenced; not duplicated** |
| ADRs and design docs | durable decisions and rationale | applicability resolution, pending Decision visibility, exact revision binding to Work/Context/Run | **Referenced as authority** |
| Manual notes or chat summary | fast authoring and flexible narrative | verification, exact revisions, effect reconciliation, no hidden dependency, completion coverage | **Useful supplementary narrative; rejected as canonical resume mechanism** |
| Manual Handoff template | low-cost human transfer | validation against current Run/Checkpoint, exact next action, stale detection, source/digest trace | **Accepted baseline; Continuity must outperform it in takeover tests** |
| Hosted dashboard/control plane | centralized view and collaboration | not required for local dogfooding; risks duplicate authority and adoption cost | **Rejected as initial requirement** |

Continuity is not justified merely by being more structured. It is justified only when the additional structure reduces rediscovery, unsafe continuation, duplicate effects, scope loss, unsupported completion, or handoff ambiguity enough to exceed maintenance cost.

## 19. Conceptual scenario tests

All required scenarios were walked through against the workflows, state vocabulary, decision boundaries, and recovery matrix above.

| Scenario | Result | Pass observation | Residual risk or implementation question |
|---|---|---|---|
| First install in clean existing repository | PASS | read-only diagnostic and Level 1 procedure path provide bounded value within ten minutes without migration | exact packaging and repository-detection conventions |
| Skills-only adoption | PASS | explicit guarantee header prevents a Skill from being mistaken for full continuity | procedure quality may vary; Pack self-validation must be usable |
| Select and start work | PASS | candidates, Work Brief, Scope, context authorization, lease, and explicit start form a coherent boundary | exact ranking presentation |
| Inspect context before start | PASS | source, exclusion, authority, revision, uncertainty, contradiction, and Evidence views are actionable | large source ledgers need concise rendering |
| Reject and re-form context | PASS | rejection preserves candidate and rationale; new version is formed without mutation | exact disposition serialization |
| Context expiration and refresh | PASS | expiration is a stale reason; refresh creates a new version; material change uses reformation | policy language for time/freshness thresholds |
| Uninterrupted Claude Run | PASS | Run Header, keyed effects, validation, Evidence, and atomic completion cover the complete path | exact checkpoint frequency |
| Interrupted fresh-session resume | PASS | verified Checkpoint/Handoff and freshness checks reproduce the validated VS-001A model | adapter capability detection across Claude versions |
| Unknown or retryable effect | PASS | same-key retry for retryable effects and human reconciliation for unknown effects prevent unsafe replay | integration-specific reconciliation helpers |
| Stale repository or Scope | PASS | literal stale state, version diff, reformation, and effect reconciliation block silent continuation | classification policy for harmless drift |
| Lease conflict | PASS | second writer is blocked/read-only and transfer requires Handoff plus lease change | team ergonomics around long-held leases |
| Invalid or missing Evidence | PASS | completion gate remains blocked and waiver remains distinct from pass | criterion-to-Evidence UX density |
| Unavailable provider or validator | PASS | unavailable is not pass; retry, alternate Evidence, waiver, and hard block are distinct | provider-specific diagnostics |
| Corrupted derived state | PASS | projections can be rebuilt while ambiguous canonical corruption fails closed | recovery command implementation and backup policy |
| Contradictory authority | PASS | explicit Decision Request prevents silent recency winner | cross-owner response time |
| Human judgment boundary | PASS | material Scope, waiver, retry, review, and governance changes require declared authority | authority identity/configuration format |
| Candidate Lesson review | PASS | Observation and Lesson remain non-executable; promotion changes a separate governed artifact | review queue noise |
| Human inspection and Handoff | PASS | export bundle and published Handoff allow takeover without hidden executor state | transfer medium and signature conventions |
| Nestfolio dogfood | PASS | component-source labels and project binding keep local behavior outside Core | practical classification must be verified in MA/dogfooding work |
| Small team with existing systems | PASS | external authorities remain authoritative; Continuity owns only local agent-work state and references | narrow synchronization policy when updates are later required |
| Monorepo bounded Scope | PASS | path/ownership/dependency boundaries are explicit and whole-repository authorization is unnecessary | scalable path selection and context partition rendering |

No scenario exposed an unresolved structural contradiction. Residual items are implementation or later validation questions with already-decided ownership and safe behavior.

## 20. TA-002 conformance matrix

| Experience choice | TA-002 authority/invariant | Conformance result |
|---|---|---|
| Work-first information architecture | Sections 7.1, 8, 16.1–16.2 | Uses Work Item/Working Set/Epic separation; does not create a universal issue model |
| Inspect/prepare/authorize/execute modes | Sections 9, 15, 16.3–16.5 | Preserves command and transition authority |
| Human authorization default | `AuthorizeContext` permits human or configured deterministic policy | Chooses safe default without removing policy option |
| Immutable authorized Context Pack | Sections 7.2, 9, 14 | Refresh/reformation create new versions; no mutation |
| Rejected/expired labels | Context Pack accepted lifecycle | Implemented as disposition/reason over `invalid/non-authorized` and `stale`, not new states |
| Bounded executor view | Section 9 context-size handling | Full Formation Trace retained; required material not silently dropped |
| Run Header and exact next action | Sections 7.3, 10, 16.5–16.6 | Exposes accepted Run/Checkpoint/Handoff semantics |
| Effect status UX | Section 10 effect model | Keeps planned/started/completed/failed/compensated/unknown and same-key retry |
| Fresh-session resume | Sections 10 and 16.6; DR-0015 | Uses adapter view and repository state; no transcript authority |
| Completion Gate | Section 11; DR-0017 | Criterion-linked Evidence or explicit waiver only |
| Evidence-type labels | Section 11 validation modes | Keeps deterministic, agent, human, external, and waiver authority distinct |
| Decision Request | Sections 7.6 and 15 | Aggregate owner applies transition; human floor preserved |
| Controlled learning review | Section 12; DR-0017 | No automatic Observation/Lesson promotion |
| CLI as non-authoritative surface | Dependency matrix and CLI/Product experience boundary | Invokes application services/read models; no direct store writes |
| Console deferred | Section 19 deferred alternatives | Does not require or reject future local Console; no second source |
| Progressive adoption | Product Foundation evolution; Pack/Work/Context/Run/Assurance boundaries | Cumulative artifacts preserve the same Core model |
| Existing external systems retained | Sections 6.7, 7.7, 8 and DR-0012/DR-0015 | Typed references; no universal synchronization |
| Nestfolio source labels | Sections 6.1–6.7 | Keeps Core, adapter, reusable Pack, project binding, and external authority distinct |
| Recovery matrix | Sections 10, 14, 17 | Fail-safe behavior and authority match accepted architecture |
| Human export bundle | repository-local authority and Handoff semantics | Non-authoritative snapshot with canonical references and digest manifest |

## 21. Serious alternatives considered

### Accepted

- Start with one Claude Code Skill/Procedure and a Pack lock.
- Reuse disciplined repository instructions, backlog files, Git, issues, CI, ADRs, and manual reviews as strong inputs and baselines.
- Allow an explicitly configured deterministic context-authorization policy after a human has accepted its scope and conditions.
- Allow human-only inspection and transfer because it supports agent continuity.

### Deferred

- A local non-authoritative Console.
- Rich visual source graphs, timelines, and recovery workbenches.
- Hosted collaboration, replication, RBAC, analytics, and organization-wide Pack registry.
- Multi-executor parity and future adapters.
- External write integrations and broad synchronization.

### Rejected

- Requiring the complete Run model before any value.
- Treating each adoption level as a separate product/state model.
- Auto-starting Claude as soon as context is formed.
- Auto-authorizing Context Packs by default.
- Mutating authorized Context Packs during refresh.
- Treating expired or rejected as hidden warning flags while continuing.
- Making a Console or CLI state authoritative.
- Resuming from transcript or model memory.
- Treating commit existence as completion.
- Collapsing deterministic, agent, human, external, and waiver Evidence into one confidence score.
- Automatic Lesson promotion.
- Universal issue/CI/policy/deployment integration.
- Agentless adoption as a product requirement.

## 22. Non-structural implementation questions

These questions do not block G4 because user-visible semantics, authority, and failure behavior are decided:

1. exact installation channel, package manager, binary name, and supported runtime versions;
2. exact path and serialization of activation configuration and derived views;
3. final CLI spelling, aliases, interactive prompts, JSON schema, and exit-code allocation;
4. default selection/ranking presentation and tie-breaking interaction;
5. exact context source-ledger rendering and large-context partition UX;
6. exact authorization-policy language, expiry/freshness thresholds, and policy configuration format;
7. default Checkpoint frequency and which Claude hooks are reliable in each supported version;
8. repository-drift classification heuristics;
9. provider-specific recovery and unknown-effect reconciliation helpers;
10. identity format for human roles, delegations, and transfer acceptance;
11. export-bundle format, signing, encryption, and transfer medium;
12. exact criteria that trigger reconsideration of the deferred Console;
13. accessibility, terminal-width, localization, and optional color conventions;
14. dogfooding instrumentation that measures time and errors without creating a telemetry control plane.

## 23. Architectural contradiction assessment

### Blocking contradictions

None.

### Resolved apparent contradictions

| User need | Apparent conflict | Resolution |
|---|---|---|
| Show Context Pack expiration | TA-002 has no `expired` Context Pack state | Use `stale` with explicit `expired` reason; no lifecycle change |
| Show rejected Context Pack | TA-002 has `invalid`, not `rejected` | Rejection is an explicit authorization disposition on a non-authorized candidate; no new state |
| Refresh an authorized Context Pack | Authorized versions are immutable | Refresh creates a new formed version and Formation Trace |
| Human-friendly dashboard | Console is deferred in TA-002 and cannot be authoritative | CLI/Claude/artifact views satisfy G4; future local Console remains optional and service-backed |
| Early value without full Run | Complete loop is the target product | Cumulative levels expose partial guarantees honestly and reuse the same artifacts later |

No Observation requires an L3 revision proposal.

## 24. G4 assessment

**Gate G4 — Product experience viability: PASS on 2026-07-14.**

Every PX-001 completion criterion is satisfied conceptually:

- installation and activation are bounded and repository-native;
- a credible ten-minute Level 1 value path exists;
- the complete operational loop is coherent end to end;
- relevant TA-002 states have visible meanings, actions, and exits;
- Context Pack provenance, omissions, authority, revisions, uncertainty, contradictions, and status are explainable;
- fresh-session resume is transcript-independent;
- Evidence modes and waivers are distinct;
- material human judgment boundaries are explicit;
- required failures fail safely;
- adoption is cumulative and reversible;
- the CLI is non-authoritative;
- the Console is explicitly deferred;
- human inspection and transfer add continuity value without agentless positioning;
- Nestfolio dogfooding keeps project behavior in its Pack/binding;
- all required scenarios pass conceptual testing;
- no blocking TA-002 contradiction remains.

The sole next authorized iteration is **MA-001 — Migration Architecture**, because the program now has accepted product direction, factual current-runtime evidence, accepted target architecture, validated bounded implementation evidence, and an accepted Product Experience. MA-001 must define an incremental, reversible path and satisfy G5 before any broader implementation is authorized.
