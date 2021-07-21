const isPalindrome = (str) => {
  const reversedString = str.split("").reverse("").join("");
  console.log(reversedString);
  if (reversedString === str) {
    console.log("palindrome");
  } else {
    console.log("not a palindrome");
  }
};

isPalindrome("mom");
isPalindrome("gavin");
