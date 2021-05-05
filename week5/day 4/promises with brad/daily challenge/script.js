let arrayOfWords = ["cucumber", "tomatoes", "avocado"];
let complicatedArray = ["cucumber", 44, true];

// Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.

// Test:

// makeAllCaps(arrayOfWords)
//       .then(sortWords)
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// makeAllCaps(complicatedArray)
//       .then(sortWords)
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

//class way

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    let checkedArray = arr.map((word) => {
      if (typeof word === "string") {
        return word.toUpperCase();
      } else {
        reject(`error`);
      }
    });
    resolve(checkedArray);
  });
};

const sortTheArray = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr) {
      let sortedArray = arr.sort();
      resolve(sortedArray);
    } else {
      reject("error");
    }
  });
};

makeAllCaps(arrayOfWords)
  .then(sortTheArray)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

//my way

const makeCaps = (arr) => {
  console.log(`firing`);
  let capsArray = [];
  return new Promise((resolve, reject) => {
    arr.forEach((element) => {
      if (typeof element === "string") {
        capsArray.push(element.toUpperCase());
        resolve(capsArray);
      } else {
        reject(`error`);
      }
    });
  });
};

makeCaps(arrayOfWords)
  .then(sortTheArray)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
