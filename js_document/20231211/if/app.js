// if (273 < 100) {
//   alert("273 < 100 => true");
// }

// alert("종료");

// 오전 오후
// const date = new Date();
// date.getFullYear();
// date.getMonth() + 1;
// date.getDate();
// date.getHours();
// date.getMinutes();
// date.getSeconds();
// console.log(date);

// const date = new Date();
// const hour = date.getHours();

// if (hour < 12) {
//   alert("오전입니다");
// } else if (hour < 18) {
//   alert("오후입니다.");
// } else if (hour < 24) {
//   alert("저녁입니다.");
// } else {
//   alert("새벽입니다.");
// }

// const date = new Date();
// const hour = date.getHours();

// if (hour < 11) {
//   alert("아침 먹을 시간입니다.");
// } else if (hour < 15) {
//   alert("점심 먹을 시간입니다.");
// } else {
//   alert("저녁 먹을 시간입니다.");
// }

// 양수, 0, 음수 구분 프로그램
// const a = Number(prompt("숫자를 입력해주세요", ""));

// if (a > 0) {
//   alert("입력한 숫자는 양수입니다.");
// } else if (a === 0) {
//   alert("입력한 숫자는 0입니다.");
// } else {
//   alert("입력한 숫자는 음수입니다.");
// }

// 짝수 홀수 구분 프로그램
// const a = Number(prompt("숫자를 입력해주세요", ""));

// if (a % 2 === 0) {
//   alert("입력한 숫자는 짝수입니다.");
// } else {
//   alert("입력한 숫자는 홀수입니다.");
// }

//  현재 몇 월인지 확인하고, 계절 구분하는 프로그램
const a = Number(prompt("월을 입력해주세요", ""));

if (3 <= a && a <= 5) {
  alert("봄 입니다.");
} else if (6 <= a && a <= 8) {
  alert("여름 입니다.");
} else if (9 <= a && a <= 11) {
  alert("가을 입니다.");
} else {
  alert("겨울 입니다.");
}
