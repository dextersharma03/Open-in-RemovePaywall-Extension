# Open with RemovePaywall

## Description

This Chrome extension simplifies accessing paywalled content by adding a convenient context menu option. When you right-click on any webpage, you'll see a new option: "Open this with removepaywall". Selecting this will automatically open the current page's URL through [removepaywall.com](https://www.removepaywall.com) in a new tab, potentially bypassing paywalls.

## Features

* **Seamless Integration:** Adds a context menu item directly to your browser for easy access.
* **One-Click Access:** Open any webpage with RemovePaywall with a single right-click.
* **Paywall Bypass:** Attempts to bypass paywalls using the removepaywall.com service.
* **New Tab:** Opens the RemovePaywall link in a new tab, keeping your original page intact.

## Installation

1.  Download the extension files (you can create these files based on the provided `manifest.json` and `background.js`). Ensure you have the `icons` folder with `icon48.png` and `icon128.png`.
2.  Open Google Chrome and navigate to `chrome://extensions/`.
3.  Enable "Developer mode" in the top right corner.
4.  Click the "Load unpacked" button in the top left corner.
5.  Select the folder containing the extension files (`manifest.json`, `background.js`, and the `icons` folder).

## How to Use

1.  Navigate to any webpage you want to open with RemovePaywall.
2.  Right-click anywhere on the page.
3.  In the context menu that appears, click "Open this with removepaywall".
4.  A new tab will open, loading the current page through the removepaywall.com service.

## Permissions

This extension requests the following permissions:

* `contextMenus`: Allows the extension to add items to the browser's context menu (right-click menu).
* `activeTab`: Allows the extension to access information about the currently active tab, specifically its URL, when the context menu item is clicked.

## Support

For any issues or suggestions, please feel free to [mention your preferred contact method or repository link here if applicable].

## Disclaimer

This extension utilizes the [removepaywall.com](https://www.removepaywall.com) service. The effectiveness of paywall bypassing may vary depending on the website and the methods used by RemovePaywall. Use of this extension is subject to the terms and conditions of the removepaywall.com service. The developers of this extension are not affiliated with removepaywall.com and are not responsible for its functionality or availability.