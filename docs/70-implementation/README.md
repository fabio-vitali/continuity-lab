---
artifact_id: IMPLEMENTATION-INDEX
status: ratified
owner: implementation
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Implementation

Implementation proceeds only through explicitly authorized bounded slices with reviewed contracts.

## Completed implementation and validation slices

- **VS-001 — Resumable Agent Work Session** — historical **FAIL**; repository mechanics remain valid.
- **VS-001A — Interactive Claude Code Session Confirmation** — **PASS**; G6 remains passed on combined evidence.
- **MI-001 — Procedure-First Adoption** — **UNCONDITIONAL FAIL**. The Level 1 candidate and deterministic verification were produced, but the required genuine executor scenarios were unavailable. C2, C4, C5, C6, and C7 remain preserved factually.
- **MI-001A — Genuine Claude Code Invocation Confirmation** — **UNCONDITIONAL FAIL**. The committed candidate omitted the intended modified `SKILL.md`; the boundary failed closed before delegation, `/backlog-next` was not invoked, and Scenario B was not executed.

Canonical reports:

- `vs-001-resumable-agent-work-session.md`;
- `vs-001a-claude-code-session-confirmation.md`;
- `mi-001-procedure-first-adoption.md`;
- `mi-001a-genuine-claude-code-invocation-confirmation.md`.

## Current implementation position

The retained committed Level 1 candidate is invalid only because `.claude/skills/backlog-next/SKILL.md` does not match its unchanged lock. The lock expects SHA-256 `9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90` and 33928 bytes; the delivered file is SHA-256 `0de07500cad6a05ee14842edc4375a508d55beb7b318b1a387c0e2b99ff42620` and 33164 bytes.

The **MI-001B — Retained Level 1 Candidate Identity Restoration** contract is authored and is the sole `authorized-not-started` iteration. It permits only byte-exact recovery of the intended `SKILL.md` from the proven preserved original MI-001 implementation artifact, plus narrowly scoped evidence. It prohibits reconstruction, lock changes, invocation, Level 1 disable/removal, C1/C3 claims, and every broader implementation change.

MI-002 and broader implementation remain blocked.
