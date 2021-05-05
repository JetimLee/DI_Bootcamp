let arrayOfWords = ["cucumber", "tomatoes", "avocado"];
let complicatedArray = ["cucumber", 44, true];

const makeCaps = (arr) => {
  return new Promise((resolve, reject) => {
    let capsArray = arr.map((word) => {
      if (typeof word === "string") {
        return word.toUpperCase();
      } else {
        reject(`Error: not all elements are a string`);
      }
    });
    resolve(capsArray);
  });
};

const sortArray = (arr) => {
  let sortedArray;
  return new Promise((resolve, reject) => {
    if (arr) {
      sortedArray = arr.sort();
      resolve(sortedArray);
    } else {
      reject(`error`);
    }
  });
};
makeCaps(arrayOfWords)
  .then(sortArray)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

makeCaps(complicatedArray)
  .then(sortArray)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
