function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

const onBodyChangeColor = () => {
  const colorRandomaizer = getRandomHexColor();
  document.body.style.backgroundColor = colorRandomaizer;
  textColor.textContent = colorRandomaizer;
};

btnChangeColor.addEventListener("click", onBodyChangeColor);
