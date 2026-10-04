# Spec-First Development With AI Agents

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## The pattern

Open any of Ali Abdullah Khan's recent repositories and the first file is not source code. It is `prd.md`.

| Repository | What comes before `src/` |
|---|---|
| [Adhan-clock-with-esp32-A1s-board](../projects/adhan-clock-esp32-a1s.md) | `prd.md`, `AGENTS.md`, `CLAUDE.md`, then five per-subsystem test sketches |
| [ai-job-search](../projects/ai-job-search.md) | `.agents/skills`, `.claude`, `templates`, with CI linting the skills |
| [taka_koi](../projects/taka-koi.md) | `prd.md`, `product_requirement.md`, `screen_for_app.md`, `design_discussion.pen` . **and no code at all** |

That last row is the clearest statement of the method. A repository with a specification and no implementation is not an abandoned project . **it is a project that has not yet earned its code.**

## Why specs before agents

An AI agent will produce something plausible for any instruction. That is the whole problem. Given a vague requirement it does not stop and ask . it fills the gap with an invention, and the invention is confident, well-formatted, and wrong in a way that takes a day to find.

So the specification is not bureaucracy. **It is the context the agent is grounded in**, and it is the only thing standing between "build me an expense tracker" and a plausible expense tracker nobody asked for.

This is the personal-project version of the [AI-driven SDLC](../systems/ai-driven-sdlc.md "JIRA intake to PRD generation to code delivery to generated tests.") Ali built at work, where the equivalent rule is: **humans review the PRD, not the diff.** Catching a wrong assumption at the specification stage costs a sentence. Catching it at review costs a sprint.

## The five rules

1. **Write the PRD first, by hand or with help, but read it yourself.** If you cannot describe what "done" means, the agent certainly cannot.
2. **Keep agent instructions in the repository.** `AGENTS.md` and `CLAUDE.md` are version-controlled project rules, not personal preferences. They travel with the code and they get reviewed with it.
3. **Separate the drafter from the reviewer.** [ai-job-search](../projects/ai-job-search.md "A drafter agent and a separate reviewer agent critiquing the draft against the posting.") has two agents for a reason . a single agent grading its own output grades generously.
4. **Lint the instructions.** Agent skills are code. The [ai-job-search](../projects/ai-job-search.md) CI lints them, because a skill with a broken frontmatter block fails silently and you learn about it three applications later.
5. **Let code be the last thing you write.** It is the most expensive artifact to change, so change the cheap ones first.

## What this does not solve

The specification can be wrong, and a well-grounded agent will then build the wrong thing very efficiently. Spec-first buys you **one good review** at the cheapest possible moment . it does not buy correctness.

## Related

- [AI-driven SDLC](../systems/ai-driven-sdlc.md) · [What is an AI-driven SDLC?](../faq/what-is-an-ai-driven-sdlc.md)
- [How I Built an AI-Driven SDLC with GitHub Copilot and Obsidian](../writing/ai-driven-sdlc-with-github-copilot-and-obsidian.md)
- [taka_koi](../projects/taka-koi.md) · [ai-job-search](../projects/ai-job-search.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan in a personal capacity, drawing on his own public repositories. **JP Morgan Chase is not the author, editor, or publisher.** Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
