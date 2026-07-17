---
artifact_id: SESSION-PROMPT-MI-004-R1
status: provisional
owner: session
last_updated: 2026-07-17
supersedes: []
superseded_by: null
---

# MI-004-R1 — Preserved Fallback Execution Instruction

Per DR-0024 the correction execution is authorized in the SAME session that
publishes this contract, immediately after the authoring commit is pushed.
This file is needed only if that session ends without executing; it becomes
usable once a later user instruction supplies the exact published contract
revision and explicitly authorizes MI-004-R1 execution.

```text
This is a fresh MI-004-R1 — Level 4 Publication-Dependent Suite
Revision-Binding Correction execution session. It authorizes bounded
execution of the contract at continuity-lab revision
<EXACT-PUBLISHED-MI-004-R1-CONTRACT-REVISION>: correcting exactly two
Nestfolio paths — the stage-2 revision check of
continuity/level-4/bin/continuity-context.mjs (HEAD equality becomes
bound-revision containment, same STALE_CONTEXT_DEPENDENCY diagnostic) and
the REV constant of tests/continuity-level-4.test.mjs (derived from the
committed context-recipe.json bound_inputs.repository_revision) — so the
published Level 4 suite verifies truthfully at
a760d6f41ff14491d5b008a7f13234ba0221bcec and at any later revision
containing the bound revision of record
b9d7264082322e09cfd233819b79f128ef912e31. Read the full contract at
sessions/MI-004-R1-level-4-suite-revision-binding-correction/context-pack.yaml
and follow it; this instruction summarizes but does not replace it.

Session gates (DR-0024): all three repositories on main with clean trees;
continuity-lab HEAD at the revision named above and containing the
contract; Nestfolio HEAD at a760d6f41ff14491d5b008a7f13234ba0221bcec. Stop
on any contradiction. Do not rewrite published history.

Follow the contract exactly: pre-edit reproduction 21/23 (sole causes S1
and F3), two bounded edits only, interim uncommitted check 22/23 (sole
failure S10), commit subject "Correct MI-004 Level 4 suite revision
binding", full validation at the corrected committed revision (Level 4
23/23, Level 3 23/23, Level 2 23/23, retained Level 1 14/14, backlog-next
68/68, no Skill; stale-check clean; adapter view rebuilt byte-identically;
all seven published Level 4 artifact digests exact; two-path diff; sole
parent a760d6f4…), push only after all validation passes, external
evidence at ~/continuity-recovery/mi-004-r1/, then the continuity-lab
closure with subject "Close MI-004-R1 Level 4 suite revision-binding
correction". On any failed condition apply the contract's failure_recovery
and close UNCONDITIONAL FAIL.

Preserve MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS,
MI-004 PASS, and SE-001-R1 FAIL as separate immutable results. Report the
MI-004-R1 result, suite outputs, exact manifests, the new Nestfolio HEAD,
and the next valid program operation, ending with the handoff required by
continuity-workspace CLAUDE.md.
```

The placeholder must be replaced by the exact published contract revision
in the later explicit execution instruction. Leaving it unresolved is a
hard stop.
