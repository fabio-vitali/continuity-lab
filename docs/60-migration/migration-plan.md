---
artifact_id: MIGRATION-PLAN
status: validated
owner: migration
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Migration Plan

## 1. Authority, scope, and result

This artifact is the accepted L5 migration and delivery architecture produced by **MA-001 — Migration Architecture**.

It answers:

> Can the accepted TA-002 architecture and PX-001 Product Experience be introduced incrementally and reversibly from the validated current runtime, with independent-value slices, explicit compatibility and rollback, preserved authority boundaries, and no big-bang rewrite?

**Answer: yes. Gate G5 passes unconditionally on 2026-07-14.**

The accepted path is a cumulative, repository-native strangler migration organized by the six PX-001 adoption levels and implemented through seven bounded slices. New target behavior is activated per procedure or per Work effort; current mechanisms are retained, wrapped, drained, frozen, retired, or left deliberately unmigrated according to their accepted target disposition. No slice requires coordinated replacement of the complete current runtime.

Decision reference:

- `DR-0023` — adopt a cumulative strangler migration with per-effort authority cutover.

This is migration architecture only. No migration slice was executed and no implementation artifact was created or modified by MA-001.

## 2. Epistemic framing and evidence boundary

### Canonical observations

- The Current Runtime Map is validated current-system authority at Nestfolio revision `3aa8f4773955541415f615abd80a0a9702bcb416`.
- The current runtime already contains useful repository-native procedures, backlog planning, journaled Runs, gates, findings, evidence-like records, Claude Code bindings, and governed human-floor behavior.
- The current runtime also contains project coupling, partial workflows, test-only helpers, documented-but-unimplemented entry points, and capabilities that TA-002 explicitly deferred or rejected.
- TA-002 fixes target ownership and dependency boundaries for Framework Core, Application Services, Repository Infrastructure, Claude Code Adapter, Packs, project bindings, and external authorities.
- PX-001 fixes six cumulative guarantee levels and requires truthful upgrade, downgrade, and failure behavior.
- VS-001 proves repository mechanics while preserving its historical FAIL; VS-001A proves genuine Claude Code start, end, fresh-session resume, freshness checks, and effect deduplication.

### Migration decisions

- Migration is by **adoption capability and Work effort**, not by current source directory.
- Current modules are not copied wholesale into the target architecture.
- A current capability may remain in the Nestfolio binding indefinitely when it has project value but no evidence for reusable or Core classification.
- Current and target mechanisms may coexist only with a declared route and one qualified writer for the affected state.
- Existing current Runs are drained or completed in their current journal; new target Runs use the target operational store. An active Run is never dual-written.
- Earlier PX-001 artifacts remain usable after upgrade. Downgrade disables guarantees and commands but preserves all historical target artifacts read-only.

### Evidence-gap assessment

No fact essential to G5 is absent or contradictory in the Current Runtime Map. The documented unknowns affect implementation choices, not migration ownership, compatibility, rollback, or the gate result. Nestfolio source inspection was therefore neither requested nor performed.

## 3. Validated current-state summary

The current runtime is a hybrid of:

- check registry and evaluator execution;
- Git and scheduled gates;
- Claude Code-oriented work drivers;
- repository-local backlog planning and routing;
- Git-common-dir journaled operational state;
- findings, audit artifacts, ship evidence, and runtime provenance;
- project-specific intake, themes, epic coordination, deployment behavior, and learning/check lifecycle.

Its strongest reusable evidence is:

- strict engine import direction;
- explicit check and trigger data;
- keyed journal effects, replay, pause/fulfil, leases, and partial recovery;
- project-local backlog and planning views;
- deterministic and judgment validation entry points;
- Claude Code adapter requirements;
- human floors around check lifecycle changes;
- repository-native scenario validation.

Its main migration constraints are:

- backlog, check YAML, lesson Markdown, audit JSON, and journal state have separate current authorities;
- some current documentation overstates command or self-containment behavior;
- actual implementation, shipping, merge, deployment, and closure are partly host-procedure owned;
- Context Packs, Formation Traces, target Handoffs, durable standalone Decisions, Evidence envelopes, and generic learning objects are absent or only partial;
- some broad capabilities are project-specific, test-only, incomplete, or explicitly deferred by TA-002.

## 4. Migration principles and invariants

1. **Independent value before breadth.** Every slice must improve a real Claude Code workflow without requiring the next slice.
2. **One qualified authority.** Temporary overlap is allowed only when writer ownership and derivation direction are explicit.
3. **Per-effort cutover.** A Work effort is routed either through the current mechanism or the target mechanism; no active effort is dual-driven.
4. **History before conversion.** Existing state may be referenced, imported as immutable history, or interpreted through a declared transformer. It is never silently rewritten into target authority.
5. **Current status is not target desirability.** Implemented current behavior may be retired; absent target behavior may be introduced.
6. **Packs before Core promotion.** Project behavior enters the Nestfolio binding first and reusable Packs only after portability evidence. Core promotion requires repeated cross-project evidence and a Decision.
7. **External authority remains external.** Git, issue, PR, CI, deployment, security, and ADR systems remain authoritative for their objects.
8. **No automatic semantic upgrade.** Detecting files or current behavior never silently activates a higher PX-001 guarantee level.
9. **No silent downgrade.** Disabling a higher level is explicit, preserves history, and removes only the corresponding guarantees and command authority.
10. **Fail closed on ambiguity.** Stale, corrupt, divergent, mismatched, or concurrently owned state blocks the affected transition.
11. **No current-Run conversion in place.** Current journal Runs finish under current authority; target Runs begin under target authority with a new identity and explicit history references.
12. **No Console dependency.** Repository artifacts, Claude Code, and a non-authoritative CLI are sufficient for every slice.
13. **No false completion.** Lower levels never imply Level 6 completion guarantees.
14. **No automatic learning promotion.** Findings and Lessons can become candidate Observations or Change Proposals only through explicit review.

## 5. Current-to-target capability matrix

Disposition vocabulary: **retain**, **wrap**, **adapt**, **migrate**, **replace**, **defer**, **reject**, **retire**.

