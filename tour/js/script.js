introJs()
  .start()
  .onexit(function() {
    window.location = "../../newtab/newtab.html";
  })
  .oncomplete(function() {
    window.location = "../../newtab/newtab.html";
  });
