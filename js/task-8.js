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

const createBoxes = function (amount) {
  const arrayBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = generateRandomColor();
    box.style.width = elemDiv.style.height = 30 + (amount - 1) * 10 + "px";
    arrayBoxes.push[box];
  }
  return boxContainer.append(...arrayBoxes);
};

//const destroyBoxes () = function {
//    let Boxes = [];
//};
btnCreate.addEventListener("click", createBoxes());
//btnDestroy.addEventListener("click", destroyBoxes);
