# How I Built an AI-Driven SDLC with GitHub Copilot and Obsidian

_Published **March 2025** on [alikhan.dev](https://alikhan.dev/blog/) . tags: AI, SDLC . 1–2 min read._

### [← Back to writing](../writing.md) . [Profile](../ali-abdullah-khan-profile.md)

## The one-line version

> **The knowledge base is the product. The AI is just the interface.**

## What the workflow is

A team workflow pairing **GitHub Copilot** with an **Obsidian knowledge base**, running in five stages:

1. **Requirements intake** . the ticket arrives and is read against what the knowledge base already says
2. **AI-drafted PRDs** . a specification, generated and then reviewed by a human
3. **Task decomposition** . into units small enough to be independently testable
4. **Grounded code delivery** . Copilot working from the knowledge base rather than from the prompt alone
5. **AI-generated tests** . coverage written against the PRD, not against the diff

Full system notes: [AI-driven SDLC](../systems/ai-driven-sdlc.md). Diagram: [`diagrams/ai-driven-sdlc.mmd`](../diagrams/ai-driven-sdlc.mmd).

## The operating rule

**If it isn't in the knowledge base, it doesn't exist.**

That sounds harsh and it is meant to. A decision that lives only in a Slack thread cannot be grounded against, so it will be re-invented . usually differently, usually by someone who was not in the thread.

## The lesson that made it work

**Start with the 20% of context that answers 80% of the questions.**

The failure mode of knowledge-base projects is trying to document everything before starting. Nobody finishes, and the half-written vault is worse than nothing because people stop trusting it. The version that works: write down the decisions people keep re-asking about, and nothing else, and let the rest accumulate.

## Where it stops helping

Worth being straight about. This workflow is good at carrying a **well-understood requirement** to shipped code. It does not decide whether the requirement is right, and it degrades as the knowledge base goes stale. Maintaining the vault **is** the job . not a chore adjacent to it.

## Related

- [AI-driven SDLC](../systems/ai-driven-sdlc.md) . the system page
- [What is an AI-driven SDLC?](../faq/what-is-an-ai-driven-sdlc.md) . the short answer
- [Spec-first development with AI agents](../learning/spec-first-development-with-ai-agents.md)
- [ai-job-search](../projects/ai-job-search.md) . the same drafter/reviewer pattern, in the open

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Notes on a post published at [alikhan.dev](https://alikhan.dev); the site holds the canonical text. Written by Ali Abdullah Khan in a personal capacity . **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
