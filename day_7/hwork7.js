//Question 1:
//1-d    2-c    3-a     4-b

//Question 2:
// let timingID = setInterval(() => console.log("hello"), 2000);

// setTimeout(() => {
//   clearInterval(timingID);
//   console.log("bye!");
// }, 6000);

//Question 3:
//3.1.No,it can't.the variable creayted using let only exist inside the block it was declared in
//3.2.No, it can't because u can only access variables that have the same or higher scope, and variables in func is smaller than global scope

//Question 4:
// let getLiTag = document.getElementsByTagName("LI");
// console.log(getTag[0]);
// for (let i = 0; i < getLiTag.length; i++) {
//   console.log(getLiTag[i]);
// }

//Question 5:
// let getDivTag = document.getElementsByTagName("div");
// console.log(getDivTag[1]);
// for (let i = 0; i < getDivTag.length; i++) {
//   console.log(getDivTag[i]);
// }

//Question 6:
// let removeElement = document.getElementById("singer-1");
// removeElement.remove();

//Question 7:
// button1.addEventListener("click", (e) => {
//   // Callback body
//   console.log(e.target);
// });
// button2.addEventListener("click", (e) => {
//   // Callback body
//   console.log(e.target);
// });
// input1.addEventListener("keydown", (e) => {
//   // Callback body
//   console.log(e.key);
// });
//7.1.It returns the element that triggered the event. In this case the <button id="button1/button2"></button>
//7.2. It returns the input characters.

//Question 8:
// const myInput = () => {
//   alert("My name is Son and i want to finish studying coding");
// };
// myInput();

//Question 9:
// let name, wish;
// const userInput = (name, wish) => {
//   name = prompt("Enter your name: ");
//   wish = prompt("Enter your wish: ");
//   alert(`My name is ${name} and i want to ${wish}`);
// };
// userInput(name, wish);

//Question 10:
// let name, wish;
// const userInput = (name, wish) => {
//   name = prompt("Enter your name: ");
//   wish = prompt("Enter your wish: ");
//   const result =
//     wish || ""
//       ? alert(`My name is ${name} and i want to ${wish}`)
//       : alert(`My name is ${name}`);
//   // (wish || ""):using shorthand evaluate, mean wish !== undefined & null & ""
// };
// userInput(name, wish);

//Question 11:
//11.1.Write an HTML for the UI above, create and link a JS file to it
//11.2.Get (Read) the ‘Upper it!!’ button
const readElement = document.getElementById("upper_btn");
console.log(readElement);
//11.3.Catch event when ‘Upper it!!!!’ button is clicked
upper_btn.addEventListener("click", () => {
  console.log("Upper it!!!! just clicked");
});
//11.4.Get (Read) ‘Enter your name’ input
const readElementInput = document.getElementById("name_input");
console.log(readElementInput);
