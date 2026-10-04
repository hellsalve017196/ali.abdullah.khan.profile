# [Associate Software Engineer](https://www.jpmorganchase.com/ "JP Morgan Chase . consumer banking platform. Ali Abdullah Khan built the unified payment platform SingleDoor in this role.") @ JP Morgan Chase

## Mar 2019 – Feb 2023 (~4 years)

### [← Back](../ali-abdullah-khan-profile.md) . [README](../README.md)

## TL;DR

This is the role where the platform got built. Ali Abdullah Khan built [**SingleDoor**](../systems/singledoor-payment-platform.md "Unified payment platform for BillPay, QuickPay with Zelle, and card payments."), the unified payment platform behind **BillPay**, **QuickPay with Zelle**, and **card payments**, serving **~1M daily users**. He turned the design wireframes into [reusable **BlueJS** components](../systems/component-library-from-wireframes.md "Components instead of per-feature rebuilds.") so flows stopped getting rebuilt per feature, and he led the whole platform to [**full WCAG accessibility compliance**](../systems/accessibility-definition-of-done.md "Accessibility in the definition of done."). Four years later he was a Vice President.

## Responsibilities and Achievements

💡 Built [**SingleDoor**](../systems/singledoor-payment-platform.md), the **unified payment platform** covering **BillPay**, **QuickPay with Zelle**, and **card payments** . one front door instead of three separate flows.

💡 Served **~1M daily users** on that platform. At that volume the failure modes change: idempotency, downstream outages, and retry races become the work.

💡 Turned **design wireframes into reusable BlueJS components**, which is the difference between a design system and a folder of screens. See [component library from wireframes](../systems/component-library-from-wireframes.md).

💡 **Led the platform to full WCAG accessibility compliance.** Automated audits caught roughly **30%** of the issues; the remaining **70%** needed manual screen-reader passes. The move that actually closed it was putting accessibility in the **definition of done** . keyboard coverage, focus order, contrast, screen-reader smoke test . so it stopped being a quarterly audit.

💡 Picked up side benefits nobody budgeted for from that work: **fixed navigation patterns**, **better daylight readability**, and **semantic landmarks** across the app.

💡 Worked the **post-release support** side of the platform, which is where the real lessons about scale live.

## Projects

### [`SingleDoor . unified consumer payment platform`](../systems/singledoor-payment-platform.md)

One platform, three payment rails:

- **BillPay** . scheduled and one-off bill payments
- **QuickPay with Zelle** . person-to-person transfers
- **Card payments** . card-based payment flows

Serving **about a million users a day**. Lessons from running it are written up in [Shipping to a Million Users](../writing/shipping-to-a-million-users.md "Idempotency, downstream outages, retry races, rollback as a designed feature, and post-release support as a discipline.").

### [`WCAG compliance program`](../systems/accessibility-definition-of-done.md)

Taking a live consumer payment platform from "mostly accessible" to **fully WCAG compliant**, which is mostly a process problem rather than a CSS problem. Written up in [Accessibility-First Engineering](../writing/accessibility-first-engineering-wcag-compliance.md "Our path to WCAG compliance . the 30/70 split between automated and manual findings.").

### [`BlueJS component library`](../systems/component-library-from-wireframes.md)

Design wireframes in, reusable components out. The test of the library was whether the next payment flow could be assembled rather than written.

## Technology Stack

<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#javascript"><img height="21" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" title="JavaScript ES6+ as the primary language of the SingleDoor front-end."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#react"><img height="21" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" title="React component patterns alongside the internal BlueJS framework."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#bluejs"><img height="21" src="https://img.shields.io/badge/BlueJS-0A66C2?style=flat-square" alt="BlueJS" title="BlueJS . the internal JP Morgan Chase front-end framework the SingleDoor component library was built in."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#sass"><img height="21" src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white" alt="Sass" title="Sass for the component styling layer."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#jest"><img height="21" src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white" alt="Jest" title="Jest unit and component coverage on the payment flows."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#websocket"><img height="21" src="https://img.shields.io/badge/WebSocket-010101?style=flat-square&logo=socketdotio&logoColor=white" alt="WebSocket" title="WebSocket for live payment and transfer status updates."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#wcag"><img height="21" src="https://img.shields.io/badge/WCAG%20%2F%20ADA-5B21B6?style=flat-square" alt="WCAG / ADA" title="WCAG and ADA compliance . Ali led the platform to full compliance in this role."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#git"><img height="21" src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" title="Git and trunk-based workflow across the payment platform repositories."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#webpack"><img height="21" src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=black" alt="Webpack" title="Webpack for the front-end build and CDN artifact pipeline."></a>
<a href="../ali-abdullah-khan-tech-stack-skills-text-format.md#agile"><img height="21" src="https://img.shields.io/badge/Agile%20%2F%20Scrum-0052CC?style=flat-square&logo=jira&logoColor=white" alt="Agile / Scrum" title="Agile and Scrum delivery against a consumer banking release cadence."></a>

### [← Back](../ali-abdullah-khan-profile.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity from his own notes and public profile. **JP Morgan Chase is not the author, editor, or publisher**, and nothing here is a statement by the firm. The `~1M daily users` figure is the published summary on [alikhan.dev](https://alikhan.dev) . verify via [proof-sources.md](../proof-sources.md) before citing it. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
