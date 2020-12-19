const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIng = document.createElement("ul");
listIng.textContent = "ingredients";

const createList = (ingredient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  //return liElem;
};

// liElem.textContent = ingredients.map((ingredient) => ingredient);
// listIng.append(liElem);
// console.log(listIng);
const ingrList = ingredients.map((ingredient) => createList(ingredient));
console.log(ingrList);
