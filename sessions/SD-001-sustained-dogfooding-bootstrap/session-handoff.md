# SD-001 — Contract Authoring Handoff

## What this session did

Designed, authored, owner-reviewed, and published the SD-001 — Sustained
Dogfooding Bootstrap contract (`context-pack.yaml` beside this file) in one
DR-0024 session, from continuity-lab `8a8cc8cba0cbe2b40b8e9d058b7bcaf72dd7d0b1`
(MI-007-PUB closure) with Nestfolio read-only at
`914456ce44c271d5bb38b22d985448011d6adcf9` (published MI-007-PUB revision).

Sustained dogfooding is not a numbered migration slice: it is the validation
period against the twelve Product Foundation success criteria (section
"Sustained Nestfolio dogfooding success criteria — Provisional Validation
Contract", SHA-256 `223df2894f1b265ea46d16ce9a6031d48d15078ce391cc10db8dab385563f3ab`).
SD-001 is the minimal bounded first contract that opens the period under
governance.

## Owner-approved design (2026-07-18, in-session)

The human program owner approved all three recommendations:

1. **Measurement**: a frozen measurement protocol plus an append-only
   dogfooding ledger under `continuity/evidence/sd-001/` — contemporaneous
   sampling (criteria 1, 3, 4, 9 cannot be reconstructed retroactively),
   weekly cadence, every count derived from existing store artifacts; no
   new product mechanism ahead of evidence.
2. **Naming**: `SD-001`, new SD prefix, queue_position 35 (the generator's
   permanent tail shifts automatically; no script change).
3. **Authoring and publication** in this session; execution NOT authorized.

Key contract properties: SD-001 performs NO store write (only two created
evidence files); the pinned engine stays frozen for the whole period
(defects route through the MI-007 governed-learning path plus a separately
contracted bounded slice); the period begins at the SD-001-PUB publication
commit's committer UTC; routine ledger appends ship with Nestfolio's normal
mechanisms (no per-append program ceremony); the period verdict (working
name SD-002) is a separately contracted later session and is never issued
by SD-001.

## Immutable ledger

MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS, MI-004 PASS,
SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3 PASS, MI-005
PASS, MI-006 FAIL, MI-006-R1 PASS, and MI-007 PASS remain thirteen separate
immutable results; SE-001-PUB, MI-005-PUB, MI-006-R1-PUB, and MI-007-PUB
are unchanged.

## Next valid operation

**Execute SD-001** from the published contract revision, in a fresh session
launched under `prompt.md` beside this file, with the human program owner
in-session for the live period-start confirmation. Scripted materialization
of contract-fixed content with deterministic checks — `claude-sonnet-5`
per the workspace model policy (any surprise stops fail-closed for
escalation). On PASS, SD-001-PUB (separately authorized; same-session
extension permitted) starts the dogfooding period.
