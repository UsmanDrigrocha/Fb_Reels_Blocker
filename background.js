chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && (tab.url.includes("facebook.com/reel") || tab.url.includes("instagram.com/reels"))) {
        chrome.tabs.remove(tabId);
    }
});
