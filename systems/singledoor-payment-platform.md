# SingleDoor . Unified Consumer Payment Platform

> **TL;DR** . One front door for **BillPay**, **QuickPay with Zelle**, and **card payments** on the JP Morgan Chase consumer banking platform, serving **about a million users a day**. Built by [Ali Abdullah Khan](../ali-abdullah-khan-profile.md "VP of Software Engineering at JP Morgan Chase.") as an Associate Software Engineer between **Mar 2019 and Feb 2023**.

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why it was built

Three payment rails had grown up separately: scheduled bill payments, person-to-person transfers over Zelle, and card payments. Each had its own flow, its own components, and its own edge cases. A customer moving money did not care which rail they were on . they cared whether the money moved.

SingleDoor collapsed those three into **one platform with one front door**, so a payment flow is configured rather than rebuilt.

## What it does

- **BillPay** . scheduled and one-off bill payments
- **QuickPay with Zelle** . person-to-person transfers
- **Card payments** . card-based payment flows
- Shared status, history, and activity surfaces across all three

## Scale, and what scale actually changed

**~1M daily users.** The useful thing to understand about that number is what it did *not* change: the fundamentals are the same. What it changed is the **failure modes**, and which ones you have to design for rather than discover:

| Failure mode | Why scale surfaces it |
|---|---|
| **Idempotency** | At a million users a day, duplicate submits are not hypothetical . they are a daily volume |
| **Downstream outages** | Every dependency will be unavailable at some point during a release window |
| **Retry races** | Two retries of the same intent arriving out of order stops being a thought experiment |

Rollback is treated as a **designed feature**, not an emergency procedure. Analytics and SLOs are the product's second brain . the answer to "is it working" is a p95 by flow.

Full writeup: [Shipping to a Million Users](../writing/shipping-to-a-million-users.md "Lessons from consumer payments at scale.").

## Design principles

1. **One front door.** A new rail should be a configuration, not a new application.
2. **Components, not screens.** See [the component library built from wireframes](component-library-from-wireframes.md "Design wireframes converted into reusable BlueJS components.").
3. **Accessible by default.** The platform reached [full WCAG compliance](accessibility-definition-of-done.md "Accessibility moved into the definition of done.") rather than being remediated afterwards.
4. **Rollback first.** If you cannot take it back out, it is not ready to go in.
5. **Support is part of the product.** Severity triage, comms templates, and blameless postmortems are owned by the same team that shipped it.

## Related

- [Associate Software Engineer @ JP Morgan Chase](../experience/02-associate-software-engineer-jpmorgan-chase.md) . the role this was built in
- [VP of Software Engineering @ JP Morgan Chase](../experience/01-vp-software-engineering-jpmorgan-chase.md) . Payment & Transfer Activity today
- [How do you ship to a million users?](../faq/how-to-ship-to-a-million-users.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity, at the level of detail already public on [alikhan.dev](https://alikhan.dev). **JP Morgan Chase is not the author, editor, or publisher**, and this page discloses no internal architecture. Verify figures via [proof-sources.md](../proof-sources.md). Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
