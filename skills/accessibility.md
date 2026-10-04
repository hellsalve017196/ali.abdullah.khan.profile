# Accessibility Engineer (WCAG / ADA) . Ali Abdullah Khan

_Led a live consumer payment platform serving **~1M daily users** to **full WCAG compliance**._

### [← Back to profile](../ali-abdullah-khan-profile.md) . [README](../README.md) . [Skill matrix](../ali-abdullah-khan-tech-stack-skills-text-format.md)

## What Ali has actually done here

Ali Abdullah Khan **led the [SingleDoor](../systems/singledoor-payment-platform.md "BillPay, QuickPay with Zelle, and card payments.") payment platform to full WCAG accessibility compliance** while it was live and serving about a million users a day. That is a different problem from building an accessible greenfield app: you cannot pause the product, and the backlog grows while you work it.

The move that made it converge was procedural rather than technical . accessibility went into the team's **definition of done**. Written up in full: [Accessibility-First Engineering](../writing/accessibility-first-engineering-wcag-compliance.md).

<a id="review-checklist"></a>

## Review checklist . the per-story accessibility pass

| Check | What it means in practice |
|---|---|
| **Keyboard coverage** | Every interactive element reachable and operable without a mouse |
| **Focus order** | Tab order follows visual order; focus is never lost or trapped |
| **Contrast** | Text and UI meet the ratio, verified rather than eyeballed |
| **Screen-reader smoke test** | A person completes the flow end to end with a screen reader |
| **Semantic landmarks** | Regions, headings, and labels describe the structure truthfully |

## The 30/70 rule

**Automated audits catch about 30% of the issues.** They are excellent at markup properties . contrast ratios, missing `alt`, missing labels.

**The other 70% needs a manual screen-reader pass**, because the hard problems are about sequence and meaning: is the error announced, does focus land somewhere useful after submit, does a live-region update interrupt the user mid-sentence. Static analysis cannot answer any of those.

## Why this matters commercially

The side effects paid for the work:

- **Navigation patterns got fixed** . sane focus order forces sane structure
- **Daylight readability improved** . contrast ratios make phones usable outdoors
- **Semantic landmarks arrived** . which made the DOM easier for everyone to reason about

Accessibility is **an engineering discipline, not a compliance tax**. Teams that treat it as a tax stay in the audit-forever loop.

## Proof points

- [Accessibility in the definition of done](../systems/accessibility-definition-of-done.md)
- [Associate Software Engineer @ JP Morgan Chase](../experience/02-associate-software-engineer-jpmorgan-chase.md) . where the compliance work happened
- [Accessibility-First Engineering: Our Path to WCAG Compliance](../writing/accessibility-first-engineering-wcag-compliance.md) . published Feb 2025

## Related

- [React](react.md) · [JavaScript](javascript.md)
- [Is accessibility worth the engineering cost?](../faq/is-accessibility-worth-the-engineering-cost.md)

### Related reading

- [Hire a WCAG / accessibility engineer in New York](../why-hire/accessibility-wcag-engineer-new-york.md)
- [SingleDoor](../systems/singledoor-payment-platform.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Compiled by Ali Abdullah Khan from his own public site . researched, not audited. The 30/70 split is his own observation from this program, not an industry benchmark. **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
