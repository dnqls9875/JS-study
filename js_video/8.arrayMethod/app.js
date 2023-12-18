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