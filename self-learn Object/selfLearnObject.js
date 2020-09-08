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
let inventory = {
  gold: 500,
  pouch: ["flint", "twine", "gemstone"],
  backpack: ["xylophone", "dagger", "bedroll", "bread loaf"],
};
inventory.pocket = ["seashell", "strange berry", "lint"];
console.log(inventory);
