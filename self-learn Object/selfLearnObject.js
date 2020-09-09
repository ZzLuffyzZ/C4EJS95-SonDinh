//C4EJS95-student-book
//1.
// let personProfile = {
//   name: "Cristiano Ronaldo",
//   yearOfBirth: 1985,
//   nationality: "portuguese",
// };

// const userInput = prompt(
//   "Do u want to add more information? (Y/N)"
// ).toLowerCase();
// if (userInput === "y") {
//   const inputProp = prompt("What property do uwant to add?");
//   const inputValue = prompt("Add the value");
//   personProfile[inputProp] = inputValue;
//   console.log(personProfile);
// } else if (userInput === "n") {
//   alert("Good bye");
// }

// personProfile.name = "Lionel Messi";
// personProfile.yearOfBirth = "1987";
// personProfile.nationality = "Argentinas";
// console.log(personProfile);

// const userInputDel = prompt(
//   "Do you want to delete a property? (Y/N)"
// ).toLowerCase();
// if (userInputDel === "y") {
//   const inputDelProp = prompt("What property do u want to delete?");
//   delete personProfile[inputDelProp];
//   console.log(personProfile);
// } else if (userInputDel === "n") {
//   alert("Good bye");
// }

//2.
// let inventory = {
//   gold: 500,
//   pouch: ["flint", "twine", "gemstone"],
//   backpack: ["xylophone", "dagger", "bedroll", "bread loaf"],
// };
// //Thêm một property với tên "pocket", với value là một Array
// //bao gồm các phần tử "seashell", "strange berry", và "lint".
// inventory.pocket = ["seashell", "strange berry", "lint"];
// console.log(inventory);
// //Xóa phần tử "dagger" trong Array của property backpack.
// inventory.backpack.splice(inventory.backpack.indexOf("dagger"), 1);
// console.log(inventory);
// //Cộng thêm 50 vào giá trị của gold (Giá trị sau khi cộng là 550)
// const ADD_IN = 50;
// inventory.gold += ADD_IN;
// console.log(inventory.gold);
// //Xóa toàn bộ thông tin liên quan đến pouch.
// inventory.pouch;
// console.log(inventory);

//Mindx app
// let movie = {
//   title: "The dark knight rises",
//   year: 2012,
//   rate: 8.4,
// };
// console.log(movie);
// console.log(movie.director);

let favThings = ["sport", "lol", "bts", "book", "coding"];
let [first, second, third, nearLast, last] = favThings;
console.log(first.toUpperCase());
console.log(nearLast.toUpperCase());
console.log(last.toUpperCase());
