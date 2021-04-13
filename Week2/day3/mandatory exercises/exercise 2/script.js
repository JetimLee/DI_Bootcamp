let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people.push("Gavin");
console.log(people);

// for (i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

//exiting on James
for (i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "James") {
    break;
  }
}

let myArray = people.slice(1, 3);
console.log(myArray);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("foo")); //returns -1 because this doesn't exist inside of the array

const lastItem = people[people.length - 1];
console.log(lastItem);
