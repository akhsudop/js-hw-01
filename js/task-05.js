const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    // console.log(event.currentTarget.value);
    output.innerHTML = event.currentTarget.value;
  } else {
    output.innerHTML = "Anonymous";
  }
});
