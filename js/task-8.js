const elemInput = document.querySelector("div#controls > input");
const btnCreate = document.querySelector(
  '#controls button[data-action="render"]'
);
const btnDestroy = document.querySelector(
  '#controls button[data-action="destroy"]'
);
const boxContainer = document.querySelector("#boxes");

function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

const handlerClick = function () {
  createBoxes(elemInput.value);
};

const createBoxes = function (amount) {
  let arrayBoxes = new Array(Number(amount)).fill(0);
  //   for (let i = 1; i <= amount; i += 1) {
  //     const box = document.createElement("div");
  //     box.style.backgroundColor = generateRandomColor();
  //     box.style.width = box.style.height = 30 + (i - 1) * 10 + "px";
  //     arrayBoxes.push(box);
  //   }
  //   boxContainer.append(...arrayBoxes);

  arrayBoxes.forEach(function (elemDiv, idx, array) {
    array[idx] = document.createElement("div");
    array[idx].style.backgroundColor = generateRandomColor();
    array[idx].style.width = array[idx].style.height = 30 + idx * 10 + "px";
  });
  boxContainer.append(...arrayBoxes);
};

const destroyBoxes = function () {
  const arrayDiv = boxContainer.querySelectorAll("div");
  for (let i = 0; i < arrayDiv.length; i += 1) {
    boxContainer.removeChild(arrayDiv[i]);
  }
};
btnCreate.addEventListener("click", handlerClick);
btnDestroy.addEventListener("click", destroyBoxes);
