// //  ! for in 반복문
// // for(const 반복 변수 in 배열 또는 객체){
// //  문장
// // }

// const todos = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];

// // for (const i in todos) {
// //   console.log(`${i}번째 할 일 : ${todos[i]}`);
// // }

// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i}번째 할 일 : ${todos[i]}`);
// }

// console.log("================================================");

// // ! for of 반복문
// // for(const 반복 변수 of 배열 또는 객체){
// //  문장
// // }

// const todosA = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];
// for (const todo of todos) {
//   console.log(`오늘의 할 일 : ${todo}`);
// }

// console.log("================================================");

// // ! for 반복문
// // for(let i = 0; i < 반복 횟수; i++){
// //  문장
// // }

// for (let i = 0; i < 5; i++) {
//   console.log(`${i}번째 반복입니다.`);
// }

// console.log("================================================");

// let output = 0;
// for (let i = 0; i <= 100; i++) {
//   output += i;
// }
// console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`);

// console.log("================================================");

// const todosB = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];
// for (let i = 0; i < todosB.length; i++) {
//   console.log(`${i}번째 할 일 : ${todosB[i]}`);
// }
// console.log("================================================");

// const todosC = ["우유 구매", "업무 메일 확인하기", "필라테스 수업"];
// for (let i = todosC.length - 1; i >= 0; i--) {
//   console.log(`${i}번째 할 일 : ${todosC[i]}`);
// }
// console.log("================================================");

// // ! while 반복문
// // while(불 표현식){
// //   문장
// // }

// // let i = 0;
// // while (true) {
// //   alert(`${i}번째 반복입니다.`);
// //   i = i + 1;
// // }

// // let i = 0;
// // while (confirm("계속 진행하시겠습니까?")) {
// //   alert(`${i}번째 반복입니다.`);
// //   i = i + 1;
// // }

// // let i = 0;
// // const array = [1, 2, 3, 4, 5];

// // while (i < array.length) {
// //   console.log(`${i}: ${array[i]}`);
// //   i++;
// // }

// // for (let i = 0; true; i++) {
// //   alert(i + "번째 반복문입니다.");

// //   const isContinue = confirm("계속 하시겠습니까?");
// //   if (!isContinue) {
// //     break;
// //   }
// // }
// // alert("프로그램 종료");

// // let outputA = "";

// // for (let i = 0; i < 10; i++) {
// //   for (let j = 0; j < i; j++) {
// //     outputA += "*";
// //   }
// //   outputA += "\n";
// // }

// // console.log(outputA);

// let outputB = "";

// for (let i = 1; i < 15; i++) {
//   for (let j = 15; j > i; j--) {
//     outputB += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     outputB += "*";
//   }
//   outputB += "\n";
// }
// console.log(outputB);

// console.log("================================================");

// const arrayD = [];
// for (let i = 0; i < 3; i++) {
//   arrayD.push(i + 1) * 3;
// }
// console.log(arrayD);

// console.log("================================================");

// let outputD = 1;
// for (i = 1; i <= 100; i++) {
//   outputD *= i;
// }

// console.log(`1~100의 숫자를 모두 곱하면 ${outputD}입니다.`);

// console.log("================================================");

// let outputE = "";
// const size = 5;

// for (let i = 0; i <= size; i++) {
//   for (let j = size; j > i; j--) {
//     outputE += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     outputE += "*";
//   }
//   outputE += "\n";
// }
// for (let i = size - 1; i > 0; i--) {
//   for (let j = size; j > i; j--) {
//     outputE += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     outputE += "*";
//   }
//   outputE += "\n";
// }

// console.log(outputE);

// console.log("================================================");

// let output = "";

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < i; j++) {
//     output += "*";
//   }
//   output += "\n";
// }
// console.log(output);

let output = "";
const size = 5;

for (let i = 1; i < size; i++) {
  for (let j = size; j > i; j--) {
    output += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    output += "*";
  }
  output += "\n";
}
for (let i = size - 1; i > 0; i--) {
  for (let j = size; j > i; j--) {
    output += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);
