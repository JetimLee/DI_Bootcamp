const addN = (number) => {
  sum = number
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => {
      console.log(a, b);
      return a + b;
    }, 0);
  return sum;
};

console.log(addN(108));

const checkIfEven = (number) => {
  if (number === 0) {
    return "even";
  } else if (number === 1) {
    return `odd`;
  } else {
    return checkIfEven(number - 2);
  }
};

console.log(checkIfEven(11));
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open(
  "GET",
  "https://instagram47.p.rapidapi.com/user_following?userid=1718924098"
);
xhr.setRequestHeader(
  "x-rapidapi-key",
  "ba4689c2b7msh3e2c25d27cbd448p10bdb4jsn06da0d93a122"
);
xhr.setRequestHeader("x-rapidapi-host", "instagram47.p.rapidapi.com");

xhr.send(data);

console.log(data);
