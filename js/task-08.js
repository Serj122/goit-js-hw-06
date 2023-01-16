const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formRes = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
  // const
  // const
  // const {
  //   elements: { email, password },
  // } = event.currentTarget;

  if (formRes.email === "" || formRes.password === "") {
    alert("Всі поля мають бути заповнені!");
  }

  console.log(formRes);
  event.currentTarget.reset();
}
