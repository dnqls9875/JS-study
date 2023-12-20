const arr = "안녕하세요";
console.log(arr[2]); // 하

console.log(arr[arr.length - 1]); // 요

const array = [273, "String", true, function () {}, {}, [273, 103]];
console.log(array);

console.log("================================================");

const numbers = [273, 52, 103, 32];
console.log(numbers[0]); // 273
console.log(numbers[1]); // 52
console.log(numbers[1 + 1]); // 103
console.log(numbers[1 + 2]); // 32

console.log("================================================");

const fruits = ["배", "사과", "키위", "바나나"];
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

console.log("================================================");

// 배열 뒤 push() 뒤에 내용 추가
const todos = ["우유 구매", "업부 메일 확인하기", "필라테스 수업"];
console.log(todos);

console.log(todos.push("붕어빵 사러가기"));
console.log(todos.push("집 와서 가계부 작성하기"));

console.log(todos);

console.log("================================================");

// 인덱스 사용해 배열 뒷부분에 요소 추가하기
const fruitsA = ["사과", "배", "바나나"];
fruitsA[10] = "귤";

console.log(fruitsA);

console.log("================================================");

const fruitsB = ["사과", "배", "바나나"];
fruitsB[fruitsB.length] = "귤";
console.log(fruitsB);

console.log("================================================");

const itemsA = ["사과", "배", "바나나"];
itemsA.splice(1, 1);
console.log(itemsA);

console.log("================================================");

// indexOf 메서드를 사용 값의 위치 추출한 뒤 splice 메서드 사용 제거
const itemsB = ["사과", "배", "바나나"];
const index = itemsB.indexOf("바나나");
console.log(index);
itemsB.splice(index, 1);
console.log(itemsB);
console.log(itemsB.indexOf("바나나"));

console.log("================================================");

const itemsE = ["사과", "배", "바나나", "귤", "귤"];
console.log(itemsE.filter((item) => item !== "귤"));

console.log("================================================");

const itemD = ["사과", "귤", "바나나", "오렌지"];
console.log(itemD.splice(1, 0, "양파"));
console.log(itemD);

console.log("================================================");

const a = "안녕";
const b = "하세요";
const c = a + b;

console.log(c);

console.log("================================================");

const arrayA = ["사과", "배", "바나나"];
arrayA.push("귤");

console.log(arrayA);
