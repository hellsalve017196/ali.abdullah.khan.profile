# alikhan.dev . The Site Itself

> **TL;DR** . Ali Abdullah Khan's personal site and blog. **Astro 5 + TypeScript + Tailwind CSS v4**, fully static, light/dark themes, per-post SVG covers, JSON-LD on every post, RSS, sitemap. Blogging is a filesystem operation: drop a Markdown file in `src/content/blog/` and it publishes.

**Repo:** [official_website](https://github.com/hellsalve017196/official_website "Astro 5 personal site and blog powering alikhan.dev.") · `Astro` · Aug 2026 · Live at [alikhan.dev](https://alikhan.dev)

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why Ali built it

Because the alternative is a platform that owns your writing. A static site with content collections means the posts are **Markdown files in a repository** . portable, diffable, and still readable in ten years.

## What it does

| Aspect | Detail |
|---|---|
| **Generator** | Astro **5** (static output) + TypeScript + Tailwind CSS **v4** |
| **Blog engine** | Astro **Content Collections** . Markdown + frontmatter (`title`, `excerpt`, `date`, `tags`, `draft`, `cover`) auto-publishes |
| **Hosting** | Migrated from an **nginx VPS** (`rsync` deploy) to **Cloudflare Pages** |
| **SEO** | Meta descriptions with local keywords, Open Graph, Twitter `summary_large_image`, canonical URLs |
| **Structured data** | JSON-LD `BlogPosting` on every post . author, `datePublished`, image |
| **Feeds** | RSS at `/rss.xml`, `sitemap-index.xml`, `robots.txt` |
| **UX** | Light/dark toggle, skip-to-content link, per-post custom SVG covers, reading-time labels, responsive |

Commands: `npm run dev` (localhost:4321) · `npm run build` · `npm run deploy`.

## The accessibility tells

Two small things on that list are the signature of the [WCAG work](../systems/accessibility-definition-of-done.md "Accessibility in the definition of done."): a **skip-to-content link** and a **light/dark toggle** that respects the system setting. Neither is required for a personal blog. Both are what somebody does once accessibility has stopped being a checklist item for them.

## Related

- [Writing](../writing.md) . the six posts the site publishes
- [TypeScript](../skills/typescript.md) · [AWS & cloud](../skills/aws.md)
- [Accessibility](../skills/accessibility.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan from his own public repository and site headers, as observed on 2026-10-04. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
