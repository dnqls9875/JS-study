// ! 문자열은 배열처럼 인덱스를 통해 접근할 수 있는 유사 배열이다.
let str = "string";

for (let i = 0; i < str.length; i++) {
  console.log(i);
}

// 0,1,2,3,4,5

console.log("================================================================");

str[0] = "S";
console.log(str);

str = str.slice(0, 3); // 3번째 인덱스 전
console.log(str);

str = str.toUpperCase();
console.log(str);

console.log("================================================================");

// ^ 변수
let score;
score = 80;
score = 90;
console.log(score);

console.log("================================================================");

/**
 * 변수의 식별자는 의미가 있어야 한다.
 * 반드시 영문자로 시작하고, 일본어 중국어를 사용할 수는 있으나 공통적으로 영어를 준수한다.
 * $, _ 기호를 제외한 특수기호 및 숫자는 식별자의 맨 앞으로 올 수가 없다.
 * 예약어 사용을 금한다.
 */

let point = 100;
let $point = 100;
let _point = 100;
let point1 = 100;

console.log("================================================================");

console.log(foo); // undefined
var foo = 123;
console.log(foo); // 123

{
  let foo = 456;
  console.log(foo); // 456
}
console.log(foo); // 123
