let counter = 0;
const getDisplay = document.getElementById("display");
const getCountDown = document.getElementById("count_down");
const getCountUp = document.getElementById("count_up");

getCountDown.addEventListener("click", () => {
  getDisplay.innerHTML--;
});
getCountUp.addEventListener("click", () => {
  getDisplay.innerHTML++;
});
