const input = document.querySelector("#validation-input");
const length = Number(input.dataset.length);

// console.log(input.dataset.length);

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else input.classList.add("invalid");
});
