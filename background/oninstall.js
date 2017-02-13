function onInstalled(e) {
  if (e.reason === 'install') {
    chrome.tabs.create({
      "url": `../pages/welcome/welcome.html?reason=install`
    })
  } else if (e.reason === 'updated') {
    chrome.storage.local.set({ updated: true });
  }
}

chrome.runtime.onInstalled.addListener(onInstalled)
