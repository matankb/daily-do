(function() {
    window.utils = {
        thing: document.getElementById("thing"),
        thingWrap: document.getElementById("thing-wrap"),
        doneButton: document.getElementById("done-button"),
        hideThingWrap: function() {
            this.thingWrap.style.display = "none";
        },
        showThingWrap: function() {
            this.thingWrap.style.display = "auto";
        },
        getDate: function() {
            var d = new Date();
            d.setTime(d.getTime() - d.getTimezoneOffset() * 60000);
            return d.toJSON().slice(0, 10);
        },
        getThingValue: function() {
            return this.thing.value;
        },
        setThingValue: function() {
            chrome.storage.sync.set({
                thing: this.getThingValue()
            })
        },
        setDone: function() {
            chrome.storage.sync.set({
                done: true
            })
        },
        setNotDone: function() {
            chrome.storage.sync.set({
                done: false
            })
        }
    }
})()