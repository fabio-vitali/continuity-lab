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
