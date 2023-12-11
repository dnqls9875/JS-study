// ! 변수

// name = "Mike";
// age = 30;

// alert(name);
// console.log(age);

let name = "Mike";
// let name = "gooogle";  // SyntaxError
name = "google";
let age = 30;

console.log(name, age);

/**
 * ! const
 * ^ 절대로 바뀌지 않는 상수
 * ^ 수정 X
 * ^ 대문자로 선언하는게 좋다. (상수임을 알리기 위해)
 */

/**
 * * 자바스크립트에서 변수를 선언할때는,
 * * 변하지 않는 값은 const,
 * * 변할 수 있는 값은 let으로 선언
 */

/**
 * & Tip
 * & 일단 cosnt로 작성한 후 변경될 여지가 있는 변수들은 let으로 변경
 */

let hi = "이도해";
h1 = "안녕하세요";
console.log(hi);

const hello = "안녕하세요!!";
// hello = 123123; // TypeError

console.log(hello);
