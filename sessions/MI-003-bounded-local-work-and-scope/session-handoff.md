---
artifact_id: SESSION-HANDOFF-MI-003-CONTRACT
status: validated
owner: session
last_updated: 2026-07-15
supersedes: []
superseded_by: null
---

# MI-003 — Contract-Authoring Handoff

## Result

The MI-003 — Bounded Local Work and Scope contract is fully authored, reviewed,
and finalized as a publication candidate. Contract authorization is recorded;
execution remains unauthorized and unstarted.

The candidate is based on exact continuity-workspace revision
`eb990e114973e42af9935379f6b13f34f2e5e3b8`, continuity-lab revision
`1563cc65b06cacae7557734a08be418cae0ae47a`, and published Nestfolio MI-002-R2
revision `fd5e58b35e665fa5fa0db3c2c31ea5561442f9b6`. All metadata gates and the
required canonical read order passed. Nestfolio content was not inspected.

## Contract boundary

MI-003 will implement only Level 3 local Work selection and Scope authority. It
defines exact create-only Nestfolio paths, immutable existing content, canonical
read order, prerequisites, ten success scenarios, twelve typed mandatory
failures, deterministic evidence, return/cancel rollback, preservation, and one
conjunctive unconditional verdict.

No backlog item has been chosen. A later separately authorized execution must
first build a deterministic candidate projection. Exactly one human selection
tuple is then required and must match one eligible candidate. That choice
authorizes only the local Level 3 representation and route; it never authorizes
implementation of the selected backlog effort.

The contract prohibits Claude Code, every Skill, dependency changes, source
backlog mutation, external writes, package or Level 1/2 changes, and all Level
4-6 authority. MI-002-R2 remains the published UNCONDITIONAL PASS, MI-002-R1
remains the immutable UNCONDITIONAL FAIL, and the original MI-002 result and
exact execution conditions remain unchanged.

## Publication candidate

The candidate contains exactly five modified and four added continuity-lab
paths, recorded in `changed-files.txt`. It is intentionally uncommitted and
unstaged. The intended publication subject is:

```text
Authorize MI-003 bounded local work and scope contract
```

Publication must occur in a fresh control session from exact continuity-lab
start revision `1563cc65b06cacae7557734a08be418cae0ae47a`, after revalidating the
complete diff, YAML, manifest, and all three repository metadata bindings.
Publication must not inspect or mutate Nestfolio content or execute MI-003.

## State after publication

Publishing the unchanged contract will make MI-003 contract-authorized but will
not authorize execution. A still-later fresh execution session requires a
separate explicit instruction naming the exact published contract revision and
the three repository bindings. The preserved prompt remains inactive until its
revision placeholder is replaced by that explicit instruction.
