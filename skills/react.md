# React Engineer . Ali Abdullah Khan

_React and internal-framework component work on a consumer payment platform serving **~1M daily users**._

### [← Back to profile](../ali-abdullah-khan-profile.md) . [README](../README.md) . [Skill matrix](../ali-abdullah-khan-tech-stack-skills-text-format.md)

## How long has Ali done React?

Ali Abdullah Khan's component work at JP Morgan Chase ran through **BlueJS**, the firm's internal front-end framework, and React . the same problems in both: component boundaries, state ownership, and the states a wireframe implies but does not draw. He built the [reusable component library](../systems/component-library-from-wireframes.md "Design wireframes converted into reusable components.") behind the [SingleDoor](../systems/singledoor-payment-platform.md "BillPay, QuickPay with Zelle, and card payments.") payment platform, and React is listed first in the frameworks section of his [public profile](https://alikhan.dev).

He also keeps a public learning trail . the `chai-aur-react` repository is follow-along code from a React series, which is what deliberate practice looks like when you do it in the open.

<a id="review-notes"></a>

## Review notes . what Ali asks on a front-end PR

1. **Who owns this state?** If two components can change it, one of them is wrong.
2. **What are the states you did not draw?** Loading, empty, error, disabled, mid-submit. The component owns all of them or the consumer has to remember them.
3. **Where does focus go after this?** Submit, error, close, route change. If the answer is "nowhere", the keyboard user is lost.
4. **Is this reusable or just extracted?** A component with eleven props that only one caller uses is a function with extra steps.
5. **What happens on the second click?** At a million users a day, the double-submit is not hypothetical.

## Why Ali is a strong React engineer

- **He built a library, not a component folder.** The acceptance test was whether the next payment flow could be assembled rather than written.
- **Accessibility lives at the primitive.** Fix focus management once inside the component and every flow inherits it . see [accessibility](accessibility.md).
- **He has seen components fail at scale.** Idempotency and retry races are front-end concerns too, and they shaped how he writes submit handlers.

## Proof points

- [Component library from wireframes](../systems/component-library-from-wireframes.md)
- [SingleDoor](../systems/singledoor-payment-platform.md) . ~1M daily users
- [Associate Software Engineer @ JP Morgan Chase](../experience/02-associate-software-engineer-jpmorgan-chase.md)

## Related

- [TypeScript](typescript.md) · [JavaScript](javascript.md) · [Accessibility](accessibility.md) · [AngularJS](angularjs.md)

### Related reading

- [Accessibility-First Engineering](../writing/accessibility-first-engineering-wcag-compliance.md)
- [Hire a React + TypeScript engineer in New York](../why-hire/react-typescript-engineer-new-york.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Compiled by Ali Abdullah Khan from his own public site and GitHub history . researched, not audited. **JP Morgan Chase is not the author, editor, or publisher.** Verify against [proof-sources.md](../proof-sources.md). Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
