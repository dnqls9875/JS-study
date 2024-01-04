const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const inputValue = (event) => {
  event.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = input.value;
    input.value = "";
  }
};

form.addEventListener("submit", inputValue);
