const checkValue = function () {
  if (elemInput.value.length == elemInput.getAttribute("data-length")) {
    elemInput.className = "valid";
  } else {
    elemInput.className = "invalid";
  }
};

const elemInput = document.querySelector("#validation-input");

elemInput.addEventListener("blur", checkValue);
