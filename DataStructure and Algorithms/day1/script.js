function findLongestWordLength(str) {
  let longestWord = 0;
  let stringToArray = str.split(" ");
  console.log(stringToArray);
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i].length > longestWord) {
      longestWord = stringToArray[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
