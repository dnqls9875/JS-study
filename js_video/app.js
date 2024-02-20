const input = document.querySelector(".input");
const button = document.querySelector(".console-btn");

const active = [input, button];

// console 출력 버튼 입력 시 console창 내용 입력
button.addEventListener("click", function () {
  if (input.value === "") {
    console.log("내용을 입력하세요");
  } else {
    console.log(input.value);
  }
  // console 출력 버튼 누르면 input 안에 내용 리셋
  input.value = "";
  // console 출력 버튼 누를 시 변수 array active class 추가
  active.forEach((element) => {
    element.classList.add("active");
  });
});
