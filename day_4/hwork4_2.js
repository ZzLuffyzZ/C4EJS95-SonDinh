//4.Initialize an object to represent a dictionary, with properties as
// keyword and values as explanation, the initial values are from this table
// const dictionary = {
//   debug:
//     "The process of figuring out why your program has a certain error and how to fix it",
//   done:
//     "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
//   defect: "The formal word for ‘error’",
//   pm:
//     "The short version  of Project Manager, the person in charge of the final result of a project",
//   "ui/ux":
//     "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
// };
// //4.1 & 4.2
// alert("Hi there, this is dev dictionary");
// const USER_INPUT = prompt("Enter a keyword");
// if (USER_INPUT === "") {
//   alert("The word is not found");
// } else if (dictionary[USER_INPUT] === undefined) {
//   const USER_ADD = prompt(
//     `We could not find your word: ${USER_INPUT}, leave your explanation`
//   );
//   dictionary[USER_INPUT] = USER_ADD;
//   alert("Done");
// } else {
//   alert(`${USER_INPUT}\n${dictionary[USER_INPUT]}`);
// }

//Initialize a variable named products, containing an array of products,
//each product has a name, price, brand, category, and color
// const products = [
//   {
//     name: "Xiaomi portable charger 20000mah",
//     brand: "Xiaomi",
//     price: 428,
//     color: "White",
//     category: "Charger",
//     providers: ["Phukienzero", "Dientuccc"],
//   },
//   {
//     name: "VSmart Active 1",
//     brand: "VSmart",
//     price: 5487,
//     color: "Black",
//     category: "Phone",
//     providers: ["Tgdd", "Ddghn", "VhStore"],
//   },
//   {
//     name: "IPhone X",
//     brand: "Apple",
//     price: 21490,
//     color: "Gray",
//     category: "Phone",
//     providers: ["tgdd"],
//   },
//   {
//     name: "Samsung Galaxy A9",
//     brand: "Samsung",
//     price: 8490,
//     color: "Blue",
//     category: "Phone",
//     providers: ["tgdd"],
//   },
// ];
//5.1.Print/log name and price of all the products out
// for (let i = 0; i < products.length; i++) {
//   console.log("--------------------------------------");
//   console.log(`Name: ${products[i].name}\nPrice: ${products[i].price}`);
// }
//5.2.Write a script printing/logging out the products with their number,
//then print/logging out the details of a product with its position entered by users
// for (let i = 0; i < products.length; i++) {
//   console.log(`#${i + 1}. ${products[i].name}\n\tPrice: ${products[i].price}`);
// }
// const USER_CHOICE = prompt("Enter product position:");
// const { name, brand, price, color, category } = products[
//   parseInt(USER_CHOICE) - 1
// ];
// console.log(
//   `Name: ${name}\nBrand: ${brand}\nPrice: ${price}\nColor: ${color}\nCategory: ${category}`
// );

//5.3
// let flag = false;
// const USER_INPUT = prompt("Enter your category").toLowerCase();
// for (let i = 0; i < products.length; i++) {
//   if (products[i].category.toLowerCase() === USER_INPUT) {
//     console.log("------------------------------------------");
//     console.log(`Name: ${products[i].name}\nPrice: ${products[i].price}`);
//     flag = true;
//   }
// }
// if (!flag) {
//   alert("No category match your input");
// }

//5.4.Add providers to each product
// for (let i = 0; i < products.length; i++) {
//   console.log(
//     `#${i + 1}. ${products[i].name}\n\tPrice: ${
//       products[i].price
//     }\n\tProviders: ${products[i].providers}`
//   );
// }

//5.5.Search the products based on the wanted provider entered by users
// const USER_INPUT = prompt("Enter provider").toLowerCase();
// let flag = false;
// for (let i = 0; i < products.length; i++) {
//   const { name, brand, price, color, category, providers } = products[i];
//   for (let j = 0; j < products[i].providers.length; j++) {
//     if (USER_INPUT === products[i].providers[j].toLowerCase()) {
//       console.log("------------------------------------------");
//       console.log(
//         `Name: ${name}\nBrand: ${brand}\nPrice: ${price}\nColor: ${color}\nCategory: ${category}\nProviders: ${providers}`
//       );
//       flag = true;
//     }
//   }
// }
// if (!flag) {
//   alert("No products match the provider given");
// }

//6.Write a script to store and process the learning tasks to become a front-end developer
// const learningProcess = [
//   {
//     name: "HTML",
//     complete: false,
//   },
//   {
//     name: "CSS",
//     complete: false,
//   },
//   {
//     name: "Basics of Javascript",
//     complete: false,
//   },
//   {
//     name: "Node Package Manager (npm)",
//     complete: false,
//   },
//   {
//     name: "Git",
//     complete: true,
//   },
// ];
// //6.1.Print it out
// console.log();
// function readArr() {
//   console.log(
//     "Hi there, this is your learning tasks to front-end developer career:"
//   );
//   for (let i = 0; i < learningProcess.length; i++) {
//     const { name, complete } = learningProcess[i];
//     console.log(`${i + 1}.  ${name}\n\tComplete: ${complete}`);
//   }
//   console.log(
//     "----------------------------------------------------------------------"
//   );
// }
// readArr();

