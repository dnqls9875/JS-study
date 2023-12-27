const button = document.querySelector("button");
const removeButton = document.querySelector(".remove");

const btnEventHandler = function (event) {
  console.log("😊");
};

const removeBtnEventHandler = function (event) {
  button.removeEventListener("click", btnEventHandler);
};

button.addEventListener("click", btnEventHandler);
removeButton.addEventListener("click", removeBtnEventHandler);
