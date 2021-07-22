const mostChars = (string) => {
  let max = "";
  let most_repeated = "";
  const chars = {};
  for (let char of string) {
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
  console.log(most_repeated);
};

mostChars("hello there");
