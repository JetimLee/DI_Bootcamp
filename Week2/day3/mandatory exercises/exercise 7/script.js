let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sortedNames = names.sort();
let joinedArray = sortedNames.join(",");
let secretSociety = joinedArray.replace(/[^A-Z]/g, "");
console.log(secretSociety);
