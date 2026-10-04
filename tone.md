# tone.md . Ali's Writing Pattern

> How **Ali Abdullah Khan** writes: compositional habits, sentence machinery, emphasis
> behaviour, and the house rules a new page in this repository is expected to follow.
>
> This is an analysis of *writing*, not of accuracy. For the factual standing of
> anything quoted here see [`disclaimer.md`](./disclaimer.md) and
> [`proof-sources.md`](./proof-sources.md); for repository structure see
> [`profile.kb`](./profile.kb).

---

## 1. The pattern in one sentence

Ali writes **the compressed middle of an argument**: a one-line thesis stated as a
claim, a short list of the concrete things that justify it, the honest limit of the
claim admitted before anyone asks . and then it stops, because the post was never
trying to be long.

---

## 2. The evidence base, stated up front

This is worth being precise about, because it is the opposite situation from a large
dictated corpus.

| Stratum | What it is | Size |
|---|---|---|
| **Ali's own hand** | The published bio and the six blog posts on [alikhan.dev](https://alikhan.dev/blog/ "Notes on engineering leadership, consumer payments at scale, and AI-assisted development.") . each a **1–2 minute read** | **Small.** Six short posts plus a bio paragraph |
| **Repository house style** | The 61 profile-content pages in this repository (everything except the repo-internal meta docs), written to extend that voice | 31,794 words |
| **Source knowledge bases** | [`profile.md`](./profile.md) and [`github.md`](./github.md) . compiled research notes, written in a neutral analytical register | 2 files |

**The primary stratum is small on purpose.** Ali's blog posts are 1–2 minute reads
with a single idea each, so the measurable signal is in *what he leaves out*. Section 3
describes the habits visible in that stratum. Section 5 describes the house style this
repository extends it with . useful because it is the thing a future edit has to match.

The third stratum is deliberately different: `profile.md` and `github.md` are research
notes, not profile prose, and they are the only files here that use em dashes.

---

## 3. Ali's eight signature habits

### 3.1 The thesis is a sentence, and it comes first

Every post has a line you could put on a slide, and it is near the top rather than
earned at the end:

> **The knowledge base is the product. The AI is just the interface.**

> **Scale changes failure modes, not fundamentals.**

Two sentences, 12 words total, and each one does the work of a paragraph. The pages in
this repository reproduce the habit structurally as a `## TL;DR` or a `> **TL;DR**`
blockquote . **32 occurrences** . so the claim is readable before the evidence.

### 3.2 Numbers that are splits, not scores

His figures are almost never achievements. They are **proportions that reframe a
problem**:

- **30% / 70%** . what automated accessibility audits catch, versus what needs a human
- **20% / 80%** . the share of context that answers most of the questions
- **~1M daily users** . not a brag, a design constraint

Compare the figure a marketing page would reach for. `30%` is a disappointing number
and he leads with it, because the interesting claim is about the **other 70%**.

### 3.3 Define by negation . "X, not Y"

The most frequent single move in his prose. He fixes a meaning by ruling out the
adjacent thing it gets confused with:

> Scale changes **failure modes, not fundamentals**.

> Accessibility is **an engineering discipline, not a compliance tax**.

> A flag you cannot turn off quickly **is not a flag**.

> It is a workflow, **not a tool**.

Most of his precision is done this way rather than with qualifiers.

### 3.4 The limit admitted before it is asked

Structural, not modest. Each piece contains a paragraph that gives away the weakness
of its own argument, and that paragraph is usually the most credible one on the page:

> It carries a well-understood requirement to shipped code. It does not decide whether
> the requirement is right, and it degrades as the knowledge base goes stale.
> **Maintaining the vault is the job.**

The whole of [`why-you-should-not-hire-ali.md`](./why-you-should-not-hire-ali.md) is
this habit taken to a page length.

### 3.5 The process answer to a technical question

Asked how a technical outcome was achieved, he answers with a **process change** and
says so explicitly:

> The move that actually closed it was putting accessibility in the **definition of
> done**.

