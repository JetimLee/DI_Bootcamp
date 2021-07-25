//observer pattern

//bringing in the events node module
const EventEmitter = require("events");
//capitalized because it's a JS class

const celebrity = new EventEmitter();

//subscribe to celebrity
celebrity.on("race", function (result) {
  if (result === "won") {
    console.log("yay you won!");
  }
});

celebrity.on("race", (result) => {
  if (result === "won") {
    console.log("oof why'd you have to win?! i lost all my money!");
  }
});

celebrity.on("race", (result) => {
  if (result === "lost") {
    console.log("Yay you lost!");
  }
});

process.on("exit", (code) => {
  console.log(`Process exit event with code: ${code}`);
});

celebrity.emit("race", "won");
// celebrity.emit("race", "lost");
