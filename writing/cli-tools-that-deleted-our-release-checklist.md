# The CLI Tools That Deleted Our Release Checklist

_Published **September 2024** on [alikhan.dev](https://alikhan.dev/blog/) . tags: CLI, Tooling . 1–2 min read._

### [← Back to writing](../writing.md) . [Profile](../ali-abdullah-khan-profile.md)

## The one-line version

> A release checklist is a document describing work a computer should be doing. **Automate until deploys are boring.**

## What we built

Internal CLI tools for **CDN artifact publishing** and **release validation**, so the checklist became a command. System notes: [release CLI tooling](../systems/release-cli-tooling.md).

- **CDN artifact publishing** . build output to CDN in one command, with naming, invalidation, and versioning rules **encoded** rather than remembered
- **Release validation** . the pre-flight checks that used to be checklist lines, run automatically and failing loudly
- **Self-service releases** . any engineer on the team can cut one

## Why checklists are the problem

Two reasons, and the second is the worse one.

**First**: every manual step is a place where a tired engineer at 6pm on a Thursday does step 7 before step 6. Checklists do not prevent that; they just document what should have happened.

**Second**: a checklist concentrates release capability in whoever ran it most recently. That person becomes the bottleneck, and the team's ability to ship becomes a function of one person's calendar. See [Feature Flags as a Team Sport](feature-flags-as-a-team-sport.md "No release priesthood.").

## The rule

**Encode the rule, delete the step.**

Every line on a release checklist is one of two things: something automatable, or a decision. Automate the first kind and delete the line. For the second kind, make the decision explicit and put it in front of the person making it . do not bury it between eleven mechanical steps where it will be skimmed.

## What success looks like

**Boring.** Repeatable, fast, unremarkable. Excitement during a release is a defect, not a culture. Nobody should feel anything during a deploy.

## Related

- [Release CLI tooling](../systems/release-cli-tooling.md)
- [Feature-flag self-service](../systems/feature-flag-self-service.md)
- [Node.js](../skills/nodejs.md) · [AWS & cloud](../skills/aws.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Notes on a post published at [alikhan.dev](https://alikhan.dev); the site holds the canonical text. Written by Ali Abdullah Khan in a personal capacity . **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
