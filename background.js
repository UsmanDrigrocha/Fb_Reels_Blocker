chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("facebook.com/reel")) {
        chrome.tabs.remove(tabId);
    }
});
