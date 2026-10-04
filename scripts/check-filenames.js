#!/usr/bin/env node
// Filename conventions for this profile repository:
//   - every .md in a content directory must be lowercase [a-z0-9._-]
//   - no version suffixes like -v2 in filenames (version belongs in content)
//   - experience/ pages must carry a zero-padded NN- timeline prefix
// Root-level GitHub-standard names (README.md, CHANGELOG.md, ...) are exempt
// from the lowercase rule; .github/ is skipped entirely.

import { readdirSync, statSync } from 'node:fs';
import { join, relative, basename } from 'node:path';

const ROOT = process.cwd();
const SCAN_DIRS = ['experience', 'skills', 'projects', 'systems', 'writing', 'faq', 'why-hire', 'learning'];
const ROOT_UPPERCASE_ALLOWLIST = new Set([
  'README.md',
  'CHANGELOG.md',
  'LICENSE.md',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
]);
const FORBIDDEN_SUFFIX = /-v\d+(?=\.md$)/i;
const LOWERCASE_OK = /^[a-z0-9._-]+\.md$/;
const EXPERIENCE_PREFIX = /^\d{2}-/;

const errors = [];

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) { walk(full); continue; }
    if (!name.endsWith('.md')) continue;
    const rel = relative(ROOT, full);
    const base = basename(name);
    if (!LOWERCASE_OK.test(base)) {
      errors.push(`${rel}: filename must be lowercase (a-z0-9._-)`);
    }
    if (FORBIDDEN_SUFFIX.test(base)) {
      errors.push(`${rel}: forbidden version suffix (-vNN) . put the version in the content`);
    }
    if (rel.startsWith('experience/') && !EXPERIENCE_PREFIX.test(base)) {
      errors.push(`${rel}: experience pages need a zero-padded NN- timeline prefix`);
    }
  }
}

for (const name of readdirSync(ROOT)) {
  if (!name.endsWith('.md')) continue;
  if (ROOT_UPPERCASE_ALLOWLIST.has(name)) continue;
  if (!LOWERCASE_OK.test(name)) {
    errors.push(`${name}: root markdown must be lowercase (a-z0-9._-)`);
  }
  if (FORBIDDEN_SUFFIX.test(name)) {
    errors.push(`${name}: forbidden version suffix (-vNN)`);
  }
}

for (const d of SCAN_DIRS) walk(join(ROOT, d));

if (errors.length) {
  console.error('[check-filenames] FAIL');
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log(`[check-filenames] OK (${SCAN_DIRS.join(', ')})`);