| Current capability or family | Current status and authority | Accepted target classification | Disposition and target owner | Slice / coexistence, cutover, rollback, retirement | Canonical basis |
|---|---|---|---|---|---|
| `runtime/engine/schema` check/finding/item/journal contracts | implemented; current runtime schemas and repository content | Framework Core concepts selectively; Pack and infrastructure contracts | **adapt**, not copy; Core owns stable semantics, Packs own concrete definitions | MI-002/MI-003/MI-006; current schemas remain current authority until each target artifact family is activated; rollback restores current route | Current Runtime Map §§4, 11; TA-002 §§4–7; DR-0013, DR-0016 |
| Generic host capabilities (`execute`, `fanOut`, `ask`, `onTrigger`, `runProcedure`, `journal`) | mixed; `fanOut` and `onTrigger` test-only | Application commands, Procedure contracts, typed adapter ports | **replace** generic capability surface; **defer** fan-out/on-trigger | MI-001–MI-005; no compatibility promise for generic API; current callers remain current-only until retired | Current Runtime Map §§4, 11; TA-002 §§6, 13; DR-0015 |
| Registry loading and check lifecycle YAML | implemented; YAML executable authority | Nestfolio/reusable Pack validators and Guard definitions | **wrap** first, **adapt** selectively; Pack/Assurance own target definitions | MI-002/MI-006/MI-007; current YAML may be invoked as a validator; target Guard activation requires explicit classification; rollback removes target reference, not YAML history | Current Runtime Map §§5, 7, 11; TA-002 §§7.5, 11–12; DR-0017 |
| Evaluator dispatch (`cmd`, `module`, `eslint`, `skill`) | implemented | Pack executor assets plus `ValidationInvoker` | **wrap/adapt** through declared validator/Evidence contracts | MI-006; current evaluator result is captured with provenance; no evaluator becomes a Core capability | Current Runtime Map §§7.1, 11; TA-002 §§6.6–6.7, 13 |
| Scope selection and global invariants | implemented; project rules and check content | versioned Scope in Work Coordination; project Guards in binding | **adapt** | MI-003 and MI-006; target Scope controls target Work; current scope checks may validate it; rollback returns effort to current procedure and preserves Scope history | Current Runtime Map §§7, 12; TA-002 §§8, 11 |
| Registry self-check and scenario grading | implemented | Pack self-validation and criterion-linked Evidence | **adapt** | MI-002/MI-006; target lock activation requires self-validation; rollback pins prior lock | Current Runtime Map §§10–13; DR-0016 |
| Trigger/cadence map | partially implemented; invocation partly Git/CI external | project binding and narrow external integration | **retain** current bindings; **defer** general cadence migration | MI-006 only where a concrete validator is needed; merge trigger mismatch is not migrated; retirement only after equivalent project evidence | Current Runtime Map §§6, 7.9, 11, 16; DR-0015 |
| Commit gate | implemented; Git hook/script and current checks | reusable Git Pack or Nestfolio binding; Assurance Evidence/Guard input | **wrap**, later **adapt** | MI-006; current gate remains authoritative for commit acceptance; Continuity records reference/Evidence, not a second Git verdict; rollback drops target reference | Current Runtime Map §§7.2, 11; TA-002 §11 |
| Ship branch-delta recheck and skip evidence | implemented; journal and host postflight | Nestfolio Evidence collector and Guard/validation input | **adapt** | MI-006; existing result remains project evidence; target completion consumes immutable reference; no duplicate ship authority | Current Runtime Map §§5, 7.2, 11; DR-0017 |
| Start/ship gate and SHA-conditional batch | implemented | Assurance plan plus Procedure steps/effect keys | **adapt** | MI-005/MI-006; effect key and repository revision preserved; current flow used only for current-routed efforts | Current Runtime Map §§7.3–7.4, 11; TA-002 §§10–11 |
| Deploy and affected-integration gate | partially implemented with fallback gaps | Nestfolio Pack/project binding and external deployment/CI authority | **retain** as project-specific; **defer** migration until concrete slice | Not required for MI-001–MI-007 except as referenced Evidence; no universal port; unsafe fallback cannot satisfy target completion | Current Runtime Map §§4.3, 9, 11; DR-0015, DR-0016 |
| Actual E2E execution in deploy/pre-done path | documented but not implemented | possible future Nestfolio Procedure | **reject as current capability**; future implementation is separate | No migration required; documentation claim must not be treated as Evidence | Current Runtime Map §§11, 16 |
| Git-native journal, pause/fulfil, replay, lease | implemented; current journal is active Run authority | Repository Infrastructure operational Run/Checkpoint store | **migrate by new-Run cutover**, not in-place conversion | MI-005; current Runs drain under current journal; target Runs use target store; read-only history references allowed; rollback pauses/cancels target Run and creates lower-level follow-up, never dual-writes | Current Runtime Map §§5.1, 7.3–7.8; TA-002 §§7.3, 10, 14; DR-0014 |
| Runtime-path provenance | implemented; journal observability | audit and Reference/Provenance metadata | **adapt** | MI-005; preserve source run id, SHA, adapter/procedure version; not a routing authority | Current Runtime Map §§5, 7, 11; TA-002 §§7.7, 14 |
| Single-item worker spine | partially implemented; host owns actual work and closure | Application Services plus Claude Code Adapter | **strangle/replace** | MI-003–MI-006; current driver remains for current-routed work; target application commands own target effort; retire after no active current efforts depend on it | Current Runtime Map §§7.3, 11; TA-002 §§6.2, 10, 16 |
| Generic `run-item` / `run-next` drivers | implemented | Claude Code Adapter plus Nestfolio binding | **wrap** procedure behavior, then **replace** control path | MI-001/MI-003/MI-005; exact current asset may be locked as Pack content; target start/resume route is explicit per effort; rollback invokes the frozen current route only for non-target efforts | Current Runtime Map §§6, 7.3; DR-0015, DR-0016 |
| Epic core-member orchestrator | partially implemented | deferred Application Service / Nestfolio binding capability | **defer** | Not required for initial target loop; current behavior may remain current-only; a later Decision-backed slice is required before migration | Current Runtime Map §§7.4, 11; TA-002 §§19 deferred |
| Parallel fan-out and in-process trigger | test-only | deferred | **retire from migration scope** | No production migration; preserve tests as historical evidence only | Current Runtime Map §11; TA-002 §19 |
| Finding-to-backlog intake | implemented | Nestfolio binding; possible later Work/Observation integration | **retain current**, **defer target migration** | MI-007 may reference findings as Observations but does not automate backlog creation; current intake remains project-specific | Current Runtime Map §§7.5, 11; TA-002 §19 |
| Backlog planner and computed impact | implemented; `docs/backlog` content authority | Work Coordination service with Pack ranking rules | **adapt** | MI-003; initially derive target candidate view from exact backlog revision; no automatic write-back; per-item cutover establishes local execution authority | Current Runtime Map §§7.6, 11; TA-002 §§7.1, 8 |
| Operational view / projection | implemented; derived non-authoritative view | Application read models and CLI/adapter views | **replace incrementally** | MI-003/MI-005; both views may coexist read-only; target commands must identify canonical sources; current view retires after routed commands no longer need it | Current Runtime Map §§5, 7.6, 11; PX-001 §§5, 13 |
| Theme clustering | implemented | Nestfolio binding, deferred | **retain or retire by project evidence**, not migrate now | No target dependency; current authority remains for current flow; future slice required | Current Runtime Map §§7.7, 11; TA-002 §19 |
| Leftovers spin-out and dossier reconciliation | test-only | deferred/rejected until production evidence | **retire from active migration plan** | No cutover needed; preserve historical tests | Current Runtime Map §11 |
| Check minting/ratification | implemented with human floor | Decision and Learning plus separate Pack/Guard change lifecycle | **replace automatic/check-centric path** | MI-007; current findings may seed candidate Observations; target promotion requires Change Proposal and target validation; rollback leaves candidates unpromoted | Current Runtime Map §§7.8, 11; TA-002 §12; DR-0017 |
| Check keep/retire/supersede curation | implemented | Guard/Pack lifecycle in Assurance and Skills/Packs | **adapt** | MI-007; retain human authority and history; target lifecycle commands own target versions only | Current Runtime Map §§8.1, 11; TA-002 §§7.5, 12 |
| Ship-time mint consideration | implemented | Observation/candidate Lesson creation | **adapt** | MI-007; output is non-executable candidate only; current auto-mutation path is disabled for target-routed work | Current Runtime Map §11; DR-0017 |
| Judgment audit procedure binding | implemented | Claude Code Adapter plus agent-review Evidence | **adapt** | MI-006; model/procedure/context provenance required; never equivalent to deterministic or human authority | Current Runtime Map §§7.9, 11; TA-002 §11 |
| Scheduled audit artifacts | implemented; CI remains external authority | external Evidence reference plus Nestfolio binding | **retain/reference** | MI-006; target records typed Evidence envelope; CI result is not copied as local authority | Current Runtime Map §§5, 7.9, 11; DR-0015 |
| Merge-trigger enforcement | documented but not implemented | possible future project integration | **reject as current capability** | No migration; explicit later implementation required | Current Runtime Map §§11, 16 |
| Starter initialization | implemented | Pack activation and installation | **adapt** | MI-001/MI-002; install only selected manifests/assets; no automatic migration of all starter checks | Current Runtime Map §§6, 11; DR-0016 |
| Advertised six-check starter | documented but contradicted by seven files | none | **retire incorrect claim** | MI-002 self-validation reports actual locked content; no compatibility promise for the count | Current Runtime Map §§2.4, 11, 16 |
| Public CLI `watch`/`next` and direct check claims | documented but not implemented/no-op | target non-authoritative CLI over Application Services | **replace**, then **retire misleading commands** | MI-001–MI-003/MI-006; target commands use distinct capability/guarantee labels; current no-op entry points are never compatibility dependencies | Current Runtime Map §§6, 9, 11, 16; PX-001 §13 |
| Direct watch CLI | implemented | project validator runner | **wrap/adapt** | MI-006; result captured with exact input/revision; current CLI may remain for diagnostics | Current Runtime Map §§6, 11 |
| Evaluation scenarios | implemented | Pack and Procedure self-validation Evidence | **adapt** | MI-002/MI-006; preserve good/bad scenario evidence and exact Pack version | Current Runtime Map §§4, 11, 13; DR-0016 |
| Context Pack runtime artifact | absent | Context Formation | **introduce** | MI-004; opt-in per target Work; lower levels continue without claiming context guarantees; rollback revokes/supersedes and returns to Level 3 | Current Runtime Map §11; TA-002 §§7.2, 9; DR-0020 |
| Formation Trace | absent | Context Formation | **introduce** | MI-004; immutable with every formed candidate; no current equivalent is fabricated | TA-002 §§7.2, 9 |
| Executor-neutral Handoff | absent in current runtime; validated in VS evidence | Execution Continuity | **introduce from validated target mechanics** | MI-005; current journal history may be referenced, not rewritten; rollback preserves published target Handoff | Current Runtime Map §11; VS-001/VS-001A; TA-002 §7.3 |
| Evidence reference abstraction | partially implemented across findings/journal/backlog | Assurance Evidence envelope | **adapt/introduce** | MI-006; wrap current outputs with immutable claim, provenance, locator, digest, freshness; source system remains authority | Current Runtime Map §11; TA-002 §§7.5, 11, 14 |
| Durable Decision | partially implemented in journal awaiting/choice | Decision and Learning | **introduce** | MI-004/MI-006/MI-007; target Decisions are independent artifacts; current journal choices stay historical and may be referenced | Current Runtime Map §11; TA-002 §§7.6, 15 |
| Run operational state | implemented in current journal | Execution Continuity target store | **migrate by routing new Runs** | MI-005; never dual-write one Run; current Runs drain; target Run history is immutable at sharing boundaries | Current Runtime Map §§5, 11; DR-0014 |
| Goal runtime state | absent | rejected standalone target capability | **no migration** | Work objectives remain in Work artifacts/external references | Current Runtime Map §11; TA-002 §19 |
| Guard behavior through checks | implemented | Assurance Guard plus Pack validator definitions | **classify/adapt selectively** | MI-006; default current check remains validator/project rule, not automatically a Guard; explicit owner/exception policy required | Current Runtime Map §§10–12; DR-0017 |
| Commitment shared entity | absent | rejected | **no migration** | Goal and Guard remain separate | Current Runtime Map §11; DR-0005 |
| Observation object | absent | Decision and Learning | **introduce** | MI-007; findings/runs may create evidence-linked candidates; no authority | TA-002 §7.6; DR-0017 |
| Lesson dossier and backlinks | implemented | Lesson plus Change Proposal | **adapt** | MI-007; existing lessons import as historical/candidate material with provenance; no executable promotion | Current Runtime Map §§5, 7.8, 11; DR-0017 |
| Generic Event store | absent | rejected/deferred internal audit only | **no migration** | audit records remain implementation detail | Current Runtime Map §11; TA-002 §19 |
| Generic context-formation subsystem | absent | Context Formation | **introduce** | MI-004; explicit pipeline and authorization; no inference from current prompt assembly | Current Runtime Map §11; DR-0011, DR-0020 |
| Exact Git revision binding | implemented for inventory; used variably at runtime | Reference and Provenance invariant | **retain and extend** | all slices; exact repository identity/digest is required for locks, Work, Context, Run, Checkpoint, Evidence; mismatch blocks | Current Runtime Map §§2, 11; TA-002 §§7.7, 14 |

### Current capability ownership and access ledger

This ledger supplies the explicit current owner, writer, storage, readers, and authority tuple for every capability family in the matrix above. It is current-system evidence only; naming a current writer does not preserve that writer in the target.

