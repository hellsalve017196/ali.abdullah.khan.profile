# Feature Flags as a Team Sport

_Published **January 2025** on [alikhan.dev](https://alikhan.dev/blog/) . tags: Release Engineering, Feature Flags . 1–2 min read._

### [← Back to writing](../writing.md) . [Profile](../ali-abdullah-khan-profile.md)

## The one-line version

> A flag that needs a second human to flip has re-coupled deploy to release. **The author owns the rollout.**

## What we built

Self-service release tooling that **deleted the manual deployment steps** and gave **every engineer control over their own rollout**. Flag state is readable and changeable from the CLI, by the person who wrote the feature.

System notes: [feature-flag self-service](../systems/feature-flag-self-service.md) · [release CLI tooling](../systems/release-cli-tooling.md).

## The failure mode it fixes

Feature flags fail in a specific way inside large organizations. The *mechanism* is available to everyone; the *permission* belongs to one person. So the engineer who just wrote the feature files a request to have their own flag turned on, waits a day, and comes back to it having lost all the context they had while writing it.

The entire point of a flag is to decouple **deploy** from **release**. If flipping it requires scheduling another person, you have re-coupled them . to a calendar this time.

## The four rules

1. **The author owns the rollout.** They have the most context about what "working" looks like, and the least patience for a ramp nobody is watching.
2. **Guardrails, not gatekeepers.** Constrain what a flag change can do. Do not constrain who can make one.
3. **A flag you cannot turn off quickly is not a flag.** Turning it off is the feature. Everything else is configuration.
4. **Flags expire.** A permanent flag is a branch in production with no owner and no plan.

## Why it is a team sport

Because the alternative is a release priesthood, and a priesthood is a single point of failure that goes on vacation. If only one person can deploy, the tooling is not finished . no matter how good the tooling is.

## Related

- [Feature-flag self-service](../systems/feature-flag-self-service.md)
- [The CLI Tools That Deleted Our Release Checklist](cli-tools-that-deleted-our-release-checklist.md)
- [Shipping to a Million Users](shipping-to-a-million-users.md) . rollback as a designed feature

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Notes on a post published at [alikhan.dev](https://alikhan.dev); the site holds the canonical text. Written by Ali Abdullah Khan in a personal capacity . **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
