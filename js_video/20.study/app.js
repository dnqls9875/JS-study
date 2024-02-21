const input = document.querySelector(".input");
const button = document.querySelector(".console-btn");
const form = document.querySelector(".form");

const active = [input, button];

// console 출력 버튼 입력 시 console창 내용 입력
form.addEventListener("submit", (event) => {
  // 새로고침 방지 코드
  event.preventDefault();

  // input.value 가 공백이 아닐 시
  if (input.value !== "") {
    console.log(input.value);
    input.value = "";
  } else {
    console.log("내용을 입력하세요");
  }

  // console 출력 버튼 누를 시 변수 array active class 추가
  active.forEach((element) => {
    element.classList.add("active");
  });
});
