const pangramChecker = (str) => {
  let checkForAlphabet = /[a-z]/g;

  //using regex to check for alphabet

  const letters = str.toLowerCase().match(checkForAlphabet);
  //match returns my array of found letters

  const alphabet = [...new Set(letters)];

  //using spread operator to include all elements
  //set constructor

  return alphabet.length === 26; //making sure all 26 letters are here, the Set makes sure that all letters appear (won't accidentally say something is a pangram just based on 26 length)
};

let theArray = [2, 4, 4, 1];
const birthdayCandle = (arr) => {
  let biggestBirthdayCandle = Math.max(...arr);
  return arr.filter((item) => item === biggestBirthdayCandle).length;
  //.length is necessary otherwise it'll give you an array of items that match the given parameters
};
console.log(birthdayCandle(theArray));
