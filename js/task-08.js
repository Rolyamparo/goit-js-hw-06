document.addEventListener('DOMContentLoaded', function () {
    // Get the login form
    var loginForm = document.querySelector('.login-form');

    // Add a submit event listener to the form
    loginForm.addEventListener('submit', function (event) {
      // Prevent the default form submission (page reload)
      event.preventDefault();

      // Get form elements
      var emailInput = loginForm.elements.email;
      var passwordInput = loginForm.elements.password;

      // Check if any fields are empty
      if (!emailInput.value || !passwordInput.value) {
        alert('Please fill in all fields.');
      } else {
        // Create an object with field names as properties and field values as values
        formData = {
          email: emailInput.value,
          password: passwordInput.value
        };

        // Display the object in the console
        console.log(formData);

        // Clear the form fields
        loginForm.reset();
      }
    });
  });
