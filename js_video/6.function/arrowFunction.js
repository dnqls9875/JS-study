// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 20));

console.log("================================================================");

// ! 화살표 함수
// 인자의 개수가 하나 일 땐 괄호 생략 가능
const sum = (a, b) => a + b; // 한줄이면 중괄호, return 생략가능
console.log(sum(10, 20));

console.log("================================================================");

// ! 함수 표현식
const plus = function (a, b) {
  return a + b;
};
console.log(plus(10, 20));

console.log("================================================================");

// ^ 일반함수 화살표 함수로 바꾸기

// function hello() {
//   console.log("Hello!");
//   console.log("World!");
// }

// function sumPlus(a, b) {
//   return a + b;
// }

// function greeting(user) {
//   console.log(`Hello, ${user}`);
// }

const hello = () => `Hello, Wrold!`;
{
  // console.log("Hello!");
  // console.log("World!");
}

console.log(hello());

console.log("================================================================");

const sumPlus = (a, b) => a + b;
console.log(sumPlus(10, 15));

console.log("================================================================");

const greeting = (user) => `Hello, ${user}!`;
console.log(greeting("우빈"));