| Current capability or family | Current owner | Current writer | Current storage | Current readers / entry paths | Current authority |
|---|---|---|---|---|---|
| `runtime/engine/schema` contracts | engine schema ring | repository source editors | `runtime/engine/schema/*` | engine libraries, adapters, tests | validates current check, finding, item, and journal records; not target schema authority |
| Generic host capabilities | engine capability contract | repository source editors | `runtime/engine/capabilities/index.ts` | engine loops, adapters, tests | current host interface contract only; no canonical state ownership |
| Registry loading and check lifecycle YAML | content ring plus backward lifecycle | manual edits and approved backward procedures | `runtime/content/checks/*.yaml` | registry loader, watch, gates, audit, meta-check | YAML is executable current check and lifecycle authority |
| Evaluator dispatch | engine library | repository source editors and Pack-like content references | evaluator modules plus check YAML evaluator locators | `run-check`, watch, gate, audit | dispatches the current underlying evaluator; result authority remains the invoked evaluator/source |
| Scope selection and global invariants | engine scope logic plus check content | source/check-content editors | check YAML scope/context declarations and current work inputs | watch, gate, worker/orchestrator boundaries | current check selection and invariant inclusion |
| Registry self-check and scenario grading | engine/eval rings | source and scenario editors; backward scenario landing | registry content and `runtime/eval/scenarios/*` | self-checks, grader, tests, backward ratification | current registry/scenario conformance evidence |
| Trigger/cadence map | repository content | repository content editors | `runtime/content/triggers.yaml` | Git adapters, audit, worker/orchestrator pre-ship paths | selects current trigger/cost data; actual invocation remains external |
| Commit gate | Git adapter and repository verification script | adapter execution; skip request only through journal append | staged Git state, check content, `gate-skips` journal | Git hook/script, operator, postflight | current commit admission result; Git remains repository authority |
| Ship branch-delta recheck and skip evidence | Git adapters | `ship-recheck` and pre-commit skip path | Git branch delta plus journal records | backlog postflight and operator inspection | current ship-gate/skip evidence for the recorded revision |
| Start/ship gate and SHA-conditional batch | worker/orchestrator and pre-ship batch | owning current driver under journal lease | journal steps plus Git/check inputs | worker, orchestrator, operator view | current effort's gate progression and replay |
| Deploy and affected-integration gate | Claude Code deploy adapter plus external helpers | deploy runner and external deployment/test tools | repository helpers, deployment/CI systems, process output | deploy command/operator | external deployment/test systems own their objects; adapter owns only current invocation path |
| Actual E2E execution in deploy/pre-done path | none | none | documentation only | documentation readers | no executable authority; documented claim is not Evidence |
| Git-native journal, pause/fulfil, replay, lease | engine journal API | one leased current driver per run | `<git-common-dir>/journal/<runId>/` | all pausable drivers and operational view | active current Run progress, decisions, keyed replay, and writer lease |
| Runtime-path provenance | workstream adapters | `recordRuntimePath` in owning current run | journal key `path:runtime` | journal inspection, provenance helpers/tests | observability only; never route-selection authority |
| Single-item worker spine | engine loop plus Claude Code driver | owning current driver and fulfilment input | source code, current backlog, journal, Git/check inputs | `run-next`, `run-item`, tests, operator | current single-item control path until that effort is routed elsewhere |
| Generic `run-item` / `run-next` drivers | Claude Code adapter | command invoker plus driver under journal lease | adapter source, `docs/backlog`, journal | human/Claude invocation, operational view | current item-entry and resume authority for current-routed efforts |
| Epic core-member orchestrator | engine loop plus Claude Code adapter | `run-epic` under journal lease | backlog/epic files, journal, Git/check inputs | operator/Claude invocation, tests | current core-member sequence and merge-floor progression; not PR authority |
| Parallel fan-out and in-process trigger | engine test helpers | tests only | test files/helpers | tests | no production authority |
| Finding-to-backlog intake | intake engine plus Claude Code adapter | `run-intake` and backlog file writer | finding input, journal, `docs/backlog/*.md` | planner, view, backlog tools | current routing result and emitted parking-item content |
| Backlog planner and computed impact | engine planner plus Nestfolio backlog content | backlog skills/editors write rank/status; planner derives impact | `docs/backlog/*.md`; impact is read-time | `planNext`, view, drivers | backlog Markdown is planning authority; computed impact is non-stored derivation |
| Operational view / projection | engine projection plus adapter view | no domain writer; derived on read | none; computed from backlog, registry, journal, audit | `run-view`, operator | non-authoritative projection only |
| Theme clustering | themes engine plus Claude Code adapter | `run-themes` and mutation helper after fulfilment | journal plus `docs/backlog/*.md` | operator/Claude invocation, planner/view | current theme mutation path for theme-routed work |
| Leftovers spin-out and dossier reconciliation | engine helper/tests | tests only; no production caller | source/test files | tests | no production authority |
| Check minting/ratification | backward engine and Claude Code adapter | approved backward procedure under journaled keyed effects | candidate/active check YAML, eval scenario, lesson backlink, journal | registry, gates, audits, backward tools | current approved check creation and lifecycle authority |
| Check keep/retire/supersede curation | backward engine and Claude Code adapter | approved curation procedure | check YAML, successor scenario/content, journal | registry, gates, audits, backward tools | current check lifecycle mutation authority |
| Ship-time mint consideration | backward adapter | `consider` procedure under journal | `backward` journal and any later candidate artifacts | operator/backward review | records current consideration outcome; not target learning authority |
| Judgment audit procedure binding | audit adapter and project audit procedures | headless Claude Code procedure during audit | procedure source and audit result artifact | scheduled/manual audit, operator view | current judgment-check execution path; result limited to that audit artifact |
| Scheduled audit artifacts | GitHub Actions plus audit adapter | scheduled/manual workflow and `run-audit` | `runtime/.audit-findings/*.json` and CI artifact | `run-view`, operators | current audit finding record; workflow scheduling remains external |
| Merge-trigger enforcement | none | none | trigger declaration without production invoker | documentation/config readers | no executable merge-boundary authority |
| Starter initialization | runtime CLI and starter ring | `runtime init` copy operation | `runtime/starter/*` to configured content directory | repository adopter, registry after copy | copied current files become current content; starter is not ongoing authority |
| Advertised six-check starter | starter content/docs | source editors and init copy | starter checks/evaluators | init path, registry, tests/docs | only actually copied files are authoritative; advertised completeness is not inferred |
| Public CLI `watch`/`next` and direct check claims | runtime CLI/docs | source editors; command performs no claimed operation | CLI source and documentation | operator | no operational authority for the documented no-op paths |
| Direct watch CLI | watch adapter/engine | command invocation | registry/trigger/check inputs; stdout only unless evaluator writes externally | operator/CI invocation | current watch result for supplied scope and trigger |
| Evaluation scenarios | eval ring plus backward lifecycle | source editors or approved scenario landing | `runtime/eval/scenarios/*` and fixtures | grader, tests, ratification | current scenario version and grading evidence |
| Context Pack runtime artifact | none | none | absent | none | no current authority |
| Formation Trace | none | none | absent | none | no current authority |
| Executor-neutral Handoff | none | none | absent | none | no current authority |
| Evidence reference abstraction | none | none | absent; evidence is distributed | current gates/postflight/operator read source-specific data | no generic current Evidence authority |
| Durable Decision | journal-local task results and external ADR authorities | owning current driver or external ADR system | journal steps or external ADR store | current driver/view or external readers | only local journal choice for that run, or external ADR authority; no general durable Decision object |
| Run operational state | current journal, but no accepted target Run object | one leased current driver | Git-common-dir journal | drivers and operational view | current journal authority only; no target Run identity/semantics |
| Goal runtime state | none | none | absent | none | no current authority |
| Guard behavior through checks | current check content and gate adapters | content/lifecycle writers; gate invokers write only results | check YAML, triggers, journal/result output | watch, gates, audit, postflight | current checks may block boundaries, but are not accepted target Guard objects |
| Commitment shared entity | none | none | absent | none | rejected; Goal and Guard remain separate |
| Observation object | none; findings are source-specific | none for a generic object | absent | none | no generic current Observation authority |
| Lesson dossier and backlinks | content ring plus backward reconciliation | `reconcileLesson` and manual reviewed edits | `runtime/content/lessons/*.md` | backward lifecycle and content tests/readers | current lesson text and `mints:` backlink authority only |
| Generic Event store | none | none | absent | none | no current authority |
| Generic context-formation subsystem | none | none | absent | none | no current authority |
| Exact Git revision binding | Git plus repository adapters/inventory records | Git writes commits; adapters record observed SHA | Git object database and recorded provenance/journal fields | drivers, gates, inventory, provenance readers | Git is revision authority; recorded SHA is a reference and may be stale |

### Current runtime ring disposition

| Current ring/area | Migration disposition |
|---|---|
| `runtime/engine/schema` | semantic input only; target schemas are owned by Core/Pack contracts and are not source-compatible by default |
| `runtime/engine/capabilities` | strangled by explicit application commands and adapter/Procedure contracts; test-only generic capabilities remain deferred |
| `runtime/engine/lib` | selected journal, planning, provenance, scope, and validation behavior is wrapped or re-expressed; project rules remain outside Core |
| `runtime/engine/loop` | current loops drain current efforts; target Application Services own new efforts; Epic breadth remains deferred |
| `runtime/engine/backward` | findings and lessons may seed target learning, but automatic check-centric promotion is replaced by governed proposals |
| `runtime/adapters/claude-code` | source of concrete requirements and temporarily wrapped assets; target Adapter receives canonical commands and never owns state |
| `runtime/adapters/git` | retained as project/reusable Pack integration and Evidence source; Git remains external authority |
| `runtime/content` | Nestfolio Pack/project binding by default; promotion requires independent evidence |
| `runtime/starter` | selectively adapted into Pack activation; no preserve-all migration |
| `runtime/eval` | adapted into Pack/Procedure validation and Assurance Evidence |

## 6. Authority and source-of-truth ledger

