let myString = "i love you";

const isVowelRegEx = (string) => {
  console.log(/[aeiou]/.test(string));
};

isVowelRegEx(myString);

if (isVowelRegEx === true) {
  console.log(`no vowels`);
} else {
  myString = " ";
  console.log(myString);
}
