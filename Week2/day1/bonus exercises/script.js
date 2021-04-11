console.log("working");

let me = ["my", "favorite", "color", "is", "blue"];

console.log(me.join());

let str1 = "mix";
let str2 = "pod";

let slicedOffP = str2.slice(0, 1);
let slicedOffM = str1.slice(0, 1);

let stricedStrg1 = str1.slice(1, 3);
let stricedStrg2 = str2.slice(1, 3);

let joinedString = `${slicedOffP}${stricedStrg1}${" "}${slicedOffM}${stricedStrg2}`;
console.log(joinedString);
console.log(slicedOffP);
console.log(slicedOffM);
console.log(stricedStrg1);
console.log(stricedStrg2);
console.log(joinedString);
