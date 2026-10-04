# Accessibility in the Definition of Done

> **TL;DR** . The move that took a live consumer payment platform to **full WCAG compliance** was not a tool . it was putting accessibility in the team's **definition of done**: keyboard coverage, focus order, contrast, and a screen-reader smoke test, **per story**. Automated audits catch about **30%** of issues. The other **70%** need a human with a screen reader.

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why it was built

Accessibility programs usually run as audits: a quarterly scan produces a spreadsheet of violations, someone triages the spreadsheet, and the next quarter's scan produces a similar one. The work never finishes because the inflow never stops . every new feature adds violations faster than the backlog clears.

The only version that converges is the one where a story **cannot be called done** while it is inaccessible.

## What it does

<a id="review-checklist"></a>

The per-story pass, applied to every change on the platform:

| Check | What it means in practice |
|---|---|
| **Keyboard coverage** | Every interactive element reachable and operable without a mouse |
| **Focus order** | Tab order follows visual order; focus is never lost or trapped |
| **Contrast** | Text and UI meet the contrast ratio, verified not eyeballed |
| **Screen-reader smoke test** | The flow is completed end to end with a screen reader, by a person |
| **Semantic landmarks** | Regions, headings, and labels describe the page structure truthfully |

## The 30/70 split

**Automated audits catch roughly 30% of the issues.** They are very good at contrast ratios, missing `alt` attributes, and missing form labels . anything that is a property of the markup.

**The other 70% needs a manual screen-reader pass**, because the real problems are about *sequence and meaning*: is the error message announced? Does focus move somewhere useful after submit? Does the live-region update interrupt the user mid-sentence? No static analysis answers those.

## The side benefits nobody budgeted for

The work paid for itself in places the accessibility ticket did not mention:

- **Navigation patterns got fixed.** Making focus order sane forced the navigation structure to be sane.
- **Daylight readability improved.** Meeting contrast ratios made the app usable on a phone outdoors.
- **Semantic landmarks arrived.** Which made the DOM easier for *everyone* to reason about, screen reader or not.

## Design principles

1. **Definition of done, not audit cadence.** Inflow must be stopped before backlog can be cleared.
2. **Automate what is a markup property; schedule a human for everything else.**
3. **The screen-reader pass is a smoke test, not a certification.** It is cheap and it runs every story.
4. **Accessibility is an engineering discipline.** It is not a compliance tax, and treating it as one guarantees the audit-forever loop.

## Related

- [Accessibility-First Engineering: Our Path to WCAG Compliance](../writing/accessibility-first-engineering-wcag-compliance.md) . the full writeup
- [Is accessibility worth the engineering cost?](../faq/is-accessibility-worth-the-engineering-cost.md)
- [Accessibility skills page](../skills/accessibility.md)
- [SingleDoor](singledoor-payment-platform.md) . the platform this was applied to

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity. The 30/70 split is his own observation from this program, published on [alikhan.dev](https://alikhan.dev), not an industry benchmark. **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
