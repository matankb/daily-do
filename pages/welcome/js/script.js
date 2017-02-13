(function() {
  chrome.storage.sync.get("playedTutorial", function(playedTutorial) {
    if(!playedTutorial.playedTutorial) {
      document.getElementById("oninstall").style.display = "block";
      storage.set({ playedTutorial: true })
    }
  });
})();

/*TODO: rename file to something more descriptive*/