// const arrLength = learningProcess.length;
// const USER_OPT = prompt(
//   "Enter your command(New, Delete, Update, Complete)"
// ).toLowerCase();
// switch (USER_OPT) {
//   //6.2.Let users add new task
//   case "new":
//     const ADD_TASK = prompt("Enter new task");
//     learningProcess.push({ name: ADD_TASK, complete: false });
//     readArr();
//     break;
//   //6.3.Let users update task
//   case "update":
//     const ADD_POS = prompt("Enter position");
//     const ADD_TITLE = prompt("Enter new title");
//     learningProcess[parseInt(ADD_POS) - 1].name = ADD_TITLE;
//     readArr();
//     break;
//   //6.4.Let users complete task
//   case "complete":
//     const COMPLETE_POS = prompt("Enter position");
//     learningProcess[parseInt(COMPLETE_POS) - 1].complete = true;
//     readArr();
//     break;
//   //6.5.Let users delete task
//   case "delete":
//     const DEL_POS = prompt("Enter position");
//     learningProcess.splice(DEL_POS - 1, 1);
//     readArr();
//     break;
// }
// //6.6.(Optional) Make printing / logging better
// console.log(
//   "Hi there, this is your learning tasks to front-end developer career:"
// );
// for (let i = 0; i < learningProcess.length; i++) {
//   const { name, complete } = learningProcess[i];
//   if (learningProcess[i].complete === false) {
//     console.log(`${i + 1}. [ ] ${name}\n\tComplete: ${complete}`);
//   } else {
//     console.log(`${i + 1}. [x] ${name}\n\tComplete: ${complete}`);
//   }
// }
// console.log(
//   "----------------------------------------------------------------------"
// );

// //7.
clear();
const pos = {
  x: 200,
  y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
pendown();

//8.
clear();
const square = {
  x: 100,
  y: 50,
  width: 20,
};
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
  fd(square.width);
  rt(90);
}
//9.
clear();
const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};

penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
rt(90);
pendown();
for (let i = 0; i < 2; i++) {
  fd(rect.width);
  lt(90);
  fd(rect.height);
  lt(90);
}
//10.
clear();
const cmds = [
  {
    shape: "rect",
    x: 8,
    y: 70,
    width: 12,
    height: 40,
  },
  {
    shape: "rect",
    x: 70,
    y: 70,
    width: 12,
    height: 40,
  },
  {
    shape: "rect",
    x: 10,
    y: 20,
    width: 70,
    height: 20,
  },
  {
    shape: "square",
    x: 20,
    y: 40,
    width: 50,
  },
  {
    shape: "square",
    x: 25,
    y: 40,
    width: 14,
  },
  {
    shape: "square",
    x: 33,
    y: 42,
    width: 6,
  },
  {
    shape: "square",
    x: 50,
    y: 40,
    width: 14,
  },
  {
    shape: "square",
    x: 58,
    y: 42,
    width: 6,
  },
  {
    shape: "square",
    x: 40,
    y: 25,
    width: 8,
  },
  {
    shape: "square",
    penWidth: 1,
    x: 500,
    y: 500,
    width: 15,
  },
];
for (let i = 0; i < cmds.length; i++) {
  if (cmds[i].shape === "square") {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    pendown();
    for (let j = 0; j < 4; j++) {
      fd(cmds[i].width);
      rt(90);
    }
    home();
  } else {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    rt(90);
    pendown();
    for (let i = 0; i < 2; i++) {
      fd(cmds[i].width);
      rt(90);
      fd(cmds[i].height);
      rt(90);
    }
    home();
  }
}

//11. Add circle to the command
clear();
const circle = {
  shape: "circle",
  x: 100,
  y: 50,
  radius: 30,
};
penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y);
fd(circle.radius);
rt(90);
pendown();
for (let i = 0; i < 99; i++) {
  rt(360 / 99);
  fd(2);
}
home();

//12.
clear();
const cmds = [
  {
    shape: "rect",
    x: -30,
    y: 80,
    width: 20,
    height: 4,
  },
  {
    shape: "rect",
    x: 10,
    y: 80,
    width: 20,
    height: 4,
  },
  {
    shape: "rect",
    x: -10,
    y: 50,
    width: 20,
    height: 6,
  },
  {
    shape: "circle",
    x: 0,
    y: -20,
    radius: 60,
  },
  {
    shape: "circle",
    x: 0,
    y: 80,
    radius: 40,
  },
  {
    shape: "circle",
    x: -75,
    y: 10,
    radius: 20,
  },
  {
    shape: "circle",
    x: 75,
    y: 10,
    radius: 20,
  },
  {
    shape: "square",
    x: -65,
    y: -100,
    width: 30,
  },
  {
    shape: "square",
    x: 38,
    y: -100,
    width: 30,
  },
  {
    shape: "square",
    x: 500,
    y: 500,
    width: 20,
  },
];
for (let i = 0; i < 11; i++) {
  if (cmds[i].shape === "circle") {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    fd(cmds[i].radius);
    rt(90);
    pendown();
    for (let i = 0; i < 99; i++) {
      rt(360 / 99);
      fd(2);
    }
    home();
  } else if (cmds[i].shape === "square") {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    pendown();
    for (let j = 0; j < 4; j++) {
      fd(cmds[i].width);
      rt(90);
    }
    home();
  } else if (cmds[i].shape === "rect") {
    penup();
    rt(90);
    fd(cmds[i].x);
    lt(90);
    fd(cmds[i].y);
    rt(90);
    pendown();
    for (let i = 0; i < 2; i++) {
      fd(cmds[i].width);
      rt(90);
      fd(cmds[i].height);
      rt(90);
    }
    home();
  }
}
