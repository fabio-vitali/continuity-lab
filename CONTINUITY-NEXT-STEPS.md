# Continuity — SD-001-PUB Publication Closure Handoff

## Current state

- **SD-001 — Sustained Dogfooding Bootstrap executed 2026-07-18 and closed
  UNCONDITIONAL PASS**, then published the same session as **SD-001-PUB**.
  The first bounded contract opening the sustained-dogfooding validation
  period under governance, executed from published contract revision
  `0585f8a576f914b3edfe2518e294730d20ccb87c` with the human program owner
  (fabio.vitali) available in-session for the live period-start
  confirmation ("vai", machine-captured UTC `2026-07-18T19:22:53.000Z`).
- The frozen measurement protocol
  (`continuity/evidence/sd-001/dogfooding-protocol.md`, SHA-256
  `95f7f45ebc7212b6d0782cca6165c0f9d2a831ab39fd132f4e4c917ab43cd3bb`) and
  the append-only dogfooding ledger
  (`continuity/evidence/sd-001/dogfooding-ledger.md`, entry 0 exactly per
  `entry_zero`) were materialized exactly as contracted. SD-001 performed
  NO store write; the pinned engine remains frozen and byte-identical.
- **SD-001-PUB**: the 2-path delta (manifest self-hash
  `da770f29f65535bef51b916e6ef9c9f69c7cd150fefd0477454036dba9e585af`) was
  verified byte-exact, staged, and committed as one commit on Nestfolio
  main, exact subject "Start SD-001 sustained dogfooding period", sole
  parent `914456ce44c271d5bb38b22d985448011d6adcf9`, published at exact
  Nestfolio revision `bd0b2fcc2d56fecbcc45c05c80cfe135605b44d3`, and pushed
  to `origin/main`. At the published revision Nestfolio is clean and the
  learning suite, Level 6, Level 5, Level 4, Level 3, Level 2, and Level 1
  return 11/11, 10/10, 7/7, 23/23, 23/23, 23/23, and 14/14 respectively.
- **The sustained-dogfooding period began at this commit's committer UTC
  `2026-07-18T21:39:42.000Z`.** From this moment the SD-001
  `standing_period_rules` govern: real backlog-routed Nestfolio product
  work through the Continuity Level 1-6 mechanisms (selection, authorized
  context, resumable Runs with Checkpoints/Handoffs, Evidence-bound
  completion, governed learning via the MI-007 path), with the pinned
  engine frozen for the whole period and contemporaneous weekly ledger
  measurement toward the twelve Product Foundation success criteria.
  Blocked during the period unless separately contracted: any engine/hook/
  settings byte change, any published-suite edit outside a self-invalidating
  correction, any mutation of a recorded historical result, Skill/Pack/
  binding changes outside the MI-007 governed-learning path, promotion to
  Framework Core, and — above all — the period verdict itself and any
  per-criterion claim.
- MI-002-R2 `PASS`, MI-003 `FAIL`, MI-003-R1 `FAIL`, MI-003-R2 `PASS`,
  MI-004 `PASS`, SE-001-R1 `FAIL`, MI-004-R1 `PASS`, SE-001-R2 `FAIL`,
  SE-001-R3 `PASS`, MI-005 `PASS`, MI-006 `FAIL`, MI-006-R1 `PASS`,
  MI-007 `PASS`, and SD-001 `PASS` stand as fourteen separate immutable
  results, unrepaired and unrelabeled. Report:
  `docs/70-implementation/sd-001-sustained-dogfooding-bootstrap.md`.

## Next valid operation

The sustained-dogfooding period is now open. The next valid program
operation is real backlog-routed Nestfolio development work selected and
executed through the Continuity Level 1-6 mechanisms per the standing
period rules (normal `docs/BACKLOG.md`-driven selection in Nestfolio,
e.g. via the repository's own `backlog-next` mechanism), with
contemporaneous weekly appends to
`continuity/evidence/sd-001/dogfooding-ledger.md` per the frozen
`dogfooding-protocol.md` cadence. This is genuine implementation/judgment
work — use `claude-fable-5` or `claude-opus-4-8` per task, with
`claude-sonnet-5` for mechanical bookkeeping/ledger appends.

The period verdict (working name SD-002) is a separately contracted later
session and is not contractable until the minimum period is satisfiable
(at least six consecutive weeks of active development, twenty non-trivial
Work Items, five multi-item or multi-session efforts including two Epics
or equivalent, fifteen post-interruption resumptions) — never earlier.
Broader or unrelated work (themes/intake/Epic/deploy migration, a
universal registry, a hosted service) remains blocked.
