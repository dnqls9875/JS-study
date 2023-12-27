// ! 배열 구조분해
const arr = [1, 2, 3, 4, 5];

// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

// const [one, two, three] = arr;

// console.log(one, two, three);

console.log("================================");

// ! 객체 구조분해

const obj = {
  x: 10,
  y: 20,
};

// 객체 키 값에 변수를 지정 할 수도 있음.
const { x, y } = obj;
const { x: hello, y: world } = obj;
console.log(x, y); // 10 , 20
console.log(hello, world); // 10, 20

console.log("================================");

const obj2 = {
  one: {
    two: {
      three: "Bingo",
    },
  },
};

const {
  one: {
    two: { three: hi },
  },
} = obj2;

// console.log(three);
console.log(hi);

console.log("================================");

const obj3 = {
  x: 10,
  y: 20,
};

// ^ 주석은 대체가 가능한 것들

// function sum(obj) {
//   return obj.x + obj.y;
// }

function sum({ x, y }) {
  return x + y;
}

function sum({ x: hello, y: world }) {
  return hello + world;
}

console.log(sum(obj3));
console.log(sum(obj3));

console.log("================================");

// & 구조분해할당을 활용 할 수 있는 몇가지 예제

// * 1. 변수에 값을 교환

let a = 123;
let b = 456;

const temp = ([a, b] = [b, a]);
console.log(temp);

console.log("================================");

// * 2. 구조분해할당에 기본값 저장
// const [c, d] = [10]; // 10 undefined
const [c, d = 20] = [10]; // 10 20
console.log(c, d);

console.log("================================");

// * 3. 중간값 생략 구조분해할당 하는 방법

// const arrA = [1, 2, 3, 4, 5];
// const [one, , three, , five] = arrA;

// console.log(one, three, five); // 1 3 5

console.log("================================");

const arrB = [1, 2, 3, 4, 5];
const [one, two, ...others] = arrB;

console.log(one, two, others); // 1 2 3 4 5

const peoples = ["우빈", "주현", "일오", "❤", "정아"];
const [oneP, twoP, ...othersP] = peoples;
console.log(oneP, twoP, othersP);
