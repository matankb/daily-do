(function() {
    storage.get('options').then(opts => {
      document.body.style.backgroundColor = opts.backgroundColor;
    })
})();
