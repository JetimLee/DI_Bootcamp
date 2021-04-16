const playTheGame = () => {
  let number;
  let numberFromUser;
  let msg;
  let play = confirm("Would you like to play?");
  if (play == true) {
    numberFromUser = prompt("Please enter a number between 1 and 10");
    number = parseFloat(numberFromUser);
    if (isNaN(number) == true) {
      alert("not a number, goodbye!");
    } else if (number > 10 || number < 0) {
      alert("not a good number, goodbye!");
    } else {
      let computerNumber = Math.floor(Math.random() * 11);
      return { number, computerNumber };
    }
  } else if (play != true) {
    alert("no problem, goodbye!");
  }
};

let { number, computerNumber } = playTheGame();

const testNumbers = (inputtedNumber, computerizedNumber) => {
  let guesses = 1;
  while (inputtedNumber != computerizedNumber) {
    if (inputtedNumber == computerizedNumber) {
      alert(`Winner!`);
      break;
    } else if (inputtedNumber > computerizedNumber) {
      alert(`your number is bigger than the computers, guess again!`);
      inputtedNumber = parseFloat(prompt("Enter a new number!"));
      console.log(
        `inputted number ${inputtedNumber}, the computers number ${computerizedNumber}`
      );
    } else if (inputtedNumber < computerizedNumber) {
      alert(`your number is smaller than the computers, guess again!`);
      inputtedNumber = parseFloat(prompt("Enter a new number!"));
      console.log(
        `inputted number ${inputtedNumber}, the computers number ${computerizedNumber}`
      );
    }
    guesses++;
    console.log(`total guesses ${guesses}`);
    if (guesses == 3) {
      alert("Sorry, you lose");
      break;
    }
  }
};

testNumbers(number, computerNumber);
