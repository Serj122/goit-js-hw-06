const fontControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onInputChange = () => {
  text.style.fontSize = `${fontControl.value}px`;
};

fontControl.addEventListener("input", onInputChange);
