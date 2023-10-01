const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulIngredients = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  ulIngredients.insertAdjacentHTML(
    "beforeend",
    `<li class="item">${ingredient}</li>`
  );
});
