# Accessibility-First Engineering: Our Path to WCAG Compliance

_Published **February 2025** on [alikhan.dev](https://alikhan.dev/blog/) . tags: Accessibility, WCAG . 1–2 min read._

### [← Back to writing](../writing.md) . [Profile](../ali-abdullah-khan-profile.md)

## The one-line version

> Automated audits catch about **30%**. The other **70%** is a person with a screen reader. The fix is not a tool . it is the **definition of done**.

## What we did

Took [SingleDoor](../systems/singledoor-payment-platform.md "The unified payment platform for BillPay, QuickPay with Zelle, and card payments."), a live consumer payment platform serving about a million users a day, to **full WCAG compliance** . without pausing the product.

## The 30/70 split

**Automated audits found roughly 30% of the issues.** They are genuinely good at anything that is a property of the markup: contrast ratios, missing `alt` text, missing form labels. Run them, gate on them, and stop expecting more from them.

**The remaining 70% required manual screen-reader passes.** Those issues are about **sequence and meaning**, which no static analyzer can evaluate:

- Is the validation error actually announced?
- Does focus land somewhere useful after submit?
- Does a live-region update interrupt the user mid-sentence?
- Does the flow make sense when you cannot see the layout?

## The key move

**Accessibility went into the definition of done.** Per story, every story:

- keyboard coverage
- focus order
- contrast
- screen-reader smoke test

Before that, accessibility ran as a quarterly audit, and the audit never converged . new features added violations faster than the backlog cleared. The only version that converges is the one where a story **cannot be called done** while it is inaccessible. You have to stop the inflow before you can clear the backlog.

## The side benefits nobody budgeted for

- **Navigation patterns got fixed.** Making focus order sane forced the navigation structure to be sane.
- **Daylight readability improved.** Hitting contrast ratios made the app usable on a phone outdoors . which helps every user, not just the ones the ticket was written for.
- **Semantic landmarks arrived.** Regions and headings that describe the page truthfully, which made the DOM easier for everyone to reason about.

That is the actual argument for accessibility-first engineering. It is not charity and it is not compliance . **the constraints are good engineering constraints**, and the app gets better for everybody.

## Related

- [Accessibility in the definition of done](../systems/accessibility-definition-of-done.md) . the system page
- [Accessibility skills page](../skills/accessibility.md) . the review checklist
- [Is accessibility worth the engineering cost?](../faq/is-accessibility-worth-the-engineering-cost.md)
- [Hire a WCAG / accessibility engineer in New York](../why-hire/accessibility-wcag-engineer-new-york.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Notes on a post published at [alikhan.dev](https://alikhan.dev); the site holds the canonical text. The 30/70 split is Ali's own observation from this program, not an industry benchmark. Written in a personal capacity . **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
