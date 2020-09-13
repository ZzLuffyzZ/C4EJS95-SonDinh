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
let manyQuizzes = [
  {
    question: "Name the year?",
    choices: [2017, 2018, 2019, 2020],
    correct: "d",
  },
  {
    question: "Highest number?",
    choices: [101012, 220, 111, 300],
    correct: "a",
  },
  {
    question: "Lowest",
    choices: [101012, 220, 111, 300],
    correct: "c",
  },
  {
    question: "Int number?",
    choices: [2.1, 220, 11.1, 39.3],
    correct: "b",
  },
];

//Part 1.4 -> Part 1.8
function validateInput(USER_ANSWER, RAND_INDEX, question, choices) {
  const validate = ["a", "b", "c", "d"];
  while (validate.indexOf(USER_ANSWER) < 0) {
    USER_ANSWER = prompt(
      `${question}\nA. ${choices[0]}\nB. ${choices[1]}\nC. ${choices[2]}\nD. ${choices[3]}`
    ).toLowerCase();
  }
}
function randomQuiz() {
  for (let i = 0; i < manyQuizzes.length; i++) {
    const RAND_INDEX = randomInRange(0, manyQuizzes.length - 1);
    const { question, choices } = manyQuizzes[RAND_INDEX];
    let USER_ANSWER = prompt(
      `${question}\nA. ${choices[0]}\nB. ${choices[1]}\nC. ${choices[2]}\nD. ${choices[3]}`
    ).toLowerCase();
    manyQuizzes.splice(RAND_INDEX, 1);
    //user input validation
    validateInput(USER_ANSWER, RAND_INDEX, question, choices);
    if (USER_ANSWER === manyQuizzes[RAND_INDEX].correct) {
      alert("Bravo!!!");
    } else {
      alert("Good luck next time");
    }
  }
  if (manyQuizzes.length === 0) {
    alert("We are out of questions :c");
  }
}
randomQuiz();
