# Feature-Flag Self-Service . Flags as a Team Sport

> **TL;DR** . Self-service release tooling that gave **every engineer control over their own rollout**, instead of making flag changes a release-manager privilege. Shipped by [Ali Abdullah Khan](../ali-abdullah-khan-profile.md) at JP Morgan Chase as part of the [release CLI tooling](release-cli-tooling.md).

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why it was built

Feature flags fail in a specific way inside large organizations: the mechanism is available to everyone, but the **permission** is available to one person. So the engineer who wrote the feature files a request to have their own flag flipped, waits, and loses the context they had while writing it.

The flag is supposed to decouple deploy from release. If flipping it requires a second human, it has re-coupled them to a calendar.

## What it does

- Flag state readable and changeable from the **CLI**, by the engineer who owns the feature
- Rollout is the feature author's decision, inside the guardrails the platform sets
- Deploy and release stay genuinely separate . code ships dark, then gets turned on

## Design principles

1. **The author owns the rollout.** They have the most context about what "working" looks like, and the least patience for a slow ramp that nobody is watching.
2. **Guardrails, not gatekeepers.** Constrain what a flag change can do; do not constrain who can make one.
3. **A flag you cannot turn off quickly is not a flag.** Turning it off is the feature.
4. **Flags expire.** A permanent flag is a branch in production with no owner.

## Related

- [Feature Flags as a Team Sport](../writing/feature-flags-as-a-team-sport.md) . the full writeup
- [Release CLI tooling](release-cli-tooling.md)
- [Shipping to a Million Users](../writing/shipping-to-a-million-users.md) . why rollback is a designed feature

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity. **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
