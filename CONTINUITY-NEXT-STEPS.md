# Current Execution Instructions

## 1. Review and commit the VS-001A closure

Nestfolio: the VS-001A evidence commit is already on `main` and pushed:

```text
2b47cddc3e38e26cdde47da38e2d8dc3e862c436
```

Confirm that:

- `continuity/artifacts/**` and `.continuity/**` contain only the new `run-vs001a` Run/Session/Checkpoint/Handoff/Evidence artifacts plus the executor-provenance records under `.continuity/executor-sessions/`;
- `continuity/evidence/vs001a/` contains the preparation record, `closure.json`, and `changed-files.txt`;
- the run-vs001 artifacts and all VS-001 evidence are untouched;
- no Nestfolio source outside the continuity paths was modified.

Continuity-lab: review `git diff`, then commit the VS-001A closure documents (validation report, completed context pack and handoff, Program State, artifact index, READMEs, this file).

## 2. Do not reinterpret the results

- VS-001 remains **FAIL** — a historical verdict, preserved unchanged.
- VS-001A is **PASS** — every acceptance criterion has genuine Claude Code executor evidence (version 2.1.207, session ids `ea22919f-…` and `99ea8ab4-…`, both `startup_source: startup`).
- **G6 is passed** on the combined VS-001 + VS-001A evidence, recorded in `docs/90-state/program-state.md`.

## 3. Next: author and run only PX-001

PX-001 — Product Experience (Gate G4) is the sole authorized next iteration.

1. Author a **new** PX-001 session contract (context pack + prompt) from the current Program State. The previously prepared files under `sessions/PX-001-product-experience/` are superseded — do not run them.
2. Start a fresh conversation with the new contract, the VS-001A handoff, and the VS-001/VS-001A validation reports.
3. PX-001 is a design iteration: G4 evidence, unconditional PASS or FAIL, exactly one next iteration authorized.

## Still blocked

- MA-001;
- broader implementation;
- later vertical slices;
- unrelated Nestfolio work;
- commercial/universal-control-plane design.

## Permanent rules

- Chat and hidden executor state are not canonical.
- Review every generated Git diff before committing.
- Keep Goal and Guard separate.
- Keep Nestfolio-specific behavior outside Framework Core.
- Require criterion-linked Evidence for completion.
- Never promote an Observation or Lesson automatically.
