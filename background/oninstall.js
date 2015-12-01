chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({
    "url": "../pages/welcome/welcome.html"
  })
})
