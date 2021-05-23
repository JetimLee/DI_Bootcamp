const myFile = require("./date.js");

const deadline = "2022-01-01";
let birthyear = "1993-09-03";
let nextHoliday = "2021-09-18";

console.log(myFile.countdown(deadline));
console.log(myFile.birthCountdown(birthyear));
console.log(myFile.nextHoliday(nextHoliday));
