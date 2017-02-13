(function (global) {

  const storage = {};

  storage.get = function get(property) {
    return new Promise(resolve => {
      chrome.storage.sync.get(property, value => {
        // API returns object { property: value }
        resolve(value[property])
      });
    })
  }
  
  storage.set = function set(property) {
    chrome.storage.sync.set(property);
  }

  global.storage = storage;

})(window);
