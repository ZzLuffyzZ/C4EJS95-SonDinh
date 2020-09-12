//Coding challenge 2
function johnCal() {
  const resBills = [124, 48, 268];
  let tipsMoney = [];
  let finalPaid = [];

  for (let i = 0; i < 3; i++) {
    if (resBills[i] < 50) {
      tipsMoney[i] = (resBills[i] * 2) / 10;
    } else if (resBills >= 50 && resBills <= 200) {
      tipsMoney[i] = (resBills[i] * 15) / 100;
    } else {
      tipsMoney[i] = (resBills[i] * 1) / 10;
    }
    finalPaid[i] = resBills[i] + tipsMoney[i];
  }

  console.log(`Tips money: ${tipsMoney}`);
  console.log(`Final paid: ${finalPaid}`);
}
johnCal();
//Coding challenge 4