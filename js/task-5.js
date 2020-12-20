const creatName = function () {
  if (elemInput.value === "") {
    elemSpan.textContent = "незнакомец";
  } else elemSpan.textContent = elemInput.value;
};

const elemInput = document.querySelector("#name-input");
const elemSpan = document.querySelector("#name-output");
elemInput.addEventListener("input", creatName);
