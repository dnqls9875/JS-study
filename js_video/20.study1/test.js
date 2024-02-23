const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");

const addItem = (event) => {
  // 새로고침 방지 코드
  event.preventDefault();

  const value = input.value;
  const li = document.createElement("li");
  ul.appendChild(li);

  if (value !== "") {
    li.innerText = `${"텍스트 내용: "} ${value}`;
    input.value = "";
  } else {
    li.innerText = input.placeholder;
  }
};

form.addEventListener("submit", addItem);
