#!/usr/bin/env node
// DR-0025 — Generated Program Indices.
//
// Reads `queue_position` and `queue_summary` from every
// sessions/*/context-pack.yaml (enumerating directories, ordering by the
// declared positions) and regenerates exactly two marked regions:
//   - the "Iteration queue" numbered list in docs/90-state/program-state.md,
//     followed by the two permanent "blocked" catch-all entries below;
//   - the "Completed implementation and validation slices" bullet list in
//     docs/70-implementation/README.md (iteration IDs starting with VS-,
//     MI-, or SE- only).
//
// Only the content between the HTML-comment markers is replaced; no other
// byte of either file is touched. Re-running produces byte-identical output.
//
// Usage, from the continuity-lab root:
//   node scripts/generate-program-indices.mjs           regenerate in place
//   node scripts/generate-program-indices.mjs --check   staleness self-check:
//     fails (exit 1) when the session-directory count does not match the
//     committed Iteration queue (minus the permanent entries) or when
//     regeneration would change either file. Run at every session closure
//     and on demand.
//
// Field shape contract (DR-0025): inside the `contract:` block, exactly
//   two-space indented, one line each, summary double-quoted with no
//   internal double quotes:
//     queue_position: <integer>       (contiguous 1..N across sessions/)
//     queue_summary: "<ID> — <clauses>"
// The script fails loudly on any deviation and writes nothing partial.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SESSIONS_DIR = join(ROOT, 'sessions');
const PROGRAM_STATE = join(ROOT, 'docs', '90-state', 'program-state.md');
const IMPL_README = join(ROOT, 'docs', '70-implementation', 'README.md');
const PERMANENT_TAIL = [
  'MI-005 through MI-007 — blocked',
  'broader implementation and unrelated migration — blocked',
];
const IMPLEMENTATION_ID = /^(VS|MI|SE)-/;

function fail(message) {
  console.error(`generate-program-indices: ${message}`);
  process.exit(1);
}

function readEntries() {
  const dirs = readdirSync(SESSIONS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const entries = [];
  for (const dir of dirs) {
    const file = join(SESSIONS_DIR, dir, 'context-pack.yaml');
    let text;
    try {
      text = readFileSync(file, 'utf8');
    } catch {
      fail(`missing sessions/${dir}/context-pack.yaml`);
    }
    const position = text.match(/^ {2}queue_position: (\d+)$/m);
    const summary = text.match(/^ {2}queue_summary: "([^"\n]+)"$/m);
    if (!position) fail(`missing or malformed queue_position in sessions/${dir}`);
    if (!summary) fail(`missing or malformed queue_summary in sessions/${dir}`);
    entries.push({ dir, position: Number(position[1]), summary: summary[1] });
    const result = text.match(/^ {2}result: (unconditional-(pass|fail))$/m);
    if (result) {
      const expected = result[2] === 'pass' ? /\bPASS\b/ : /\bFAIL\b/;
      if (!expected.test(summary[1])) {
        console.warn(
          `warning: sessions/${dir} declares result ${result[1]} but its queue_summary does not echo it`,
        );
      }
    }
  }
  entries.sort((a, b) => a.position - b.position);
  entries.forEach((entry, index) => {
    if (entry.position !== index + 1) {
      fail(
        `queue_position sequence broken at sessions/${entry.dir}: found ${entry.position}, expected ${index + 1} (positions must be contiguous and duplicate-free)`,
      );
    }
  });
  return entries;
}

function replaceRegion(text, name, body, file) {
  const begin = `<!-- generated:${name}:begin -->`;
  const end = `<!-- generated:${name}:end -->`;
  const count = (marker) => text.split(marker).length - 1;
  if (count(begin) !== 1 || count(end) !== 1) {
    fail(`markers for ${name} missing or duplicated in ${relative(ROOT, file)}`);
  }
  const beginAt = text.indexOf(begin) + begin.length;
  const endAt = text.indexOf(end);
  if (endAt < beginAt) fail(`markers for ${name} out of order in ${relative(ROOT, file)}`);
  return `${text.slice(0, beginAt)}\n${body}\n${text.slice(endAt)}`;
}

const entries = readEntries();
const queueBody = [
  ...entries.map((entry) => `${entry.position}. ${entry.summary}`),
  ...PERMANENT_TAIL.map((line, index) => `${entries.length + 1 + index}. ${line}`),
].join('\n');
const slicesBody = entries
  .filter((entry) => IMPLEMENTATION_ID.test(entry.summary))
  .map((entry) => `- ${entry.summary}`)
  .join('\n');

const targets = [
  { file: PROGRAM_STATE, name: 'iteration-queue', body: queueBody },
  { file: IMPL_README, name: 'implementation-slices', body: slicesBody },
].map(({ file, name, body }) => {
  const current = readFileSync(file, 'utf8');
  return { file, name, current, next: replaceRegion(current, name, body, file) };
});

if (process.argv.includes('--check')) {
  const queueRegion = targets[0].current.match(
    /<!-- generated:iteration-queue:begin -->\n([\s\S]*?)\n?<!-- generated:iteration-queue:end -->/,
  );
  if (!queueRegion) fail('iteration-queue markers missing in docs/90-state/program-state.md');
  const numbered = queueRegion[1].split('\n').filter((line) => /^\d+\. /.test(line)).length;
  if (numbered - PERMANENT_TAIL.length !== entries.length) {
    fail(
      `stale: ${entries.length} session directories but ${numbered - PERMANENT_TAIL.length} committed queue entries (plus ${PERMANENT_TAIL.length} permanent)`,
    );
  }
  const stale = targets.filter((target) => target.current !== target.next);
  if (stale.length > 0) {
    fail(`stale: regeneration differs for ${stale.map((t) => relative(ROOT, t.file)).join(', ')}`);
  }
  console.log(
    `check OK: ${entries.length} session directories, ${numbered} queue entries (${PERMANENT_TAIL.length} permanent), regeneration byte-identical`,
  );
} else {
  let updated = 0;
  for (const target of targets) {
    if (target.current !== target.next) {
      writeFileSync(target.file, target.next);
      updated += 1;
    }
  }
  console.log(
    `generated ${entries.length} session entries + ${PERMANENT_TAIL.length} permanent; ${updated} file(s) updated`,
  );
}
