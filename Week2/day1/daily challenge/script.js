console.log("this is working");

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let newFruits = fruits.shift();

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1]);

console.log(newFruits);
console.log(fruits);

fruits.sort();
console.log(fruits.sort());
console.log(fruits);
fruits.push("kiwi");
console.log(fruits);
let splicedFruits = fruits.splice(0, 1);
console.log(splicedFruits);
console.log(fruits);
let reversedArray = fruits.reverse();
console.log(reversedArray);
