# Current Execution Instructions

## 1. Review and commit PI-001

After replacing your local repository with the returned ZIP contents:

```bash
cd continuity-lab
git diff
git add .
git commit -m "PI-001 realign product intent"
git push
```

Review the diff before committing. Confirm that:

- `docs/10-product/product-foundation.md` defines Continuity as a Claude Code-first repository-native agentic-development framework;
- `DR-0012` is present and `DR-0006` is superseded;
- PF-001 evidence is preserved;
- RI-001 and G2 remain valid;
- TA-001 is provisional and not an implementation baseline;
- G3 is reopened;
- TA-002 is the sole authorized next iteration;
- PX-001, migration, and implementation are blocked.

## 2. Run TA-002 in a fresh conversation

Upload the latest ZIP of `continuity-lab`.

Use:

```text
sessions/TA-002-target-architecture-revision/context-pack.yaml
sessions/TA-002-target-architecture-revision/prompt.md
sessions/PI-001-product-intent-realignment/session-handoff.md
```

Paste the TA-002 prompt unchanged and use the exact Context Pack and handoff constraints.

Use the validated Current Runtime Map before requesting Nestfolio source. Upload Nestfolio only if TA-002 identifies a precise classification question that the map cannot answer.

Do not paste PF-001, RI-001, TA-001, or PI-001 chat transcripts.

## 3. Do not run PX-001

The prepared PX-001 session was based on TA-001 and is superseded. Product-experience work can be reconsidered only after TA-002 completes and G3 is reassessed.

## Still blocked

Do not start:

- migration planning;
- vertical-slice design;
- implementation work in Nestfolio;
- commercial product design;
- universal integration design.

## Permanent rules

- Chat and Canvas are not canonical.
- Review every generated Git diff before committing.
- Do not automatically restore every current Nestfolio feature.
- Do not automatically preserve TA-001 exclusions.
- Keep Goal and Guard separate.
- Keep enterprise systems authoritative for their own objects.
- Prioritize practical Claude Code value while keeping durable repository artifacts inspectable.
