async function popOutTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;
  await chrome.windows.create({ tabId: tab.id, focused: true });
}

chrome.action.onClicked.addListener(() => popOutTab());

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "pop-out-tab",
    title: "Pop out tab to new window",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "pop-out-tab") popOutTab();
});
