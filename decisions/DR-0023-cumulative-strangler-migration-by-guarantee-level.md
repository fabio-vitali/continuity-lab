---
artifact_id: DR-0023
status: validated
owner: migration
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# DR-0023 — Adopt a Cumulative Strangler Migration by Guarantee Level

## Context

The program has accepted TA-002 architecture, PX-001 cumulative adoption levels, validated current-runtime evidence, and bounded implementation/executor evidence. The remaining question is how to introduce the target without preserving every current capability, creating indefinite duplication, or coordinating a full runtime rewrite.

The current runtime contains valuable procedures, backlog planning, journaled execution, checks, findings, gates, and learning behavior, but its modules mix reusable mechanics, Nestfolio-specific policy, incomplete paths, test-only helpers, and documented contradictions. Source-directory extraction cannot by itself define a safe migration.

## Decision

Adopt a cumulative strangler migration organized by the six PX-001 guarantee levels and delivered through these bounded slices:

1. `MI-001 — Procedure-First Adoption`;
2. `MI-002 — Reusable Pack Composition`;
3. `MI-003 — Bounded Local Work and Scope`;
4. `MI-004 — Authorized Context Introduction`;
5. `MI-005 — Resumable Run Cutover`;
6. `MI-006 — Evidence-Bound Completion and Guard Coexistence`;
7. `MI-007 — Governed Learning and Selective Current-Runtime Retirement`.

Migration is activated per Procedure or per Work effort. Every effort declares one route, active guarantee level, owning command path, and state authority.

Current and target mechanisms may coexist only when:

- they own different efforts, different state families, or read-only projections;
- synchronization or derivation direction is explicit;
- exactly one qualified writer owns each active state family;
- conflict, staleness, cutover, rollback, and retirement are explicit.

Existing current journal Runs finish under current authority. New target Runs use the target operational store and a new Run identity. An active Run is never dual-written or converted in place.

Current backlog, check, validation, lesson, and external-system state is referenced, wrapped, or selectively transformed under declared ownership. It is not bulk-copied into target authority. External systems remain authoritative for their objects.

Project-specific behavior remains in the Nestfolio Pack or binding. Promotion to reusable Packs or Framework Core requires independent evidence and, for Core, a new Decision.

Earlier-level artifacts remain valid after upgrade. Downgrade disables higher-level guarantees and command families while preserving all history. No automatic upgrade, silent downgrade, false completion, or automatic learning promotion is allowed.

## Status

Validated by MA-001 and accepted as the active migration-strategy decision.

## Supporting evidence

- `docs/20-current-system/current-runtime-map.md`;
- `docs/30-target-architecture/target-architecture.md`;
- `docs/40-product-experience/product-experience.md`;
- VS-001 and VS-001A validation reports;
- `DR-0012` through `DR-0022`;
- `docs/60-migration/migration-plan.md`.

## Alternatives considered

### Big-bang rewrite

Rejected because the target can be introduced per capability and effort, and because a coordinated rewrite would increase authority and rollback risk without evidence value.

### Preserve and migrate every current capability

Rejected because implementation status does not establish product value or target classification.

### Indefinite greenfield target beside the current runtime

Rejected because coexistence without cutover and retirement creates dual authority and maintenance debt.

### Direct jump to Level 6

Rejected because it delays first value and combines Pack, Work, Context, Run, Assurance, and Learning risks in one blast radius.

### Schema-first or universal-API-first migration

Rejected because exact schemas and APIs are implementation questions; ownership and compatibility semantics are sufficient to start bounded slices.

## Risks

- per-effort routing can confuse operators if guarantee labels or route diagnostics are weak;
- temporary coexistence can persist longer than intended;
- current project behavior may be generalized prematurely;
- operational rollback can be mishandled if target Runs are treated as convertible into the current journal;
- retirement can erase useful history if evidence and references are not preserved.

Mitigation is mandatory route visibility, one-writer enforcement, immutable history, slice-specific rollback, explicit retirement criteria, and project-binding default classification.

## Validation requirements

Each implementation slice must:

- have an independent PASS or FAIL contract;
- prove its active and absent guarantees;
- prove one-writer authority and rollback;
- exercise required stale, mismatch, conflict, corruption, and failure cases;
- preserve external authority and project-binding boundaries;
- authorize exactly one next iteration after its result.

## Consequences

- G5 passes unconditionally.
- `docs/60-migration/migration-plan.md` becomes the active migration authority.
- `MI-001 — Procedure-First Adoption` is the sole authorized next iteration, with a fresh contract required before execution.
- MI-002 through MI-007 and all broader implementation remain blocked.
- no current runtime module is approved for wholesale extraction or source compatibility.
- a local Console, hosted service, universal integration, multi-executor parity, and broad Nestfolio migration remain blocked or deferred.

## Supersedes

None.

## Superseded by

None.
