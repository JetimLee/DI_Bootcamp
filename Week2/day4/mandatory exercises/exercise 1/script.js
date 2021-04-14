let userAge = prompt("please enter your age!");
let age = Number(userAge);

const checkDriverAge = (age) => {
  if (age < 18) {
    console.log(`sorry, but you're too young to drive
  `);
  } else if (age > 18 && age != 18) {
    console.log(`you are old enough to drive, power on, enjoy!`);
  } else {
    console.log(`congratulations on your first year of driving, enjoy!`);
  }
};

checkDriverAge(age);
