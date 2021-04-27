// Using this array

let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// 1. Use the reduce() method to combine all of these into a single string.

const reduceTheString = (arr) => {
  let reducedArray = arr.reduce((accumulator, currentValue) => {
    let comma = arr.length ? "," : "";
    return accumulator + comma + currentValue;
  });
  return reducedArray;
};

console.log(reduceTheString(epic));
