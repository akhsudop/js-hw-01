const span = document.querySelector(".color");
const btnChange = document.querySelector(".change-color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChange.addEventListener("click", handlerChange);

function handlerChange() {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
}
