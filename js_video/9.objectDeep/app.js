//  & for of 문  => 객체를 순환한다.

const obj = {
  x: 1,
  y: 2,
  z: 3,
};

for (key in obj) {
  console.log(key);
}

// 객체 축약 표현
const name = "이우빈";
const country = "KR";

// 축약 전
const userA = {
  name: name,
  country: country,
};

// 축약 후
const userB = {
  name,
  country,
};

console.log(name, country); // -> 이우빈 KR

// ! 메소드 축약 표현

const obj2 = {
  // greeting: function () {
  //   console.log("Hi!");
  // },
  greeting() {
    console.log("Hi!");
  },
};

obj2.greeting(); // -> Hi!

// ! 객체 프로퍼티 열거

const obj3 = {
  x: 10,
  y: 20,
  z: 30,
};

console.log(Object.keys(obj3)); // object 키들을 반환 -> [ 'x', 'y', 'z' ]

// console.log(Array.isArray(obj3));

console.log(Object.values(obj3)); // object들이 가지고 있는 값들 반환 -> [ 10, 20, 30 ]

console.log(Object.entries(obj3)); // 하나의 배열안에 또 다른 배열이 추가됨 -> [ [ 'x', 10 ], [ 'y', 20 ], [ 'z', 30 ] ]
