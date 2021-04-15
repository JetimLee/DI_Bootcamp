let string = prompt("enter a string separated by commas");
let stringToArray = string.split(","); //this is my array
console.log(stringToArray);

const longestWord = (arr) => {
  return arr.slice().sort((a, b) => {
    return b.length - a.length;
  })[0];
};

const myFrame = (arr) => {
  let finalWord = "";
  let word = longestWord(arr);
  let star = "*".repeat(word.length + 4);
  finalWord += star + "\n";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < word.length) {
      let sub = word.length - arr[i].length;
      let space = " ".repeat(sub);
      finalWord += `* ${arr[i]}${space} *\n`;
    } else {
      finalWord += `* ${arr[i]} *\n`;
    }
  }
  finalWord += star;
  console.log(finalWord);
};

myFrame(stringToArray);
