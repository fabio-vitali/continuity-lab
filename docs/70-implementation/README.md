---
artifact_id: IMPLEMENTATION-INDEX
status: ratified
owner: implementation
last_updated: 2026-07-15
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
- **MI-001B — Retained Level 1 Candidate Identity Restoration** — **UNCONDITIONAL FAIL**. The only supplied archive was a continuity-lab source archive containing 0 of 15 required MI-001 Nestfolio manifest entries and no `SKILL.md`; provenance failed before extraction or installation and Nestfolio remained unchanged.
- **MI-001C — Original MI-001 Output Artifact Evidence Recovery** — **UNCONDITIONAL FAIL**. No directly verifiable input archive or admissible original output was found; the only Git ZIP was an unrelated fixture, a post-start zero-byte output was a non-candidate, no delivery chain/delta/Skill identity could be proven, and Nestfolio remained unchanged.

Canonical reports:

- `vs-001-resumable-agent-work-session.md`;
- `vs-001a-claude-code-session-confirmation.md`;
- `mi-001-procedure-first-adoption.md`;
- `mi-001a-genuine-claude-code-invocation-confirmation.md`;
- `mi-001b-retained-level-1-candidate-identity-restoration.md`.
- `mi-001c-original-mi001-output-artifact-evidence-recovery.md`.

## Current implementation position

The retained committed Level 1 candidate is invalid only because `.claude/skills/backlog-next/SKILL.md` does not match its unchanged lock. The lock expects SHA-256 `9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90` and 33928 bytes; the delivered file is SHA-256 `0de07500cad6a05ee14842edc4375a508d55beb7b318b1a387c0e2b99ff42620` and 33164 bytes.

MI-001B closed without changing Nestfolio because exact original-output provenance was unavailable. The supplied archive SHA-256 was `0c3687022316de8841bf94996f39fa3198a5b94b4305266874ee55d7a54febcb`, with ZIP comment `47f89495ced69f464724c52967d077679cdec78a`; its structure was the continuity-lab repository rather than the modified Nestfolio candidate.

MI-001C closed without finding a directly verified canonical input archive, an admissible output artifact, or a delivery chain. Its complete report records the full ledger and the mandatory evidence-mutation and inspection-deviation failures.

**MI-001D — Retained Level 1 Candidate Deliberate Supersession** is the sole authorized execution iteration with status `authorized-not-started`; it has no execution instruction and has not executed. The reviewed contract defines a new version-distinct `1.0.1` candidate and expressly forbids reconstructing or claiming recovery of the lost MI-001 output. MI-002, genuine invocation confirmation, supersession execution, and broader implementation remain blocked pending a separate explicit execution instruction and the exact clean committed and pushed authorization revision.
