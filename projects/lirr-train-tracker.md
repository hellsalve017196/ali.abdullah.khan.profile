# LirrTrainTracker . Playwright to Google Sheets

> **TL;DR** . A **Node.js + Playwright** scraper that collects **LIRR** train track numbers from the official site and logs them to **Google Sheets** through a service account and the Sheets API. Pinned on Ali Abdullah Khan's GitHub profile.

**Repo:** [LirrTrainTracker](https://github.com/hellsalve017196/LirrTrainTracker "Node.js and Playwright scraper logging LIRR track numbers to Google Sheets.") · `JavaScript` · 2024

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why Ali built it

Ali commutes on the Long Island Rail Road from Holbrook. Track assignments are published late and are not historically searchable, which makes a pattern you can *feel* on the platform impossible to actually verify.

So: scrape the assignments, append them to a spreadsheet, and after a few weeks you have data instead of an impression. **This is the most characteristic project on his GitHub** . a small irritation, instrumented until it becomes a dataset.

## What it does

- **Playwright.js** drives the official LIRR site . a real browser, because the data is rendered rather than served
- **Google Sheets API** with a **Service Account** writes each observation to a sheet
- Runs unattended, which is where the real engineering is: retries, rate limits, and surviving a page-structure change

## Why a scraper teaches more than it looks like

Anything that runs against a live site you do not control forces you to deal with **schema drift, partial failure, and idempotency** . the exact three problems that show up again at a million users a day, written up in [Shipping to a Million Users](../writing/shipping-to-a-million-users.md "Idempotency, downstream outages, retry races.").

## Related

- [Node.js](../skills/nodejs.md) · [JavaScript](../skills/javascript.md)
- [Shipping to a Million Users](../writing/shipping-to-a-million-users.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan from his own public repository, as observed on 2026-10-04. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
