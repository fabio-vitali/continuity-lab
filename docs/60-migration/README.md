---
artifact_id: MIGRATION-INDEX
status: ratified
owner: migration
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Migration

**MA-001 — Migration Architecture is authorized and contracted as the sole next iteration. Gate G5 remains pending.**

The active reviewed-before-execution contract is located at:

```text
sessions/MA-001-migration-architecture/
  context-pack.yaml
  prompt.md
  session-handoff.md
```

This records only that MA-001 is ready for review and later execution. It does not record that MA-001 has run.

Current facts:

- `docs/60-migration/migration-plan.md` has not been created;
- no G5 PASS or FAIL exists;
- no migration architecture has been accepted;
- no migration or implementation slice is authorized;
- the MA-001 handoff is a prepared, unused placeholder.

When executed in a separate fresh session, MA-001 may design:

- current-to-target capability mapping using accepted TA-002 classifications;
- independently valuable migration slices mapped to PX-001 adoption levels;
- compatibility and explicit coexistence boundaries;
- source-of-truth and authority preservation;
- state-transformation ownership without implementation detail;
- validation and Evidence requirements;
- rollback, abandonment, recovery, cutover, deprecation, and retirement paths;
- risk- and evidence-based ordering;
- unconditional G5 PASS or FAIL and exactly one next iteration.

MA-001 must not implement migration, rerun existing vertical slices, create a big-bang rewrite, inspect Nestfolio broadly, or pre-authorize implementation.

Planned canonical artifact, created only by the later reviewed MA-001 execution:

- `migration-plan.md`

Review, commit, ZIP creation, and fresh-session instructions are exact in `CONTINUITY-NEXT-STEPS.md`.

Migration implementation and every later slice remain blocked until G5 is decided and exactly one next iteration is explicitly authorized.
