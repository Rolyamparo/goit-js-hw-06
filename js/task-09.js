
let name-input = document.querySelector(".name-input");
let name-output = document.querySelector(".name-output");

button .addEventListener("click", () => {
  let color = getRandomHexColor();
  span.innerText = color;
  document.body.style.backgroundColor = color;
});

// let span = document.querySelector(".color");
// let button = document.querySelector(".change-color");

// button .addEventListener("click", () => {
//   let color = getRandomHexColor();
//   span.innerText = color;
//   document.body.style.backgroundColor = color;
// });