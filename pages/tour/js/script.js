(function() {
  introJs()
  .start()
  .onchange(function(targetElement)  {
    switch(this._currentStep) {
      case 3:
        //show edit controls
        utils.editControls.wrap.style.opacity = 1.0;
        //and put text in thing if empty
        if(!utils.thing.value) utils.thing.value = "Go to the Gym";
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
