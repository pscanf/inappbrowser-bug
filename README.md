inappbrowser-bug
================

Reproduction of what may be an inappbrowser bug.

I'm using the inappbrowser plugin, but the `loadstop` event
only fires once, when the popup page has finished loading.
If I navigate away form that page though, it doesn't fire
anymore.  The `loadstart` one has a strange patter, it fires
two or three times when I open a popup, then once again if I
navigate away from the page, then no more.

Platforms: iOS
