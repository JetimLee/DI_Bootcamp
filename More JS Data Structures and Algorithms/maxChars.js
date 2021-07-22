const maxChars = (str) => {
  let most_repeated = "";
  let max = 0;
  const chars = {};
  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      most_repeated = char;
    }
  }
  return most_repeated;
};

console.log(maxChars("hello there!"));
