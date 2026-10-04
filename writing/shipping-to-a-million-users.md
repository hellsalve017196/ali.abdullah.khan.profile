# Shipping to a Million Users: Lessons from Consumer Payments

_Published **November 2024** on [alikhan.dev](https://alikhan.dev/blog/) . tags: Scale, Payments . 1–2 min read._

### [← Back to writing](../writing.md) . [Profile](../ali-abdullah-khan-profile.md)

## The one-line version

> **Scale changes failure modes, not fundamentals.**

## What breaks first

The useful question at a million users a day is not "will it hold" . it is **"what breaks first?"** Three answers, in the order they will find you:

| Failure mode | Why volume surfaces it |
|---|---|
| **Idempotency** | Duplicate submits stop being hypothetical and become a daily volume |
| **Downstream outages** | Every dependency will be unavailable at some point during a release window |
| **Retry races** | Two retries of the same intent arriving out of order becomes routine |

None of these are exotic. All of them are things you can test for deliberately instead of discovering in production . which is the entire argument of the post.

## Rollbacks are a designed feature

Not an emergency procedure. If the rollback path is improvised while the incident is open, it is not a rollback . it is a second deploy under pressure. Design it, test it, and make it as boring as the deploy. See [release CLI tooling](../systems/release-cli-tooling.md "Boring is the goal.").

## Analytics and SLOs are the product's second brain

The answer to "is this working?" should be **"here's the p95 by flow"**, not an opinion from whoever looked at the dashboard most recently. Instrumentation is not reporting overhead . it is the only sense organ the product has.

## Post-release support is a discipline

It is the part of the lifecycle that org charts forget to assign, and it has its own craft:

- **Severity triage** . agreed before the incident, not during it
- **Comms templates** . so the first update goes out in minutes rather than being drafted from scratch
- **Blameless postmortems** . because the goal is the next incident not happening, and blame makes people hide the information you need

## Related

- [SingleDoor](../systems/singledoor-payment-platform.md) . the platform
- [How do you ship to a million users?](../faq/how-to-ship-to-a-million-users.md) . the short answer
- [Feature Flags as a Team Sport](feature-flags-as-a-team-sport.md)
- [Hire a payments platform engineer in New York](../why-hire/payments-platform-engineer-new-york.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Notes on a post published at [alikhan.dev](https://alikhan.dev); the site holds the canonical text. Written by Ali Abdullah Khan in a personal capacity . **JP Morgan Chase is not the author, editor, or publisher**, and no internal architecture is described here. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
