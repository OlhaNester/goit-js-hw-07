let countValue = 0;
const increment = function () {
  countValue += 1;
  spanValue.textContent = countValue;
};
const decrement = function () {
  countValue -= 1;
  spanValue.textContent = countValue;
};
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const spanValue = document.querySelector("#value");

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
