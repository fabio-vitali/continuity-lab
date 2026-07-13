# Current Execution Instructions

## 1. Review and commit TA-001

After replacing your local repository with the returned ZIP contents:

```bash
cd continuity-lab
git diff
git add .
git commit -m "TA-001 define target architecture"
git push
```

Review the diff before committing. Confirm that:

- `docs/30-target-architecture/target-architecture.md` is present and validated;
- Program State records G3 as passed;
- DR-0007 through DR-0011 are present and validated;
- PX-001 is the sole authorized next iteration;
- no implementation or migration plan was introduced.

## 2. Run PX-001 in a fresh conversation

Upload the latest ZIP of `continuity-lab`.

Do not upload Nestfolio unless a narrow current-experience fact is later shown to be missing from canonical artifacts.

Paste the complete content of:

```text
sessions/PX-001-product-experience/prompt.md
```

The session must use:

```text
sessions/PX-001-product-experience/context-pack.yaml
```

Do not paste PF-001, RI-001, or TA-001 chat transcripts.

## 3. Commit PX-001 only after review

Expected commit command:

```bash
git add .
git commit -m "PX-001 define product experience"
git push
```

## Still blocked

Do not start:

- MA-001 Migration Architecture before G4 passes;
- VS-001 First Vertical Slice before G4 and G5 pass;
- implementation work in Nestfolio before an approved vertical slice exists.

## Permanent rules

- Chat and Canvas are not canonical.
- Do not silently revise Product Foundation or Target Architecture from a lower design level.
- Do not restore the broad control-plane boundary, Commitment entity, product-owned Goal/Guard lifecycle, generic orchestration, learning loop, or universal Console.
- Review every generated Git diff before committing.
