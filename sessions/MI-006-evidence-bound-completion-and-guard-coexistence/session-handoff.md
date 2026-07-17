# Continuity — MI-006 Contract Authoring and Publication Handoff

## Current state

- **MI-006 — Evidence-Bound Completion and Guard Coexistence contract
  authored, reviewed by the human program owner, and published on
  continuity-lab main 2026-07-18** under the DR-0024 lightened development
  process. MI-006 is the Level 6 Assurance-portion cutover: it binds the
  Evidence-bound completion and Guard machinery the pinned engine already
  implements (validation-plan formation, typed validators, immutable
  validation-result and evidence artifacts, the completion gate, and the
  atomic completion write-back) to the one target-routed effort
  `dashboard-bff-awaiting-confirmation-activity-gap`, at the bound Nestfolio
  revision `eafa09b81a600bd58fe8f4639298a182039d21f5`.
- The contract introduces **no engine code**: the engine
  (`runtime/continuity/**` plus `.claude/settings.json`) is pinned read-only
  and verified by engine-lock, exactly as MI-005 pinned it.
- Two human program-owner design decisions are recorded in the contract:
  1. **Completion applied for real (Q1).** MI-006 performs the program's
     first Evidence-bound Work completion in the real Nestfolio working tree,
     including the engine's truthful backlog completion write-back (the
     effort genuinely shipped at `363283bc`) as the single permitted
     canonical planning mutation; it is reversible during execution (the
     whole delta stays uncommitted and rollback is proven).
  2. **No separate genuine Session (Q2).** The completion gate's rigor comes
     from the engine's typed-Evidence requirement, so no separately launched
     human-provenanced validation Session is required. The orchestrator
     produces the deterministic and agent-review Evidence; the human-review
     Evidence is an explicit owner authorization record (MI-004 precedent).
- The criterion-to-Evidence matrix spans distinct deterministic,
  agent-review, and human-review modes across the three unchanged Level 3
  criteria; one concrete condition (removed dead
  `USER_CONFIRMATION_REQUESTED` handler not reintroduced) is classified as a
  target **Guard** with full metadata, while the dashboard-bff suites remain
  validators — no automatic Guard minting. A distinct authorized Waiver path
  is demonstrated in isolation; the full fail-closed scenario set blocks with
  exact typed diagnostics.
- **Execution is NOT authorized by this session.** It requires either a
  later fresh session launched under
  `sessions/MI-006-evidence-bound-completion-and-guard-coexistence/prompt.md`
  with the exact published contract revision resolved, or an explicit
  same-session extension by the human program owner after publication.
- DR-0025 closure performed: `queue_position: 32`, `queue_summary` set, the
  index generator's permanent blocked tail reduced from
  "MI-006 and MI-007 — blocked" to "MI-007 — blocked", indices regenerated,
  and `node scripts/generate-program-indices.mjs --check` exits 0.
- The ten immutable results plus the SE-001-PUB and MI-005-PUB publication
  records remain unrepaired, unrelabeled, and unreinterpreted.

## Next valid operation

Execute the published MI-006 contract in a later session (or an explicit
same-session extension) using `prompt.md` beside this file, with the exact
published continuity-lab contract revision pinned in the launch handoff.
This is judgment-plus-mechanics execution against a fully specified contract
— use `claude-opus-4-8` or `claude-fable-5`. No Continuity program operation
beyond executing MI-006 is currently authorized; MI-007 and broader work
remain blocked pending separate contracting, review, publication, and
explicit authorization.
