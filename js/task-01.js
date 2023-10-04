const categoriesList = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${categoriesList}`);

const arrayTitlesCategoriesRef = document.querySelectorAll("h2");
arrayTitlesCategoriesRef.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
