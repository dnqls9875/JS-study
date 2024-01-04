const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const uesrChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];

const show = (user, computer, result) => {
  uesrChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = result;
};

const game = (user, computer) => {
  let message;
  if (user === computer) {
    message = "무승부 입니다.";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자의 승리!";
        break;

      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터의 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const handler = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", handler);
});
