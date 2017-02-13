function setValues() {
	chrome.storage.sync.get('options', ({ options }) => {
		document.getElementById('background-color').value = options.backgroundColor;
		document.getElementById('done-button-color').value = options.doneButtonColor;
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
	document.getElementById('background-color').value = '#c5cefa';
	document.getElementById('done-button-color').value = '#009387';
	submit({ preventDefault: () => {} });
}

setValues();

function getUpdatedValues() {
  let backgroundColor = document.getElementById('background-color').value;
  let doneButtonColor = document.getElementById('done-button-color').value;
  return { backgroundColor, doneButtonColor };
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
