(function() {
    chrome.storage.sync.get("done", function(done) {
        if(done.done) {
            utils.hideThingWrap();
        }
    });

    utils.doneButton.onclick = function() {
        utils.setDone();
        utils.hideThingWrap();
    };
})();
