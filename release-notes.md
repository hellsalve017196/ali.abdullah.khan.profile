# Release Notes

Narrative companion to [`CHANGELOG.md`](./CHANGELOG.md). Repo-internal . not published
to the profile.

## 0.1.1 . The portrait, self-contained

The profile gained a face. `assets/ali-abdullah-khan.webp` now sits left of the bio
prose in both `README.md` and the long-form mirror.

**The decision worth recording** is not that an image was added . it is that the image
is **committed rather than hotlinked**. The first version of this change pointed at
`https://alikhan.dev/avatar.webp` directly, which works right up until the site is down,
the file is renamed, or the domain lapses . at which point the GitHub profile shows a
broken image and nobody tells you. A profile page whose rendering depends on a second
piece of infrastructure staying up is not self-contained, and 16 KB is a cheap price for
removing that dependency.

The relative path has a second benefit that the remote URL could not offer:
`check:links` walks every `<img src>` and verifies it resolves on disk. A hotlinked
image is invisible to that check . `lychee` would eventually catch a 404, but only on
the schedule CI happens to run, and only if the host does not answer with a soft error.

**What this costs.** `0.1.0` shipped with zero binary assets and `profile.kb` said so in
four places . an at-a-glance metric, the directory map, a content convention, and a
verified observation. All four are now corrected to one. The underlying principle was
never "no images"; it was **"never commit a badge icon set"**, because duplicate icon
trees drifting apart is the characteristic failure of profile repositories built this
way. That principle is intact: all 73 badges remain shields.io URLs, and `assets/` holds
the portrait and nothing else.

`.github/workflows/deploy-profile.yml` now lists `assets/**` among its trigger paths, so
replacing the portrait publishes the same way a content edit does.

**Verification.** The source URL returned `200 image/webp` at 16,212 bytes; the
committed file matches that byte count, `file(1)` reports a 400x400 VP8 WebP, and the
image was opened and confirmed to be a portrait photograph before it was committed.
`npm run check:profile` exits 0 across all three checks.

## 0.1.0 . Initial profile build

This release creates the repository from scratch as the content source for
**Ali Abdullah Khan**'s public GitHub profile.

**What was built.** 64 markdown pages across eight content directories, two entry
points, a trust layer, a meta layer, two Mermaid diagrams, four Node/Bash tooling
scripts, and two GitHub Actions workflows. The structural model follows an established
profile-repository pattern: a `README.md` that renders as the GitHub profile page, a
long-form mirror for readers who want the detail, per-role experience pages with a
timeline prefix, per-skill authority pages behind badge anchors, and a set of answer
pages aimed at search and answer engines.

**Where the content came from.** Two compiled source knowledge bases, both kept in the
repository so any claim can be traced without re-researching it:

- `profile.md` . analysis of [alikhan.dev](https://alikhan.dev) as of 2026-10-04:
  identity, role history, the skills list, education, certification, and summaries of
  all six blog posts.
- `github.md` . analysis of [github.com/hellsalve017196](https://github.com/hellsalve017196)
  as of 2026-10-04: the full 72-repository inventory, tech-stack rollup, flagship
  project detail, and a five-era journey breakdown.

Nothing in this release asserts a figure that is not traceable to one of those two
files or to the primary sources listed in `proof-sources.md`.

**The decision that shaped the trust layer.** Ali is a current employee of JP Morgan
Chase and the profile names the firm on most of its pages. Rather than relying on a
reviewer to remember the disclaimer, `scripts/check-structure.js` **fails the build**
when a page names the firm and its managed `DISCLAIMER` block omits the "not the
author, editor, or publisher" notice. `proof-sources.md` also carries an explicit
*"what is not independently sourced"* section naming the three claims that are Ali's
own summaries rather than audited figures: the `~1M daily users` scale descriptor, the
30/70 accessibility split, and the self-assessed proficiency tiers.

**Deliberate departures from the reference pattern.** Three, each for a reason:

1. **No committed icon set.** Technology badges are shields.io URLs rather than a
   committed icon directory, so there are no icon trees to keep in sync or drift
   apart. (`0.1.1` adds the portrait as the single committed binary . see below.)
2. **`systems/` instead of an "inventions" directory.** The pages describe platforms
   and workflows Ali built inside an employer's product, so the honest noun is *system*.
3. **No tooltip generator.** Link and badge hover text is written per link rather than
   produced by a rotating template pool, which keeps the tooltips readable as prose and
   removes a whole class of generated-text artifact.

**Verification.** `npm run check:profile` exits 0 across all three checks:
`[check-filenames] OK`, `[check-structure] OK (59 content pages)`, and
`[check-links] OK`. Em-dash count across the 61 profile-content pages is 0.

**Pending follow-ups.**

- The profile repo `hellsalve017196/hellsalve017196` and the `PROFILE_DEPLOY_TOKEN`
  secret are **not yet created**, so `deploy-profile.yml` will fail until the one-time
  setup in [`profile-setup.md`](./profile-setup.md) §4 is done. CI (`ci.yml`) runs
  cleanly without it.
- The two LinkedIn URLs on record (`in/abdullah017196` and
  `in/ali-abdullah-khan-636a919a`) are both listed in the `<!-- PROFILES -->` block
  because the canonical one has not been confirmed.
- `lychee` cannot verify the LinkedIn links (HTTP 999 to bots) or Google Docs links;
  both patterns are skipped in `.lycheeignore`.
