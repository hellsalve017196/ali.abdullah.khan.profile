# A Component Library Built From Wireframes

> **TL;DR** . Design wireframes turned into **reusable BlueJS components** on the JP Morgan Chase consumer payment platform, so payment flows stopped being rebuilt per feature. Built by [Ali Abdullah Khan](../ali-abdullah-khan-profile.md) between **Mar 2019 and Feb 2023**.

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why it was built

Three payment rails, three teams, three slightly different versions of the same amount-entry field. Each one correct in isolation. Together, they meant a change to how money amounts are validated had to be made three times, tested three times, and missed once.

A design system only exists if the next feature can be **assembled**. Otherwise you have a folder of screens and a style guide nobody reads.

## What it does

- Wireframes in, **reusable components** out . with the states the wireframe implied but did not draw: loading, empty, error, disabled, mid-submit
- One implementation of the shared primitives: amount entry, recipient selection, confirmation, status
- Accessibility baked into the component rather than re-applied per screen . see [accessibility in the definition of done](accessibility-definition-of-done.md "Keyboard coverage, focus order, contrast, screen-reader smoke test, per story.")

## Design principles

1. **The component owns its states.** If the consumer has to remember to handle the error state, the component is unfinished.
2. **Accessible at the primitive.** Fix focus management once, inside the component, and every flow inherits it.
3. **Assembly is the acceptance test.** If the next flow still needs custom markup, the library does not cover the domain yet.
4. **Wireframes under-specify on purpose.** Reading what a designer left out is part of the engineering work.

## Related

- [SingleDoor](singledoor-payment-platform.md) . the platform the library serves
- [Associate Software Engineer @ JP Morgan Chase](../experience/02-associate-software-engineer-jpmorgan-chase.md)
- [React skills page](../skills/react.md) . the review notes that came out of this work

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity. **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
