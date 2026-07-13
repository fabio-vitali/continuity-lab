---
artifact_id: DR-0011
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# DR-0011 — Make Context Formation an Explicit, Reproducible Pipeline

## Context

PF-001 retained Context Formation only if it can explain authority, selection, exclusions, uncertainty, pending decisions, and Evidence provenance better than generic retrieval or memory. RI-001 found no generic Context Pack formation or validation subsystem in the current runtime.

## Decision

Implement Context Formation as a bounded, resumable pipeline with explicit stages:

1. frame objective and output contract;
2. bind workspace and revision;
3. load a locked set of Pack Definitions;
4. discover candidate sources within declared capability and scope;
5. resolve authority, revision, freshness, and access limitations;
6. select bounded source slices and record rationale;
7. record explicit exclusions;
8. diagnose contradictions, staleness, omissions, and pending decisions;
9. assemble an immutable candidate Context Pack and Formation Trace;
10. validate continuity properties;
11. apply explicit authorization policy;
12. export without changing canonical state.

The pipeline must never claim universal completeness. Validation means that declared continuity rules passed against the available and explicitly excluded sources.

Formation is reproducible through workspace revision, Pack lock, provider identities, typed references, source locators/digests, explicit choices, exclusions, validator versions, and authorization policy identity.

## Status

Validated, not ratified.

## Supporting evidence

- Context Formation hypothesis and kill criteria in `docs/10-product/product-foundation.md`;
- PF-001 scenarios 2, 4, 7, 8, 11, and 12;
- absence of a generic subsystem in `docs/20-current-system/current-runtime-map.md`;
- end-to-end pipeline in `docs/30-target-architecture/target-architecture.md`.

## Alternatives considered

### Opaque RAG or memory retrieval

Rejected because selection cannot be adequately reproduced or audited.

### Manual template only

Retained as the strongest baseline for later comparison, but rejected as the target architecture because it cannot by itself provide provider resolution, stale-reference diagnostics, Pack locking, or reproducible validation.

### Accumulate all available context

Rejected because excess context increases noise and hides exclusions and authority.

## Rejected alternatives

- unbounded repository ingestion;
- automatic authorization of all formed context;
- treating inaccessible sources as irrelevant;
- hiding provider and selection limitations from the resulting artifact.

## Risks

- Omission diagnostics may create false confidence or excessive warnings.
- Formation can become too slow or ceremonial.
- Mutable external sources may prevent exact replay.
- Provider-specific capabilities may distort source selection.

## Validation requirements

- Comparative takeover experiments against repository/manual-template baselines.
- Ten-minute first-value test.
- Measurement of authoring cost, repeated exploration, incorrect assumptions, and material omissions.
- At least two executor adapters, one human takeover, one monorepo case, and one long migration.

## Consequences

- Context Formation becomes a first-party bounded context and not a synonym for generic retrieval.
- Selection rationale and exclusions are durable product state.
- Failure to resolve required authority blocks or explicitly degrades authorization; it never produces a silent pass.

## Supersedes

None.

## Superseded by

None.
