//use good comments, you won't always remember what the point of a function/class was

// const multiplyByTwo = (arr) => {
//   newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2);
//   }
//   console.log(newArr);
// };

// multiplyByTwo([2, 3, 4]);

// const multiplyByTwo2 = (arr) => {
//   arr.forEach((element, i, arr1) => {
//     arr1[i] = element * 2; //setting the index equal to index * 2
//   });
//   return arr;
// };

// console.log(multiplyByTwo2([2, 3, 4]));

// let arr = [0, 1, 2, 3, 4];

// const newArr = arr.map((item) => {
//   return item + 2;
// });

// console.log(newArr);

// let users = ["eli", "gavin", "hadas", "josh"];

// //map creates a new array

// const newUsers = users.map((item) => {
//   return `${item}@gmail.com`;
// });

// console.log(newUsers);

// let myArray = [0, 1, 1, 2, 3, 5, 8];

// const arrayGreaterThan5 = (arr) => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };
// console.log(arrayGreaterThan5(myArray));

//filter method
//asks a condition

// const filterArr = arr.filter((item) => {
//   return item > 3; //here is the condition
// });
//IT CREATES A NEW ARRAY

// let arr = [0, 1, 2, 3, 4];

// const filter2 = arr.filter((i) => i === 3);
// console.log(filter2);
//no need for return because it's a single line

// const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

// const includes = dragons.filter((item) => item.includes("Sa"));

// console.log(includes);

// let arrayOfNumbers = [2, 5, 10, 100];

// const returnSum = (arr) => {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(returnSum(arrayOfNumbers));

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

const array1 = [2, 5, 10, 100];

const newArray = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
  });
  return sum;
};

console.log(newArray(array1));

let account = [
  { dollars: 2 },
  { dollars: 5 },
  { dollars: 10 },
  { dollars: 100 },
];

const addAllDollars = (arr) => {
  arr.reduce((total, obj) => obj + total, 0);
};

addAllDollars(account);