| State family | Current owner / writer | Transitional owner and permitted direction | Target owner / writers | Conflict, provenance, cutover, and retirement |
|---|---|---|---|---|
| Check definitions | current content YAML; manual/backward writers | current YAML remains authoritative for current checks; target may read through a Pack adapter | Pack version for validator content; Assurance for Guard lifecycle | no same id/version dual write; target Guard activation uses a new target identity/version and records source provenance; current retires after no routed flow references it |
| Trigger map/cadence | repository content plus Git/CI invocation | read-only reference; only concrete target validation invocations are bound | Nestfolio binding / external scheduler authority | scheduler remains external; absent merge invoker is not invented; target records observed trigger/version |
| Exclusions/allowlists | repository content/tools | referenced by current validator wrapper | Nestfolio binding or versioned Scope/Guard input | exact digest required; conflict with target Scope blocks until Decision; retire only after equivalent target rule is active |
| Backlog items | `docs/backlog/*.md` and current skills/writers | initially authoritative for planning object; target derives immutable Work reference and local execution state; no automatic write-back | Work Coordination for local Work representation; external issue/backlog remains authoritative for external object | per-item route record prevents dual execution authority; stale source revision blocks selection; cutover when target Work is selected; rollback returns local Work to ready/cancelled without mutating source backlog automatically |
| WorkSelection | no first-class current object | target-only introduction | Work Coordination application command | exact candidate revisions and rationale; no current writer; disable preserves record |
| Working Set / Epic selection | current epic/backlog conventions | current conventions may feed candidate membership read-only | Work Coordination | explicit target ids/revisions; current epic orchestration remains current-only unless separately routed |
| Scope and completion criteria | backlog prose/project checks | target extracts only through reviewed declaration; current remains source evidence | Work Coordination | human or accepted project rule owns revisions; hidden expansion blocks; rollback preserves Scope versions |
| Current journal Run/decisions | Git-common-dir journal; one writer lease | current Runs stay current; target may read immutable history only | Execution Continuity operational store via Application Services | never dual-write one Run; target Run uses new id; conflicting route/lease blocks; current journal retires only after all current Runs closed and history exported/referenced |
| Runtime-path provenance | current journal writer | imported/reference-only | Reference/Provenance and audit metadata | preserve run id, SHA, workstream, adapter; never used as route authority |
| Target Session/Run/effects | absent in validated current runtime; present in VS implementation evidence | introduced only for target-routed efforts | Execution Continuity; adapter writes only through commands | CAS and lease required; unknown effects block retry; rollback pauses/cancels and publishes history, not convert in place |
| Checkpoints | no current generic artifact; journal snapshots partial | introduced for target Runs | Execution Continuity; immutable verified records | only verified checkpoint resumes; stale/corrupt record falls back to prior verified or blocks |
| Handoffs | absent current runtime; VS evidence validated | introduced at target boundaries | Execution Continuity | immutable published version; transcript cannot fill gaps; rollback/history preserved |
| Audit findings | current audit JSON | target may wrap a specific finding as Evidence or Observation; source remains current artifact | Assurance Evidence / Decision and Learning Observation | wrapper records source locator/digest and status; no mutation of source; invalid artifact cannot satisfy criteria |
| Ship gate / skip evidence | current Git adapters and journal | referenced by target Validation Plan for project criteria | Assurance Evidence envelope; Git/current gate remains underlying authority | target cannot declare Git clean independently; stale revision invalidates reuse |
| Eval scenarios | current repository content | Pack self-validation may consume exact scenario version | Skills and Packs / Assurance | immutable Pack-version provenance; no silent scenario replacement |
| Operational projection | current engine derived view | both current and target views may coexist read-only | target read models, always non-authoritative | view divergence is diagnosed against canonical sources; either view can be deleted/rebuilt; current retires after commands migrate |
| Pack manifest/lock/Procedure | current assets exist without accepted target ownership | MI-001 wraps one asset with exact source/digest; MI-002 composes | Skills and Packs; workspace owner changes lock through command | lock CAS, self-validation, explicit conflicts; rollback pins prior lock or removes Pack while preserving versions |
| Context Pack / Formation Trace | absent | introduced for opted-in Work only | Context Formation | exact Work/Scope/Pack/Decision/Guard/repository revisions; authorization human by default; stale/revoked versions never execute |
| Validation Plan / Result | distributed current gates and tests | target plan references current validators and external results without claiming their authority | Assurance | criterion mapping and validation mode explicit; unavailable is not pass; new plan on material revision |
| Evidence | distributed current data and external results | immutable target envelope references source; no bulk copying required | Assurance envelope; source system remains authority for underlying result | locator/digest/freshness required; failures retained; supersession by new Evidence only |
| Guard | current active checks | only explicitly classified checks become target Guards; others remain validators | Assurance lifecycle; definition content may live in Pack/binding | owner, severity, exception policy, and Evidence required; no automatic conversion or dual lifecycle |
| Waiver | current skip ledger is not generic waiver | existing skip may be referenced as historical evidence only | Assurance; authorized human/policy writer | distinct from pass; scoped and visible; expiry reopens block |
| Decision | current journal-local choices and external ADRs | target records new Decisions; historical choices may be referenced | Decision and Learning or authoritative external ADR reference | one resolution per revision; no silent recency; material change stales context/plan |
| Observation | findings exist, no public object | finding/run/validation can create target candidate with source Evidence | Decision and Learning | append-only factual record; no rule authority; duplicate/dismiss outcomes retained |
| Lesson / Change Proposal | current lesson Markdown and check minting | existing lessons import as historical or candidate only; current auto mutation disabled for target-routed work | Decision and Learning; target artifact owner applies accepted proposal | no automatic Pack/Guard/Skill mutation; promotion requires review and target validation; current backward path retires after target governance proven |
| Git repository/commit/branch | Git | target observes exact revision and diff | Git remains authoritative | Continuity stores references/fingerprints; no competing commit authority |
| Issue/PR/CI/deployment/security/ADR objects | external systems | narrow read/reference only unless later concrete adapter Decision | external system | external revision and capability metadata; unavailable required reference blocks; no universal synchronization |

## 7. Compatibility and coexistence matrix

| Current / target pair | Compatibility mode | Writer rule | Cutover | Rollback / abandonment | Unsupported or fail-safe condition |
|---|---|---|---|---|---|
| Current Claude Skill and target Procedure/Pack | target manifest references or freezes exact current asset; canonical Procedure contract describes it | asset bytes have one locked source; Pack lock changes only through target command | per procedure after digest/capability validation | remove target activation or pin prior lock; current asset remains usable outside target effort | missing/mismatched asset blocks; no hidden prompt fallback |
| Current project assets and reusable Pack | project binding overrides only declared extension points; reusable Pack contains no Nestfolio semantics | one resolved asset per Procedure id/version | lock update after conflict/self-validation passes | restore prior lock | undeclared conflict or permission blocks resolution |
| Current backlog and target Work | current backlog remains planning authority initially; target Work is local execution representation referencing exact source | current writer edits backlog; target writer edits target Work only; no automatic bidirectional sync | per item when WorkSelection activates a target Work revision | return/cancel target Work; preserve source reference and target history | stale source, missing metadata, hard blocker, or ambiguous mapping blocks selection |
| Current planner/view and target candidate/read model | parallel read-only views allowed | neither projection is authority | target command becomes default for target-routed efforts | use current view for current efforts | disagreement is resolved from source artifacts, not by choosing newest view |
| Current journal and target Run store | no active Run interoperability; immutable history references only | exactly one store owns an active Run | new Run identity starts in target store; current Runs drain | pause/cancel target Run and create explicit follow-up at lower level; never write target state back into current journal | same effort routed to two writers, unknown effect, lease conflict, or ambiguous import blocks |
| Current gates/checks and target Validation Plan | target invokes or observes current validator through declared adapter | current check defines underlying result; target plan owns criterion mapping only | per criterion/Guard after classification | remove criterion binding or use current process outside target completion | evaluator error, stale input, wrong mode, or unsupported output is not pass |
| Current findings/audit and target Evidence/Observation | immutable reference/wrapper | source artifact writer remains current; target appends envelope/object | when a target criterion or learning review consumes it | preserve wrapper and source; mark invalid/stale rather than rewrite | missing locator/digest or corrupt source blocks use |
| Current check minting and target learning | target-routed work disables automatic promotion; may create candidate Observation/Lesson | target governance owns target rules; current backward writer only current-routed rules | after MI-007 acceptance evidence | leave candidates unpromoted and continue current path for current efforts | any automatic target Pack/Guard mutation is prohibited and fails slice |
| Current Git hooks/CI and target Assurance | coexist; target references results and may invoke through narrow binding | Git/CI remains authoritative | per validation plan | remove reference/invocation; external system unchanged | unavailable required result blocks or requires explicit waiver |
| Current CLI claims and target CLI | distinct commands/guarantee header; no compatibility promise for no-op commands | target CLI mutates only through Application Services | command family by slice | disable target command family | ambiguous alias that could invoke two mechanisms is prohibited |
| Higher and lower PX levels | earlier artifacts remain valid; higher artifacts retained read-only after downgrade | active effort declares one level and corresponding command authority | explicit activation per effort | explicit disable/downgrade; no deletion or semantic down-conversion | silent level detection, automatic upgrade, or hidden downgrade prohibited |
| Target canonical state and derived projections | projections rebuild from canonical artifacts/store | projection has no writers with domain authority | any time after source validation | delete/rebuild projection | projection divergence never changes canonical state |

### Coexistence route record

Every effort that can use both current and target mechanisms must expose a route concept with at least:

- Work/source identity and revision;
- route: `current` or `target`;
- active PX-001 level;
- owning command/procedure family;
- active state store, if any;
- actor and accepted policy;
- transition time and rationale;
- rollback boundary;
- current active lease or conflict result.

The exact serialization is an implementation question. The semantic rule is fixed: **no command may infer the route from whichever files happen to exist.**

## 8. Cumulative adoption-level transition contract

