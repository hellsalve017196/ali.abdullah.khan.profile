#!/usr/bin/env node
// Markdown link / image / anchor checker for this profile repository.
// Scans every tracked .md file and verifies:
//   - relative file links resolve on disk
//   - #anchor fragments exist in the target (## headings or <a id="...">)
//   - <img src="..."> and ![](...) targets exist on disk
// Skips http(s), mailto:, tel: and data: URLs.
// Exit code: 0 = clean, 1 = broken links found.

import fs from 'node:fs';
import path from 'node:path';

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.playwright-mcp', '.claude']);

function walkMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkMarkdown(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const FILES = walkMarkdown('.');

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

const anchorCache = new Map();
function anchorsFor(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  if (!fs.existsSync(file) || !file.endsWith('.md')) {
    anchorCache.set(file, null);
    return null;
  }
  const src = fs.readFileSync(file, 'utf8');
  const set = new Set();
  for (const m of src.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)) set.add(slugify(m[1]));
  for (const m of src.matchAll(/<a\s+(?:id|name)=["']([^"']+)["']/gi)) set.add(m[1].toLowerCase());
  anchorCache.set(file, set);
  return set;
}

const LINK = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const HTML_HREF = /\bhref=["']([^"']+)["']/g;
const HTML_SRC = /\bsrc=["']([^"']+)["']/g;
const MD_IMG = /!\[[^\]]*\]\(([^)\s]+)\)/g;

const issues = [];

for (const file of FILES) {
  const src = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const targets = [];
  for (const r of [LINK, HTML_HREF, HTML_SRC, MD_IMG]) {
    for (const m of src.matchAll(r)) targets.push(m[1]);
  }
  for (const raw of targets) {
    if (/^(https?:|mailto:|tel:|data:|#)/i.test(raw)) {
      if (raw.startsWith('#')) {
        const anchors = anchorsFor(file);
        if (anchors && !anchors.has(raw.slice(1).toLowerCase())) {
          issues.push(`${file}: missing in-page anchor ${raw}`);
        }
      }
      continue;
    }
    if (raw.startsWith('/')) {
      issues.push(`${file}: absolute internal path not allowed (use relative): ${raw}`);
      continue;
    }
    if (/[`{}]/.test(raw)) continue; // template placeholders / inline code
    const [pathPart, frag] = raw.split('#');
    let decoded;
    try { decoded = decodeURIComponent(pathPart); } catch { decoded = pathPart; }
    const resolved = path.resolve(dir, decoded);
    if (!fs.existsSync(resolved)) {
      issues.push(`${file}: broken path ${raw}`);
      continue;
    }
    if (frag) {
      const anchors = anchorsFor(resolved);
      if (anchors && !anchors.has(frag.toLowerCase())) {
        issues.push(`${file}: missing anchor #${frag} in ${pathPart}`);
      }
    }
  }
}

if (issues.length) {
  console.error(`[check-links] FAIL . ${issues.length} issue(s):`);
  for (const i of issues) console.error('  - ' + i);
  process.exit(1);
}
console.log(`[check-links] OK (${FILES.length} files scanned)`);
