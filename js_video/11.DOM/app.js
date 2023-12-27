const title = document.getElementById("title");
console.log(title);

const titleClass = document.getElementsByClassName("title_class");
console.log(titleClass);

const h2 = document.getElementsByTagName("h2");
console.log(h2);

const titleH2 = document.querySelector("h2");
titleH2.innerText = "안녕하세요";
titleH2.style.color = "blue";

// console.log(titleH2);

const li = document.querySelectorAll("li");
console.log(li);

const titleA = document.createElement("h1");
const body = document.querySelector("body");
body.appendChild(titleA);

titleA.innerText = "새로운 친구에요!";
titleA.style.color = "red";
