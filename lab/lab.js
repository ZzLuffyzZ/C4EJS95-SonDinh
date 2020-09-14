// //Part 1.1
// function randomNum() {
//   console.log(Math.random().toFixed(2));
// }
// randomNum();

// //Part 1.2
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const array = [2, 5, 6, 9, 10];
// function randomPick() {
//   console.log(array[randomInRange(0, array.length - 1)]);
// }
// randomPick();

//Part 1.3
// let manyQuizzes = [
//   {
//     question: "Name the year?",
//     choices: { a: 2017, b: 2018, c: 2019, d: 2020 },
//     rightChoice: "d",
//   },
//   {
//     question: "Highest number?",
//     choices: { a: 101012, b: 220, c: 111, d: 300 },
//     rightChoice: "a",
//   },
//   {
//     question: "Lowest",
//     choices: { a: 101012, b: 220, c: 111, d: 300 },
//     rightChoice: "c",
//   },
//   {
//     question: "Int number?",
//     choices: { a: 2.1, b: 220, c: 11.1, d: 39.3 },
//     rightChoice: "b",
//   },
// ];

// //Part 1.4 -> Part 1.7
// function validateInput(USER_ANSWER, RAND_INDEX, question, choices) {
//   const validate = ["a", "b", "c", "d"];
//   while (validate.indexOf(USER_ANSWER) < 0) {
//     USER_ANSWER = prompt(
//       `${question}\nA. ${choices.a}\nB. ${choices.b}\nC. ${choices.c}\nD. ${choices.d}`
//     ).toLowerCase();
//   }
// }
// function randomQuiz() {
//   let countPoint = 0;
//   for (let i = 0; i < 4; i++) {
//     const RAND_INDEX = randomInRange(0, manyQuizzes.length - 1);
//     console.log(RAND_INDEX);
//     const { question, choices } = manyQuizzes[RAND_INDEX];
//     let USER_ANSWER = prompt(
//       `${question}\nA. ${choices.a}\nB. ${choices.b}\nC. ${choices.c}\nD. ${choices.d}\n`
//     ).toLowerCase();
//     //user input validation
//     console.log(RAND_INDEX);
//     validateInput(USER_ANSWER, RAND_INDEX, question, choices);
//     if (USER_ANSWER === manyQuizzes[RAND_INDEX].rightChoice) {
//       alert("Bravo!!!");
//       countPoint++;
//     } else {
//       alert("Good luck next time");
//     }
//     if (manyQuizzes.length === 0) {
//       alert("We are out of questions :c");
//     }
//     manyQuizzes.splice(RAND_INDEX, 1);
//   }
//   alert(`Your point(s) are: ${countPoint}`);
//   if (manyQuizzes.length === 0) {
//     alert("We are out of questions :c");
//   }
// }
// randomQuiz();

//Part 3
//part 3.1
const listOfWords = [
  "to",
  "be",
  "that",
  "of",
  "elon",
  "to",
  "this",
  "now",
  "back",
  "cool",
  "hey",
  "love",
  "of",
  "life",
  "that",
  "rain",
  "summer",
  "color",
  "now",
  "of",
  "hat",
  "late",
  "sorry",
  "my",
  "team",
];
let wordsArr = [];
const ARRAY_LENGTH = listOfWords.length;
for (let i = 0; i < ARRAY_LENGTH; i++) {
  let wordCheck = listOfWords[i];
  if (!wordsArr[wordCheck]) {
    //check if the word is in wordsArr or not
    wordsArr[wordCheck] = 1; //if false then add the word and set count = 1
  } else {
    wordsArr[wordCheck]++; //if true then count it
  }
}
for (let word in wordsArr) {
  console.log(`${word}: ${wordsArr[word]}`);
}

//Part 3.2
console.log("-----------------------------------------------------------");
const inventory = [
  {
    name: "HP Envy 13aq",
    price: 21000,
    brand: "HP",
    quantity: 5,
  },
  {
    name: "Dell XPS 9370",
    price: 30000,
    brand: "Dell",
    quantity: 1,
  },
  {
    name: "Dell Inspiron 3567",
    price: 9300,
    brand: "Dell",
    quantity: 12,
  },
  {
    name: "Dell Latitude E5450",
    price: 8600,
    brand: "Dell",
    quantity: 2,
  },
  {
    name: "Asus Zenbook",
    brand: "Asus",
    price: 20000,
    quantity: 4,
  },
  {
    name: "HP Pavilion",
    brand: "HP",
    price: 14000,
    quantity: 7,
  },
];
let inventoryByBrand = {};
const LENGTH = inventory.length;
for (let i = 0; i < LENGTH; i++) {
  const { brand } = inventory[i],
    brandName = brand.toLowerCase();
  if (inventoryByBrand[brandName]) {
    inventoryByBrand[brandName].push(inventory[i]);
  } else {
    inventoryByBrand[brandName] = [inventory[i]];
  }
}
console.log(inventoryByBrand);
//part 3.3 -> 3.7
const INPUT = prompt("Which brand?").toLowerCase();
let productsList = "",
  totalValue = 0;
for (let i = 0; i < inventoryByBrand[INPUT].length; i++) {
  const { name, price, quantity } = inventoryByBrand[INPUT][i];
  productsList += `${name}\n`;
  totalValue += quantity * price;
}
if (inventoryByBrand[INPUT]) {
  alert(
    `There are(is) ${
      inventoryByBrand[INPUT].length
    } generation(s) of ${INPUT.toUpperCase()} in inventory:\n\n${productsList}\nWith total value: ${(
      totalValue * 1000
    ).toLocaleString("da-DK", { style: "currency", currency: "VND" })}`
  );
} else {
  alert("No brand match that input!");
}
