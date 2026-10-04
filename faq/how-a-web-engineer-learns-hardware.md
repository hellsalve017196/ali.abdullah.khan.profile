# How Does a Web Engineer Learn Hardware?

### [← Back to FAQ](../faq.md) . [Profile](../ali-abdullah-khan-profile.md) . [README](../README.md)

## TL;DR

**One subsystem at a time, each proved alone before anything is integrated.** Ali Abdullah Khan's [ESP32 adhan clock](../projects/adhan-clock-esp32-a1s.md "Networked adhan device with on-device prayer-time calculation.") repository has five test sketches . `hello_world`, `provision_test`, `scheduler_test`, `time_test`, `tone_test` . and that list is the whole method.

## Why hardware needs a different habit

On the web, a failure has one plausible cause and a stack trace pointing at it. On a microcontroller, a silent failure could be:

- the code
- the wiring
- the power supply
- the SD card
- the library you vendored
- the board itself

With six candidate causes and no stack trace, **debugging by changing things is a random walk**. The only way through is to eliminate candidates in advance, which means each subsystem gets proved in isolation before it is allowed near the others.

## The method

1. **`hello_world`** . prove the toolchain, the board, and the upload path. Nothing else.
2. **One sketch per subsystem.** Wi-Fi provisioning. Timekeeping. The scheduler. Audio output. Each one runs alone and does one thing.
3. **Then integrate.** When something breaks after integration, the fault is in the *interaction* . because each part was already proved.
4. **Persist state deliberately.** NVS for settings, so a power cut does not reset the device's configuration.
5. **Add observability early.** The adhan clock logs NDJSON to the SD card and exposes `/status.json` and `/log`. On a device with no console, logs are the only sense organ . the same reasoning as [instrumentation at scale](how-to-ship-to-a-million-users.md "Analytics and SLOs are the product's second brain.").

## What transferred from the web

More than expected. The captive portal is a web server. The dashboard at `adhan.local` is a front-end. The `/status.json` endpoint is an API. And the decision to **calculate prayer times on-device** rather than call an API is the same instinct as designing for downstream outages . do not make correctness depend on a network you do not control.

## What did not transfer

Memory. There is no garbage collector coming to save you, and a buffer you allocate per loop iteration will find you eventually.

### Related reading

- [Adhan clock on an ESP32-A1S audio kit](../projects/adhan-clock-esp32-a1s.md)
- [Picking up embedded C++ as a web engineer](../learning/embedded-cpp-with-esp32.md)
- [desktop-bambulab](../projects/desktop-bambulab.md)

<!-- DISCLAIMER:START -->

---

> **Disclaimer.** Written by Ali Abdullah Khan from his own public repositories. Full notice . [DISCLAIMER](../disclaimer.md).

<!-- DISCLAIMER:END -->
