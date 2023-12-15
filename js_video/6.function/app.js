function bok(main) {
  console.log(`${main} 볶음밥`);
}

bok("새우");
bok("제육");

console.log("================================================================");

function sushi(main) {
  return `${main}초밥`;
}

console.log(sushi("새우"));
console.log(sushi("광어"));
console.log(sushi("우럭"));
console.log(sushi("연어"));
console.log(sushi("우삼겹"));

console.log("================================================================");

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));

console.log("================================================================");

const b = 10; // 함수 밖에서 선언된 변수 => 전역변수

function a() {
  const b = 20; // 함수 내에서 선언된 변수 => 지역변수
  console.log(b); // 지역 변수 출력 결과값 => 20
}

a();
console.log(b); // 전역 변수 출력 결과값 => 10

/**
 * * 변수를 사용할 수 있는 범위(Scope)가
 * * 중괄호로 감싸진 블록(Block) 안으로 제한
 * * (함수뿐만 아니라 조건문, 반복문에서도 마찬가지)
 */

console.log("================================================================");

// ! 인자가 두개인데 인수를 하나만 사용하는 경우

// Default Parameter 기본값 b = 10으로 지정하면 아래 인수에 갯수가 하나여도 b의 디폴트 값으로 적용이 된다.
// 인자에 디폴트 값이 설정이 되어도 인수에 숫자를 적용시키면 덮어쓰게 됨 예를들어 인자 b에 디폴트 값 10 / 인수 b자리에 20을 작성하면 하단 아래에 있는 20이 적용된다.
// 인자 parameter
function sumB(a, b = 10) {
  console.log(a + b);
}

sumB(10, 20, 30);
// console.log(sum(10, 20)); // 인수 (argument) => 인자가 하나고 인수가 하나이면 NaN

console.log("================================================================");

function sumC(a, b) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

sumC(10, 20, 30); // 인수 (argument) => 인자가 하나고 인수가 하나이면 NaN

console.log("================================================================");

// ! 나머지 매개변수 -> Rest Parameter
function print(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest); // 배열로 반환
}

print(10, 20, 30, 40, 50, 60, 70);

console.log("================================================================");

// ! return 명령문

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
