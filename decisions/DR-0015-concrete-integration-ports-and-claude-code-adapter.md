---
artifact_id: DR-0015
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes:
  - DR-0009
superseded_by: null
---

# DR-0015 — Use Concrete Typed Integration Ports and a First-Class Claude Code Adapter

## Context

TA-001 defined typed, read-oriented providers and an executor-export port because execution and backlog state were external. The corrected product executes agent work, records local work state, and optimizes first for Claude Code. It still must not collapse external authorities into a generic tool interface or leak vendor semantics into the Core.

## Decision

Use narrow typed ports based on concrete current workflows. The initial port families are:

- repository read and revision inspection;
- repository effect observation and diff capture;
- external work-reference resolution and optional bounded status/result synchronization;
- Evidence resolution and Evidence collection;
- Decision resolution and human-input capture;
- Guard/validator invocation;
- Skill/Procedure resolution;
- agent-runtime session start, instruction delivery, result capture, interruption detection, and resume bootstrap;
- actor identity and time.

The **Claude Code Adapter** is the first implementation of the agent-runtime boundary. It may use native commands, skills, hooks, subagents, permissions, context files, and session conventions. It must translate them into Core commands and durable artifacts rather than making Claude Code session state authoritative.

No generic arbitrary-shell or arbitrary-tool capability belongs to the Framework Core. Executable procedures may invoke declared repository tools through a Pack or project binding with explicit prerequisites, capabilities, outputs, and failure contracts.

External writes are neither universally forbidden nor generally available. A bounded write adapter is allowed only when a concrete workflow requires it and must declare:

- the external authority being changed;
- idempotency key and expected prior revision;
- confirmation or delegation policy;
- retry and reconciliation behavior;
- the local artifact that records the outcome.

VS-001 requires no external write adapter.

## Status

Validated by TA-002 and accepted as the active integration decision.

## Alternatives considered

### Retain read-only providers as a universal rule

Rejected because practical repository workflows may need a narrow status or result update later.

### Put Claude Code formats in Core artifacts

Rejected because canonical state should remain understandable without one vendor runtime.

### Build a universal agent abstraction before Claude Code

Rejected because it delays present value and introduces unproven extension points.

### Expose one generic host-capabilities object

Rejected because it hides authority, permissions, idempotency, and failure semantics.

## Risks

- Claude Code-first assets can accidentally become canonical conventions;
- bounded external writes can still create duplicate authority if poorly scoped;
- too many port types can create ceremony.

## Validation requirements

- VS-001 must use Claude Code native facilities while preserving vendor-independent Work, Run, Checkpoint, Context Pack, Evidence, Decision, and Lesson artifacts.
- The adapter must surface interruption and resume state without relying on prior chat.
- Missing Claude Code-native features in a future adapter must degrade explicitly rather than changing Core semantics.

## Consequences

- `DR-0009` is superseded.
- typed authority-specific anti-corruption boundaries are retained.
- Claude Code is a first-class adapter, not a hidden implementation detail and not part of the Core.
- future agent adapters are added only for demonstrated use.

## Supersedes

`DR-0009 — Use Typed, Read-Oriented Provider Contracts`.

## Superseded by

None.
