function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');

  button.addEventListener('click', function() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });
});






// let name-input = document.querySelector(".name-input");
// let name-output = document.querySelector(".name-output");

// button .addEventListener("click", () => {
//   let color = getRandomHexColor();
//   span.innerText = color;
//   document.body.style.backgroundColor = color;
// });

// let span = document.querySelector(".color");
// let button = document.querySelector(".change-color");

// button .addEventListener("click", () => {
//   let color = getRandomHexColor();
//   span.innerText = color;
//   document.body.style.backgroundColor = color;
// });