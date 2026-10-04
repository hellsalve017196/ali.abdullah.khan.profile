# Release Notes

Narrative companion to [`CHANGELOG.md`](./CHANGELOG.md). Repo-internal . not published
to the profile.

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

1. **No local image set.** Technology badges are shields.io URLs rather than a
   committed icon directory, so there are no binary assets to keep in sync and no
   duplicate icon trees to drift apart.
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
