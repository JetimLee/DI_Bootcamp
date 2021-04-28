// Using a method, take this array
const array = [[1], [2], [3], [[[4]]], [[[5]]]];

// and modify it to look like this array: [1,2,3,[4],[5]].

const flattenedArray = array.flat(1);

console.log(flattenedArray);

// Using a method, take this array
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];

console.log(greeting.flat(1));

let flattenedGreeting = greeting.flat(1);
console.log(flattenedGreeting.join(" "));
// and modify it to look like this array:

// [ 'Hello young grasshopper!', 'you are', 'learning fast!' ].

// Turn the trapped number 3

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}

console.log(flatDeep(trapped, Infinity));
