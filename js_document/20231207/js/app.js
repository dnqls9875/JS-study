const hello = "안녕하세요";
console.log(hello[0]);
console.log(hello[1]);
console.log(hello[2]);
console.log(hello[3]);
console.log(hello[4]);

console.log(hello.length);

const js = "자바스크립트";
console.log(js.length);

console.log(52 > 723); // false
console.log(52 < 723); // true
console.log(52 == 723); // false
console.log(52 != 723); // true
console.log(52 === 723); // false
console.log("1" === "1"); // true

if (273 < 52) {
  console.log("273은 52보다 작습니다.");
} else {
  console.log("273은 52보다 큽니다.");
}

console.log(typeof 10 === "10");

let a = "사과";
let b = "바나나";

console.log(`내가 가장 좋아하는 과일은 ${a} 그리고 ${b}입니다.`);

const pi = 3.141592;
console.log(pi);

const r = 10;

const result = 2 * pi * r;
console.log(result);

const multifly = pi * r * r;
console.log(multifly);

let g = 9.8;
let m = 10;

let o = m * g;
console.log(o);

g = 9.80665;
o = m * g;
console.log(o);

let value = 10;
value += 10; // 10 = 10 + 10
console.log(value);

let number = 10;
++number;
++number;
++number;
console.log(number);

number = 10;

console.log(number++); // 10
console.log(++number); // 12
console.log(number--); // 12
console.log(--number); // 10

// const r2 = 10;
// console.log(`넓이 = ${3.14 * r2 * r2}`);
// console.log(`둘레 = ${2 * 3.14 * r2}`);

let r2 = 10;
console.log(`넓이 = ${3.14 * r2 * r2}`);
console.log(`둘레 = ${2 * 3.14 * r2}`);

let number2 = 10;

console.log(++number2); //11
console.log(number2++); //11
console.log(++number2); //13
console.log(number2--); //13
