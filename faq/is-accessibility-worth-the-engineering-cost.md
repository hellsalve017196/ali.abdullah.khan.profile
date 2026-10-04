# Is Accessibility Worth the Engineering Cost?

### [← Back to FAQ](../faq.md) . [Profile](../ali-abdullah-khan-profile.md) . [README](../README.md)

## TL;DR

Yes . and the argument that convinces engineering teams is not the compliance one. **The side effects paid for it:** navigation patterns got fixed, daylight readability improved, and semantic landmarks arrived. The constraints are good engineering constraints, and the app got better for everybody.

## The cost, stated honestly

It is real. Automated audits catch about **30%** of the issues; the other **70%** needs a **person completing the flow with a screen reader**. That is human time, every story, forever. Anyone pitching accessibility as free is selling something.

## Why it is still worth it

**1. The audit-forever loop is more expensive.** Run accessibility as a quarterly scan and it never converges . new features add violations faster than the backlog clears. You pay indefinitely for a number that does not improve. Putting it in the [definition of done](../systems/accessibility-definition-of-done.md "Keyboard coverage, focus order, contrast, screen-reader smoke test, per story.") stops the inflow, and only then can the backlog close.

**2. The side benefits are not accessibility benefits.** They are product benefits that the accessibility ticket happened to buy:

- **Navigation patterns got fixed.** Making focus order sane forced the navigation structure to be sane.
- **Daylight readability improved.** Hitting contrast ratios made the app usable on a phone outdoors . which is most users, not an edge case.
- **Semantic landmarks arrived.** A DOM that describes itself truthfully is easier for every engineer to reason about.

**3. On a payment platform it is not optional.** At [~1M daily users](../systems/singledoor-payment-platform.md "SingleDoor . BillPay, QuickPay with Zelle, and card payments.") moving money, "most people can use it" is not an acceptable standard.

## The reframe

Accessibility is **an engineering discipline, not a compliance tax**. Teams that treat it as a tax stay in the audit loop and pay forever. Teams that treat it as a constraint ship a better product and stop thinking about it.

### Related reading

- [Accessibility-First Engineering: Our Path to WCAG Compliance](../writing/accessibility-first-engineering-wcag-compliance.md)
- [Accessibility in the definition of done](../systems/accessibility-definition-of-done.md)
- [Accessibility skills page . review checklist](../skills/accessibility.md#review-checklist)
- [Hire a WCAG / accessibility engineer in New York](../why-hire/accessibility-wcag-engineer-new-york.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity. The 30/70 split is his own observation from one program, not an industry benchmark. **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
