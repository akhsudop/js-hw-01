const value = document.querySelector("#value");
const btnDown = document.querySelector('[data-action="decrement"]');
const btnUp = document.querySelector('[data-action="increment"]');

let counterValue = 0;
btnDown.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

btnUp.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
