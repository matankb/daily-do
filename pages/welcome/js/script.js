(function() {
  chrome.storage.sync.get("playedTutorial", function(playedTutorial) {
    if(!playedTutorial.playedTutorial) {
      document.getElementById("oninstall").style.display = "block";
      utils.onInstall.setTutorialPlayed();
    } else {
      document.getElementById("onupdate").style.display = "block";
    }
  });
})();

/*TODO: rename file to something more descriptive*/
