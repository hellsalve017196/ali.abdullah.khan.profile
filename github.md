# GitHub Knowledge Base — hellsalve017196

> Source: github.com/hellsalve017196 · Analyzed: 2026-10-04

## Profile

| Field | Value |
|---|---|
| Username | `hellsalve017196` |
| Name | Ali Abdullah Khan (he/him) |
| Organization | JP Morgan & Chase |
| Location | Holbrook, New York |
| Email | abdullah017196@gmail.com |
| Website | [alikhan.dev](https://www.alikhan.dev) |
| LinkedIn | [in/ali-abdullah-khan-636a919a](https://www.linkedin.com/in/ali-abdullah-khan-636a919a) |
| Repositories | 72 public |
| Followers / Following | 3 / 3 |
| Achievements | Pull Shark, Arctic Code Vault Contributor |
| Member since | ~2014 (13 years of history) |
| Contributions (last year) | 36 — bursts in Jul, Aug, Sep, Oct 2026 |

**Pinned repos:** `bandwidth_monitoring_python` (Python, ★1), `flappy_bird_in_javascript` (JavaScript, ★1), `LirrTrainTracker` (JavaScript)

---

## Tech Stack Summary

| Layer | Technologies |
|---|---|
| **Languages** | JavaScript (~20 repos), PHP (~12), HTML/CSS (~12), Python (~7), TypeScript (~5), Java, C++, TeX, Astro |
| **Frontend** | Astro 5, Tailwind CSS v4, Angular 6+, React (learning), Ionic/Cordova, Canvas API, Web Workers |
| **Backend** | Node.js, Express, PHP (CodeIgniter), Python (Flask, Django), Java Spring, Redis, Firebase |
| **Embedded / Hardware** | ESP32-A1S (Ai-Thinker Audio Kit), ESP-IDF-style C++, I2S audio, NVS, captive portal Wi-Fi |
| **Automation / Scraping** | Playwright.js, Google Sheets API, Chrome extensions |
| **AI Tooling** | Claude Code agent frameworks, `.agents/skills`, drafter-reviewer pipelines |
| **DevOps / Deploy** | Cloudflare Pages, VPS (rsync), GitHub Actions (CI for LaTeX compile + skill lint) |
| **Docs / Other** | LaTeX (moderncv), Markdown content collections, 3D printing (Bambu Lab) |

---

## Flagship / Recent Projects (2024–2026)

### 1. Adhan-clock-with-esp32-A1s-board `C++` · Aug 2026
Networked adhan (Islamic call to prayer) device on the **Ai-Thinker ESP32-A1S Audio Kit** in a custom 3D-printed enclosure.
- **On-device prayer-time calculation** — ISNA method (configurable), Shafi'i/Hanafi Asr, US zip → lat/lon/timezone via a vendored C++ port of adhan-js (`adhan.h`); no network needed for times
- Scheduled adhan WAV playback from microSD with 25-second volume ramp; per-prayer enable + volume persisted to NVS
- **Wi-Fi captive-portal provisioning** (`Adhan-Setup` AP on first boot)
- Local web dashboard at `adhan.local` — day times, next-prayer countdown, Play/Pause/Stop, Surah Al-Baqarah panel
- Observability: `/log` (NDJSON on SD), `/status.json`, optional Uptime Kuma heartbeats
- Repo includes test sketches (`hello_world`, `provision_test`, `scheduler_test`, `time_test`, `tone_test`), enclosure files, `prd.md`, `AGENTS.md`/`CLAUDE.md`

### 2. official_website `Astro` · Aug 2026
Personal portfolio + blog powering **alikhan.dev**.
- **Astro 5 + TypeScript + Tailwind CSS v4**, fully static output
- Light/dark themes, responsive mobile/tablet/desktop
- Blog via **Astro Content Collections** — drop a Markdown file in `src/content/blog/` with frontmatter (title, excerpt, date, tags, draft) and it auto-publishes; RSS included
- Deploys to **Cloudflare Pages** (migrated from VPS+rsync)

### 3. ai-job-search `TypeScript` · Jul 2026
AI job application framework built on **Claude Code** — evaluates postings, tailors CVs, writes cover letters, preps interviews.
- Slash-command workflow: `/setup` → `/scrape` → `/apply <url>` with fit scoring, LaTeX CV drafting, and a reviewer-agent critique loop
- Structure: `.agents/skills`, `.claude`, `cv`, `cover_letters`, `job_scraper`, `templates`, `tools`, `upskill`, `tests`
- CI: GitHub Actions for LaTeX smoke compiles + skill linting

### 4. desktop-bambulab `Python` · Jul 2026
Desktop monitor for a **Bambu Lab 3D printer** (Casio-style display). Python (`show.py`, `requirements.txt`), includes 3D-print files and a `fixprinter.sh` helper.

### 5. taka_koi · Sep 2026
Household expense tracker — early-stage (PRD, `product_requirement.md`, `screen_for_app.md`, `design_discussion.pen` design file). Spec-first, not yet implemented.

### 6. neetcode-submissions `JavaScript` · Aug 2026
NeetCode.io problem submissions — **Data Structures & Algorithms** (e.g., Dijkstra) + **SQL** tracks.

### 7. resumeInLatex `TeX` · Sep 2026
Current resume maintained in LaTeX.

### 8. LirrTrainTracker `JavaScript` · 2024 (pinned)
**Node.js + Playwright.js** scraper that collects LIRR train track numbers from the official site and logs them to **Google Sheets** (Service Account + Sheets API).

### 9. chatroom-socket_io- `HTML` · 2024
Realtime chatroom with Socket.IO.

### 10. chai-aur-react `JavaScript` · 2024
Follow-along code for the "Chai aur React" YouTube series (React learning).

### 11. space_invaders `HTML` · 2025
Browser Space Invaders game.

### 12. remote_dom_controll `JavaScript` · 2023
Remote DOM control experiment.

---

## Full Repository Inventory (72)

### 2026 (active era)
| Repo | Lang | Notes |
|---|---|---|
| ali.abdullah.khan.profile | — | Profile/KB repo (this project) |
| resumeInLatex | TeX | Current resume |
| taka_koi | — | Household expense tracker (spec stage) |
| Adhan-clock-with-esp32-A1s-board | C++ | ESP32 adhan clock (flagship) |
| neetcode-submissions | JavaScript | NeetCode DSA + SQL |
| official_website | Astro | alikhan.dev portfolio/blog |
| ai-job-search | TypeScript | Claude Code job-search framework |
| desktop-bambulab | Python | Bambu Lab printer desktop monitor |

### 2023–2025
| Repo | Lang | Notes |
|---|---|---|
| space_invaders | HTML | Browser game |
| chai-aur-react | JavaScript | React learning series |
| intro-codespace-gitpod-hellsalve017196 | — | Codespaces/Gitpod intro |
| chatroom-socket_io- | HTML | Socket.IO chatroom |
| LirrTrainTracker | JavaScript | LIRR scraper → Google Sheets (pinned) |
| remote_dom_controll | JavaScript | Remote DOM control |

### 2020–2021
| Repo | Lang | Notes |
|---|---|---|
| cron_to_do | PHP | Cron-based todo |
| stock_price | — | Stock price tool |
| operator_bot | — | Bot experiment |
| bangla-programming-resources | Python | Bangla programming resource list |
| canvas_drawing | JavaScript | Canvas drawing |
| linuxSession | Python | Linux session tool |
| TypeScript_Playground | TypeScript | TS experiments |
| todoListOnSprin | Java | Spring Boot todo |
| current_situation | — | — |
| Djakstras_Algorithm | JavaScript | Dijkstra implementation |
| flappy_bird_in_javascript | JavaScript | ★1, pinned |
| snake_game | JavaScript | HTML5 snake |

### 2018–2019
| Repo | Lang | Notes |
|---|---|---|
| WebWorkerExample | HTML | Web Workers demo |
| Angular_firebase_CRUD | TypeScript | Angular + Firebase CRUD |
| angular-boilerplate | TypeScript | Angular starter |
| get_post_in_angular6 | TypeScript | Angular 6 HTTP |
| login_help_chrome_extension | JavaScript | Chrome extension |
| redisExpress | HTML | Redis + Express |
| nezz_rest_api / nezz_rest_apis | HTML | REST API projects |
| nezz_web_admin | PHP | Web admin panel |

### 2016–2017
| Repo | Lang | Notes |
|---|---|---|
| recapcha | Python | reCAPTCHA integration |
| dijifi_orders | PHP | Order management |
| ftp_with_flask | Python | Flask FTP |
| live_stream_canvas | JavaScript | Canvas live streaming |
| firebase_chat_app | JavaScript | Firebase chat |
| responsive_email_experiment | HTML | Responsive email |
| bookmark_google_chrome_extention | JavaScript | Bookmark Chrome ext |
| bandwidth_monitoring_python | Python | ★1, pinned — bandwidth monitor |
| FileRead-Api-for-javascript | HTML | FileReader API |
| jharu_server | — | Server for jharu |
| priyojon / priyojon_mobile | PHP / JS | Web + mobile app |
| django_todo | HTML | Django todo |
| todo_list / indexdb_todolist | HTML / JS | Todo variants (IndexedDB) |
| karbar | — | — |
| babyvac / babyvac_app | PHP / JS | Vaccination tracker apps |
| multiple-file-upload-codeigniter | PHP | CodeIgniter uploads |
| lighthouse / online_laundry | CSS | Front-end designs |
| class_management / office_automation / intactstore | PHP | Management systems |
| villans | JavaScript | — |

### 2014–2015 (early era)
| Repo | Lang | Notes |
|---|---|---|
| ng-cordova | JavaScript | Forked — Cordova/PhoneGap services |
| unigig | PHP | — |
| photo | JavaScript | — |
| express_mvc | JavaScript | Express MVC pattern |
| db.js | JavaScript | Forked — IndexedDB wrapper |
| sprite_image / canvas_movement | JavaScript | Canvas experiments |
| sunglass_design | HTML | Front-end design |
| jharu | JavaScript | — |
| singletop | PHP | — |
| ionic-projects | JavaScript | Ionic mobile apps |
| practive | — | — |

---

## Journey / Patterns

- **2014–2016 — PHP & hybrid mobile era:** CodeIgniter apps, management systems (class/office/laundry), Ionic/Cordova mobile, first Chrome extensions.
- **2017–2019 — Python & modern JS:** Flask/Django, Firebase realtime apps, Angular 6+ with TypeScript, Redis.
- **2020–2021 — Algorithms & games:** Canvas games (flappy bird, snake), Dijkstra, Java Spring, TypeScript playground; COVID-era learning projects.
- **2023–2024 — Node automation:** Playwright.js scraping (LIRR tracker), Socket.IO, React learning.
- **2025–2026 — Hardware, AI workflows & polished web:** ESP32 embedded C++ with on-device astronomy, 3D printing, Astro 5 static site on Cloudflare Pages, Claude Code agent framework, DSA/SQL interview prep, LaTeX resume pipeline.
- **Consistent traits:** spec/PRD-first on recent projects (`prd.md`, `AGENTS.md`, `CLAUDE.md` in repos), AI-assisted development workflow, long-lived account with periodic deep bursts of activity.

## Contribution Activity (last 12 months)
- **36 contributions** total; concentrated bursts:
  - **Jul 2026** — heaviest (12th, 16th, 22nd, 23rd, 25th, 26th, 28th) → ai-job-search, desktop-bambulab
  - **Aug 2026** — (2nd, 4th, 15th, 24th, 25th, 29th) → official_website, Adhan clock, neetcode
  - **Sep–Oct 2026** — taka_koi, resumeInLatex, profile repo
