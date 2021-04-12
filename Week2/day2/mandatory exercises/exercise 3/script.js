number = prompt(`enter a number to see if it is odd or even`);

if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else if (number % 2 != 0) {
  console.log(`${number} is an odd number`);
}
