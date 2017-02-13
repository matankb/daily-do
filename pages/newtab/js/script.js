(function() {

  'use strict';

  // THING
  storage.get('thing').then(thing => {
      document.getElementById("thing").value = thing;
  });
  document.getElementById("thing-wrap").onsubmit = function(e) {
      e.preventDefault();
      document.getElementById("thing").blur();
      storage.set({ thing: document.getElementById("thing").value })
  };

  // DONE
  storage.get('done').then(done => {
    if (!done) {
      document.getElementById("thing-wrap").style.display = 'block';
    } else {
      // window.location = 'chrome://newtab';
    }
  });
  document.getElementById("done-button").onclick = function() {
    storage.set({
        done: true
    });
    location.reload();
  };

  // DATE
  storage.get('date').then(storedDate => {

    let d = new Date();
    d.setTime(d.getTime() - d.getTimezoneOffset() * 60000);
    let currentDate = d.toJSON().slice(0, 10);

    if (storedDate !== currentDate) {
      storage.set({ done: false, date: currentDate, thing: '' });
      document.getElementById("thing").value = '';
      location.reload();
    }
  })

  // SETTINGS
  storage.get('options').then(options => {

    function hexToRgba(hex) {
  		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   	  var rgb = result ? {
  			r: parseInt(result[1], 16),
  			g: parseInt(result[2], 16),
  			b: parseInt(result[3], 16)
  		} : null;
  		return `rgba(${rgb.r},${rgb.g},${rgb.b}, 0.5)`;
  	}

    document.body.style.backgroundColor = options.backgroundColor
    document.getElementById('done-button').style.backgroundColor = hexToRgba(options.doneButtonColor);

  })

  // UPDATE
  chrome.storage.local.get('updated', updated => {
    if (updated.updated) {
      chrome.storage.local.set({ updated: false});
      let version = chrome.runtime.getManifest();
      document.getElementById('update').style.display = 'block';
    }
  })


}());
