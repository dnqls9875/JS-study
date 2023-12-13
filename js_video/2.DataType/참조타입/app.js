// 배열
const arr = [1, 2, 3];
console.log(arr);

// 인덱스번호로 접근 할 수도 있음
console.log(arr[0]);

// 인덱스는 배열의 나열된 순서 1번 인덱스가 아닌 0번 인덱스로 시작함

// 객체 Object

const obj = {
  name: "이우빈",
  age: 28,
  job: "개발자",
};

console.log(obj);

// 배열 키 값에 접근 방법
console.log(obj.name); // 일반적인 방법
console.log(obj["name"]); // 대괄호 안에 ''문자열로 작성

// 배열 안에 배열 중첩
const arrA = [1, 2, 3, [4, 5]];
console.log(arrA);

// 배열 안에 객체 중첩
const arrB = [1, 2, 3, { name: "이우빈" }];
console.log(arrB);

// 객체 안에 배열 / 객체 안에 객체
const objA = {
  arr: [1, 2, 3],
  something: {
    name: "이도해",
  },
};

console.log(objA);
