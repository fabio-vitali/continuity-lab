---
artifact_id: MA-001-MIGRATION-ARCHITECTURE-HANDOFF
status: validated
owner: session
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# MA-001 — Migration Architecture Handoff

## Result

**MA-001 is complete. Unconditional decision: PASS. Gate G5 is passed and valid.**

The accepted migration architecture is `docs/60-migration/migration-plan.md`. It answers the primary question affirmatively: the accepted TA-002 architecture and PX-001 Product Experience can be introduced incrementally and reversibly from the validated current runtime through independently valuable slices, with explicit compatibility, rollback, authority boundaries, and no big-bang rewrite.

No migration slice was executed. No implementation artifact was created or modified.

## Authorization verification

Before design work, `docs/90-state/program-state.md` was read first. It consistently recorded:

- TA-002 complete and G3 passed and valid;
- VS-001 complete with its historical FAIL preserved;
- VS-001A complete with PASS and combined G6 PASS;
- PX-001 complete with unconditional PASS and G4 passed and valid;
- the accepted Product Experience as canonical;
- `DR-0022` authorization of MA-001 as the sole next iteration;
- the active MA-001 contract as `authorized-not-started`;
- no prior MA-001 execution, no migration plan, and no G5 result;
- migration implementation and every broader or unrelated workstream blocked.

No contradiction was found, so MA-001 proceeded.

## Canonical evidence used

The active contract and canonical artifacts were read in the contract's exact order. TA-001 was not used as an active baseline. Prior conversation and hidden executor state were not used.

The Current Runtime Map remained the primary current-system authority. No Nestfolio source inspection was requested or performed because no essential current-system evidence gap remained after the canonical mapping.

## Exact observations

1. The current runtime contains useful but unevenly mature capability families: implemented repository checks, trigger and exclusion configuration, findings and lesson capture, backlog and journal state, audit and ship/skip evidence, projections, adapter surfaces, content, starter assets, and evaluation mechanisms; several target lifecycle capabilities are partial, test-only, documented-only, or absent.
2. The accepted target is not a one-for-one rewrite of those mechanisms. Every current capability received a traceable disposition: retain, wrap, adapt, migrate, replace, defer, reject, or retire.
3. The safe migration unit is a Procedure or bounded work effort, not the entire repository runtime.
4. Current and target mechanisms can coexist safely only when routing identifies the qualified writer and authority for each object. Mirroring or projection may support reads but cannot create a second authority.
5. Existing current Runs must drain, complete, or be abandoned under current journal rules. New target Runs may start only in target Repository Infrastructure. Active Run state must not be transformed in place.
6. The six PX-001 levels provide a valid cumulative migration backbone: useful guidance first, then reusable locking, bounded Work, authorized Context, resumable Runs, and finally Assurance and governed Learning.
7. A repository may remain safely at any completed level when active and absent guarantees are stated truthfully. Upgrade is optional; downgrade and disable preserve readable history and cannot silently weaken completion claims.
8. External Git, issue, PR, CI, deployment, security, ADR, and similar systems remain authoritative for their objects. Continuity owns only its local representation, execution history, Evidence, and governed learning.
9. Nestfolio-specific topology, validators, deployment procedures, routing, Guards, backlog interpretation, and Lessons remain in the Nestfolio Pack or project binding.
10. A Console is unnecessary for the migration path; CLI and any later Console remain non-authoritative projections and command surfaces.
11. The Current Runtime Map and existing validation reports were sufficient for the G5 structural decision. Concrete serialization, command naming, hook placement, and store layout are implementation questions assigned to owning slices, not missing migration architecture.
12. No accepted Product Foundation, TA-002, PX-001, validation report, or Decision required revision.

## Accepted migration sequence

