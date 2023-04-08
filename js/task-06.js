// const input = document.querySelector("#validation-input");
const input = document.querySelector('[data-length="6"]');

// console.log(input.dataset.length);

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length > input.dataset.length) {
    input.classList.toggle("invalid");
  } else {
    input.classList.toggle("valid");
  }
});
