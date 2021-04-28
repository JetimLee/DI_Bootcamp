// //keys method, object.key method will return an array of keys

// //object.entries returns an array inside an array of all of the objects - an array of an array

// //Object.fromentries will get back object with key/value pairs, opposite of .entries. this will ignore anything greater than a key/value pair, cannot have 3 keys

// //cloning an object newPopulation = {...objectYouWantToClone}

// //deep cloning - let str = json.stringify(object)
// // json.parse(str)

// //mergining two objects
// //const totalPopulation = {...population, ...population_2}
// //last objects values take precedence

// const population5 = {
//   tokyo: 1,
//   delhi: 4,
//   shanghai: 5,
//   datetime: {
//     time: 5,
//     date: 6,
//   },
// };

// //put this in function ^^

// const {
//   tokyo,
//   delhi,
//   shanghai,
//   datetime,
//   datetime: { time },
//   datetime: { date },
// } = population5;

// console.log(population5);

// //function destructuring
// //same thing but in a function
// //just put the const declaration inside of a function and make sure the obj is passed as an argument

// //this keyword, in the global scope 'this' is the window

// //classes

// class someClass {
//   constructor(name, lastname) {
//     this.name = name;
//     this.lastname = lastname;
//   }

//   get fullname() {
//     return `${this.lastname}, ${this.name}`;
//   }
// }

// let gavin = new someClass("Gavin", "Coulson");
// console.log(gavin.fullname);

// class human extends someClass {
//   constructor() {
//     super();
//     this.skinColor = "";
//   }
//   setskinColor(param) {
//     this.skinColor = param;
//   }
// }

//exercise

//solution 1 using flat

const users = {
  user1: {
    age: 44,
    name: "picard",
  },
  user2: {
    age: 20,
    name: "sisko",
  },
  user3: {
    age: 100,
    name: "janeway",
  },
};

//
// console.log(objectToArray);

// let flattenedArray = objectToArray.flat();
// console.log(flattenedArray);

// let over30 = flattenedArray.filter((item) => {
//   if (item.age >= 30) {
//     return item;
//   }
// });

// console.log(over30);

//solution 2 with filter and map

let objectToArray = Object.entries(users);
console.log(objectToArray);

let mappedArray = objectToArray.map((item) => {
  return item[1];
});

console.log(mappedArray);

let over30 = mappedArray.filter((item) => {
  return item.age > 30;
});
console.log(over30);
