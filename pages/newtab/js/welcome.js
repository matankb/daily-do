(function() {
  chrome.storage.sync.get("playedTutorial", function(playedTutorial) {
    if(!playedTutorial.playedTutorial) {
      document.getElementById("loading").style.display = "none";
      document.getElementById("oninstall").style.display = "block";
      utils.onInstall.setTutorialPlayed();
    }else {

    }

  });
})();
