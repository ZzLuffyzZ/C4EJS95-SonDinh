// start of counter
let counter = 0;
const counterDisplay = document.getElementById("counter-display");
const countDown = document.getElementById("count-down");
const countUp = document.getElementById("count-up");

counterDisplay.innerHTML = counter;
countDown.addEventListener("click", () => {
  getDisplay.innerHTML--;
});
countUp.addEventListener("click", () => {
  counterDisplay.innerHTML++;
});
//end of counter
//start of timer
let timeLeft = 0;
const timerInput = document.getElementById("timer-input");
const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  timeLeft = timerInput.value;
});
//end of timer