| Level | Active guarantees | Deliberately absent | Artifacts introduced/reused | Upgrade and earlier-artifact compatibility | Downgrade/disable, history, failure, and safe stopping condition |
|---|---|---|---|---|---|
| **1. Repository instructions and one Skills-only Procedure** | exact Procedure identity, locked executor asset, declared prerequisites/capabilities, truthful guarantee header | product-owned Work, Context Pack, Run, Assurance, learning | reuse one current useful asset; add Pack manifest, Procedure spec, project binding, lock | asset remains project-specific; same Pack model extends at Level 2 | disable target activation and invoke current asset directly; retain manifest/lock history; mismatch blocks; repository may remain safely at Level 1 for repeatable procedures |
| **2. Reusable Skills/Procedures and Pack locking** | deterministic resolution, compatibility/conflict checks, self-validation, exact composed lock | Work selection, Scope authority, Context Packs, Runs | additional manifests, reusable/technology Pack, lock validation results | Level 1 procedure remains a valid locked entry; project binding supplies local behavior | pin old lock/remove Pack; retain all versions; conflicts or capability gaps block; repository may remain safely at Level 2 when repeatable procedures are sufficient |
| **3. Local Work selection, Working Set, Scope, completion criteria** | explicit local execution authority, bounded selection, versioned Scope, criteria/Evidence requirements | authorized Context Pack, durable Run resume, trusted completion gate | derive/reference current backlog; add Work, WorkSelection, optional Working Set, Scope, criteria | existing Procedures become execution references; external/current backlog remains authoritative for its object | return Work to ready/cancelled, disable target route; preserve selection/Scope history; stale source/blocker/corrupt index blocks; repository may remain at Level 3 for bounded non-resumable efforts |
| **4. Formed, validated, authorized Context Packs** | explainable immutable context, Formation Trace, explicit human authorization by default, digest-matched adapter view | durable Run/effect resume and trusted completion unless higher levels active | Work/Scope/Pack reused; add Context Pack, trace, validation/authorization result | lower-level procedure can continue outside target context path; target start only for opted-in Work | revoke/supersede and return to Level 3; keep versions; stale/conflicting/missing/oversized material blocks; repository may stay at Level 4 for bounded sessions that do not need resume |
| **5. Resumable Runs, Checkpoints, Handoffs, fresh-session resume** | target Run lifecycle, leases, keyed effects, verified Checkpoints, transcript-independent resume | criterion-linked trusted completion and governed learning unless Level 6 active | Levels 1–4 reused; add Session, Run, effects, Checkpoints, Handoffs, audit/recovery | current Runs drain; new target Runs bind exact lower-level artifacts; no in-place conversion | pause/cancel target Run, publish Handoff, continue lower-level follow-up; retain operational/exported history; stale/unknown/conflict/corrupt state blocks; repository may stay Level 5 when continuity matters but completion governance is external |
| **6. Validation, Evidence-bound completion, Guards, Decisions, reviewed learning** | criterion-linked completion, typed Evidence modes, explicit waivers, Guard and Decision authority, governed learning | automatic promotion, universal integrations, hosted control plane, mandatory Console | all earlier artifacts plus plans/results/Evidence/Guards/Waivers/Decisions/Observations/Lessons/Change Proposals | current validators and external results are wrapped by reference; earlier artifacts remain exact inputs | suspend/retire target Guard, reject Lesson, return/cancel Work; never erase failures or higher-level history; missing/failed/unavailable Evidence or unresolved authority blocks completion; repository may remain safely at Level 6 without adopting deferred capabilities |

Different Work efforts may use different levels only when the route and guarantee header are explicit. A lower-level effort cannot consume a higher-level completion claim by implication.

## 9. Independently valuable migration slices

### MI-001 — Procedure-First Adoption

**PX-001 mapping:** Level 1.

**Independent user value**

A developer can inspect and execute one existing useful Claude Code repository procedure through a target Pack/Procedure boundary with exact asset locking, capability preflight, and truthful guarantees, without migrating backlog, Runs, checks, or learning.

**Prerequisites**

- accepted MA-001 plan and G5 PASS;
- one current production-reachable Claude Code procedure selected from canonical current evidence;
- exact source asset, prerequisites, permissions, and success/failure contract established in the MI-001 contract;
- no active need for Nestfolio source inspection unless the contract records a specific essential gap.

**Capability delta and participating components**

- Skills and Packs: one Pack manifest, canonical Procedure contract, project binding, exact lock;
- Claude Code Adapter: inspect/run view and structured result capture;
- Repository Infrastructure: repository identity, asset digest, activation diagnostic;
- Framework Core: only stable identity, digest, capability, and result semantics needed by the slice;
- Application Services: activate/inspect/invoke use case;
- Nestfolio binding: all project-specific instructions and tools;
- external authorities: referenced only if the procedure already uses them.

**Authority transition**

The existing asset remains the executable behavior authority. The target Pack manifest becomes authority for its declared identity, prerequisites, capabilities, and exact digest. The adapter may invoke only the locked asset through the application command. There is no backlog or Run authority.

**Compatibility and coexistence**

Direct current invocation remains available. Target invocation uses an explicit command and guarantee header. The same asset cannot be simultaneously resolved from two locations or digests.

**Validation and criterion-linked Evidence**

- activation diagnostic identifies repository, current adoption level, selected asset, and absent guarantees;
- manifest/Procedure/asset digest match;
- declared capability and permission preflight;
- one real bounded invocation produces structured output and exact provenance;
- missing/mismatched asset fails closed;
- direct current invocation still works after target activation is disabled.

**Required failure cases**

- asset digest mismatch;
- missing prerequisite/capability;
- conflicting Procedure id/version;
- attempted claim of Work/Run/completion guarantees.

**Rollback, abandonment, recovery, cutover, retirement**

Disable target activation or restore the prior lock. Preserve the Pack/Procedure version and invocation Evidence. No current state conversion is required. The current direct path is not retired by this slice.

**Exclusions**

No Work Item conversion, Context Pack, Run store, check migration, automatic learning, Console, external synchronization, or broad current-runtime extraction.

**Evidence for the next slice**

MI-001 must prove that a current project asset can be governed by target Pack/Adapter boundaries without losing practical value. Failure invalidates MI-002 and requires a corrective slice or architecture review.

### MI-002 — Reusable Pack Composition

**PX-001 mapping:** Level 2.

**Independent user value**

Multiple procedures can be resolved predictably from reusable and Nestfolio-specific Packs with exact versions, permissions, conflicts, compatibility, and self-validation.

**Prerequisites**

- MI-001 PASS;
- at least one additional procedure or reusable behavior with evidence for separation from project binding.

**Capability delta and participating components**

- Skills and Packs: composition, compatibility, self-validation, lock update, deprecation;
- Claude Code Adapter: asset mapping for each resolved Procedure;
- Repository Infrastructure: atomic lock updates and digest verification;
- Application Services: resolve/install/verify/compare;
- Nestfolio binding: explicit local overrides only.

**Authority transition**

The composed lock is target authority for active Procedure resolution. Source Pack versions remain immutable. Project-specific behavior remains in the Nestfolio binding.

**Compatibility and coexistence**

MI-001 assets remain valid. Existing current assets may be referenced or frozen, but target resolution selects exactly one asset per Procedure identity.

**Validation and Evidence**

- self-validation of every selected Pack and executor asset;
- deterministic conflict and capability failure cases;
- comparison and rollback to previous lock;
- proof that reusable Pack contains no Nestfolio-only semantics;
- exact lock and activation history.

**Rollback and retirement**

Restore previous lock or remove a Pack through an explicit lock revision. Never silently last-write-win. Current assets retire only when no lock or current direct route references them.

**Exclusions**

No local Work authority, Context Pack, Run, Assurance completion, universal registry/signing service, or organization-wide Pack system.

**Evidence for the next slice**

Proves stable reusable behavior resolution. Failure blocks Work artifacts from relying on Procedures.

### MI-003 — Bounded Local Work and Scope

**PX-001 mapping:** Level 3.

**Independent user value**

A developer can select one coherent Work effort from the current backlog without reconstructing priority, dependencies, Scope, exclusions, outputs, criteria, and validation requirements in chat.

**Prerequisites**

- MI-002 PASS;
- current backlog source and ranking/binding rules are readable at exact revisions;
- one bounded Work effort chosen for target routing.

**Capability delta and participating components**

- Framework Core: Work, WorkSelection, Working Set, Scope, criteria semantics;
- Application Services: candidate discovery, selection, Scope declaration, return/cancel;
- Repository Infrastructure: versioned artifacts, repository/backlog revision inspection, read-model rebuild;
- Skills and Packs / Nestfolio binding: backlog parsing, ranking, project fields, Procedure references;
- Claude Code Adapter: Work Brief view, no durable Run yet.

**Authority transition**

The current backlog remains authoritative for its planning object. Target Work becomes authoritative for the local agent-execution representation after explicit selection. There is no automatic status synchronization or bidirectional write.

**Compatibility and coexistence**

Current planner and target candidates may coexist read-only. Each selected effort has a route. Current-routed items remain untouched. Target-routed Work references exact current/external revisions.

**Validation and Evidence**

- candidate inclusion/exclusion rationale;
- exact source revision and authority;
- explicit Scope/exclusions/criteria/Evidence requirements before execution;
- hard dependency, stale metadata, corrupt index, and route-conflict failure cases;
- lower-level Procedure remains executable;
- deterministic rebuild of derived candidates/index.

**Rollback and retirement**

Return/cancel target Work, preserve revisions and selection rationale, disable target route, and continue current process. No source backlog mutation is required. Current planner retires only for target-routed efforts after successful dogfooding.

**Exclusions**

No Context Pack authorization, Run store, trusted completion, external backlog write, full Epic orchestration, intake/themes migration, or universal ranking.

**Evidence for the next slice**

Proves authority-safe local Work representation and bounded Scope. Failure blocks context formation.

### MI-004 — Authorized Context Introduction

**PX-001 mapping:** Level 4.

**Independent user value**

Claude Code can begin a selected effort from an explainable, immutable, validated, explicitly authorized input contract with visible inclusions, exclusions, authority, digests, gaps, and exact delivery.

**Prerequisites**

