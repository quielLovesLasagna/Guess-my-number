"use strict";

// Elements
const resetBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const guessNum = document.querySelector(".number");
const inputNum = document.querySelector(".guess");
const msg = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const body = document.querySelector("body");
let randomNum = Math.floor(Math.random() * 20) + 1;
// End of Elements

// Initial score and highscore
let userScore = 20;
let userHighScore = 0;

// Functions
// play the game
const play = () => {
  const userGuess = +inputNum.value;
  if (!userGuess) {
    msg.textContent = "No number!";
  } else if (userGuess === randomNum) {
    guessNum.textContent = randomNum;
    msg.textContent = "Correct Number!";
    body.style.backgroundColor = "#60b347";
    guessNum.style.width = "30rem";

    if (userScore > userHighScore) {
      userHighScore = userScore;
      highScore.textContent = userHighScore;
    }
  } else if (userGuess !== randomNum) {
    if (userScore > 1) {
      msg.textContent = userGuess > randomNum ? "Too high!" : "Too low!";
      userScore--;
      score.textContent = userScore;
    } else {
      msg.textContent = "You lost the game!";
      score.textContent = 0;
      body.style.backgroundColor = "red";
    }
  }
};

// reset the game
const reset = () => {
  userScore = 20;
  randomNum = Math.floor(Math.random() * 20) + 1;
  guessNum.textContent = "?";
  inputNum.value = "";
  score.textContent = userScore;
  msg.textContent = "Start guessing...";
  body.style.backgroundColor = "#222";
  guessNum.style.width = "15rem";
};
// End of Functions

// Event handlers
// play game when user clicks check button
checkBtn.addEventListener("click", play);

// reset game when user click again button
resetBtn.addEventListener("click", reset);
// End of Event handlers
