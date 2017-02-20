(function() {
  function setBackgound() {
    storage.get('options').then(opts => {
      if (!opts.backgroundColor) {
        // opts.backgroundColor sometimes takes a few seconds to be set by welcome script
        return setBackgound();
      }
      document.body.style.backgroundColor = opts.backgroundColor;
    })
  }
  setBackgound();
})();
