const axios = require("axios");
const sideFile = require(`./script2`);

// const getNames = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };
console.log(
  sideFile.getData().then((data) => data.forEach((el) => console.log(el.id)))
);

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => printNames(data));
// let a = 7;
// let b = 8;
// // console.log(a + b);

// let j = "java";
// let s = "script";

// console.log(j + s);

// setTimeout(() => {
//   console.log("after 5");
// }, 5000);

// const myNum = require(`./script2`);
// const d = require("./script2");
// console.log(myNum);
// console.log(d.getCustomerData());
// console.log(d.gavin());
