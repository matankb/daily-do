(function () {
    chrome.storage.sync.get("thing", function(thing) {
        utils.thing.value = thing.thing; 
    });
    utils.thingWrap.onsubmit = function(e) {
        e.preventDefault();
        utils.thing.blur();
        utils.setThingValue();
    }
})()
