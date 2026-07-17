# MI-005 — Resumable Run Cutover — contract-authoring session handoff

## What this session did (2026-07-17, DR-0024)

- Verified session gates: all three repositories on main and clean;
  continuity-lab HEAD `d7257cf5a982dbea926e28da1d3a63a31120a327`;
  Nestfolio HEAD `363283bcc97b1e04710db0e7f759ffffddb18b69`.
- Read Program State in full, the migration plan's MI-005 section and
  validation/gate tables in full, and the grounding canon (target
  architecture §7.3/§10/§14/§15, DR-0014, design levels, VS-001 and
  VS-001A reports, current-runtime-map §5/§5.1/§6) with targeted reads.
- Grounded the contract in the actual Nestfolio runtime with bounded
  targeted reads only: HEAD tree inventory, tracked `.continuity`
  paths, `continuity/` and `runtime/continuity/` layout, the active
  SessionStart/SessionEnd hook registration in `.claude/settings.json`,
  the hook sources, and the current journal state (30 run directories
  under the Git common directory `journal/`, 29 with parked awaiting
  records). No Nestfolio byte was mutated.
- Authored the MI-005 — Resumable Run Cutover contract and its future
  execution prompt. The human program owner (fabio.vitali) reviewed the
  contract and explicitly approved publication ("Approvo, pubblica").
- Published the contract on continuity-lab main at exact revision
  `9477a7d120aff64833f1824ca99b91ded89bc40b`, subject "Authorize MI-005
  resumable run cutover", and pushed it.
- Performed the DR-0025 closure: wrote `queue_position: 30` and the
  one-line `queue_summary` into the contract block, updated the
  generator's permanent queue tail from "MI-005 through MI-007 —
  blocked" to "MI-006 and MI-007 — blocked" (the old text contradicted
  the published contract), regenerated the program indices, and
  verified `node scripts/generate-program-indices.mjs --check` exits 0.

## Result

MI-005 is contracted and published; it is NOT executed. Execution
requires a fresh session under
`~/continuity-handoffs/mi-005-execution-prompt.txt` naming the exact
published revision, with the human program owner launching the two
genuine Claude Code validation Sessions defined by the contract.
MI-006, MI-007, and broader work remain blocked. All nine immutable
results and the SE-001-PUB publication record are unchanged.

## Execution closure (2026-07-17, DR-0024)

MI-005 was executed from the published contract revision
`9477a7d120aff64833f1824ca99b91ded89bc40b` and closed with UNCONDITIONAL
PASS. The orchestrating session ran on `claude-opus-4-8`; the human
program owner launched the two genuine validation Sessions on
`claude-sonnet-5` (`session-mi005-1` id `d8e31071-caf8-4622-9e8c-2a4cc88afccb`;
fresh `session-mi005-2` id `34ad63b5-ff75-4f9f-8c63-58fd90bb31ab`).
One new target Run `run-mi005` was created in the DR-0014 store: start
from a digest-matched adapter view, one keyed effect executed once and
deduplicated on replay, a verified intermediate Checkpoint and published
Handoff, a transcript-free fresh-session resume with freshness
validation and lease acquisition, and a final verified Checkpoint. The
Run is closed at Level 5 operational scope only (final verified
Checkpoint plus lease-releasing recovery via `interrupt` because
Session 2 ended without a deliberate pause; no `validate`/`complete`).
F1-F12 blocked fail-closed with exact diagnostics; every required suite
verified (Level 4/3 23/23 in an isolated committed copy per SE-001-R3
mechanics; Level 5 7/7, Level 2 23/23, Level 1 14/14, backlog-next
68/68, engine 9/9 in the real tree); the current journal is
byte-identical; the derived index rebuilds deterministically; the audit
ledger is append-only. The 47-path Nestfolio execution delta (manifest
self-hash `3edd7a87a539184c89be3b1edf84be5559c551f93dde0f9b4d07a5fa0f4efd2a`)
remains uncommitted and unstaged; its publication requires separate
explicit authorization. No Work completion, Assurance, Evidence-bound
completion, or Level 6 state exists. Ten immutable results now stand;
MI-006 becomes the next contractable slice. Report:
`docs/70-implementation/mi-005-resumable-run-cutover.md`.

## Publication (2026-07-17)

The separately authorized publication above was executed in a fresh
session under DR-0024. Session gates verified continuity-workspace and
continuity-lab clean on main (continuity-lab HEAD
`0d62e00ea981d3e7fa7bb7192d9f052c2ca634cb`) and Nestfolio HEAD
`363283bcc97b1e04710db0e7f759ffffddb18b69` carrying exactly the recorded
47-path delta unstaged and byte-exact against the recorded SHA-256
manifest (manifest self-hash
`3edd7a87a539184c89be3b1edf84be5559c551f93dde0f9b4d07a5fa0f4efd2a`
recomputed and verified via the same `digestJson`/`stableStringify`
functions in `runtime/continuity/lib/utils.mjs` that froze it; `git
status --porcelain -uall` listed exactly those 47 paths, nothing
staged). The 47 paths were staged and committed as one commit, exact
subject "Publish MI-005 resumable run cutover Level 5 evidence", sole
parent `363283bcc97b1e04710db0e7f759ffffddb18b69`, published at exact
Nestfolio revision `eafa09b81a600bd58fe8f4639298a182039d21f5`, and
pushed to `origin/main`.

The required suites were re-confirmed at the current revision before
commit: Level 5 7/7, engine 9/9, Level 2 23/23, Level 1 14/14,
backlog-next 68/68 in the real tree; Level 4 23/23 and Level 3 23/23 in
an isolated committed validation copy (real `.git` via `git clone` of
Nestfolio, landing at the base revision `363283bc…`, the 47-path delta
copied in and committed as a throwaway commit with `--no-verify`, per
the SE-001-R3 mechanics; the copy was removed afterward with absence
proof). At the published revision Nestfolio is clean and Level 5,
engine, Level 2, Level 1, and backlog-next return **7/7**, **9/9**,
**23/23**, **14/14**, and **68/68** respectively in the real working
tree, and Level 4 and Level 3 return **23/23** and **23/23**
respectively — reconfirmed directly in the real working tree once
clean, since the working-tree purity guard is satisfied by the commit
itself. Publication is repository state only; it records no completion,
Run, Assurance, or Level 5-6 authority beyond what MI-005 already
recorded. MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS,
MI-004 PASS, SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3
PASS, and MI-005 PASS remain ten separate immutable results, unrepaired
and unrelabeled; every prior immutable result and the current-journal
tree remain unchanged. MI-006 (Evidence-Bound Completion and Guard
Coexistence) becomes the next contractable slice; MI-006, MI-007, and
broader work remain blocked pending separate contracting, review,
publication, and explicit authorization.
