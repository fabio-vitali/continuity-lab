---
artifact_id: MIGRATION-INDEX
status: ratified
owner: migration
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Migration

**MA-001 — Migration Architecture is the sole authorized next iteration. Gate G5 remains pending.**

MA-001 is authorized only after PX-001 completed with G4 PASS. It must first receive a new active session contract authored from current Program State and the completed PX-001 handoff.

MA-001 may design:

- incremental migration slices with independent value;
- compatibility boundaries;
- rollback and abandonment paths;
- authority preservation;
- current-to-target state and capability transitions;
- ordering and validation requirements.

MA-001 must not implement migration, rerun existing vertical slices, create a big-bang rewrite, or pre-authorize implementation.

Planned canonical artifact, only when the reviewed MA-001 contract executes:

- `migration-plan.md`

Migration implementation and every later slice remain blocked until G5 is decided and one next iteration is explicitly authorized.
