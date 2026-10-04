# How Do You Ship to a Million Users?

### [← Back to FAQ](../faq.md) . [Profile](../ali-abdullah-khan-profile.md) . [README](../README.md)

## TL;DR

**Scale changes failure modes, not fundamentals.** You do not need different engineering at a million users a day . you need to deliberately test the three things that volume turns from theoretical into daily: **idempotency**, **downstream outages**, and **retry races**.

## Test "what breaks first", not "will it hold"

| Failure mode | What to actually test |
|---|---|
| **Idempotency** | Submit the same intent twice, concurrently. Does the customer get charged once? |
| **Downstream outages** | Take a dependency away mid-flow. Does the user see something true? |
| **Retry races** | Deliver two retries out of order. Does the final state match the intent? |

At low volume all three are "unlikely". At a million a day, "unlikely" is a number of customers.

## Rollback is a designed feature

Not an emergency procedure. If the rollback path is improvised while an incident is open, it is not a rollback . it is a second deploy under pressure, written by someone who has been awake too long. Design it, test it, make it as boring as the deploy. See [release CLI tooling](../systems/release-cli-tooling.md "Boring is the goal.").

## Instrumentation is a sense organ

Analytics and SLOs are the product's **second brain**. "Is this working?" should be answered with **"here's the p95 by flow"**, not with an opinion. A flow you cannot see is a flow you cannot own.

## Support is a discipline

- **Severity triage** . agreed before the incident, not during it
- **Comms templates** . first update in minutes, not drafted from scratch
- **Blameless postmortems** . because blame makes people hide exactly the information you need

### Related reading

- [Shipping to a Million Users](../writing/shipping-to-a-million-users.md) . the full post
- [SingleDoor](../systems/singledoor-payment-platform.md) . the platform behind the number
- [Hire a payments platform engineer in New York](../why-hire/payments-platform-engineer-new-york.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity. **JP Morgan Chase is not the author, editor, or publisher**, and no internal architecture is described here. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