- MI-003 PASS;
- resolvable Work, Scope, Pack lock, Decisions/Guard applicability, repository sources, and context recipe.

**Capability delta and participating components**

- Context Formation aggregate and service;
- Repository Infrastructure for bounded reads, digests, immutable candidate/version writes;
- Claude Code Adapter for digest-matched execution view;
- Skills/Packs and Nestfolio binding for recipes;
- Decision/Assurance references only to the degree needed to block or explain context.

**Authority transition**

No current prompt or summary becomes canonical. The authorized Context Pack version and Formation Trace are target authority for target execution input. Human authorization is default; deterministic policy requires prior accepted scope.

**Compatibility and coexistence**

Levels 1–3 continue without claiming Context Pack guarantees. Only target-routed Work may use target context commands. Current procedures may still execute directly outside Level 4.

**Validation and Evidence**

- exact source/exclusion/authority ledger and version diff;
- structural, Scope, lock, capability, contradiction, and completeness validation;
- explicit human authorize/reject/revoke;
- digest-matched adapter view;
- stale, unavailable, contradictory, corrupt, oversized-material, and delivery-mismatch failures;
- downgrade to Level 3 with no false context guarantee.

**Rollback and retirement**

Revoke or supersede the target Context Pack and return the effort to Level 3. Preserve all versions and rejection rationale. No current procedure or source is altered.

**Exclusions**

No durable Run, effect deduplication, transcript-independent resume, trusted completion, auto-authorization by default, or context mutation in place.

**Evidence for the next slice**

Proves the immutable authority boundary required by target Runs. Failure blocks MI-005.

### MI-005 — Resumable Run Cutover

**PX-001 mapping:** Level 5.

**Independent user value**

A target-routed Work effort can be deliberately interrupted and resumed by a separately started fresh Claude Code Session from repository-local state without prior transcript, duplicated completed effects, or ambiguous ownership.

**Prerequisites**

- MI-004 PASS;
- VS-001 repository-mechanics evidence and VS-001A executor-provenance evidence remain historical inputs, not rerun targets;
- target operational store, lease policy, effect-key policy, start/resume adapter path, and sharing boundary are defined by the MI-005 contract.

**Capability delta and participating components**

- Framework Core Run/Session/Checkpoint/Handoff/effect semantics;
- Application Services for prepare/start/checkpoint/pause/resume/retry/cancel;
- Repository Infrastructure operational store, CAS, leases, recovery, audit, projections;
- Claude Code Adapter start/resume views and result capture;
- Packs/Binding for Procedure checkpoints and effect classification.

**Authority transition**

Existing current journal Runs finish under the current journal. New target Runs use the target operational store and a new target identity. Current journal history can be referenced read-only. One effort cannot have an active current and target Run.

**Compatibility and coexistence**

Current and target Runs may coexist for different efforts. Route and lease checks prevent dual ownership. Target Run binds the Level 4 Context Pack and Level 2 lock exactly.

**Validation and Evidence**

- genuine Claude Code start from adapter view;
- material keyed effect and one deduplicated replay;
- verified intermediate Checkpoint and published Handoff;
- first Session end and separately invoked fresh Session resume;
- repository/Context/lock/asset freshness checks;
- stale, corrupt, invalid checkpoint, unknown effect, conflicting lease, and derived-index rebuild failures;
- target history sufficient for a new competent agent.

**Rollback, abandonment, recovery, cutover, retirement**

Pause or cancel target Run, capture best available Checkpoint/Handoff, release lease, and return Work to a lower-level state or create explicit follow-up Work. Never convert the active target Run into the current journal or repeat unknown effects. Current journal retires only after all current Runs close and operational history is preserved or referenced.

**Exclusions**

No rerun/rewrite of `run-vs001` or `run-vs001a`, no broad current journal conversion, no parallel agents, no full Epic migration, and no trusted completion yet.

**Evidence for the next slice**

Proves operational authority and reversibility. Failure blocks target completion governance.

### MI-006 — Evidence-Bound Completion and Guard Coexistence

**PX-001 mapping:** Level 6, Assurance portion.

**Independent user value**

Target Work can be completed only when every declared criterion has accepted Evidence or an explicit authorized waiver, while current checks, Git gates, CI, and project validators remain correctly authoritative for their underlying results.

**Prerequisites**

- MI-005 PASS;
- one target Work effort with explicit criteria and representative deterministic, agent, human, or external validation needs;
- current validators selected and classified without assuming every check is a Guard.

**Capability delta and participating components**

- Assurance plans/results/Evidence/Guard/Waiver semantics;
- Application Services validate/attach/complete/return;
- Repository Infrastructure immutable Evidence and atomic completion;
- Claude Code Adapter for agent-review provenance;
- reusable/Nestfolio Packs for validators and Evidence collectors;
- external systems as typed authorities.

**Authority transition**

Current checks and external systems keep authority for their results. Target Assurance owns criterion mapping, Evidence envelopes, Guard applicability, waiver distinction, and completion transition. A current check becomes a target Guard only after explicit owner, scope, severity, exception policy, and lifecycle classification.

**Compatibility and coexistence**

Current gates continue independently. Target validation may invoke or observe them once and record exact provenance. There is no second Git/CI verdict and no duplicated external object.

**Validation and Evidence**

- criterion-to-Evidence matrix covering at least deterministic and external or agent/human modes;
- stale/failed/missing/invalid/unsupported/unavailable Evidence blocks;
- distinct authorized waiver path;
- out-of-Scope effects and unresolved Decisions block completion;
- atomic final Run/Work/Checkpoint references;
- proof that a commit or model narrative alone cannot complete Work.

**Rollback and retirement**

Return Work to `validation_failed`, `blocked`, or `ready`; retain all failed Evidence and waivers. Remove a validator binding through a new plan/version, not by rewriting history. Current checks retire only after target coverage and project authority accept replacement.

**Exclusions**

No preserve-all check migration, no universal CI/policy integration, no auto-waiver, no automatic Guard minting, and no Console.

**Evidence for the next slice**

Proves trusted completion and safe coexistence with current Assurance. Failure blocks learning promotion and broader dogfooding.

### MI-007 — Governed Learning and Selective Current-Runtime Retirement

**PX-001 mapping:** Level 6, Decision and Learning portion.

**Independent user value**

Evidence-backed findings from target Work can be reviewed into reusable Lessons and separate Change Proposals without automatic mutation, while obsolete or duplicate current mechanisms are retired safely and project-specific capabilities remain in the Nestfolio binding.

**Prerequisites**

- MI-006 PASS;
- at least one factual Observation from a target Run and one current lesson/finding suitable for historical or candidate import;
- explicit reviewer and target artifact owner.

**Capability delta and participating components**

- Decision/Observation/Lesson/Change Proposal lifecycles;
- Assurance Evidence linkage;
- Skills/Packs and Nestfolio binding target changes through their own review;
- Application Services for review and promotion commands;
- Repository Infrastructure history, audit, and retirement markers.

**Authority transition**

Current findings/lessons remain historical source artifacts. Target Observations and Lessons are new target objects. No current or target learning record can directly mutate a Skill, Guard, validator, Pack, or binding. The target artifact owner applies an accepted Change Proposal through that artifact's lifecycle.

**Compatibility and coexistence**

Current backward-edge flows may remain for current-routed work during the slice, but target-routed work cannot use automatic check promotion. Deferred current capabilities such as themes, intake, and Epic breadth remain in the Nestfolio binding or current route unless separately authorized.

**Validation and Evidence**

- factual Observation with source Run/Evidence;
- duplicate/reject/defer/accept review outcomes;
- candidate Lesson and separate Change Proposal;
- proof that no Pack/Skill/Guard bytes or lock changed before explicit target-artifact approval;
- one accepted project-level change validated through its own Pack/Guard/Procedure lifecycle, or a demonstrated safe rejection;
- retirement inventory showing retained, deferred, rejected, and retired current mechanisms with no active dependency.

**Rollback, abandonment, recovery, cutover, retirement**

Reject or leave candidates unpromoted; restore prior Pack lock/Guard version through normal rollback if an accepted change fails validation; preserve observations and decisions. Retire current commands/components only after route, active-Run, reference, history, and replacement Evidence checks pass.

**Exclusions**

No automatic promotion, no Framework Core promotion without cross-project evidence and a Decision, no broad migration of themes/intake/Epic/deploy behavior, no universal registry, and no hosted service.

**Evidence after the slice**

MI-007 completes the accepted Level 6 operational loop. Deferred current capabilities remain explicit future candidates rather than hidden migration debt. Sustained dogfooding can then test Product Foundation success criteria without implying full feature restoration.

## 10. Component transition paths

### Framework Core

Introduce only semantics required by each slice: identity/digest in MI-001; Work/Scope in MI-003; Context in MI-004; Run/Checkpoint/Handoff/effects in MI-005; Assurance in MI-006; Decision/Learning in MI-007. No current module is promoted wholesale. Core never imports Nestfolio, Claude Code, Git, validators, or current schema implementations.

### Application Services

Strangle current driver control per effort. Early services activate and invoke Procedures; later services select Work, form context, manage Runs, validate/complete, and review learning. Every mutation flows through explicit commands with expected revisions. Current drivers remain only for current-routed efforts and retire after drain criteria.

### Repository Infrastructure

Begin with repository identity, bounded reads, digests, immutable versions, atomic lock/artifact writes, and rebuildable projections. Add the operational Run store only in MI-005. Preserve two canonical storage classes from DR-0014. No migration requires committing every Run mutation to Git. Current journal history is referenced or exported, not dual-written.

### Claude Code Adapter

Wrap one real existing asset first, then add target Work/Context/Run/Assurance views incrementally. Adapter commands call Application Services and never write canonical state directly. Existing Claude-specific assets remain in the Nestfolio binding until reusable evidence supports extraction. Missing capabilities block or select a compatible Procedure; they never change Core semantics.

### Reusable Packs

Start with a manifest and one Procedure contract, then composition and self-validation. Generic Git/repository behavior may move into reusable Packs only after it is separated from Nestfolio topology and proven through MI-002 evidence. Exact locks, permissions, conflicts, and deprecation are mandatory.

