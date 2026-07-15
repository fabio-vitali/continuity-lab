# Continuity — MI-003-R2 Execution Authorization Handoff

## Current state

- MI-002-R2 remains published with `UNCONDITIONAL PASS` at exact Nestfolio
  revision `fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6`.
- MI-003 and MI-003-R1 remain separate immutable `UNCONDITIONAL FAIL` results;
  neither inspected or changed Nestfolio.
- MI-003-R2 was published at continuity-lab
  `f98d76070949a721e004207e2bc61b4617623ce4` and then amended, with explicit
  human authorization, for a direct Claude Code session executor. The
  amendment adds the `executor_identity` clause and adapts the complete-read
  proof to contiguous forward-only chunk reads with explicit no-truncation
  gates, forward-contiguous recovery, and whole-path byte, SHA-256, and Git
  blob verification. Every other objective, boundary, scenario, validation,
  rollback, and prohibition is unchanged.
- MI-003-R2 execution remains unauthorized; MI-004 remains blocked.

## Next valid operation

Open a fresh execution control session and paste the complete instruction
preserved in
`sessions/MI-003-R2-bounded-local-work-and-scope-segmented-canonical-complete-read-correction-retry/prompt.md`,
replacing every `<EXACT-PUBLISHED-MI-003-R2-CONTRACT-REVISION>` placeholder
with the exact main revision whose subject is
"Amend MI-003-R2 contract for direct Claude Code execution".

During that execution, after the deterministic candidate projection is
derived, the session will stop and request exactly one human selection tuple
(source path, stable source-local identity, source revision, source SHA-256).
Supply it only after reviewing the projected candidates.
