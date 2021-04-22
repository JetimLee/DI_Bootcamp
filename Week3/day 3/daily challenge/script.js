let textInput = document.getElementById("inputLetters");
let textDisplay = document.getElementById("result");

let checkForLetters = /[a-zA-Z]+/g;

const checkInput = () => {
  if (textInput.value.match(checkForLetters)) {
    console.log(textInput.value.match(checkForLetters));
    console.log(`has letters`);
    console.log(textInput.value);
    textDisplay.value = textInput.value;
  }
};

const preventNonLetters = (event) => {
  if (!checkForLetters.test(event.key)) {
    event.preventDefault();
  }
};

textInput.addEventListener(`keypress`, checkInput);
textInput.addEventListener("keypress", preventNonLetters);
