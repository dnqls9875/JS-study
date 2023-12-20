// 리터럴 표현식
10;

// 식별자 표현식
let sum;

// 연산자 표현식
10 + 20;

// 함수/메소드 호출 표현식
function square(x) {
  return x * 5;
}
console.log(square(2)); // 10

var x = 10;

// 연산자 표현식
console.log(x + 30); // 40

console.log("================================================================");

// 변수 선언 및 할당문
var x = 5;

// 함수 선언문
function foo() {}

// 조건문
if (x > 5) {
}

// 반복문
for (let i = 0; i < 10; i++) {}

console.log("================================================================");

function foo() {
  return {};
}
console.log(foo()); // {}

console.log("================================================================");

var x = 5;
var y = 2;

console.log((x += y)); // x = x + y => 7
console.log((x -= y)); // x = x - y => 5
console.log((x *= y)); // x = x * y => 10
console.log((x /= y)); // x = x / y => 5
console.log((x %= y)); // x = x % y => 1

console.log("================================================================");

var str = "My name is ";
str += "Lee";

console.log(str);

console.log("================================================================");

var x, y;
y = x = 10;

console.log(x, y);

console.log("================================================================");

console.log(5 == 5);
console.log(5 == "5");
console.log(5 == 8);
console.log(false == "false");

console.log("================================================================");

console.log(5 === 5);
console.log(5 === "5");
console.log(5 === 8);
