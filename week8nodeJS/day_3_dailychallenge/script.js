const fs = require("fs");

console.log("working");
let counter = 0;
let steps = 0;
let stepCounter = 0;

fs.readFile("./right-left.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    let dataString = data.toString();
    for (let i = 0; i < dataString.length; i++) {
      if (dataString[i] == ">") {
        counter++;
      }
      if (dataString[i] == "<") {
        counter--;
      }
    }
    console.log(counter);
  }
});

fs.readFile("./right-left.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let dataString = data.toString();
    for (let i = 0; i < dataString.length; i++) {
      if (dataString[i] == ">") {
        steps++;
        stepCounter++;
      }
      if (dataString[i] == "<") {
        stepCounter++;
        steps--;
      }
      if (steps == -1) {
        break;
      }
    }
    console.log(`You arrived on the left side in ${stepCounter} steps`);
    console.log(steps);
  }
});