### Nestfolio Pack or project binding

Own current backlog format, ranking, repository topology, validators, deploy/test procedures, routing, project Guards, and Lessons. Current capabilities may remain here permanently. Promotion to reusable Pack or Core requires repeated evidence and a Decision. The binding is the compatibility boundary around current assets during migration.

### External authorities and integration ports

Git, issues, PRs, CI, deployment, security, and ADRs remain authoritative. Initial slices use observation/reference and concrete validator invocation only. External writes, broad synchronization, and universal ports are deferred. A later write adapter requires a concrete workflow, expected external revision, idempotency, confirmation/delegation, retry/reconciliation, and local outcome record.

## 11. State interpretation and transformation ownership

| Transformation or bridge | Owner | Validation and audit obligation | Safe default / stop condition |
|---|---|---|---|
| Existing asset → Pack/Procedure reference | Skills and Packs plus Nestfolio binding | source locator, digest, prerequisites, permissions, semantic contract, invocation provenance | mismatch or ambiguous source blocks activation |
| Project asset → reusable Pack candidate | Pack owner | prove absence of Nestfolio-only semantics, compatibility tests, independent use evidence | keep in project binding |
| Current backlog item → target Work reference | Work Coordination with binding parser | exact source revision, authority, selected fields, omissions, criteria/Scope review | derive read-only candidate only; no target activation if ambiguous |
| Current planner output → Work candidates | Application read model | source revisions and ranking rule provenance; deterministic rebuild | show disagreement and block automatic selection |
| Current journal history → target reference/export | Repository Infrastructure | immutable locator/digest, run identity, effect/decision limitations, no active conversion | keep current Run current; do not import as active target state |
| Current validator/check → Validation Plan entry | Assurance plus Pack binding | declared mode, inputs, version, result contract, failure semantics, criterion mapping | treat as unsupported/unavailable, never pass |
| Current check → target Guard | Assurance owner | explicit owner, applicability, severity, exception policy, lifecycle, Evidence and Decision | remain a validator/project rule |
| Finding/audit JSON → Evidence envelope | Assurance | immutable source reference, claim, criterion, digest, freshness, collector authority | invalid/stale/missing source cannot satisfy criterion |
| Finding/failure → Observation | Decision and Learning | factual wording, source Evidence, provenance, duplicate check | no Observation or keep untriaged; never create rule |
| Current lesson → target Lesson candidate | Decision and Learning | preserve original text/status/source, classify historical versus candidate, reviewer | historical reference only |
| Accepted Lesson → target artifact change | target Pack/Guard/Procedure/binding owner | explicit Change Proposal, review authority, validation plan/result, version/lock audit | reject/defer; no mutation |
| External issue/PR/CI/deploy/ADR → target reference | Reference/Provenance adapter | external identity, observed revision/time, authority/capability limits | stale/unavailable; required dependency blocks |
| Target operational state → Handoff/export boundary | Execution Continuity / Repository Infrastructure | latest verified Checkpoint, exact next action, repository/context/lock/effect state, digest | block publication/transfer if incomplete or ambiguous |
| Canonical state → projection/index | Repository Infrastructure | deterministic rebuild and digest comparison | delete/rebuild; projection never wins conflict |

Hidden manual conversion, ad hoc copy/paste, transcript interpretation, or a derived view cannot establish target authority.

## 12. Validation and Evidence contract by slice

| Slice | Completion Evidence | Mandatory failures | Gate to next slice |
|---|---|---|---|
| MI-001 | activation diagnostic, exact manifest/Procedure/asset digests, real bounded invocation result, explicit guarantee header, disable/re-enable proof | asset mismatch, missing capability, id conflict, false higher-level claim | current asset governed without loss of value and direct rollback proven |
| MI-002 | composed lock, self-validation, conflict report, reusable/project separation evidence, prior-lock rollback | conflict, digest drift, permission/capability mismatch | deterministic Pack resolution and rollback |
| MI-003 | candidate rationale, exact backlog/external refs, WorkSelection, Scope/criteria, route record, stale/blocker/index tests | stale source, hard dependency, corrupt projection, dual route | one bounded target Work effort is authority-safe and reversible |
| MI-004 | Formation Trace, immutable Context Pack, validation, human authorization/rejection/revocation, adapter-view digest | contradictory/missing/stale/corrupt/oversized source, delivery mismatch | authorized context can start only target-routed effort and downgrade safely |
| MI-005 | real two-Session start/resume, keyed effect dedup, Checkpoints, Handoff, freshness/lease/audit/rebuild evidence | unexpected stop, stale repo/context/lock, invalid checkpoint, unknown effect, lease conflict, corrupt projection | new target Run authority proven; no active current/target dual writer |
| MI-006 | criterion matrix, immutable Evidence by mode, Guard classification, waiver, atomic complete/return results | failed/missing/stale/invalid/unsupported/unavailable Evidence, out-of-Scope effect, unresolved Decision | completion is trustworthy and external/current authorities are preserved |
| MI-007 | Observation/Lesson/Proposal review records, no-auto-promotion proof, target-artifact validation or rejection, retirement inventory | unsafe proposal, duplicate/noisy lesson, attempted auto mutation, active dependency on retired component | controlled learning works and retained/deferred current capabilities are explicit |

A slice result is PASS or FAIL under its own future contract. A failed slice does not change G5 retrospectively; it triggers the rollback and corrective iteration defined by that contract.

## 13. Rollback, abandonment, recovery, cutover, deprecation, and retirement

### Rollback classes

- **Activation rollback:** disable target route/Pack/command and restore prior lock; no state conversion.
- **Effort rollback:** return/cancel target Work, preserve Scope/Context/Run/Evidence history, and create explicit lower-level follow-up if needed.
- **Operational rollback:** pause/cancel target Run, reconcile unknown effects, publish Handoff, release lease; never duplicate completed effects or write the Run into the current journal.
- **Assurance rollback:** invalidate or supersede a plan/Evidence binding, return Work to a non-complete state, retain failures and waivers.
- **Governance rollback:** reject/defer a Lesson or restore a previous Pack/Guard/Procedure version through normal version/lock change.

### Abandonment

A slice may be abandoned after preserving:

- exact artifacts and state created;
- changed repository files/effects;
- current and target authority at abandonment;
- unresolved Decisions and unknown effects;
- latest verified Checkpoint/Handoff where applicable;
- reason, risks, and exact safe continuation at the prior level.

### Recovery

- derived-state loss: rebuild from canonical artifacts/store and compare digests;
- stale state: classify refresh, reformation, reconciliation, or non-resumable;
- corrupt target canonical state: preserve bytes, use last verified predecessor only when unambiguous, otherwise block for human recovery Decision;
- divergent current/target state: preserve both, identify qualified owners and route, no recency winner;
- current journal corruption: current mechanism owns recovery for current Runs; target does not assume authority;
- external unavailability: retain stale observation, block required transitions, allow explicit alternate Evidence or waiver only under accepted policy.

### Cutover points

1. Procedure invocation cutover — per Procedure, target lock selects exact asset.
2. Pack resolution cutover — per workspace lock revision.
3. Work cutover — per WorkSelection route and source revision.
4. Context cutover — per authorized Context Pack and target-routed Work.
5. Run cutover — per new Run identity; current active Runs are never converted.
6. Completion cutover — per Work effort once target Validation Plan is active.
7. Learning cutover — target-routed Work produces only governed target candidates.

### Deprecation and retirement conditions

A current command/component can be deprecated only when:

- no active current-routed effort or Run depends on it;
- target replacement or explicit no-replacement disposition is accepted;
- historical artifacts remain readable or are exported with provenance;
- current and target routes cannot be confused;
- rollback window and owner are explicit;
- documentation and automation no longer invoke it;
- removal does not erase external authority or project-only value.

Rejected complexity is retired rather than preserved for compatibility. Deferred capabilities remain named and bounded, not silently partially migrated.

## 14. Risk- and evidence-based ordering

| Order | Slice | User value / time to value | Principal uncertainty reduced | Authority/blast-radius profile | Decisive next evidence |
|---:|---|---|---|---|---|
| 1 | MI-001 | immediate, one useful Procedure | can current practical behavior fit Pack/Adapter boundaries? | minimal; no Work or Run state | governed asset invocation and rollback |
| 2 | MI-002 | repeatable composition | can reusable/project behavior coexist without lock ambiguity? | workspace lock only | deterministic resolution and project separation |
| 3 | MI-003 | next coherent work without chat reconstruction | can current backlog feed local execution authority safely? | one Work effort; no external write | per-item authority route and Scope |
| 4 | MI-004 | trustworthy bounded start | can target context be introduced without breaking lower levels? | immutable opt-in artifact | authorization, rejection, downgrade, stale failure |
| 5 | MI-005 | fresh-session continuity | can operational authority cut over without dual Run state? | one new target Run; highest state risk but VS evidence exists | genuine resume, dedup, rollback, drain rule |
| 6 | MI-006 | trusted completion | can current validators/external results coexist with target Assurance? | one Work completion; no universal integration | Evidence-bound completion and Guard classification |
| 7 | MI-007 | reviewed improvement and lower duplication | can learning and retirement remain governed? | governance changes isolated by version/lock | no-auto-promotion and retirement proof |

The order deliberately delays the operational store until Work and Context authority are established, and delays completion/learning until Run continuity is proven. It does not follow current feature breadth and does not reproduce intake, themes, Epic orchestration, deploy generalization, or all checks before first value.

## 15. Required migration scenario results

