const obj = {
  x: 10,
  y: 20,
  z: 30,
};

// const { x: one, y: two, z: three } = obj;
const { x, y, z } = obj;
// const { x: hi, y: hello, z: nihao } = objA;

// console.log(x, y, z);
// console.log(hi, hello, nihao);

// function sum(obj) {
//   return obj.x + obj.y + obj.z;
// }

// function sum() {
//   return one + two + three;
// }

function sum(oj) {
  return x + y + z;
}

console.log(sum(obj));
