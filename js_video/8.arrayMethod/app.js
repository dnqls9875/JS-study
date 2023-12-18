const arr = [1, 2, 3, 4, 5];

// & 1. push => 원본 배열 뒤에 끝부분 인자 추가
arr.push(6); // 6
arr.push(7, 8); // 7,8
console.log(arr); // [1,2,3,4,5,6,7,8]

console.log("================================================");

// & 2. pop => 원본 배열 뒤에 끝부분 인자 제거

arr.pop(); // 8
arr.pop(); // 7
console.log(arr); // [1,2,3,4,5,6]

console.log("================================================");

// & 3. unshift => 원본 배열 앞에 첫부분 인자 추가
arr.unshift(10, 20, 30); // [10, 20, 30]

console.log(arr); // [10, 20, 30, 1, 2, 3, 4, 5, 6]

console.log("================================================");

// & 4. shift => 원본 배열 앞부분 인자 제거
arr.shift(); // 10
arr.shift(); // 20;
console.log(arr); // [30, 1, 2, 3, 4, 5, 6]

console.log("================================================");

// & 5. forEach => 주어진 함수를 배열 요소에 각각 실행하는 메서드
const arrB = [1, 2, 3, 4, 5];

// function print(number, index) {
//   console.log(`${index} 위치의 요소 : ${number}`);
// }

const print = (number, index) => {
  console.log(`${index} 위치의 요소 : ${number}`);
};

arrB.forEach(print);

console.log("================================================");

// & 6. map
const newArr = arrB.map((number, index) => number + 1);
console.log(newArr);

console.log("================================================");

// & 7. includes (배열 검색)
const arrC = ["hello", "world"];

console.log(arrC.includes("hello"));
console.log(arrC.includes("안녕"));

console.log("================================================");

// & 8. find => 조건을 만족하는 가장 첫번째 값만 리턴
const arrD = [1, 2, 3, 4, 5];

console.log(arrD.find((number) => number > 3)); // 4

console.log("================================================");

// & 9. findIndex => 값을 리턴해주는게 아니라 첫번째 인덱스 값만 리턴

console.log(arrD.findIndex((number) => number > 3)); // 3
console.log(arrD.findIndex((number) => number > 6)); // -1 => 조건에 부합하면 -1 리턴

console.log("================================================");

// & 10. 배열 요소를 수정하는 메서드
// & 10-1. fill

const arrE = [1, 2, 3, 4, 5];
// arrE.fill(10, 1, 3); // 2
// console.log(arrE); // [ 1, 2, 3, 10, 10 ]

// & 10-2. slice
console.log(arrE.slice(2, 4)); // [3, 4]

console.log("================================================");

// & 10-3. splice
arrE.splice(2, 1, 999); // 인덱스 2번인 값 3만 제거 => 제거한 위치에 999 요소를 추가
console.log(arrE);

console.log("================================================");

// & 11. join
const arrF = ["hello", "world", "hi", "wow"];
console.log(arrF.join(";")); // 비어놓으면 자동으로 , (쉼표)가 반환 => (';')하면 쉼표차리에 ; 반환

console.log("================================================");

// & 12. concat
const numbers = [123, 456];

console.log(arrF.concat(numbers)); // arrF 배열과 numbers 배열이 합쳐진다.
console.log(arrF.concat("aaaa", "bbbb", "cccc")); // 임의로 우리가 배열을 입력할 수도 있다.

console.log("================================================");

// & 13. filter => 참을 필터링해서 새로운 배열을 반환

const arrG = [1, 2, 3, 4, 5];

console.log(arrG.filter((number) => number > 3)); // [ 4, 5 ]

console.log("================================================");

// & 14. reduce =>

const arrH = [1, 2, 3, 4, 5];
const reducer = (acc, value) => acc + value;

console.log(arrH.reduce(reducer)); // 다 더하는 거 => 15
console.log(arrH.reduce(reducer, 10)); // acc 자리에 10 넣고 value에 10 + 1 / 11 + 2 / 13 + 3 / 16 + 4 / 20 + 5 => 25
