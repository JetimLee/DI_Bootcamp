grade = prompt(`Please enter your grade as a number!`);

if (grade > 90) {
  console.log("A");
} else if (grade <= 90 && grade >= 80) {
  console.log(`B`);
} else if (grade <= 80 && grade >= 70) {
  console.log(`C`);
} else if (grade < 70) {
  console.log("D");
}
