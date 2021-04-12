let sentence = "the movie is really bad, i did not like it";
let wordNot = sentence.search("not");
let wordBad = sentence.search("bad"); //returns first occurance's position
console.log(wordNot);
console.log(wordBad);

if (wordNot < wordBad) {
  sentence = "the movie is good, i like it";
  console.log(sentence);
} else if (wordBad < wordNot) {
  console.log(sentence);
} else if (
  sentence.includes("not") != true ||
  sentence.includes("bad") != true
) {
  console.log(sentence);
}
