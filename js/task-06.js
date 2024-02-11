 let input = document.getElementById("validation-input");

input.addEventListener("blur", (e) => {
    if (input.value.length > 5) {
        input.classList.toggle("invalid");
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
    }
});


  
 