let string = prompt("please enter a number!");
let number = Number(string);

while (number < 10) {
  string = prompt(`Please enter a new number!`);
  number = Number(string);
}
