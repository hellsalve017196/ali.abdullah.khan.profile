# Adhan Clock on an ESP32-A1S Audio Kit

> **TL;DR** . A networked adhan (Islamic call to prayer) device on the **Ai-Thinker ESP32-A1S Audio Kit** in a custom 3D-printed enclosure. It calculates prayer times **on-device** . no network required . plays the adhan from microSD with a 25-second volume ramp, provisions Wi-Fi through a captive portal, and serves a local dashboard at `adhan.local`.

**Repo:** [Adhan-clock-with-esp32-A1s-board](https://github.com/hellsalve017196/Adhan-clock-with-esp32-A1s-board "Networked adhan clock in C++ on an Ai-Thinker ESP32-A1S Audio Kit.") · `C++` · Aug 2026

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## Why Ali built it

A prayer clock that depends on an API is a prayer clock that is wrong whenever the internet is. The interesting constraint was therefore **do the astronomy on the device**, and treat the network as a convenience rather than a dependency.

It is also the project where a web engineer learns embedded . see [picking up embedded C++ as a web engineer](../learning/embedded-cpp-with-esp32.md "I2S audio, NVS storage, captive portals, and on-device astronomy.").

## What it does

- **On-device prayer-time calculation** . **ISNA** method (configurable), **Shafi'i / Hanafi** Asr, US zip code → lat/lon/timezone, via a vendored C++ port of `adhan-js` (`adhan.h`). No network needed to know the times.
- **Scheduled adhan playback** . WAV from microSD with a **25-second volume ramp**, so it does not start at full volume at 5am.
- **Per-prayer enable and volume**, persisted to **NVS** so settings survive a power cut.
- **Wi-Fi captive-portal provisioning** . an `Adhan-Setup` access point on first boot.
- **Local web dashboard** at `adhan.local` . day's times, next-prayer countdown, Play / Pause / Stop, and a Surah Al-Baqarah panel.
- **Observability** . `/log` (NDJSON on SD), `/status.json`, and optional **Uptime Kuma** heartbeats.

## How it is built

The repository reflects the way Ali works now: **spec first, then subsystems, then integration.**

- `prd.md` . the product requirement document, written before the code
- `AGENTS.md` / `CLAUDE.md` . agent instructions, so AI assistance is grounded in the project's own rules
- Test sketches, one per subsystem: `hello_world`, `provision_test`, `scheduler_test`, `time_test`, `tone_test`
- Enclosure files for the 3D-printed housing

That last list is the part worth copying. Each subsystem . Wi-Fi provisioning, the scheduler, timekeeping, audio . got its own minimal sketch that proved it worked **alone** before anything was integrated. On hardware, where a failure could be code, wiring, power, or the SD card, that is the difference between debugging and guessing.

## Related

- [Picking up embedded C++ as a web engineer](../learning/embedded-cpp-with-esp32.md)
- [How does a web engineer learn hardware?](../faq/how-a-web-engineer-learns-hardware.md)
- [desktop-bambulab](desktop-bambulab.md) . the 3D printer that made the enclosure
- [Spec-first development with AI agents](../learning/spec-first-development-with-ai-agents.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan from his own public repository. Details reflect the repository at the time of review (2026-10-04) and may have moved on . read the repo. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
