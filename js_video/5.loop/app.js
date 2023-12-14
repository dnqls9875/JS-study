// for (i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     break;
//   }
//   console.log(i);
// }

// ! 7만 빼고 출력이 됨
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    continue;
  }
  console.log(i);
}

console.log("================================================================");

// ! for of문 (배열, 문자열)

const arr = [1, 2, 3];
for (const i of arr) {
  console.log(i);
}

console.log("================================================================");

// ! while문
// let i = 0;
// while (i < 10) {
//   console.log(i++);
// }

// ! do while문
let i = 0;
do {
  console.log(i++);
} while (i < 10);
