// ! 함수
function food(book) {
  return `${book}볶음밥`;
}

console.log(food("새우"));
console.log(food("김치"));
console.log(food("계란"));

function square(number, number2) {
  return number * number2;
}

console.log(square(4, 2));
console.log(square(3, 9));

console.log("================================");

// ! 객체
var person = {
  name: "Lee",
  gender: "male",
  sayHello: function () {
    console.log("Hi My name is " + this.name);
  },
};

console.log(typeof person); // object
person.sayHello(); // Hi My name is Lee

person.name = "Kim"; // 객체 동적 변경
person.gender = "Female"; // 객체 동적 변경
person.hobby = "soccer"; // 객체 동적 생성

console.log(person);
person.sayHello(); // Hi My name is Kim

console.log("================================");

// ! 배열
let arr = [1, 2, 3, 4, 5];
console.log(arr[1]); // 2 인덱스 1번 배열은 0부터 읽는다.