> The fix is not a tool . it is the definition of done.

The same shape recurs: the tool was not the lever, the ordering was.

### 3.6 Failure framed as a design input

Not confession, but specification. He names what will break and treats it as the
requirement:

> idempotency, downstream outages, retry races

> what breaks first

> rollback as a **designed feature**, not an emergency procedure

Three nouns doing the work a paragraph of risk prose would do badly.

### 3.7 The short declarative close

A paragraph ends on a sentence of five to nine words that has no hedge in it:

> Excitement during a release is a defect.

> Mentorship is not a meeting.

> Boring is the goal.

**25.6% of sentences in this repository are 8 words or shorter** . that band exists to
carry closers like these.

### 3.8 One question to the reader, maximum

He asks very few. Across 449 prose lines in this repository there are **23 question
marks**, and most of them are inside a list of review questions rather than rhetorical
asides. The questions are *tools* . "Who owns this state?", "Where does focus go after
this?", "What happens on the second click?" . not invitations.

---

## 4. Sentence machinery

Measured over **590 sentences** of body prose in this repository.

| | Value |
|---|---|
| Mean length | **18.3 words** |
| Median | **16 words** |
| p25 / p75 / p90 | 8 / 24 / 34 |
| Longest | 131 words (a table-adjacent run-on; an outlier) |

| Band | Share |
|---|---|
| ≤ 8 words | **25.6%** |
| 9–15 words | 23.9% |
| 16–25 words | **29.8%** |
| 26–40 words | 15.8% |
| > 40 words | 4.9% |

The distribution is **bimodal by argument**, not by breath: a quarter of sentences are
8 words or shorter and do the asserting, while the 16–25 band does the qualifying. He
does not write long sentences to sound considered . a long sentence here is almost
always a list that has not been pulled out into bullets yet.

Recurring sentence shapes:

- **Claim then colon then specifics** . *"Two reasons, and the second is the worse one."*
- **Negation pair** . *"X, not Y."* See §3.3.
- **Parenthetical honesty** . *"(and the honest version is cheaper)"* . the aside is where the hedge lives, so the main clause stays clean.
- **Imperative rule** . *"Encode the rule, delete the step."* Used to close a section.
- **The "worth saying plainly" preface** . a flag that the next sentence is the inconvenient one.

---

## 5. Page architecture

How a page in this repository is assembled, measured over 2,116 non-blank lines.

| Line type | Share |
|---|---|
| List items | **32.3%** |
| Headings | **22.4%** |
| Prose | 21.2% |
| Table rows | 7.3% |
| Blockquotes | 4.3% |

**Headings are 22.4% of all lines** . 61 `H1`, 317 `H2`, 97 `H3` . which means the
median section is a few lines long. Pages are short and heavily sectioned.

Structural habits:

1. **Numbered sections on entry points.** 55 `H2`s carry an explicit number, so `README.md` and the mirror profile read as ordered agendas (`## 7. Skills`).
2. **`## TL;DR` or `> **TL;DR**` first.** 32 occurrences. The claim precedes the evidence on every system, project, FAQ and why-hire page.
3. **Question headings.** 16 headings are literal questions . the shape used throughout `faq/`.
4. **Back-navigation top and bottom.** `### [← Back]` on every content-directory page, enforced by [`scripts/check-structure.js`](./scripts/check-structure.js).
5. **Tables for comparison, lists for argument.** A table appears when the point is "these three differ"; a bulleted list appears when the point is "these three support".
6. **The `## Related` / `### Related reading` tail.** Every page ends by pointing somewhere else. 997 markdown links across 31,794 words . **3.14 per 100 words**.
7. **Link tooltips as a second sentence.** 189 markdown links and 68 HTML `title=` attributes carry hover text, used to add context the sentence did not have room for.
8. **The managed disclaimer block closes every page.** Never hand-edited outside the markers.

---

## 6. Punctuation and emphasis

