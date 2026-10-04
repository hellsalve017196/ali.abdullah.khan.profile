# Profile Setup . Ops Runbook

> Internal operations document for this repository. **Not profile content** . it is
> excluded by [`.deployignore`](./.deployignore) and is not linked from `README.md`.
>
> What ships, what does not, how the mirror to the GitHub profile repo works, and how
> to run it by hand.

---

## 1. What this repository publishes

This repository is the **source of truth**. The published artifact is the special
GitHub profile repo `hellsalve017196/hellsalve017196`, where `README.md` renders as the
profile page at <https://github.com/hellsalve017196>.

```
ali.abdullah.khan.profile (source, this repo)
        │
        │  .github/workflows/deploy-profile.yml
        │  → scripts/deploy-profile.sh (deny-list from .deployignore)
        ▼
hellsalve017196/hellsalve017196 (published)
        │
        ▼
github.com/hellsalve017196  ← README.md renders here
```

## 2. What ships, and what does not

**Ships:** `README.md`, the mirror profile, every content directory
(`experience/`, `skills/`, `projects/`, `systems/`, `writing/`, `faq/`, `why-hire/`,
`learning/`), `diagrams/`, `faq.md`, `writing.md`, `working-with-ali.md`, the two
tech-stack pages, the three narrative pages, `disclaimer.md`, `proof-sources.md`, and
the two source knowledge bases (`profile.md`, `github.md`).

**Does not ship** (see [`.deployignore`](./.deployignore)):

| Excluded | Why |
|---|---|
| `scripts/`, `.github/`, `package.json` | tooling, not profile content |
| `profile.kb`, `tone.md`, `profile-setup.md` | repo-internal meta docs |
| `CHANGELOG.md`, `release-notes.md`, `VERSION` | release bookkeeping |
| `CV.md`, `**/*.pdf` | private / separately distributed |
| `prompt.md`, `.playwright-mcp/`, `.claude/` | local scratch |

Both the deny-list and `.gitignore` carry the `CV.md` / `*.pdf` rules, so a private
document cannot reach the public profile even if it is accidentally committed.

## 3. Workflows

| Workflow | Trigger | What it does |
|---|---|---|
| [`ci.yml`](./.github/workflows/ci.yml) | PR + push to `main` | `check-profile` (`npm run check:profile`) and `lychee-link-check` (external URLs) |
| [`deploy-profile.yml`](./.github/workflows/deploy-profile.yml) | push to `main` touching `**/*.md`, `diagrams/**`, `.deployignore`, the deploy script, or itself; plus `workflow_dispatch` | mirrors the allow-listed tree into the profile repo and commits `profile: sync from <repo>@<sha>` |

`deploy-profile` is serialised by `concurrency: deploy-profile` so two pushes cannot
race the same target branch.

## 4. One-time setup

1. **Create the profile repo.** A repository named exactly `hellsalve017196`, owned by
   `hellsalve017196`, with a `main` branch and at least one commit. GitHub treats
   `<owner>/<owner>` as the profile repo.
2. **Mint a fine-grained PAT** scoped to that repository only, with
   **`Contents: Read & Write`**. Nothing else is needed.
3. **Add the secret.** In this repository: *Settings → Secrets and variables → Actions
   → New repository secret* → name `PROFILE_DEPLOY_TOKEN`, value the PAT.
4. **Optional repository variables**, if the defaults are wrong:
   - `PROFILE_REPO` . defaults to `<owner>/<owner>`
   - `PROFILE_BRANCH` . defaults to `main`
5. **Run it once by hand**: *Actions → Deploy GitHub profile → Run workflow*, then
   confirm <https://github.com/hellsalve017196> renders the README.

## 5. Local commands

```bash
# the full gate CI runs
npm run check:profile

# individually
npm run check:filenames    # lowercase names, no -vNN, NN- prefix in experience/
npm run check:structure    # disclaimer block, employer notice, back-nav, single H1
npm run check:links        # relative paths and #anchors resolve

# dry-run the mirror into a local clone of the profile repo
git clone https://github.com/hellsalve017196/hellsalve017196 ../hellsalve017196
npm run deploy:profile -- ../hellsalve017196
cd ../hellsalve017196 && git status
```

`SKIP_LINK_CHECK=1` skips the link check inside the deploy script; CI sets it, because
`ci.yml` has already run the full gate.

## 6. Release ritual

1. Bump [`VERSION`](./VERSION).
2. Add a [`CHANGELOG.md`](./CHANGELOG.md) entry with a `### Verified` block quoting the
   **real** linter output . not a summary of it.
3. Add a narrative entry to [`release-notes.md`](./release-notes.md).
4. Update the `<!-- last-reviewed -->` date on the pages that carry one: `README.md`,
   the mirror profile, `faq.md`, `writing.md`, `working-with-ali.md`, and both
   tech-stack pages.
5. Refresh [`profile.kb`](./profile.kb) if the directory layout, the deny-list, or the
   check scripts changed.
6. Push to `main`.

## 7. Managed blocks . never hand-edit between the markers

| Marker | Where | Owner |
|---|---|---|
| `<!-- DISCLAIMER:START -->` … `END` | every content page | kept in sync by hand; presence enforced by `check:structure` |
| `<!-- PROFILES:START -->` … `END` | `README.md`, mirror profile | the canonical link list . edit both together |
| `<!-- toc -->` … `<!-- /toc -->` | mirror profile, `faq.md`, `working-with-ali.md` | hand-maintained table of contents |
| `<!-- last-reviewed -->` | 7 pages | bumped during the release ritual |

## 8. Known gaps

Recorded honestly rather than hidden:

1. **No lockfile.** `check:profile` has no dependencies . the scripts are plain Node
   with no imports outside `node:*` . so nothing needs installing, and `ci.yml`
   deliberately does not run `npm ci`.
2. **`.markdownlint.json` is advisory.** The config exists for editor integration; no
   workflow or script invokes `markdownlint`.
3. **The deploy script is deny-list only.** Anything new at the repository root ships
   unless it is added to `.deployignore`. Add the entry in the same commit as the file.
4. **`lychee` skips LinkedIn and Google Docs** . see [`.lycheeignore`](./.lycheeignore).
   LinkedIn returns HTTP 999 to bots, so those links are never actually verified by CI.
