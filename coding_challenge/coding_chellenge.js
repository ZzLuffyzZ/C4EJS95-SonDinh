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
const BMI_DATA = [
  {
    fullname: "John",
    mass: 40,
    height: 160,
    calBMI: function () {
      return (this.mass / this.height ** 2).toFixed(2);
    },
  },
  {
    fullname: "Mark",
    mass: 60,
    height: 190,
    calBMI: function () {
      return (this.mass / this.height ** 2).toFixed(2);
    },
  },
];
function calculation() {
  for (let i = 0; i < BMI_DATA.length; i++) {
    const { fullname } = BMI_DATA[i];
    do {
      BMI_DATA[i].mass = prompt(`${fullname} enter your mass`) - 0;
      BMI_DATA[i].height = prompt(`${fullname} enter your height`) / 100;
    } while (
      BMI_DATA[i].mass !== undefined &&
      BMI_DATA[i].height !== undefined
    );
  }
  const johnResult = BMI_DATA[0].calBMI();
  const markResult = BMI_DATA[1].calBMI();
  if (johnResult > markResult) {
    alert(
      `${BMI_DATA[0].fullname} has the highest BMI: ${BMI_DATA[0].calBMI()}`
    );
  } else if (johnResult < markResult) {
    alert(
      `${BMI_DATA[1].fullname} has the highest BMI: ${BMI_DATA[1].calBMI()}`
    );
  } else {
    alert(`Both have the same BMI: ${BMI_DATA[0].calBMI()}`);
  }
}

calculation();
