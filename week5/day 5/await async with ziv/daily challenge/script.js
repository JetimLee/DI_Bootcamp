const promise1 = Promise.resolve(3);
const promise2 = Promise.reject(42);
const promise3 = new Promise((resolve, reject) => {
  throw Error;
});
// expected output: Array [3, 42, "foo"]

// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example

const simplePromiesAll = async (arr) => {
  await Promise.allSettled(arr)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

let arrayOfPromises = [promise1, promise2, promise3];

simplePromiesAll(arrayOfPromises);
