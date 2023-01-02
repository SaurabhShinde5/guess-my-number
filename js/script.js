'use strict';

const check = document.querySelector('.check');
const retry = document.querySelector('.retry');
let message = document.querySelector('.message');
let scoreNum = document.querySelector('.score');
const body = document.querySelector('body');
let num = document.querySelector('.number');
let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 You guessed the number';
    body.style.backgroundColor = '#60b347';
    num.textContent = secretNumber;
    num.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? '📈 Too high' : '📉 Too Low';
      score--;
      scoreNum.textContent = score;
    } else {
      message.textContent = '💥 You lost the game.';
      scoreNum.textContent = 0;
      body.style.backgroundColor = 'crimson';
    }
  }
});
retry.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  message.textContent = 'Start guessing...';
  scoreNum.textContent = 20;
  body.style.backgroundColor = '#222';
  num.style.width = '15rem';
  num.textContent = '?';
  document.querySelector('.guess').value = '';
});
