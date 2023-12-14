// ! if문
const a = 10;
const b = 20;
const c = 20;

if (a > b) {
  console.log("a가 큽니다!");
} else if (b !== c) {
  console.log("b와 c의 값이 같습니다.");
} else if (b === c) {
  console.log("테스트입니다");
} else {
  console.log("여기는 언제 출력이 될까요?");
}

// ! switch문

const number = 10;

switch (number) {
  case 1:
    console.log(number);
    break;
  case 10:
    console.log(number);
    break;
  default:
    console.log("아무것도 해당되지 않음");
    break;
}

// 모듈러 홀짝
const numberA = 10;

// if (numberA % 2 === 0) {
//   console.log("짝수!");
// } else {
//   console.log("홀수!");
// }

switch (numberA % 2) {
  case 0:
    console.log("짝수!");
    break;
  case 1:
    console.log("홀수!");
}
