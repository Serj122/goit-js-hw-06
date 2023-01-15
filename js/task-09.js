function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

const onBodyChangeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
};

btnChangeColor.addEventListener("click", onBodyChangeColor);
