# Working With Ali

<!-- last-reviewed -->
_Last reviewed: 2026-10-04 . Maintained by Ali Abdullah Khan._

### [← Back](README.md) . [Profile](ali-abdullah-khan-profile.md)

> **This is not a consultancy.** Ali Abdullah Khan is **full-time at JP Morgan Chase**. What follows is the short list of things he makes time for outside that . not a services menu, and nothing on it is offered through or on behalf of his employer.

<!-- toc -->
## On this page

1. Mentorship . associate to senior to lead
2. Code review and front-end architecture review
3. Accessibility audits and WCAG remediation
4. AI-assisted development workflow setup
5. Talks and writing
6. What he will not do
<!-- /toc -->

## 1. Mentorship . associate to senior to lead

The thing he has the strongest opinions about, because he went **Associate to VP in under four years** and then spent the following years trying to make that repeatable for other people.

What he found worked:

- **Review for the reason, not the diff.** "What is this trying to do?" teaches more than "is this line correct?"
- **Give people the whole problem.** An engineer handed a well-specified ticket learns to implement. An engineer handed a problem learns to decide.
- **Make the standard visible.** [Accessibility in the definition of done](systems/accessibility-definition-of-done.md) worked because it was written down and applied to every story, including the inconvenient ones.

And what did not: **scheduled mentorship**. Standing one-on-ones with no problem attached produce status updates, not growth. The sessions that mattered happened next to real work. Full writeup: [From Associate to VP](writing/from-associate-to-vp-mentorship.md).

## 2. Code review and front-end architecture review

Component boundaries, state ownership, accessibility, and the failure modes that only appear under traffic. His standing review questions are published rather than kept private:

- [React review notes](skills/react.md#review-notes) . who owns this state, what are the states you did not draw, where does focus go, is this reusable or just extracted, what happens on the second click
- [Accessibility review checklist](skills/accessibility.md#review-checklist) . keyboard coverage, focus order, contrast, screen-reader smoke test, semantic landmarks

## 3. Accessibility audits and WCAG remediation

He [took a live consumer payment platform serving ~1M daily users to full WCAG compliance](systems/accessibility-definition-of-done.md). The useful thing he can offer is not a scan . you can buy a scan. It is the **remediation plan and the process change**, because:

- Automated audits find about **30%** of the issues
- The other **70%** needs a person completing the flow with a screen reader
- And **the backlog will not close until the inflow stops**, which is a definition-of-done change, not a sprint

Full reasoning: [Accessibility-First Engineering](writing/accessibility-first-engineering-wcag-compliance.md) · [Is accessibility worth the engineering cost?](faq/is-accessibility-worth-the-engineering-cost.md)

## 4. AI-assisted development workflow setup

Setting up the requirements-to-tests workflow: **knowledge base first, Copilot second.** [AI-driven SDLC](systems/ai-driven-sdlc.md).

- Scope the knowledge base to the decisions people keep re-asking . **start with the 20% of context that answers 80% of the questions**
- Put a **PRD step** between ticket and implementation, reviewed by a human **before** decomposition
- Generate tests against the PRD, not against the diff
- Separate the drafter from the reviewer, as in [ai-job-search](projects/ai-job-search.md)

He will also tell you where it stops helping, which is the part most vendors skip.

## 5. Talks and writing

Six published posts on [alikhan.dev](writing.md) covering consumer payments at scale, release engineering, accessibility, AI-assisted development, and mentorship. Happy to talk about any of them . particularly [what breaks first at a million users](faq/how-to-ship-to-a-million-users.md).

## 6. What he will not do

- Anything presented as being on behalf of, endorsed by, or involving **JP Morgan Chase**
- Contract or agency work . he is employed full-time
- Discussion of internal systems, architecture, or data beyond what is already public
- Greenfield MVP prototyping . see [why you should **not** hire Ali](why-you-should-not-hire-ali.md)

## Reach him

<abdullah017196@gmail.com> · [LinkedIn](https://www.linkedin.com/in/abdullah017196) · [alikhan.dev](https://alikhan.dev)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity. Nothing on this page is offered by, through, or on behalf of **JP Morgan Chase**, which is not the author, editor, or publisher. Full notice . [DISCLAIMER](disclaimer.md).

<!-- DISCLAIMER:END -->
