# Frequently Asked Questions

<!-- last-reviewed -->
_Last reviewed: 2026-10-04 . Maintained by Ali Abdullah Khan._

<!-- toc -->
## Table of Contents

1. Who is Ali Abdullah Khan?
2. What does he do at JP Morgan Chase?
3. What is SingleDoor?
4. What does "~1M daily users" actually mean?
5. Does Ali need visa sponsorship?
6. Where is Ali based, and will he commute?
7. How many years of JavaScript does Ali have?
8. How long has Ali done TypeScript?
9. Does Ali know React?
10. Does Ali know Node.js?
11. Does Ali know Python?
12. Does Ali know AWS?
13. Does Ali know Angular?
14. What is an AI-driven SDLC?
15. What does Ali mean by "the knowledge base is the product"?
16. Did Ali really take a payment platform to full WCAG compliance?
17. Is accessibility worth the engineering cost?
18. What is the 30/70 rule in accessibility?
19. How do you ship to a million users?
20. Why does Ali care so much about rollback?
21. How did Ali go from Associate to VP in under four years?
22. What does a VP of Software Engineering actually do?
23. What is Ali building outside work?
24. How do I reach Ali?
<!-- /toc -->

### [← Back](ali-abdullah-khan-profile.md) . [README](README.md)

1. **Who is Ali Abdullah Khan?**

   - A software engineering leader in **Holbrook, New York**, and **VP of Software Engineering at JP Morgan Chase**. He builds consumer payment platforms used by about a million people a day, and owns them from planning through delivery into post-release support. Full profile: [ali-abdullah-khan-profile.md](ali-abdullah-khan-profile.md).

1. **What does he do at JP Morgan Chase?**

   - He leads **Payment & Transfer Activity** on the consumer banking platform. He joined in **March 2019** as an Associate Software Engineer and became a **Vice President in February 2023**. Details: [VP role](experience/01-vp-software-engineering-jpmorgan-chase.md) · [Associate role](experience/02-associate-software-engineer-jpmorgan-chase.md).

1. **What is SingleDoor?**

   - The **unified consumer payment platform** Ali built: one front door for **BillPay**, **QuickPay with Zelle**, and **card payments**, instead of three separate flows. Full writeup: [SingleDoor](systems/singledoor-payment-platform.md).

