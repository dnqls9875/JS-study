// ! 리팩터링 전 코드

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// form 제출 이벤트
form.addEventListener("submit", (event) => {
  // 새로고침 방지 코드
  event.preventDefault();

  // 공백이 아닐시에만 적용되는 코드
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});
