const buttons = document.querySelectorAll("button");

const removeClass = (element, className) => element.classList.remove(className);
const addClass = (element, className) => element.classList.add(className);

const btnHandler = (event) => {
  buttons.forEach((button) => removeClass(button, "active"));
  addClass(event.target, "active");
};

// 클릭 함수 이벤트를 반복으로 돌리는 기능
buttons.forEach((element) => element.addEventListener("click", btnHandler));