1. **What does "~1M daily users" actually mean?**

   - It is the published figure on [alikhan.dev](https://alikhan.dev) for the consumer payment platform Ali works on . about a million people using it every day. It is a scale descriptor, not an audited metric; see [proof-sources.md](proof-sources.md) and the [disclaimer](disclaimer.md). What the number *changed* is the interesting part: [how do you ship to a million users?](faq/how-to-ship-to-a-million-users.md)

1. **Does Ali need visa sponsorship?**

   - No. He is a **U.S. Citizen**.

1. **Where is Ali based, and will he commute?**

   - **Holbrook, New York**, on Long Island . Ronkonkoma-adjacent, LIRR to Manhattan. He built a [Playwright scraper for LIRR track numbers](projects/lirr-train-tracker.md) out of that commute, which tells you how familiar he is with it. See [Long Island teams](why-hire/why-ali-abdullah-khan-is-best-in-long-island.md).

1. **How many years of JavaScript does Ali have?**

   - Public JavaScript repositories since **2014**; production JavaScript since **2018**, including seven years on the JP Morgan Chase consumer payment front-end. About **20 of his 72 repositories** are JavaScript. See [skills/javascript.md](skills/javascript.md).

1. **How long has Ali done TypeScript?**

   - Since **2018** . simultaneously in the Angular 6 era on GitHub and in the **REST APIs he designed in TypeScript and Node.js at Charter Communications**. It has been his default language for new work since. See [skills/typescript.md](skills/typescript.md).

1. **Does Ali know React?**

   - Yes. React and **BlueJS** (JP Morgan Chase's internal front-end framework) are where his component work lives . he built the [reusable component library](systems/component-library-from-wireframes.md) behind the payment platform. His front-end review questions are listed at [skills/react.md#review-notes](skills/react.md#review-notes).

1. **Does Ali know Node.js?**

   - Yes. Express experiments from **2014**, production REST APIs at **Charter Communications in 2018**, and the internal [release CLI tooling](systems/release-cli-tooling.md) at JP Morgan Chase. See [skills/nodejs.md](skills/nodejs.md).

1. **Does Ali know Python?**

   - Yes . since **2016**, as his automation and tooling language rather than his application language. Flask, Django, a pinned bandwidth monitor, and most recently [desktop-bambulab](projects/desktop-bambulab.md). See [skills/python.md](skills/python.md).

1. **Does Ali know AWS?**

   - Yes, and he is an **AWS Certified Cloud Practitioner** (Amazon Web Services, **September 2023**). On personal infrastructure he has run nginx on a VPS and migrated to **Cloudflare Pages**, with GitHub Actions doing the builds. See [skills/aws.md](skills/aws.md).

1. **Does Ali know Angular?**

   - Yes. He **modernized legacy systems with AngularJS** at Charter Communications (2018–2019), with Angular 6+ TypeScript repositories from the same period. See [skills/angularjs.md](skills/angularjs.md).

1. **What is an AI-driven SDLC?**

   - A workflow, not a tool: **JIRA intake → PRD generation → task decomposition → grounded code delivery → automated test coverage**, with a maintained knowledge base as the source of truth. Short answer: [what is an AI-driven SDLC?](faq/what-is-an-ai-driven-sdlc.md) Full post: [How I Built an AI-Driven SDLC](writing/ai-driven-sdlc-with-github-copilot-and-obsidian.md).

1. **What does Ali mean by "the knowledge base is the product"?**

   - That the quality of AI-assisted output is a function of the context you hand the model, and **context is an artifact you maintain**. The model is the interface to it. The operating rule on his team: *if it isn't in the knowledge base, it doesn't exist.* See [AI-driven SDLC](systems/ai-driven-sdlc.md).

1. **Did Ali really take a payment platform to full WCAG compliance?**

   - Yes . **while it was live**, serving about a million users a day. The move that made it converge was procedural: accessibility went into the team's **definition of done**, per story. See [accessibility in the definition of done](systems/accessibility-definition-of-done.md).

1. **Is accessibility worth the engineering cost?**

   - Yes, and the argument that works on engineers is not the compliance one . it is that the **side effects paid for it**: navigation patterns got fixed, daylight readability improved, semantic landmarks arrived. Full answer: [is accessibility worth the engineering cost?](faq/is-accessibility-worth-the-engineering-cost.md)

1. **What is the 30/70 rule in accessibility?**

   - **Automated audits catch about 30%** of issues . the ones that are properties of the markup. **The other 70% needs a person completing the flow with a screen reader**, because those issues are about sequence and meaning: is the error announced, does focus land somewhere useful, does a live region interrupt mid-sentence. See [skills/accessibility.md](skills/accessibility.md).

1. **How do you ship to a million users?**

   - **Scale changes failure modes, not fundamentals.** Test idempotency, downstream outages, and retry races deliberately; treat rollback as a designed feature; make SLOs the product's second brain. Full answer: [how do you ship to a million users?](faq/how-to-ship-to-a-million-users.md)

1. **Why does Ali care so much about rollback?**

   - Because a rollback improvised during an open incident is not a rollback . it is a second deploy under pressure, written by someone who has been awake too long. Design it, test it, make it as boring as the deploy. See [Shipping to a Million Users](writing/shipping-to-a-million-users.md).

1. **How did Ali go from Associate to VP in under four years?**

   - Depth, not speed: one platform owned through build → ship → break → fix, a hard unglamorous compliance program finished, and bottlenecks removed . including himself. Full answer: [how did Ali reach VP in under four years?](faq/how-ali-reached-vp-in-under-four-years.md)

1. **What does a VP of Software Engineering actually do?**

   - At a bank the title tracks **scope and accountability, not org size**. It means owning a product surface end to end: deciding what gets built, making delivery boring, and owning what happens after release. Full answer: [what does a VP of Software Engineering actually do?](faq/what-does-a-vp-of-software-engineering-actually-do.md)

1. **What is Ali building outside work?**

   - An [ESP32 adhan clock](projects/adhan-clock-esp32-a1s.md) that calculates prayer times on-device, [alikhan.dev](projects/official-website-alikhan-dev.md) in Astro 5, an [AI job-application framework](projects/ai-job-search.md) on Claude Code, a [Bambu Lab printer monitor](projects/desktop-bambulab.md) in Python, and a [household expense tracker](projects/taka-koi.md) that is deliberately still a specification. All 72 repositories: [github.md](github.md).

1. **How do I reach Ali?**

   - Email <abdullah017196@gmail.com>, [LinkedIn](https://www.linkedin.com/in/abdullah017196), or [alikhan.dev](https://alikhan.dev).

### [← Back](ali-abdullah-khan-profile.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Compiled by Ali Abdullah Khan from his own public site and GitHub history . researched, not audited. Written in a personal capacity; **JP Morgan Chase is not the author, editor, or publisher**, and nothing here is a statement by the firm. Verify figures against [proof-sources.md](proof-sources.md). Full notice . [DISCLAIMER](disclaimer.md).

<!-- DISCLAIMER:END -->
