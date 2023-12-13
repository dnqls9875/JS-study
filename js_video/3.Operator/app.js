/**
 * 산술 연산자
 * +, -, *,  /, %
 *
 */

console.log(2 % 1); // 0 나머지 연산자
console.log(2 ** 3); // 8 2의 3제곱

// 증감 연산자
let number = 10;
number++;
console.log(number);

// 비교 연산자
/**
 *  > ,< , >=, <=, ==, ===, !=, !==
 */

const a = 10;
const b = 20;

console.log(a < b);
console.log(a === b);
console.log(a !== b);

// 논리 연산자
/**
 * ^ &&, ||, !
 */

/**
 *  * && 논리곱 연산자는 좌항과 우항이 모두 true여야지만 true를 반환하고,
 *  * 좌항, 우항 둘 중 하나라도 false 값이면 false를 반환한다.
 */

const a2 = 2;
const b2 = 3;
const c2 = 30;
const d2 = 50;

if (a2 < b2 && c2 > d2) {
  console.log("참입니다.");
} else {
  console.log("거짓입니다.");
}

/**
 *  * || 논리합 연산자는 좌항과 우항 중 하나라도 ture면 true를 반환하고,
 *  * 좌항, 우항 모두 false여야만 false를 반환한다.
 */

if (a2 < b2 || c2 > d2) {
  console.log("참입니다.");
} else {
  console.log("거짓입니다.");
}

// 삼항 조건 연산자
const a3 = 30;
const b3 = 50;

// 조건 ?  true : falas

const result = a3 > b3 ? "참" : "거짓";
console.log(result);

console.log("================================================================");

// Nullish 연산자 = null병합 연산자 => null, undefined 이런 값이면 ?? 그 다음 연산자 ?? 그 다음 연산자로 넘어가서 마지막 연산자가 반환되게 됨
const tA = undefined;
const tB = true;
const tC = false;

const tA2 = undefined;
const tB2 = null;
const tC2 = "이우빈";

// ^ ??로 표현
console.log(tA ?? tB ?? tC); // true

console.log(tA2 ?? tB2 ?? tC2); // 이우빈

// 대입 연산자
/**
 * +=
 * -=
 * *=
 * /=
 * %=
 * /\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ㄴ
 */

// 전개구문 (Spread Syntax)
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];

const nuwNumbers = [...numbers, ...numbers2];
console.log(nuwNumbers);
