---
artifact_id: IMPLEMENTATION-INDEX
status: ratified
owner: implementation
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Implementation

Implementation begins only from accepted architecture and an explicitly authorized bounded slice.

## Completed slice

- **VS-001 — Resumable Agent Work Session** — completed with **FAIL**.

The bounded repository-native implementation and tests are retained. The failure is limited to missing genuine Claude Code Session provenance, not to the Core/store/Pack/adapter mechanics.

Canonical report:

- `vs-001-resumable-agent-work-session.md`

## Sole authorized slice

- **VS-001A — Interactive Claude Code Session Confirmation**

VS-001A may only run the existing path in two real Claude Code Sessions and close acceptance criteria 4, 7, and 8. It may not expand architecture or begin broader migration.

All other implementation remains blocked.
