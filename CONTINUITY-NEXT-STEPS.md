# Exact Setup and Execution Instructions

## 1. Create the canonical repository

Create a **private** GitHub repository:

```text
fabio-vitali/continuity-lab
```

Do not put these artifacts into Nestfolio.

## 2. Bootstrap it

Unzip `continuity-lab-bootstrap.zip`, enter the `continuity-lab` directory, and run:

```bash
git init
git add .
git commit -m "bootstrap Continuity product design program"
git branch -M main
git remote add origin git@github.com:fabio-vitali/continuity-lab.git
git push -u origin main
```

Or:

```bash
gh repo create fabio-vitali/continuity-lab --private --source=. --remote=origin --push
```

## 3. Register the Nestfolio revision

In your local Nestfolio clone:

```bash
git pull
git rev-parse HEAD
```

Copy the SHA into:

```text
continuity-lab/sources/nestfolio-runtime.yaml
```

Replace:

```yaml
reviewed_revision: TO_BE_SET_BEFORE_RI-001
```

Commit this change before RI-001.

## 4. Run PF-001 now

Start a **new ChatGPT conversation**.

Upload only the latest ZIP of `continuity-lab`.

Paste the complete content of:

```text
sessions/PF-001-product-falsification/prompt.md
```

Do not upload Nestfolio. Do not paste this chat.

When the session returns the updated repository:

```bash
unzip <returned-file>.zip -d /tmp/continuity-result
rsync -av --delete /tmp/continuity-result/continuity-lab/ ./continuity-lab/
cd continuity-lab
git diff
git add .
git commit -m "PF-001 falsify product thesis"
git push
```

Review the diff before committing.

## 5. Run RI-001 only after PF-001

Requirements:

- Program State says G1 passed, or explicitly defines a corrective product iteration.
- `sources/nestfolio-runtime.yaml` contains an exact commit SHA.

Start another new conversation.

Upload:

- latest `continuity-lab.zip`;
- `nestfolio` ZIP at the recorded revision.

Paste:

```text
sessions/RI-001-runtime-inventory/prompt.md
```

Commit result:

```bash
git commit -am "RI-001 map current runtime"
```

Add new files before committing with `git add .`.

## 6. Run TA-001 only after RI-001

Requirements:

- G1 passed;
- G2 passed;
- Product Foundation, Falsification Report, and Current Runtime Map are canonical.

Start another new conversation.

Upload latest `continuity-lab.zip`. Upload Nestfolio only if requested or needed for targeted verification.

Paste:

```text
sessions/TA-001-target-architecture/prompt.md
```

Commit result:

```bash
git add .
git commit -m "TA-001 define target architecture"
git push
```

## Never do these things

- Do not use the current chat as input to later phases.
- Do not keep canonical decisions only in Canvas.
- Do not copy the runtime into `continuity-lab`.
- Do not start target architecture before PF-001 and RI-001.
- Do not allow an AI session to change product thesis silently.
- Do not commit AI output without reviewing the diff.
