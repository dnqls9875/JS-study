// function bok(main) {
//   console.log(`${main} 볶음밥`);
// }

// bok("새우");
// bok("제육");

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));

console.log("================================================================");

function a(b) {
  const b = 10; // 함수 내에서 선언된 변수 => 지역변수
  console.log(b);
}

a();
// console.log(b); // 문법 에러

/**
 * * 변수를 사용할 수 있는 범위(Scope)가
 * * 중괄호로 감싸진 블록(Block) 안으로 제한
 * * (함수뿐만 아니라 조건문, 반복문에서도 마찬가지)
 */
