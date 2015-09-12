(function() {
    window.utils = {
        getDate: function() {
            var d = new Date();
            return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toJSON().slice(0, 10) 
        },
        getThing: function() {
            return document.getElementById("thing");
        }
    }
})()