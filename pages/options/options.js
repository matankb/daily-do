const options = {
	backgroundColor: ['background-color', '#c5cefa'],
	doneButtonColor: ['done-button-color', '#009387'],
}

function setValues() {
	chrome.storage.sync.get('options', opts => {
		opts = opts.options;
		for (let i in options) {
			document.getElementById(options[i][0]).value = opts[i];
		}
	})
}

function submit(e) {
  e.preventDefault();
  const save = document.getElementById('save');
  const status = document.getElementById('status');
  status.textContent = 'Saving...';

  let updatedValues = getUpdatedValues();
  console.log(updatedValues);
  chrome.storage.sync.set({ options: updatedValues }, () => {
    // Update status to let user know options were saved.
    status.textContent = 'Options saved!';
    setTimeout(function() {
      status.innerHTML = '<br>';
    }, 750);
  });

}

function resetValues() {
	for (let i in options) {
		document.getElementById(options[i][0]).value = options[i][1];
	}
	submit({ preventDefault: () => {} });
}

setValues();

function getUpdatedValues() {
	let values = {};
	for (let i in options) {
		values[i] = document.getElementById(options[i][0]).value;
	}
  return values;
}

document.getElementById('reset').onclick = resetValues;

document.getElementById('options').onsubmit = submit;

function submit(e) {
  e.preventDefault();
  const save = document.getElementById('save');
  const status = document.getElementById('status');
  status.textContent = 'Saving...';

  let updatedValues = getUpdatedValues();
  console.log(updatedValues);
  chrome.storage.sync.set({ options: updatedValues }, () => {
    // Update status to let user know options were saved.
    status.textContent = 'Options saved!';
    setTimeout(function() {
      status.innerHTML = '<br>';
    }, 750);
  });

}
