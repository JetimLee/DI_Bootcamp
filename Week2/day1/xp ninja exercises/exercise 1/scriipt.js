console.log("this works");

let stringToScan = prompt('Enter a sentence withh the word "Nemo"');

let includesNemo = stringToScan.includes("Nemo");
let position = stringToScan.search("Nemo");

console.log(`I found Nemo at position ${position}!`);
console.log(includesNemo);

if (includesNemo != true) {
  console.log("I was unable to find Nemo. Maybe we can find Dory?");
}

// 5 >= 1; true;
// 0 === 1; false
// 4 <= 1; false;
// 1 != 1; false;
// "A" > "B"; false
// "B" < "C"; true;
// "a" > "A"; true;
// "b" < "A"; false;
// true === true;
// true != false
