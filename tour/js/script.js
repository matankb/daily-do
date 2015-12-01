(function() {
  introJs()
  .start()
  .onchange(function(targetElement)  {
    switch(this._currentStep) {
      case 1:
        break;
      case 2:
        break;
      default:
        break;
    }
  })
  .onexit(function() {
    window.location = "../../newtab/newtab.html";
  })
  .oncomplete(function() {
    window.location = "../../newtab/newtab.html";
  });
})();
