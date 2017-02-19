// TODO: conditional defaults

const defaults = {
  thing: '',
  date: '2000-01-01',
  done: false,
  updated: false,
  options: {
    backgroundColor: '#c5cefa',
    doneButtonColor: '#009387'
  }
};

function onInstalled(e) {
  if (e.reason === 'install') {
    chrome.storage.sync.get('options', ({ options }) => {
      if (!options) {
        chrome.storage.sync.set({ options: defaults.options });
      }
    })
    chrome.tabs.create({
      "url": `../pages/welcome/welcome.html?reason=install`
    })
  } else if (e.reason === 'update') {
    chrome.storage.local.set({ updated: true });
  }
}

chrome.runtime.onInstalled.addListener(onInstalled);
