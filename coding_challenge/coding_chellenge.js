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
let BMI_DATA = [
  {
    fullname: "John",
    mass: 60, //using undefined because no data input yet
    height: 170, //using undefined because no data input yet
  },
  {
    fullname: "Mark",
    mass: 65, //using undefined because no data input yet
    height: 180, //using undefined because no data input yet
  },
];
function calculation() {
  let resultBMI = [];
  for (let i = 0; i < BMI_DATA.length; i++) {
    let { fullname } = BMI_DATA[i];
    let data = BMI_DATA[i];
    data.calBMI = function () {
      return (this.mass / (this.height / 100) ** 2).toFixed(2);
    };
    data.BMI = data.calBMI();
    resultBMI.push(data.BMI);
  }
  const johnResult = resultBMI[0];
  const markResult = resultBMI[1];
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
