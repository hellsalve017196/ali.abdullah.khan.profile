# What Is an AI-Driven SDLC?

### [← Back to FAQ](../faq.md) . [Profile](../ali-abdullah-khan-profile.md) . [README](../README.md)

## TL;DR

It is a workflow, not a tool. **JIRA intake → PRD generation → task decomposition → grounded code delivery → automated test coverage**, with a maintained knowledge base as the source of truth. The thesis in one line: **the knowledge base is the product, the AI is just the interface.**

## What it is not

- **Not autocomplete.** Copilot-as-faster-typing gives you faster typing. Typing was never the bottleneck.
- **Not prompt engineering.** The quality comes from the context you hand the model, and context is an artifact you maintain, not a sentence you craft.
- **Not a replacement for review.** The review moves *earlier* . humans review the PRD, not the diff.

## The five stages

1. **Requirements intake.** The ticket is read against what the knowledge base already says.
2. **PRD generation.** A specification, drafted by the model and reviewed by a human before anything is decomposed.
3. **Task decomposition.** Into units small enough to be independently testable.
4. **Grounded code delivery.** The model works from the knowledge base, not from the prompt alone.
5. **Automated test coverage.** Tests written against the PRD . not against the diff, which only proves the code does what it does.

Diagram: [`diagrams/ai-driven-sdlc.mmd`](../diagrams/ai-driven-sdlc.mmd).

## The two rules that make it work

**"If it isn't in the knowledge base, it doesn't exist."** A decision living only in a Slack thread cannot be grounded against, so it gets re-invented . differently, by someone who was not in the thread.

**"Start with the 20% of context that answers 80% of the questions."** Trying to document everything first is how knowledge-base projects die. Write down what people keep re-asking, and let the rest accumulate.

## Honest limits

It carries a **well-understood requirement** to shipped code. It does not tell you whether the requirement is right, and it degrades as the knowledge base goes stale. **Maintaining the vault is the job**, not a chore next to it.

### Related reading

- [How I Built an AI-Driven SDLC with GitHub Copilot and Obsidian](../writing/ai-driven-sdlc-with-github-copilot-and-obsidian.md) . the full post
- [AI-driven SDLC](../systems/ai-driven-sdlc.md) . the system page
- [Spec-first development with AI agents](../learning/spec-first-development-with-ai-agents.md)
- [Hire an AI-assisted SDLC engineer on Long Island](../why-hire/ai-sdlc-engineer-long-island.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity. **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
