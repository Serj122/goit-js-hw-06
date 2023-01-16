const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const fullMenu = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = ingredient;
  return listEl;
});

fullMenu.append(...markup);
