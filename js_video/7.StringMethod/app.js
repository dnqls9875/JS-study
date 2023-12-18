// !! 메소드를 외우는게 아니라 그냥 이런 것들이 존재한다는 것 정도만 알아두고
// !! 나중에 사용할 때는 MDN 사이트를 통해서 활용하는 방법을 구글링 하는 정도로 익혀두자.

// ^ 문자열 메서드

// & 1. 대소문자 변환 메서드

const str = "Hello World!";

console.log(str.toUpperCase()); // 대문자 변환
console.log(str.toLowerCase()); // 소문자 변환

console.log("================================================");

// & 2. 문자열의 공백을 제거하는 메서드

const strB = "          Hello World !haha          ";
console.log(strB);
console.log(strB.trim()); // 문자열의 앞쪽과 뒷쪽의 공백을 제거
console.log(strB.trimStart()); // 문자열의 앞쪽의 공백을 제거
console.log(strB.trimEnd()); // 문자열의 뒷쪽의 공백을 제거

console.log("================================================");

// & 3. 기존의 문자열 가공 어떤 새로운 문자열을 생성하는 메서드 => 새로운 문자열을 반환하겠다는 의미는 원본객체는 변하지 않는다는 뜻
// & 3-1. repeat() => 지정한 인자(인수) 횟수 만큼 반복

const strC = "Hello";

console.log(strC.repeat(3)); // 문자열 'Hello' 3번 반복하겠다는 뜻
console.log(strC); // 원본객체는 변하지 않았다

console.log("================================================");

// & 3-2. padStart() / padEnd() => 패딩을 넣어주는 메서드
console.log(strC.padStart(10, "_")); // 첫번째 인자 길이 / 두번째 인자 들어갈 문자열 => 앞쪽에 지정한 문자열
console.log(strC.padEnd(10, "_")); // 첫번째 인자 길이 / 두번째 인자 들어갈 문자열 => 뒷쪽에 지정한 문자열

console.log("================================================");

// & 3-3. 문자열에서 특정부분을 검색하는 메서드
const strD = "안녕하세요. 이룸코딩입니다!";

// ! indexOf => 찾으려는 문자열 키워드의 시작 인덱스 번호를 알려준다.
console.log(strD.indexOf("이룸")); // 7
console.log(strD.indexOf("한국")); // 문자열에 없는 문자를 반환할때는 -1 를 반환한다.

console.log("================================================");

// ! includes => 찾으려는 키워드가 있으면 true / 없으면 false를 반환하는 메서드
console.log(strD.includes("이룸")); // true
console.log(strD.includes("한국")); // false

console.log("================================================");

// ! startWith / endWith => 문자열이 주어진 문자열로 시작하거나 끝나는지 여부를 검색하는 메서드
console.log(strD.startsWith("안녕")); // true
console.log(strD.endsWith("안녕")); // false

console.log("================================================");

// & 4. 문자열을 다양한 방법으로 수정하는 메서드
// & 4-1. replace() => 주어진 패턴과 일치하는 첫번째 부분을 주어진 문자열로 교체해서 새로운 문자열로 반환하는 메서드

const strE = "안녕하세요. 이룸코딩입니다! 이룸코딩 이룸코딩 이룸코딩";

console.log(strE.replace("이룸코딩", "개발자 이우빈")); // => 첫번째 인자(인수)에 원본 문자 , 두번째 인자(인수)에 교체할 문자 => 지정한 첫번째 문자열 변경
console.log(strE.replaceAll("이룸코딩", "개발자 이우빈")); // => 첫번째 인자(인수)에 원본 문자 , 두번째 인자(인수)에 교체할 문자 => 지정한 모든 문자열 변경

console.log("================================================");

// & 4-2. subString() => 주어진 시작 인덱스 부터 주어진 종료 인덱스의 이전 인덱스까지를 새로운 부분 문자열로 반환하는 메서드

const strF = "안녕하세요. 이룸코딩입니다!";

console.log(strF.substring(0, 5));

console.log("================================================");

// & 4-3. split() / slice()

const days = "월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일";

console.log(days.split(","));
console.log("================================================");

const strH = "안녕하세요. 이룸코딩입니다!";

console.log(strH.slice(3)); // 3번 인덱스 앞은 자르고 뒤에 세요 부터 뒤에 내용 인덱스 반환
console.log(strH.slice(3, 5)); // 3번 시작에서 5번 인덱스 이전 4번인덱스 까지인 세요만 반환 인덱스 반환
console.log(strH.slice(-3)); // 음수는(-) 문자열 뒤에서 부터 읽는다.
