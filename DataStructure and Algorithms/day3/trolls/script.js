const disemvowel = (str) => {
  let withoutVowels = [];
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let splitString = str.split("");
  for (i = 0; i < splitString.length; i++) {
    if (vowels.indexOf(splitString[i]) < 0) {
      withoutVowels.push(splitString[i]);
    }
    stringWithoutVowels = withoutVowels.join("");
  }
  return stringWithoutVowels;
};
