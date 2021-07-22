const maxChars = (str) => {
  let max = "";
  let most_repeated = "";
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
  console.log(
    `the passed in string of ${str}'s most repeated character is ${most_repeated}, it is repeated ${max} times`
  );
};

maxChars("hello there");
