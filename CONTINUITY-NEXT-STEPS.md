# Continuity — MI-005 Contract Publication Handoff

## Current state

- **MI-005 — Resumable Run Cutover contract — authored, human-reviewed,
  and published 2026-07-17** at exact continuity-lab revision
  `9477a7d120aff64833f1824ca99b91ded89bc40b` (subject "Authorize MI-005
  resumable run cutover"), under DR-0024. The contract is
  `sessions/MI-005-resumable-run-cutover/context-pack.yaml`; its future
  execution prompt is `prompt.md` beside it.
- The contract defines the target operational store (the validated
  VS-001/VS-001A DR-0014 two-class store, engine digest-pinned
  read-only), the lease and effect-key policies, the start/resume
  adapter path, the sharing boundary (verified Checkpoint plus published
  Handoff), the new-Run cutover with the current-journal drain rule
  (30 journal Runs untouched, dual-write prohibited fail-closed), and a
  genuine two-Claude-Code-session start/resume validation for the one
  target-routed effort, binding authorized Context Pack version 1 and
  the Level 2 lock by exact digest.
- Execution is NOT authorized by the authoring session. It requires a
  fresh session under the saved handoff prompt (or an explicit
  same-session extension recorded at publication time, which did not
  occur). Nestfolio was not mutated; its HEAD remains
  `363283bcc97b1e04710db0e7f759ffffddb18b69`, clean.
- All nine immutable results and the SE-001-PUB publication record
  stand unrepaired and unrelabeled. MI-006, MI-007, and broader work
  remain blocked.

## Next valid operation

Execute the published MI-005 contract in a fresh session under
`~/continuity-handoffs/mi-005-execution-prompt.txt`, with the human
program owner launching the two genuine validation Sessions the
contract defines. MI-006 and MI-007 remain blocked pending MI-005
execution and separate contracting.
