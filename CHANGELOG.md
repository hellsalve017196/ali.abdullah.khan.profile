# Changelog

All notable changes to this profile repository. Newest first.

## 0.1.0 - 2026-10-04

Initial release. The repository is created as the source of truth for the public
personal-brand profile of **Ali Abdullah Khan** (GitHub `hellsalve017196`), VP of
Software Engineering at JP Morgan Chase.

### Added

- **Entry points** . `README.md` (15 numbered sections, badge walls, `<!-- PROFILES -->`
  block) and `ali-abdullah-khan-profile.md` (long-form mirror with a hand-maintained
  `<!-- toc -->`).
- **`experience/`** (3) . reverse-chronological with zero-padded `NN-` timeline
  prefixes: VP of Software Engineering @ JP Morgan Chase (Feb 2023–present), Associate
  Software Engineer @ JP Morgan Chase (Mar 2019–Feb 2023), Full Stack Software
  Developer @ Charter Communications (May 2018–Feb 2019).
- **`systems/`** (6) . SingleDoor payment platform, AI-driven SDLC, release CLI
  tooling, feature-flag self-service, accessibility in the definition of done, and the
  component library built from wireframes.
- **`skills/`** (8) . JavaScript, TypeScript, React, Node.js, Python, accessibility
  (WCAG/ADA), AWS, AngularJS. `skills/react.md#review-notes` and
  `skills/accessibility.md#review-checklist` are the anchored review checklists.
- **`projects/`** (8) . adhan clock on ESP32-A1S, alikhan.dev, ai-job-search,
  desktop-bambulab, LirrTrainTracker, neetcode-submissions, taka_koi, resumeInLatex.
- **`writing/`** (6) + `writing.md` index . notes on the six posts published at
  alikhan.dev, Jun 2024 through Mar 2025.
- **`faq/`** (7) + `faq.md` with 24 inline Q&A driven by a `<!-- toc -->` block.
- **`why-hire/`** (8) . role-match and geography-match answer pages for New York and
  Long Island.
- **`learning/`** (3) . spec-first development with AI agents, embedded C++ with ESP32,
  DSA/SQL prep in the open.
- **Narrative pages** . `how-ali-started.md`, `why-you-should-hire-ali.md`,
  `why-you-should-not-hire-ali.md`, `working-with-ali.md`.
- **Skill matrix** . `ali-abdullah-khan-tech-stack-skills-text-format.md` with 26
  `<a id>` badge anchor targets, plus a badge-rendered twin.
- **Trust layer** . `disclaimer.md` and `proof-sources.md` (10 primary sources + the two
  in-repo source knowledge bases + an explicit "what is *not* independently sourced"
  section).
- **Meta layer** . `profile.kb` (repository knowledge base), `tone.md` (writing-pattern
  analysis), `profile-setup.md` (ops runbook), `VERSION`, `CHANGELOG.md`,
  `release-notes.md`.
- **`diagrams/`** (2) . Mermaid sources for the AI-driven SDLC flow and the SingleDoor
  payment rails.
- **Source knowledge bases** . `profile.md` (analysis of alikhan.dev) and `github.md`
  (full 72-repository inventory), both as observed 2026-10-04.
- **Tooling** . `scripts/check-links.js`, `scripts/check-filenames.js`,
  `scripts/check-structure.js`, `scripts/deploy-profile.sh`, aggregated behind
  `npm run check:profile`.
- **CI/CD** . `.github/workflows/ci.yml` (profile checks + lychee) and
  `.github/workflows/deploy-profile.yml` (mirror into `hellsalve017196/hellsalve017196`).
- **Config** . `.gitignore`, `.deployignore`, `.lycheeignore`, `.markdownlint.json`,
  `package.json`.

### Content conventions established

- **Em dashes are banned in profile prose.** The substitute is a spaced period (`X . Y`).
  The only files containing em dashes are the two source knowledge bases.
- **Every page naming JP Morgan Chase must carry the employer notice** . "not the
  author, editor, or publisher" . inside its managed `DISCLAIMER` block. This is
  enforced by `check:structure`, not left to review.
- **Technology badges deep-link** to the `<a id>` anchors at the bottom of the
  text-format skill matrix.
- **Experience pages use a zero-padded `NN-` prefix** so filesystem order equals
  timeline order. Enforced by `check:filenames`.
- **Content pages carry back-navigation and exactly one H1.** Enforced by
  `check:structure`; `README.md` and the mirror profile are exempt from the back-nav
  rule as entry points.

### Verified

- `npm run check:profile` exits 0:
  - `[check-filenames] OK (experience, skills, projects, systems, writing, faq, why-hire, learning)`
  - `[check-structure] OK (59 content pages: disclaimer block, employer notice, back-nav, single H1)`
  - `[check-links] OK`
- `grep -c '—'` over the 61 profile-content markdown pages returns **0**; the only hits
  repository-wide are in `profile.md` (17) and `github.md` (33), which are research
  notes rather than profile prose.
- Corpus as measured for `tone.md`: **31,794 words** across 61 profile-content pages, 1,061
  bold spans (3.34/100w), 997 markdown links (3.14/100w), 679 spaced periods, 32
  `TL;DR` blocks, 590 prose sentences with a median length of 16 words.
