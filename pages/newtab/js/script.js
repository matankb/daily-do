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


}());
