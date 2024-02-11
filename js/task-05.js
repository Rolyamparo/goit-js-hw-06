document.addEventListener('DOMContentLoaded', function () {
    // Get the input and span elements
    var nameInput = document.getElementById('name-input');
    var nameOutput = document.getElementById('name-output');

    // Add an input event listener to the input element
    nameInput.addEventListener('input', function () {
      // Get the current value of the input
      var inputValue = nameInput.value;

      // Update the span text with the input value or 'Anonymous' if the input is empty
      nameOutput.textContent = inputValue.trim() === '' ? 'Anonymous' : inputValue;
    });
  });
















