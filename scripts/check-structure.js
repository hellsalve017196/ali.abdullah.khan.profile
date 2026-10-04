#!/usr/bin/env node
// Page-shape rules for this profile repository.
//
// Every content page (anything in a content directory, plus the root profile
// pages) must:
//   1. carry the managed <!-- DISCLAIMER:START --> ... <!-- DISCLAIMER:END -->
//      block, and that block must link to disclaimer.md
//   2. carry at least one back-navigation link (entry points are exempt)
//   3. start with a single H1
//
// And the rule this script exists for:
//   4. any page that names JP Morgan Chase must state, inside its disclaimer
//      block, that the firm is not the author, editor, or publisher.
//
// Rule 4 is the one that matters. This profile names a current employer on most
// of its pages, so the "written in a personal capacity, the firm is not the
// publisher" notice must never be dropped by an edit.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIRS = ['experience', 'skills', 'projects', 'systems', 'writing', 'faq', 'why-hire', 'learning'];
const ROOT_CONTENT_PAGES = [
  'README.md',
  'ali-abdullah-khan-profile.md',
  'faq.md',
  'writing.md',
  'working-with-ali.md',
  'how-ali-started.md',
  'why-you-should-hire-ali.md',
  'why-you-should-not-hire-ali.md',
  'ali-abdullah-khan-tech-stack-skills-text-format.md',
  'ali-abdullah-khan-tech-stack-skills-image-format.md',
];
// Meta pages: the disclaimer and proof pages are the notice, and the KB /
// tone / changelog pages are repo-internal docs. They are exempt.
const EXEMPT = new Set([
  'disclaimer.md',
  'proof-sources.md',
  'profile.kb',
  'tone.md',
  'profile-setup.md',
  'CHANGELOG.md',
  'release-notes.md',
  'profile.md',
  'github.md',
]);

const BACK_NAV = /\[[^\]]*(?:←|Back|README|Profile|writing)[^\]]*\]\(/i;
// Top-level entry points: nothing to navigate back to.
const ENTRY_POINTS = new Set(['README.md', 'ali-abdullah-khan-profile.md']);
const EMPLOYER = /JP\s*Morgan\s*Chase/i;
const EMPLOYER_NOTICE = /is not the author, editor, (?:or )?publisher/i;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const pages = [
  ...ROOT_CONTENT_PAGES.map((f) => path.join(ROOT, f)),
  ...CONTENT_DIRS.flatMap((d) => walk(path.join(ROOT, d))),
].filter((p) => fs.existsSync(p) && !EXEMPT.has(path.basename(p)));

const errors = [];
let checked = 0;

for (const file of pages) {
  const rel = path.relative(ROOT, file);
  const src = fs.readFileSync(file, 'utf8');
  checked++;

  const start = src.indexOf('<!-- DISCLAIMER:START -->');
  const end = src.indexOf('<!-- DISCLAIMER:END -->');
  if (start === -1 || end === -1) {
    errors.push(`${rel}: missing the managed DISCLAIMER block`);
  } else if (start > end) {
    errors.push(`${rel}: DISCLAIMER markers are out of order`);
  } else {
    const block = src.slice(start, end);
    if (!/disclaimer\.md/i.test(block)) {
      errors.push(`${rel}: DISCLAIMER block does not link to disclaimer.md`);
    }
    if (EMPLOYER.test(src) && !EMPLOYER_NOTICE.test(block)) {
      errors.push(
        `${rel}: names JP Morgan Chase but its DISCLAIMER block omits the "not the author, editor, or publisher" notice`
      );
    }
  }

  if (!ENTRY_POINTS.has(rel) && !BACK_NAV.test(src)) {
    errors.push(`${rel}: no back-navigation link found`);
  }

  const h1s = [...src.matchAll(/^#\s+\S/gm)];
  if (h1s.length === 0) errors.push(`${rel}: no H1`);
  if (h1s.length > 1) errors.push(`${rel}: ${h1s.length} H1 headings (expected 1)`);
}

if (errors.length) {
  console.error('[check-structure] FAIL');
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log(
  `[check-structure] OK (${checked} content pages: disclaimer block, employer notice, back-nav, single H1)`
);
