const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", (e) => {
  span.style.fontSize = `${e.currentTarget.value}px`;
});
