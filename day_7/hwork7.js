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
let x = document.getElementsByTagName("LI").length;
// let getTag = document.getElementsByTagName("LI");
// document.getElementById("demo").innerHTML = getTag.length;
// for (let i = 0; i < getTag.length; i++) {
//   console.log(getTag[i].innerHTML);
// }
console.log(x);