- **No em dashes in prose.** Zero across all 61 profile-content pages. The substitute is a **spaced period** . `X . Y` . which occurs **679 times** and is the most recognisable visual tic of the repository. (The two source knowledge bases, `profile.md` and `github.md`, do use em dashes; they are research notes, not profile prose.)
- **Bold is the only emphasis.** 1,061 bold spans, **3.34 per 100 words**. Italics are reserved for post titles, the blog tagline, and a quoted phrase.
- **Bold lands on the claim, not on the adjective.** `**failure modes, not fundamentals**`, `**definition of done**`, `**~1M daily users**`. If you cannot put the bolded span on a slide by itself, it is bolded wrong.
- **Backticks for real identifiers.** `prd.md`, `AGENTS.md`, `adhan.local`, `/status.json`, `src/content/blog/`. Not for emphasis on proper nouns.
- **Straight quotes and apostrophes** throughout.
- **`~` for approximate figures** . `~1M`, `~4 years`. The tilde is doing honest work and should not be dropped.

---

## 7. Self-reference

**285 mentions of "Ali" across 31,794 words . 0.90 per 100 words**, which is low for a
personal-brand repository and deliberate.

The naming rules:

- **"Ali Abdullah Khan"** in full on first mention per page and in every heading.
- **"Ali"** thereafter. Never "Mr. Khan", never an initial.
- **First person is avoided** on profile pages and used only inside the `writing/` pages, which are notes on posts he wrote in his own voice.
- **Pronouns are used normally.** He does not substitute his own name where a pronoun fits . the opposite habit from a heavily SEO-optimised profile, and the reason the pages read as prose rather than as keyword scaffolding.

---

## 8. Writing in Ali's pattern

To match the voice:

- Open with the thesis as a **claim**, in one sentence, bolded.
- Give a **proportion**, not a score, where a number is wanted . and lead with the unflattering half of it.
- Define by ruling out: **"X, not Y."**
- Admit the limit of the argument in its own paragraph, before anyone asks.
- When the question is technical, check whether the honest answer is **a process change** . and if it is, say so.
- Name the failure modes as nouns and treat them as requirements.
- Close a section on a short declarative with no hedge.
- Use `X . Y` where a dash is wanted. **Never an em dash.**
- Bold only what would survive alone on a slide.
- Put the second sentence in the link tooltip rather than in a subordinate clause.
- Point somewhere else at the end. Every page has a `## Related`.
- Keep the median sentence near 16 words and let a quarter run to 8 or fewer.

To avoid the failure modes of this register:

- **Do not let "X, not Y" become every sentence.** It is a precision tool, not a rhythm.
- **Do not inflate a proportion into a benchmark.** The 30/70 split is one program's observation and the pages say so . keep the hedge.
- **Do not bold a whole clause.** If three spans are bolded in one sentence, none of them is emphasised.
- **Do not write the limit paragraph as false modesty.** It has to name a real weakness or it reads as a humblebrag.
- **Never drop the employer notice** from a page that names JP Morgan Chase. `check:structure` fails the build if you do, and that check exists for a reason.

---

## 9. Quick identification key

| Signal | Reading |
|---|---|
| Spaced period `X . Y` instead of a dash | profile prose, house style |
| Em dash present | a source knowledge base (`profile.md`, `github.md`), not profile prose |
| Opens with `## TL;DR` or `> **TL;DR**` | any system, project, FAQ or why-hire page |
| A proportion where a score was expected | Ali's hand |
| A paragraph that undercuts the page's own argument | Ali's hand |
| "X, not Y" doing the definition | Ali's hand |
| First person singular | a `writing/` page, where his own voice is the point |
| Numbered `## N.` sections | an entry point (`README.md`, the mirror profile) |
| Neutral analytical register, tables everywhere, no persuasion | `profile.md` / `github.md` / `profile.kb` |

---

_Analysis of writing pattern only. Structure: [`profile.kb`](./profile.kb). Factual
standing: [`disclaimer.md`](./disclaimer.md) and [`proof-sources.md`](./proof-sources.md)._
