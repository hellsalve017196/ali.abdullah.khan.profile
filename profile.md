# Profile Knowledge Base — alikhan.dev

> Source: https://alikhan.dev/ · Analyzed: 2026-10-04

## Identity

| Field | Value |
|---|---|
| Name | **Ali Abdullah Khan** |
| Current role | **VP of Software Engineering @ JP Morgan Chase** |
| Location | Holbrook, New York, USA |
| Work authorization | U.S. Citizen — no sponsorship required |
| Email | abdullah017196@gmail.com |
| LinkedIn | [linkedin.com/in/abdullah017196](https://www.linkedin.com/in/abdullah017196) |
| GitHub | [github.com/hellsalve017196](https://github.com/hellsalve017196) |
| Website | [alikhan.dev](https://alikhan.dev) |

**Headline highlights (hero section):**
- Building payment platforms for ~1M daily users
- 7+ years at JP Morgan Chase — Associate → VP
- Pioneering AI-driven SDLC with GitHub Copilot

**Bio (as published):** Software engineering leader based in New York. At JP Morgan Chase, builds consumer payment platforms used by about a million people every day — owning the full product lifecycle from planning and delivery to post-release support. Deep focus on React, TypeScript, accessibility-first engineering, and AI-assisted development workflows that shorten the path from requirements to production.

---

## Experience

### JP Morgan Chase — Vice President of Software Engineering
**Feb 2023 — Present**
- Leading **Payment & Transfer Activity** on the consumer banking platform
- Pioneered an **AI-driven SDLC workflow**: JIRA intake → PRD generation → code delivery → automated test coverage
- Shipped internal **CLI tools for CDN publishing and feature flags**, enabling self-service releases

### JP Morgan Chase — Associate Software Engineer
**Mar 2019 — Feb 2023**
- Built **SingleDoor** — unified payment platform for **BillPay, QuickPay with Zelle, and card payments** serving ~1M daily users
- Turned design wireframes into reusable **BlueJS** components
- Led the platform to **full WCAG accessibility compliance**

### Charter Communications — Full Stack Software Developer
**May 2018 — Feb 2019**
- Modernized legacy systems with **AngularJS**
- Designed RESTful APIs in **TypeScript and Node.js** for internal products

---

## Skills (as listed on site)

| Category | Technologies |
|---|---|
| **Languages** | JavaScript (ES6+), TypeScript, Python, Bash |
| **Frameworks & Libraries** | React, AngularJS, Vue.js, Node.js, Express.js, Bootstrap, Sass, WebSocket |
| **Tools & Practices** | Git, Webpack, REST APIs, AWS, JIRA, Jest, CI/CD, Agile/Scrum, WCAG/ADA |

## Education & Certifications

- **B.S. in Computer Science and Engineering** — North South University, Dhaka, Bangladesh
- **AWS Certified Cloud Practitioner** — Amazon Web Services, Sep 2023

---

## Blog

*Positioning: "Notes on engineering leadership, consumer payments at scale, and AI-assisted development."*
6 posts, each a short 1–2 min read. RSS feed available at `/rss.xml`.

| Date | Post | Tags | Summary |
|---|---|---|---|
| Mar 2025 | **How I Built an AI-Driven SDLC with GitHub Copilot and Obsidian** | AI, SDLC | Team workflow pairing Copilot with an Obsidian knowledge base ("if it isn't in the knowledge base, it doesn't exist"): requirements intake → AI-drafted PRDs → task decomposition → grounded code delivery → AI-generated tests. Lesson: start with the 20% of context that answers 80% of questions. "The knowledge base is the product. The AI is just the interface." |
| Feb 2025 | **Accessibility-First Engineering: Our Path to WCAG Compliance** | Accessibility, WCAG | Bringing SingleDoor to full WCAG compliance: automated audits catch ~30% of issues; the other 70% need manual screen-reader passes. Key move: made a11y part of the **definition of done** (keyboard coverage, focus order, contrast, screen-reader smoke test). Side benefits: fixed navigation patterns, better daylight readability, semantic landmarks. |
| Jan 2025 | **Feature Flags as a Team Sport** | Release Engineering, Feature Flags | Self-service release tooling that deleted manual deployment steps and gave every engineer control over their own rollouts. |
| Nov 2024 | **Shipping to a Million Users: Lessons from Consumer Payments** | Scale, Payments | Scale changes failure modes, not fundamentals: test "what breaks first" (idempotency, downstream outages, retry races), rollbacks as a designed feature, analytics/SLOs as the product's second brain ("here's the p95 by flow"), post-release support as a discipline (severity triage, comms templates, blameless postmortems). |
| Sep 2024 | **The CLI Tools That Deleted Our Release Checklist** | CLI, Tooling | Automating CDN artifact publishing and release validation so deploys became boring, repeatable, and fast. |
| Jun 2024 | **From Associate to VP: What Mentorship Actually Looks Like** | Leadership, Mentorship | Raising code quality and delivery velocity by investing in people — practices that worked and ones that didn't. |

**Recurring themes:** AI-assisted development, accessibility-first engineering, release automation (feature flags, CLI tooling), scale discipline in consumer payments, mentorship/leadership.

---

## Site Technical Details

| Aspect | Detail |
|---|---|
| **Generator** | Astro **v5.18.2** (static output) + TypeScript + Tailwind CSS v4 |
| **Hosting** | nginx/1.26.3 (Ubuntu) — VPS; repo history shows migration toward Cloudflare Pages |
| **Pages** | 8 URLs total: `/`, `/blog/`, 6 blog posts (confirmed via sitemap) |
| **Blog engine** | Astro Content Collections — Markdown files with frontmatter (title, excerpt, date, tags, draft, cover) auto-publish |
| **SEO** | Meta description + local keywords ("full stack developer, developer in holbrook, software developer in ronkonkoma"), Open Graph, Twitter Cards (`summary_large_image`), canonical URLs |
| **Structured data** | JSON-LD `BlogPosting` schema on every post (author, datePublished, image) |
| **Feeds/discovery** | RSS at `/rss.xml`, `sitemap-index.xml`, `robots.txt` (allow all + sitemap) |
| **UX features** | Light/dark mode toggle, skip-to-content link, per-post custom SVG cover images, reading-time labels, responsive mobile/tablet/desktop |
| **Last deploy** | Sep 19, 2026 (Last-Modified header) |

**Source repo:** [github.com/hellsalve017196/official_website](https://github.com/hellsalve017196/official_website) — commands: `npm run dev` (localhost:4321), `npm run build`, `npm run deploy`.
