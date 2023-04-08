const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (!email.value || !password.value) {
    window.alert("Please fill in all the fields!");
  } else {
    console.log(`Email: ${email.value}, Password ${password.value}`);
    e.currentTarget.reset();
  }
}