| Slice | Independent value | PX-001 level reached |
|---|---|---|
| MI-001 — Procedure-First Adoption | A developer can invoke one useful Skills-only Procedure from repository instructions without adopting runtime state | Level 1 |
| MI-002 — Reusable Pack Composition | Repositories can reuse exact locked Procedures and executor assets without hidden drift | Level 2 |
| MI-003 — Bounded Local Work and Scope | A selected effort has explicit Work, Working Set, Scope, and completion criteria | Level 3 |
| MI-004 — Authorized Context Introduction | Context is formed, validated, explained, and explicitly authorized before execution | Level 4 |
| MI-005 — Resumable Run Cutover | New efforts can checkpoint, hand off, and resume in a fresh Claude Code Session from repository-local state | Level 5 |
| MI-006 — Evidence-Bound Completion and Guard Coexistence | Completion becomes criterion-linked and blocked by failed or missing Evidence, Guards, or unwaived failures | Level 6 Assurance |
| MI-007 — Governed Learning and Selective Current-Runtime Retirement | Decisions and reviewed learning become durable while replaced legacy mechanisms retire selectively | Level 6 Learning |

Each slice defines prerequisites, participating components, current/transitional/target authority, coexistence, compatibility, interpretation ownership, validation, required failure cases, Evidence, rollback, abandonment, recovery, cutover, deprecation, retirement, exclusions, and the evidence needed to justify or invalidate the next slice.

## Scenario results

| Scenario | Result | Decisive observation |
|---|---|---|
| M1 — Level 1 procedure-first adoption | PASS | Instructions and one Skills-only Procedure provide useful value without target runtime state |
| M2 — Pack locking and reusable-procedure coexistence | PASS | Exact locks qualify execution while unlocked current content remains clearly outside Level 2 guarantees |
| M3 — Local Work and Scope transition | PASS | New bounded efforts may use target Work artifacts while legacy backlog remains externally/currently authoritative |
| M4 — Context Pack introduction and authorization | PASS | Formation, validation, provenance, and explicit authorization add a bounded gate without rewriting Work authority |
| M5 — Operational Run-state transition | PASS | Per-effort routing and current-Run drain avoid active-state conversion and dual writers |
| M6 — Genuine fresh-session continuity | PASS | VS-001 mechanics plus VS-001A executor evidence support the target Level 5 migration contract |
| M7 — Assurance and completion transition | PASS | Legacy checks can be wrapped as validators while Continuity alone owns criterion-linked completion claims |
| M8 — Governed Decision and learning transition | PASS | Imports are provenance-preserving candidates; promotion remains explicit and reviewed |
| M9 — Nestfolio project-binding preservation | PASS | Project-specific behavior remains outside Framework Core and can migrate selectively through the binding |
| M10 — External-authority coexistence | PASS | External objects stay externally authoritative; local representations are linked and staleness-aware |
| M11 — Partial adoption and downgrade | PASS | Every level states active and absent guarantees, optional upgrades, disable behavior, and history preservation |
| M12 — Failed-slice rollback | PASS | Each slice has bounded removal or routing rollback without invalidating earlier accepted levels |
| M13 — Concurrent current and target mechanisms | PASS | Qualified routing, one writer, no active Run conversion, and explicit read derivation prevent ambiguous authority |
| M14 — Stale, corrupt, or divergent state | PASS | Validation, revisions, digests, CAS, leases, recovery, and stop conditions prevent silent continuation |
| M15 — No-Console migration | PASS | Repository artifacts, Claude Code Adapter, and CLI are sufficient; Console remains deferred |
| M16 — Complete no-big-bang path | PASS | The seven cumulative slices reach Level 6 while preserving independent value, rollback, and selective retirement |

All required scenarios passed structurally. No scenario relies on an unspecified future implementation choice to resolve authority, compatibility, reversibility, ownership, or evidence.

## Decisions

Created and accepted:

- `DR-0023-cumulative-strangler-migration-by-guarantee-level.md`.

Its binding choices are:

