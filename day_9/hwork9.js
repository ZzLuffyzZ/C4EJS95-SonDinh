//Question 1:
//1.Create a Promise that resolve: return "Promise is da best" after 5 seconds.
//Take this Promise to test / consume in 2 ways
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise is da best");
//   }, 5000);
// });
//2.Use await inside an async function
// async function asyncFunc() {
//   let result = await promise;
//   console.log(`This is from async/await func: ${result}`);
// }
// asyncFunc();
//3.Use then() function
// promise.then((value) => {
//   console.log(`This is from then func: ${value}`);
// });

//Question 2:
// const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
// fetchPromise.then((connection) => {
//   console.log("connected");
//   console.log(connection);
//   const jsonPromise = connection.json();
//   console.log(jsonPromise);
// });

//Question 3:
// const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
// fetchPromise
//   .then((connection) => {
//     console.log("connected");
//     console.log(connection);
//     return connection.json();
//   })
//   .then((jsonPromise) => {
//     console.log(jsonPromise);
//   });

//Question 4:
// const randomInRange = () => {
//   return Math.random() * 10;
// };
// const x1 = randomInRange();
// if (x1 < 0) {
//   console.log("Failed: the number is smaller than 0");
// } else if (x1 > 10) {
//   console.log("Failed: the number is bigger than 10");
// } else {
//   console.log("Passed, bravo");
// }

//Question 5:
// const randomNum = (a, b) => {
//   return Math.random() * (a - b) + b;
// };
// const x2 = randomNum(4, 16);
// if (x2 < 4) {
//   console.log("Failed: the number is smaller than 4");
// } else if (x2 > 16) {
//   console.log("Failed: the number is bigger than 16");
// } else {
//   console.log("Passed, bravo");
// }

//Question 6:
// const calcDistance = (a1, b1, a2, b2) => {
//   return Math.sqrt(Math.pow(a1 - a2, 2) + Math.pow(b1 - b2, 2));
// };
// const d = calcDistance(3, 10, 0, 6);
// if (d !== 5) {
//   console.log("Failed: the calculation is wrong");
// } else {
//   console.log("Passed, bravo");
// }

//Question 7:
// fetch("http://quotes.rest/qod.json")
//   .then((jsonPromise) => {
//     return jsonPromise.json();
//   })
//   .then((quotesList) => {
//     console.log(quotesList);
//     const {
//       contents: {
//         quotes: {
//           0: { quote, author },
//         },
//       },
//     } = quotesList;
//     console.log(`${quote}\n${author}`);

//     const quoteText = document.getElementById("quote-text"),
//       quoteAuthor = document.getElementById("quote-author");
//     quoteText.innerHTML = `${quote}`;
//     quoteAuthor.innerHTML = `${author}`;
//   });

//Question 8:
axios
  .get("https://sheetdb.io/api/v1/5io4ml89qwvv6")
  .then((result) => {
    result.json();
  })
  .then((dataList) => {
    console.log(dataList);
  });
