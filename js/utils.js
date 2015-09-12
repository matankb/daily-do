(function() {
    window.utils = {
        thing: document.getElementById("thing"),
        thingWrap: document.getElementById("thing-wrap"),
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
        }
    }
})()