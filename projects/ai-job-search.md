# ai-job-search . A Claude Code Job-Application Framework

> **TL;DR** . An AI job-application framework built on **Claude Code**. It evaluates postings, tailors CVs, writes cover letters, and preps interviews through a slash-command workflow . `/setup` → `/scrape` → `/apply <url>` . with fit scoring, LaTeX CV drafting, and a **reviewer-agent critique loop**.

**Repo:** [ai-job-search](https://github.com/hellsalve017196/ai-job-search "Claude Code agent framework for evaluating postings, tailoring CVs, and prepping interviews.") · `TypeScript` · Jul 2026

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why Ali built it

Job applications are a pipeline problem disguised as a writing problem. Each posting needs the same five steps in the same order, and doing them by hand means doing step three badly by the fourth application.

The interesting design decision is the **reviewer agent**: one agent drafts, a second one critiques the draft against the posting. That is the same instinct as the [AI-driven SDLC](../systems/ai-driven-sdlc.md "Humans review the PRD, not the diff.") at work . do not trust a single pass, and make the critique step structural rather than optional.

## What it does

- `/setup` . establish the candidate context once
- `/scrape` . pull postings into the repo
- `/apply <url>` . fit scoring, LaTeX CV drafting, cover letter, interview prep

**Structure:** `.agents/skills`, `.claude`, `cv`, `cover_letters`, `job_scraper`, `templates`, `tools`, `upskill`, `tests`.

**CI:** GitHub Actions running **LaTeX smoke compiles** and **skill linting** . because a CV that does not compile is worse than no CV, and an agent skill with a broken frontmatter block fails silently.

## Design principles

1. **Drafter and reviewer are separate.** A single agent grading its own output grades generously.
2. **The CV is a compiled artifact.** LaTeX in, PDF out, CI proves it builds . see [resumeInLatex](resume-in-latex.md).
3. **Skills are linted.** Agent instructions are code, and code gets checked.
4. **Context once, apply many.** The candidate's own facts live in one place.

## Related

- [AI-driven SDLC](../systems/ai-driven-sdlc.md) . the same drafter/reviewer instinct at work
- [Spec-first development with AI agents](../learning/spec-first-development-with-ai-agents.md)
- [resumeInLatex](resume-in-latex.md) · [TypeScript](../skills/typescript.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan from his own public repository, as observed on 2026-10-04. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
