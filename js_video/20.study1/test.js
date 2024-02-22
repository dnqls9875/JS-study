/**
 * 수정사항
 * 1. form으로 하지 말고, 단순 div로 하여 click 이벤트로 해보기
 * 2. 내용 입력시 보더 컬러 #000 입력 안할 시 #eee
 * 3. 해당 속성의 값 추가
 */

const input = document.querySelector("#inputText");
const addBtn = document.querySelector("#addBtn");

function addItem() {
  const value = input.value || input.placeholder;
  input.value = "";
  console.log(value);
}

addBtn.addEventListener("click", addItem);
