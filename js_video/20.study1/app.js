const input = document.querySelector(".input");
const closeBtn = document.querySelector(".console-btn");
const form = document.querySelector(".form");
const ul = document.querySelector("ul");

const active = [input, closeBtn];

// 삭제 버튼 클릭 시
const delItem = (event) => {
  const target = event.target.parentElement;
  target.remove();
};

const addItem = (event) => {
  // 새로고침 방지 코드
  event.preventDefault();

  // input.value 가 공백이 아닐 시
  if (input.value !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");

    span.innerHTML = input.value;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    input.value = "";

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
  } else {
    console.log("내용을 입력하세요");
  }

  // console 출력 버튼 누를 시 변수 array active class 추가
  active.forEach((element) => {
    element.classList.add("active");
  });
};

form.addEventListener("submit", addItem);
