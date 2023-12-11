// const input = Number(prompt("숫자를 입력하세요.", ""));

// // 조건문
// switch (input % 2) {
//   case 0:
//     alert("짝수입니다.");
//     break;
//   case 1:
//     alert("홀수입니다.");
//     break;
//   default:
//     alert("숫자가 아닙니다.");
//     break;
// }

// const date = new Date();
// const hour = date.getHours();

// switch (true) {
//   case hour < 11:
//     alert("아침 먹을 시간입니다.");
//     break;
//   case hour < 15:
//     alert("점심 먹을 시간입니다.");
//     break;
//   default:
//     alert("저녁 먹을 시간입니다.");
// }

// // ! 조건부 연산자
// const input = prompt("숫자를 입력해주세요.", "");
// const number = Number(input);

// const result = number >= 0 ? "0 이상의 숫자입니다." : "0보다 작은 숫자입니다.";
// alert(result);

// const 입력 = prompt("정수를 입력해주세요.", "");
// const 끝자리 = 입력[입력.length - 1];

// if (
//   끝자리 === "0" ||
//   끝자리 === "2" ||
//   끝자리 === "4" ||
//   끝자리 === "6" ||
//   끝자리 === "8"
// ) {
//   alert(`${입력}은 짝수입니다.`);
// } else {
//   alert(`${입력}은 홀수입니다.`);
// }

// const 입력 = prompt("정수를 입력해주세요.", "");
// const 숫자 = Number(입력);

// if (숫자 % 2 === 0) {
//   alert(`${입력}은 짝수입니다.`);
// } else {
//   alert(`${입력}은 홀수입니다.`);
// }

// const score = Number(prompt("학점을 입력해주세요", "학점"));

// if (score === 4.5) {
//   alert("신");
// } else if (4.2 <= score) {
//   alert("교수님의 사랑");
// } else if (3.5 <= score) {
//   alert("현 체제의 수호자");
// } else if (2.8 <= score) {
//   alert("일반인");
// } else if (2.3 <= score) {
//   alert("일탈을 꿈꾸는 소시민");
// } else if (1.75 <= score) {
//   alert("오락문화의 선구자");
// } else if (1.0 <= score) {
//   alert("불가촉천민");
// } else if (0.5 <= score) {
//   alert("자벌레");
// } else if (0 < score) {
//   alert("플랑크톤");
// } else {
//   alert("시대를 앞서가는 혁명의 씨앗");
// }

// const rawInput = prompt("태어난 해를 입력해주세요.", "태어난 년도");
// const year = Number(rawInput);
// const e = year % 12;

// let result;

// if (e === 0) {
//   result = "원숭이";
// } else if (e === 1) {
//   result = "닭";
// } else if (e === 2) {
//   result = "개";
// } else if (e === 3) {
//   result = "돼지";
// } else if (e === 4) {
//   result = "쥐";
// } else if (e === 5) {
//   result = "소";
// } else if (e === 6) {
//   result = "호랑이";
// } else if (e === 7) {
//   result = "토끼";
// } else if (e === 8) {
//   result = "용";
// } else if (e === 9) {
//   result = "뱀";
// } else if (e === 10) {
//   result = "말";
// } else if (e === 11) {
//   result = "양";
// }
// alert(`${year}년에 태어났다면 ${result} 띠입니다.`);

// const rawInput = prompt("태어난 해를 입력해주세요.", "태어난년도");
// const year = Number(rawInput);
// const tti = "원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양".split(
//   ","
// );

// alert(`${year}년에 태어났다면 ${tti[year % 12]}띠입니다.`);

// const rawInput = prompt("태어난 해를 입력해주세요.", "");
// const year = Number(rawInput);
// const e = year % 12;

// let result;

// switch (true) {
//   case e === 0:
//     result = "원숭이";
//     break;
//   case e === 1:
//     result = "닭";
//     break;
//   case e === 2:
//     result = "개";
//     break;
//   case e === 3:
//     result = "돼지";
//     break;
//   case e === 4:
//     result = "쥐";
//     break;
//   case e === 5:
//     result = "소";
//     break;
//   case e === 6:
//     result = "호랑이";
//     break;
//   case e === 7:
//     result = "토끼";
//     break;
//   case e === 8:
//     result = "용";
//     break;
//   case e === 9:
//     result = "뱀";
//     break;
//   case e === 10:
//     result = "말";
//     break;
//   case e === 11:
//     result = "양";
//     break;
// }

// switch (e) {
//   case 0:
//     result = "원숭이";
//     break;
//   case 1:
//     result = "닭";
//     break;
//   case 2:
//     result = "개";
//     break;
//   case 3:
//     result = "돼지";
//     break;
//   case 4:
//     result = "쥐";
//     break;
//   case 5:
//     result = "소";
//     break;
//   case 6:
//     result = "호랑이";
//     break;
//   case 7:
//     result = "토끼";
//     break;
//   case 8:
//     result = "용";
//     break;
//   case 9:
//     result = "뱀";
//     break;
//   case 10:
//     result = "말";
//     break;
//   case 11:
//     result = "양";
//     break;
// }

// alert(`${year}년에 태어났다면 ${result} 띠입니다.`);

const rawInput = prompt("태어난 해를 입력해주세요.", "");
const year = Number(rawInput);

let 간;
let e = year % 10;
if (e === 0) {
  간 = "경";
} else if (e === 1) {
  간 = "신";
} else if (e === 2) {
  간 = "임";
} else if (e === 3) {
  간 = "계";
} else if (e === 4) {
  간 = "갑";
} else if (e === 5) {
  간 = "을";
} else if (e === 6) {
  간 = "병";
} else if (e === 7) {
  간 = "정";
} else if (e === 8) {
  간 = "무";
} else if (e === 9) {
  간 = "기";
}

let 띠;
let tti = year % 12;
if (tti === 0) {
  띠 = "신";
} else if (tti === 1) {
  띠 = "유";
} else if (tti === 2) {
  띠 = "술";
} else if (tti === 3) {
  띠 = "해";
} else if (tti === 4) {
  띠 = "자";
} else if (tti === 5) {
  띠 = "축";
} else if (tti === 6) {
  띠 = "인";
} else if (tti === 7) {
  띠 = "묘";
} else if (tti === 8) {
  띠 = "진";
} else if (tti === 9) {
  띠 = "사";
} else if (tti === 10) {
  띠 = "오";
} else if (tti === 11) {
  띠 = "미";
}

alert(`${year}년은 ${간}${띠}년입니다.`);