- migrate cumulatively by PX-001 guarantee level;
- use Procedure- or effort-level strangler routing rather than repository-wide cutover;
- require one qualified authority and writer for each canonical object;
- drain existing current Runs and create only new target Runs after cutover;
- preserve external and project-specific authority boundaries;
- reject automatic upgrade, silent downgrade, automatic learning promotion, and premature Core generalization.

Serious alternatives evaluated and rejected or deferred are recorded in the Migration Plan. Big-bang rewrite and premature universalization remain rejected.

## Contradictions and questions

**Blocking contradictions found: none.**

Non-structural implementation questions were separated and assigned to their owning slice, including exact repository paths and command names, concrete serialization choices, operational store layout, adapter hook surfaces, and capability-specific retirement timing. Safe defaults and stop conditions are defined in the Migration Plan; none is permitted to alter accepted L1, L3, or L4 authority implicitly.

## Changed-file manifest

Exactly these files changed:

1. `README.md`
2. `CONTINUITY-NEXT-STEPS.md`
3. `docs/60-migration/README.md`
4. `docs/60-migration/migration-plan.md`
5. `docs/70-implementation/README.md`
6. `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`
7. `docs/90-state/program-state.md`
8. `docs/90-state/artifact-index.md`
9. `sessions/MA-001-migration-architecture/context-pack.yaml`
10. `sessions/MA-001-migration-architecture/session-handoff.md`

The exact executed prompt was not modified:

```text
sessions/MA-001-migration-architecture/prompt.md
SHA-256: a6531bd13408e87f5c48fc06dc275bfea785949b5ad339a89da975b9791feb3b
```

No file outside the contract's allowed list changed.

## Sole authorized next iteration

### MI-001 — Procedure-First Adoption

Status:

```text
authorized-contract-required
not contracted
not executed
```

MI-001 is the sole evidence-justified next iteration because it provides the earliest useful adoption value, has the smallest authority and rollback surface, exercises the Framework/Adapter/Procedure boundary before canonical runtime state is introduced, and produces decisive evidence for or against reusable multi-Procedure Pack composition and compatibility.

### Required immediate operation

Run a separate **contract-authoring operation only**. It must create a reviewed MI-001 contract under:

```text
sessions/MI-001-procedure-first-adoption/
  context-pack.yaml
  prompt.md
  session-handoff.md
```

The contract-authoring operation must not implement MI-001. It must read the accepted Migration Plan and `DR-0023`, verify that MI-001 is still the sole authorized iteration, select one concrete useful Skills-only Procedure and entry point, define its minimal Pack/project binding and exact asset lock, independent value, active and absent Level 1 guarantees, current/target ownership, compatibility, validation, Evidence, failure, rollback/removal, exclusions, and exact permitted repository scope. It must keep reusable multi-Procedure composition and all Level 2 or later capabilities blocked.

After the contract is reviewed and committed, MI-001 execution must occur in another fresh isolated session using the exact committed prompt.

## Work that remains blocked

- MI-001 execution until its reviewed contract is committed and separately invoked;
- MI-002 through MI-007 until predecessor Evidence and explicit authorization;
- broader implementation and later vertical slices;
- migration of the full current runtime;
- local Console implementation;
- universal executor or platform integrations;
- hosted service, RBAC, analytics, billing, commercial packaging, or commercial control plane;
- broad or unrelated Nestfolio migration;
- promotion of Nestfolio-specific behavior into Framework Core without repeated cross-project evidence and a new Decision;
- automatic Observation or Lesson promotion;
- any silent revision of Product Foundation, Current Runtime Map, TA-002, PX-001, validation reports, or accepted Decisions.

## Fresh-agent continuation rule

A competent fresh agent can continue using only the committed repository. It must treat `docs/90-state/program-state.md` as active program authority, `docs/60-migration/migration-plan.md` as accepted L5 authority, and this handoff as MA-001 closure. It must not infer permission to execute MI-001 from G5 PASS alone; the next operation is contract authoring, exactly as stated above.
