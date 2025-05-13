// background.js

// Define a constant for the context menu ID for easier reference and to avoid typos.
const CONTEXT_MENU_ID = "openWithRemovePaywall";

/**
 * Sets up the context menu for the extension.
 * It first removes all existing context menus created by this extension
 * to ensure a clean state, then creates the desired context menu item.
 */
function setupContextMenu() {
  // Remove all context menu items added by this extension.
  // This is important to prevent duplicates or issues if the extension is reloaded or updated.
  chrome.contextMenus.removeAll(() => {
    // This callback function is executed after all context menus have been removed.
    if (chrome.runtime.lastError) {
      // Log an error if removing menus failed, though this is uncommon.
      console.error(`Error removing existing context menus: ${chrome.runtime.lastError.message}`);
      // We might not want to proceed if removal failed, or handle it gracefully.
      // For now, we'll still try to create, but this log is important.
    }

    // Now, create the new context menu item.
    chrome.contextMenus.create({
      id: CONTEXT_MENU_ID,
      title: "Open this with removepaywall", // The text that will appear in the context menu
      contexts: ["page"] // Show this option only when right-clicking on a page's content
    });

    // Check if an error occurred during the creation of the context menu.
    if (chrome.runtime.lastError) {
      console.error(`Error creating context menu: ${chrome.runtime.lastError.message}`);
    } else {
      // Optional: Log success for easier debugging.
      console.log("Context menu item 'Open this with removepaywall' created/updated successfully.");
    }
  });
}

// Listener for when the extension is first installed or when it is updated.
chrome.runtime.onInstalled.addListener((details) => {
  // details.reason can be "install", "update", or "chrome_update".
  console.log(`RemovePaywall extension event: ${details.reason}. Setting up context menu.`);
  setupContextMenu();
});

// Listener for when the browser starts up.
// This is important because service workers can be terminated and restarted.
// We need to ensure the context menu is re-established if it was lost.
chrome.runtime.onStartup.addListener(() => {
  console.log("RemovePaywall extension started up. Setting up context menu.");
  setupContextMenu();
});

// Listener for when a context menu item (created by this extension) is clicked.
chrome.contextMenus.onClicked.addListener((info, tab) => {
  // Check if the clicked menu item is the one we're interested in.
  if (info.menuItemId === CONTEXT_MENU_ID) {
    // Ensure the tab object and its URL are valid, and it's an HTTP/HTTPS URL.
    if (tab && tab.url && (tab.url.startsWith("http:") || tab.url.startsWith("https:"))) {
      const originalUrl = tab.url;
      // Construct the target URL for removepaywall.com, ensuring the original URL is properly encoded.
      const removePaywallUrl = `https://www.removepaywall.com/search?url=${encodeURIComponent(originalUrl)}`;

      // Open the constructed URL in a new tab.
      chrome.tabs.create({ url: removePaywallUrl });
    } else {
      // Log a warning if the action can't be performed (e.g., on a chrome:// page or if tab.url is missing).
      console.warn("Action aborted: Could not get a valid HTTP/HTTPS tab URL. Current tab URL:", tab ? tab.url : "N/A");
    }
  }
});
