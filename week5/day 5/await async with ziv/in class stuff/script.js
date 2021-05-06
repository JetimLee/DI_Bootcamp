// async function simpleAsync() {
//   try {
//     throw Error;
//   } catch (e) {
//     console.log(e);
//   }
// }

// console.log(simpleAsync());

// async function anotherSimple() {
//   return 1;
// }

// anotherSimple();

// anotherSimple()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //here the function behaves like a promise
// //similar to

// function simplePromise() {
//   let myPromise = new Promise((resolve, reject) => {
//     resolve(`hello`);
//     reject(`no`);
//   });
//   return myPromise;
// }

// simplePromise()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const returnPromises = () => {
//   let newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`promise executed`);
//       resolve(`sample data`);
//     }, 3000);
//   });
//   return newPromise;
// };

//aynsc await

// async function executeFunction() {
//   console.log("first");
//   let getPromise = await returnPromises();
//   console.log(`second`);
//   return getPromise;
// }

// executeFunction.then((res) => {
//   console.log(res);
// });

// fetch("https://swapi.dev/api/starships/9/")
//   .then((response) => response.json())
//   .then(console.log);

// const getStarWars = async () => {
//   let response = await fetch("https://swapi.dev/api/starships/9/");
//   return response;
// };

// getStarWars()
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