| Scenario | Result | Walkthrough observation, including rollback/recovery |
|---|---|---|
| **M1 — Level 1 procedure-first adoption** | **PASS** | MI-001 wraps one current useful Claude Code asset behind a locked Procedure and Adapter path. Backlog, Runs, and Assurance remain absent and explicitly labeled. Disable target activation restores direct current use without state conversion. |
| **M2 — Pack locking and reusable-procedure coexistence** | **PASS** | MI-002 composes reusable and Nestfolio Packs with one resolved asset per identity, blocking conflicts/digest drift. Prior lock rollback is atomic and history preserving. |
| **M3 — Local Work and Scope transition** | **PASS** | MI-003 derives/references exact current backlog state while target Work owns only local execution. No bidirectional sync or enterprise authority claim exists. Return/cancel preserves source and target history. |
| **M4 — Context Pack introduction** | **PASS** | MI-004 introduces immutable formed/validated/human-authorized Context Packs only for target-routed Work. Levels 1–3 continue truthfully. Revocation/supersession returns to Level 3 without false guarantees. |
| **M5 — Operational Run-state transition** | **PASS** | MI-005 routes new Runs to the target store and drains existing current journal Runs. No active Run is dual-written. Effects/checkpoints are preserved; rollback pauses/cancels target state rather than converting it in place. |
| **M6 — Fresh-session continuity** | **PASS** | MI-005 uses the already validated VS-001/VS-001A mechanics as architectural evidence and requires a new slice-specific genuine start/resume validation. Historical Runs are neither rerun nor rewritten. |
| **M7 — Assurance and completion transition** | **PASS** | MI-006 treats current checks and external systems as underlying result authorities while target Assurance owns criterion mapping and completion. Checks are not automatically Guards; failed/unavailable results remain non-pass. |
| **M8 — Decision and learning transition** | **PASS** | MI-007 converts findings/lessons only into provenance-preserving candidates. Automatic mutation is prohibited; explicit review and separate target-artifact validation govern promotion. Rollback rejects or restores versions. |
| **M9 — Project-binding preservation** | **PASS** | Every slice keeps backlog conventions, topology, deploy/test procedures, routing, local Guards, and Lessons in the Nestfolio binding unless independent evidence supports reusable extraction. No Core promotion occurs. |
| **M10 — External-authority coexistence** | **PASS** | Git, issues, PRs, CI, deployment, security, and ADRs remain authoritative. Continuity stores local execution state and typed references/Evidence only. Required unavailable authority blocks or uses explicit waiver policy. |
| **M11 — Partial adoption and downgrade** | **PASS** | Each level has useful value, explicit absent guarantees, compatible earlier artifacts, and a disable path. Higher-level history remains readable; downgrade never claims the higher guarantee or deletes artifacts. |
| **M12 — Failed-slice rollback** | **PASS** | Every slice defines activation/effort/operational/assurance/governance rollback and abandonment. Partial effects, Evidence, Decisions, and exact continuation are preserved. Unknown effects block unsafe retry. |
| **M13 — Concurrent current and target mechanisms** | **PASS** | Coexistence is per distinct effort or read-only view. Route, store, lease, writer, and synchronization direction are explicit. Same-effort dual writers are prohibited and fail closed. |
| **M14 — Stale, corrupt, or divergent state** | **PASS** | Stale revisions trigger refresh/reformation/reconciliation; derived corruption rebuilds; canonical ambiguity preserves candidates and blocks; mismatched assets and unknown effects block execution/resume/completion. |
| **M15 — No-Console migration** | **PASS** | Every slice is executable through repository artifacts, Claude Code Adapter, Application Services, and non-authoritative CLI/read models. No migration criterion depends on a Console. |
| **M16 — No-big-bang end-to-end path** | **PASS** | MI-001 through MI-007 reach the accepted six-level operational loop through opt-in per-procedure/per-effort cutovers. Current capabilities are drained, retained in binding, deferred, rejected, or retired independently; no coordinated full-runtime rewrite exists. |

All required scenarios pass structurally. No result depends on an unspecified future authority rule or unavoidable coordinated rewrite.

## 16. Serious alternatives

| Alternative | Decision | Rationale and consequence |
|---|---|---|
| Big-bang rewrite | **rejected** | unnecessary and high blast radius; per-effort routing and target-only new Runs reach the target without synchronized replacement |
| Preserve and migrate every current Nestfolio capability | **rejected** | current breadth includes project-specific, incomplete, test-only, contradicted, deferred, and rejected behavior; classification, not preservation, governs |
| Greenfield target runtime beside current runtime with indefinite duplication | **rejected** | temporary coexistence is useful, indefinite dual authority is not; route, cutover, drain, and retirement are required |
| Schema-first or universal-API-first generalization | **rejected** | ownership and semantics are already fixed; exact schemas/APIs are slice implementation questions and must not delay practical value |
| Direct migration to full Level 6 | **rejected** | hides authority and rollback risks and delays first value; each level must prove the next assumption |
| Mandatory local Console | **rejected for migration** | PX-001 defers it; CLI, artifacts, and Claude Code satisfy all slices |
| Hosted service or commercial control plane | **rejected** | outside Product Foundation and unnecessary for repository-native migration |
| Universal integrations | **rejected** | concrete-use typed references/invocations suffice; external systems keep authority |
| Multi-executor parity before evidence | **rejected** | Claude Code is primary executor; future adapters are evidence-driven |
| Automatic project-behavior promotion into Core | **rejected** | violates TA-002 and DR-0016/DR-0017; repeated cross-project evidence and a Decision are mandatory |
| Reuse current modules unchanged as target architecture | **rejected** | current modules mix implementation, project binding, and incomplete behavior; no source-compatibility promise exists |
| Selective wrapping, per-effort strangling, drain/freeze/retire | **accepted** | minimizes blast radius, preserves working behavior and authority, and produces decisive evidence at every level |
| Keep useful deferred capabilities in Nestfolio binding | **accepted** | avoids forced migration and premature generalization; future slices require concrete value evidence |
| Narrow external Evidence/reference adapters | **accepted when required** | preserves external authority and avoids universal synchronization |
| Local Console reconsideration after dogfooding evidence | **deferred** | only if CLI/artifact recovery or review is demonstrably insufficient |

## 17. Contradictions and implementation questions

### Blocking contradictions

None.

No migration requirement conflicts with the Product Foundation, TA-002, PX-001, VS evidence, or active Decisions. The current runtime's documented self-containment and command-surface contradictions do not require an architecture revision because the plan does not depend on those claims; it binds only verified current capabilities and fails closed on mismatches.

### Non-structural implementation questions

| Question | Owning slice/component | Safe default or stop condition |
|---|---|---|
| exact installation channel, package/runtime versions, and command names | MI-001, Claude Code Adapter/Repository Infrastructure | no activation until prerequisites and supported executor capability are explicit |
| exact manifest, lock, artifact, and operational-store serialization/paths | each owning slice | use slice-local provisional format; no public compatibility claim; preserve digests and ownership semantics |
| which existing current procedure is first | MI-001 contract | select one production-reachable procedure from canonical evidence; stop if exact asset/contract cannot be established |
| whether a current asset is referenced in place or frozen/copied into a Pack | MI-001/MI-002 | one locked source only; ambiguous duplicate blocks |
| exact reusable-versus-project extraction boundary | MI-002 | remain in Nestfolio binding without cross-project evidence |
| backlog field mapping and ranking presentation | MI-003 | derive only fields required for local execution; preserve source as reference; no write-back |
| active current journal history import format | MI-005 Repository Infrastructure | do not import as active target state; reference/export immutable history only |
| checkpoint frequency and reliable Claude hooks | MI-005 Adapter | mandatory boundaries only; unsupported hook cannot be sole checkpoint authority |
| deterministic versus judgment Evidence serialization | MI-006 Assurance | keep modes distinct and explicit; unsupported result cannot satisfy criterion |
| check-to-Guard classification | MI-006 | leave check as validator/project rule unless full Guard authority metadata exists |
| external provider-specific diagnostics and reconciliation | MI-006 / later concrete integration | required unavailable result blocks; no generic write adapter |
| lesson deduplication and review ergonomics | MI-007 | preserve candidates, reject/defer noise; no promotion by count |
| exact retirement timing for current components | MI-007 and later dogfooding | retain until no active route/reference and rollback window closes |
| human identity/delegation and export-bundle format | MI-004–MI-007 | explicit local actor/authority record; ambiguous authority blocks |
| Console re-evaluation | later dogfooding | remain deferred; no migration dependency |

These questions have owners and safe defaults. None is essential to the G5 conclusion.

## 18. G5 decision

**Gate G5 — Migration viability: PASS on 2026-07-14.**

The completion criteria are satisfied conjunctively:

- every relevant current capability and runtime ring has a traceable accepted target disposition;
- the path requires no big-bang rewrite;
- all seven slices provide independent user value and explicit PX-001 level mapping;
- compatibility, coexistence, authority, validation, Evidence, rollback, abandonment, recovery, cutover, deprecation, and retirement are defined for every slice;
- current and target authority never overlap ambiguously;
- external systems remain authoritative for their objects;
- cumulative artifacts remain compatible and truthful through upgrade and downgrade;
- all target component transitions and transformation ownership are explicit;
- ordering follows risk and evidence;
- serious alternatives are decided;
- all M1–M16 scenarios pass;
- no Product Experience requirement is hidden or deferred as migration detail;
- no blocking contradiction or essential current-system evidence gap remains.

The G5 result is unconditional. It does not assert that any migration slice has been implemented or validated in code.

## 19. Exactly one next iteration

The sole authorized next iteration is:

**MI-001 — Procedure-First Adoption**

Status:

```text
authorized-contract-required
not executed
```

Primary question:

> Can one current useful Claude Code repository procedure be exposed through the accepted Pack, Application Service, Repository Infrastructure, and Claude Code Adapter boundaries with exact locking, truthful Level 1 guarantees, structured provenance, and complete rollback, without migrating backlog, Runs, Assurance, or project-specific behavior into Framework Core?

Before execution, a fresh contract-authoring operation must create and review `sessions/MI-001-procedure-first-adoption/`. The contract must select the exact procedure and evidence scope, preserve Nestfolio-specific behavior in the project binding, and prohibit all MI-002+ capability implementation.

All other migration slices, broader implementation, Console work, universal integrations, hosted/commercial work, broad Nestfolio migration, and project-to-Core promotion remain blocked.
