 let input = document.getElementById("validation-input");

input.addEventListener("blur", (e) => {
    if (input.value.length > 5) {
        input.classList.toggle("invalid");
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Get the input element and its data-length attribute value
//     var validationInput = document.getElementById('validation-input');
//     var expectedLength = parseInt(validationInput.getAttribute('data-length'));

//     // Add a blur event listener to the input element
//     validationInput.addEventListener('blur', function () {
//       // Get the current value of the input
//       var inputValue = validationInput.value;

//       // Check if the number of characters is correct
//       if (inputValue.length === expectedLength) {
//         // If correct, add the 'valid' class and remove the 'invalid' class
//         validationInput.classList.add('valid');
//         validationInput.classList.remove('invalid');
//       } else {
//         // If incorrect, add the 'invalid' class and remove the 'valid' class
//         validationInput.classList.add('invalid');
//         validationInput.classList.remove('valid');
//       }
//     });
//  });
  
 