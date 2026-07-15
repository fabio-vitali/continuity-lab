---
artifact_id: SESSION-HANDOFF-MI-003-R2
status: validated
owner: session
last_updated: 2026-07-16
supersedes: []
superseded_by: null
---

# MI-003-R2 — Amended Contract Publication Handoff

## Candidate disposition

The MI-003-R2 contract was published at continuity-lab revision
`f98d76070949a721e004207e2bc61b4617623ce4` and then amended, with explicit
human authorization, to bind execution to a direct Claude Code session
executor. The amendment changes exactly two things: an `executor_identity`
clause stating that the prohibitions on invoking Claude Code or any Skill bind
the session executor against delegation to nested executors, and an adaptation
of the canonical complete-read proof from fixed 4096-byte segment emission to
contiguous, ordered, forward-only chunk reads with an explicit no-truncation
gate, forward-contiguous recovery, and whole-path byte, SHA-256, and Git blob
verification.

The original MI-003 objective, explicit human-selection boundary, conjunctive
verdict, exact Nestfolio read/create scope, S1-S10, F1-F12, validation,
preservation, rollback, and prohibitions remain retained. MI-003 and MI-003-R1
remain separate immutable UNCONDITIONAL FAIL results. All MI-002 history
remains preserved. Nestfolio content was not inspected or modified, no
candidate was derived or selected, and no execution occurred.

## Next valid operation

Open a fresh execution control session and paste the instruction preserved in
`prompt.md`, replacing every placeholder with the exact published amendment
revision. MI-003-R2 execution requires that explicit instruction; MI-004
remains blocked.
