let myArr = [1, 5, 3, 7, 14, 15, 2, 9];
let swapFlag = false;

for (let i = 0; i < myArr.length; i++) {
  for (let j = i + 1; j < myArr.length; j++) {
    if (myArr[i] > myArr[j]) {
      [myArr[i], myArr[j]] = [myArr[j], myArr[i]];
      swapFlag = true;
    }
    if (!swapFlag) {
      break;
    }
  }
}
console.log(...myArr);
