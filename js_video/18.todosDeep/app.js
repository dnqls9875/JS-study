// ! 리팩터링 전 코드

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// // form 제출 이벤트
// form.addEventListener("submit", (event) => {
//   // 새로고침 방지 코드
//   event.preventDefault();

//   // 공백이 아닐시에만 적용되는 코드
//   if (input.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// ! 리팩터링 후 코드

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

/**
 * 1. 삭제 버튼을 추가
 * 2. 화면에 저장 되게끔
 * 3. 삭제 버튼을 누르면 -> 저장된 데이터 업데이트
 */

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;

  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");

    span.innerHTML = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();

  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });

    todos = userTodos;
  }
};

init();
form.addEventListener("submit", handler);
