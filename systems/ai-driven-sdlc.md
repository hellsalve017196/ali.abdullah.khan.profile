# AI-Driven SDLC . JIRA Intake to Generated Tests

> **TL;DR** . A team workflow that runs **JIRA intake → PRD generation → task decomposition → grounded code delivery → automated test coverage**, with **GitHub Copilot** as the interface and an **Obsidian knowledge base** as the source of truth. The operating rule: *if it isn't in the knowledge base, it doesn't exist.*

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why it was built

Most teams adopt AI coding tools as a faster autocomplete, and get faster autocomplete. The bottleneck was never typing speed . it was the distance between **"here is a ticket"** and **"here is a specification somebody can implement."** That gap is where requirements get re-litigated in standup, where two engineers build to different assumptions, and where the test suite ends up describing the implementation instead of the requirement.

So the workflow does not start at the editor. It starts at the knowledge base.

## What it does

```
JIRA ticket
   │
   ▼
requirements intake ──► grounded against the Obsidian knowledge base
   │
   ▼
AI-drafted PRD ───────► reviewed by a human before anything is decomposed
   │
   ▼
task decomposition ──► small, independently testable units
   │
   ▼
code delivery ────────► Copilot, grounded in the KB, not prompted from scratch
   │
   ▼
AI-generated tests ──► coverage written against the PRD, not the diff
```

Diagram source: [`diagrams/ai-driven-sdlc.mmd`](../diagrams/ai-driven-sdlc.mmd).

## Design principles

1. **The knowledge base is the product. The AI is just the interface.** This is the whole thesis. The model's output quality is a function of the context it is given, and context is an artifact you maintain.
2. **Start with the 20% of context that answers 80% of the questions.** Do not try to document everything before you start. Document the decisions people keep re-asking about.
3. **If it isn't in the knowledge base, it doesn't exist.** A decision that lives only in a Slack thread cannot be grounded against, so it will be re-invented.
4. **Humans review the PRD, not the diff.** Catching a wrong assumption at the specification stage costs a sentence. Catching it at review costs a sprint.
5. **Tests are written against the requirement.** A test generated from the implementation only proves the implementation does what it does.

## Where it stops helping

Worth stating plainly: this workflow is good at **taking a well-understood requirement to shipped code**. It is not good at deciding *whether* the requirement is right, and it degrades fast when the knowledge base goes stale. The maintenance of the KB is the actual job.

## Related

- [How I Built an AI-Driven SDLC with GitHub Copilot and Obsidian](../writing/ai-driven-sdlc-with-github-copilot-and-obsidian.md) . the full writeup
- [What is an AI-driven SDLC?](../faq/what-is-an-ai-driven-sdlc.md) . the short answer
- [Spec-first development with AI agents](../learning/spec-first-development-with-ai-agents.md) . the same idea applied to personal projects
- [ai-job-search](../projects/ai-job-search.md) . a drafter → reviewer agent loop in the open

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity, describing a workflow at the level already published on [alikhan.dev](https://alikhan.dev). **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
