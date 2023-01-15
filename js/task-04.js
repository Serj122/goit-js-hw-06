const decrementBtn = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
