const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
let amount = 0;
let width = 30;
let height = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

input.addEventListener("input", amountReturn);

function amountReturn(event) {
  amount = event.currentTarget.value;
}

function createBoxes(myAmount) {
  for (let i = 1; i <= myAmount; i++) {
    const markup = `<div style="width: ${width}px; height:${height}px; background-color: ${getRandomHexColor()};"></div>`;
    boxes.innerHTML += markup;
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
createBtn.addEventListener("click", () => {
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
