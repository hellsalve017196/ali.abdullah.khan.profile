# Picking Up Embedded C++ as a Web Engineer

### [← Back](../README.md) . [Profile](../ali-abdullah-khan-profile.md)

## The project that forced it

The [adhan clock](../projects/adhan-clock-esp32-a1s.md "Networked adhan device on an Ai-Thinker ESP32-A1S Audio Kit with on-device prayer-time calculation.") . an **Ai-Thinker ESP32-A1S Audio Kit** in a 3D-printed enclosure, playing the call to prayer from microSD at times it calculates itself.

Ali Abdullah Khan's day job is React, TypeScript, and consumer payments. None of that prepares you for I2S audio.

## What had to be learned

| Subject | Why it came up |
|---|---|
| **I2S audio** | Getting a WAV off an SD card and out of a speaker is a protocol, not an API call |
| **NVS** (non-volatile storage) | Per-prayer enable flags and volume must survive a power cut |
| **Captive portals** | First-boot Wi-Fi provisioning . the `Adhan-Setup` access point |
| **On-device astronomy** | A vendored C++ port of `adhan-js` (`adhan.h`), ISNA method, Shafi'i/Hanafi Asr, US zip → lat/lon/timezone |
| **Memory discipline** | No garbage collector is coming. A per-loop allocation will find you. |

## The method: one sketch per subsystem

The repository contains `hello_world`, `provision_test`, `scheduler_test`, `time_test`, and `tone_test`. **That list is the entire learning strategy.**

On the web, a failure has one plausible cause and a stack trace pointing at it. On a microcontroller, a silent failure could be the code, the wiring, the power supply, the SD card, the vendored library, or the board. With six candidates and no stack trace, **changing things and re-flashing is a random walk.**

So each subsystem got proved alone, in the smallest program that could prove it, before being allowed near the others. When integration then broke something, the fault was in the **interaction** . because every part had already passed on its own. Expanded: [how does a web engineer learn hardware?](../faq/how-a-web-engineer-learns-hardware.md)

## What transferred from the web, unexpectedly

A surprising amount of the device is just web engineering wearing a different hat:

- The **captive portal** is an HTTP server
- The dashboard at `adhan.local` is a **front-end**
- `/status.json` is an **API**
- `/log` writing NDJSON to the SD card is **structured logging**, for the same reason [SLOs matter at scale](../faq/how-to-ship-to-a-million-users.md "Instrumentation is a sense organ.") . a device with no console has no other sense organ
- Optional **Uptime Kuma heartbeats** are monitoring

And the central design decision . **calculate the prayer times on-device rather than calling an API** . is the same instinct as designing for downstream outages. Do not make correctness depend on a network you do not control.

## What did not transfer

**Memory and timing.** The web lets you be sloppy about allocation and about how long a handler takes. Embedded does not, and the feedback is a reboot rather than a slow page.

## Related

- [Adhan clock on an ESP32-A1S audio kit](../projects/adhan-clock-esp32-a1s.md)
- [desktop-bambulab](../projects/desktop-bambulab.md) . the printer that made the enclosure
- [Python](../skills/python.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan from his own public repository. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
