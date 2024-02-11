document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior (page reload)

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    // Check if any field is empty
    if (!emailInput.value || !passwordInput.value) {
      alert('Please fill in all fields');
      return;
    }

    // Collect field values into an object
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    // Display the collected data in the console
    console.log(formData);

    // Clear form fields
    form.reset();
  });
});

  
