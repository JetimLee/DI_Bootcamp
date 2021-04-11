let userAnswer = prompt("Enter a number!");

if (userAnswer < 2) {
  console.log("boom");
} else if (userAnswer % 2 === 0 && userAnswer % 5 === 0) {
  console.log(`boo${"o".repeat(userAnswer)}m!`.toUpperCase());
} else if (userAnswer % 2 === 0) {
  console.log(`boom!`);
} else if (userAnswer % 5 === 0) {
  console.log(`boom`.toUpperCase());
}
