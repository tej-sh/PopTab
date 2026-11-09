# PopTab

Pop the current tab out into its own window with one click or one key. No dragging.

PopTab **moves** the tab, exactly like dragging it out of the tab bar. The page does not reload or reopen, so videos, scroll position and half-filled forms stay as they are.

## Features

- Toolbar button: click it to pop the current tab out
- Keyboard shortcut: `Alt+Shift+D` (changeable)
- Right-click menu: "Pop out tab to new window"
- Moves the real tab, so nothing reloads

## Install

Works in Chrome, Edge, Brave, Helium and other Chromium browsers.

1. Download or clone this repo.
2. Open `chrome://extensions` (or `helium://extensions`, `edge://extensions`).
3. Turn on **Developer mode**.
4. Click **Load unpacked** and select the folder that contains `manifest.json`.
5. Optional: pin the extension from the puzzle-piece menu.

## Usage

Open any page and do one of these:

- Click the PopTab icon
- Press `Alt+Shift+D`
- Right-click the page and choose **Pop out tab to new window**

## Change the shortcut

1. Go to `chrome://extensions/shortcuts`.
2. Find PopTab and click the shortcut box.
3. Press the keys you want.

## Notes

- If the tab is the only one in its window, it looks like nothing happened, because the old window closes and the tab lands in a new one.
- It does not work on browser pages like `chrome://` or the Chrome Web Store.
- Firefox is not supported yet. It needs a small manifest change.

## How it works

The extension calls `chrome.windows.create({ tabId })` on the active tab, which moves the existing tab into a new window.

## License

MIT
