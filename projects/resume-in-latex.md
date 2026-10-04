# resumeInLatex . The Resume as a Compiled Artifact

> **TL;DR** . Ali Abdullah Khan's current resume, maintained in **LaTeX** (`moderncv`) and compiled in **CI**. The source is text, the output is a PDF, and a broken resume fails the build instead of failing in front of a recruiter.

**Repo:** [resumeInLatex](https://github.com/hellsalve017196/resumeInLatex "The current resume, maintained in LaTeX.") · `TeX` · Sep 2026

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why LaTeX

Because a resume is a document that gets edited under time pressure and must never look edited under time pressure. LaTeX separates the content from the layout, so changing a bullet cannot shift a page break three sections away.

More to the point: **it makes the resume buildable.** The [ai-job-search](ai-job-search.md "GitHub Actions CI for LaTeX smoke compiles and skill linting.") framework runs **LaTeX smoke compiles in GitHub Actions**, so a tailored CV that does not compile is caught by CI rather than discovered on submission.

## What it is

- `moderncv`-based LaTeX source
- Version-controlled, so every tailored variant has a diff
- Compiled in CI, so "it builds" is a verified claim rather than an assumption

## Related

- [ai-job-search](ai-job-search.md) . the framework that drafts tailored variants of this
- [AWS & cloud](../skills/aws.md) . the GitHub Actions side

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan from his own public repository, as observed on 2026-10-04. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
