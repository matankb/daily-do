(function() {
  introJs()
  .start()
  .setOption('exitOnOverlayClick', false)
  .setOption('disableInteraction', false)
  .onchange(function(targetElement)  {
    switch(this._currentStep) {
      case 3:
        //show edit controls
        document.getElementById('edit-buttons-wrap').style.opacity = 1.0;
        //and put text in thing if empty
        if(!document.getElementById('thing').value) {
          document.getElementById('thing').value = "Go to the Gym";
        }
        break;
      case 2:
        break;
      default:
        break;
    }
  })
  .onexit(function() {
    window.location = "../newtab/newtab.html";
  })
  .oncomplete(function() {
    window.location = "../newtab/newtab.html";
  });
})();
