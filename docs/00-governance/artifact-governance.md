---
artifact_id: GOV-ARTIFACTS
status: ratified
owner: program
last_updated: 2026-07-12
---

# Artifact Governance

## Canonicality rule

The repository is the only canonical location.

Chat, Canvas, local notes, and generated previews are non-canonical until consolidated and committed.

## Artifact ownership

Each concern has one owning artifact. Other files may reference it but must not duplicate its normative content.

| Concern | Owning artifact |
|---|---|
| How work is performed | `product-development-operating-model.md` |
| Artifact rules | `artifact-governance.md` |
| Design-level boundaries | `design-levels.md` |
| Product problem, thesis, concepts, constraints | `product-foundation.md` |
| Current implementation facts | `current-runtime-map.md` |
| Target architecture | `target-architecture.md` |
| Product workflows and UX | `product-experience.md` |
| Product falsification evidence | `product-falsification-report.md` |
| Migration path | `migration-plan.md` |
| Current program position | `program-state.md` |
| All artifact status and location | `artifact-index.md` |
| Individual high-impact choices | `decisions/DR-*.md` |
| Per-session input/output contract | `sessions/<id>/` |

## Front matter

Every canonical Markdown artifact begins with:

```yaml
---
artifact_id: UNIQUE-ID
status: draft | provisional | validated | ratified | superseded
owner: owning-domain
last_updated: YYYY-MM-DD
supersedes: []
superseded_by: null
---
```

## Change rules

### Normative change

A change to thesis, constraints, central concepts, boundaries, or lifecycle rules requires:

- a Decision Record;
- updates to the owning artifact;
- update to `artifact-index.md`;
- update to `program-state.md` if iteration order changes.

### Editorial change

Wording improvements that do not alter meaning need no Decision Record.

### Contradiction rule

When two canonical artifacts conflict:

1. stop the affected iteration;
2. create an Observation in the session handoff;
3. identify artifact owners;
4. propose a resolution;
5. do not choose silently based on recency.

## Decision records

Use a Decision Record for:

- category and product thesis;
- central abstraction;
- kernel boundaries;
- data authority;
- provider model;
- open-source boundary;
- major migration strategy;
- phase-sequence changes;
- rejection of a serious alternative.

Do not create Decision Records for minor wording or local implementation details.

## Artifact lifecycle

- **Draft** — incomplete and not usable as a handoff dependency.
- **Provisional** — usable but explicitly awaiting validation.
- **Validated** — tested against declared evidence.
- **Ratified** — accepted as governing direction.
- **Superseded** — retained only for history and excluded from normal Context Packs.

## File naming

- lowercase;
- kebab-case;
- stable names;
- no dates in canonical artifact filenames;
- dates and iteration IDs belong in metadata or session directories.

## Session artifacts

Session directories are historical execution records, not owners of product truth.

A session directory contains:

```text
context-pack.yaml
prompt.md
session-handoff.md
```

Optional:

```text
working-notes.md
evidence-index.md
```

The final product conclusions must be consolidated into owning artifacts.

## Canvas policy

Canvas may be used for interactive editing, but it is never canonical.

Before ending the session:

1. export or copy the final content into the owning Markdown artifact;
2. compare against the previous version;
3. commit the file;
4. discard dependency on the Canvas state.

## Review policy

Before committing AI-produced artifacts:

- inspect the diff;
- confirm status labels;
- confirm no proposal was accidentally promoted to Decision;
- confirm no duplicated normative section was introduced;
- confirm next iteration is singular and executable.
