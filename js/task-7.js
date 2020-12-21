const elemInput = document.querySelector("#font-size-control");
const elemSpan = document.querySelector("#text");
const changeSize = function () {
  elemSpan.style.fontSize = elemInput.value + "px";
};
elemInput.addEventListener("input", changeSize);
