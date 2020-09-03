//Question 1: Variable swap
/** Way 1: Using destructuring assignment
 *  let num1 = 1;
 *  let num2 = 2;
 *
 *  [a,b] = [b,a]
 *
 * Way 2: Using temporary variable
 *  let num1 = 1;
 *  let num2 = 2;
 *
 * temp = a;
 * a = b;
 * b = temp;
 */

//Question 2: Split String into Array using type conversion from String to Array
/**    const s = ‘Hello beauty there’;
 *     a = s.split(" ");
 *     console.log(a); // Result: [“Hello”, “beauty”, “there”]
 */

//Question 3:
// const testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...testCase);

//Question 4: Write a script to simulate a clothes shop, asking and performing certain tasks from users
let userOpt = prompt(
  "Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?"
);
let currentItems = ["Jeans", "T-shirts", "Socks"];

function printCurrentItems() {
  console.log("The current items are:");
  for (let i = 0; i < currentItems.length; i++) {
    console.log(`${i + 1}\. ${currentItems[i]}`);
  }
}

switch (userOpt) {
  case "c":
    currentItems[currentItems.length] = prompt(
      "Enter the name of the new item"
    );
    alert("Done");
    printCurrentItems();
    break;
  case "r":
    printCurrentItems();
    break;
  case "u":
    let updatePos = prompt("Enter the position you want to update");
    currentItems[updatePos - 1] = prompt("Enter the new name");
    alert("Done");
    printCurrentItems();
    break;
  case "d":
    let deletePos = prompt("Enter the position you want to delete");
    currentItems.splice(deletePos - 1, 1);
    alert("Done");
    printCurrentItems();
    break;
}
