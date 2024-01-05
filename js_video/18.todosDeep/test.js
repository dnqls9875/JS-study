/**
 * 1. 등록 버튼 클릭시 list 추가 -> input.value input에 입력한 값이 추가가 되어야 한다.
 *
 * 2. ul 안에 li로 추가 되기.
 *
 * 3. li안에 삭제 버튼 추가
 *
 * 4. 삭제 버튼 클릭 시 내용 삭제
 *
 * 5. 로컬 스토리지 저장
 */

// form, input, ul 선택자 지정
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// // form 버튼 제출 시 이벤트 핸들러
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // input.value가 공백이 아니라면
//   if (input.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// ! 리팩토링

// form, input, ul 선택자 지정
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let todos = [];

// 로컬 스토리지 저장 함수

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// 삭제 버튼 클릭 시 이벤트 함수
const delItem = (event) => {
  const target = event.target.parentElement;

  todos = todos.filter((todo) => todo.id !== parseInt(target.id));

  save();
  target.remove();
};

// list 생성 함수 및 삭제버튼 생성 함수
const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;

    button.addEventListener("click", delItem);
    button.innerText = "삭제";
    span.innerText = todo.text;
  }
};

// 이벤트 핸들러 기능 함수
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
// form 버튼 제출 시 이벤트 핸들러
form.addEventListener("submit", handler);
