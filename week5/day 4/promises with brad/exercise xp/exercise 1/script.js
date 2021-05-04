let numbers = /\d/g;

const compareToTen = (num) => {
  setTimeout(() => {
    let numberCheck = new Promise((resolve, reject) => {
      if (numbers.test(num) == true && num > 10) {
        console.log(`${num} is a number greater than 10`);
      } else if (num < 10) {
        reject(`${num} is less than 10, error`);
      } else if (numbers.test(num) != true) {
        reject(`${num} isn't a number!`);
      }
    });
  }, 2000);
};

console.log(compareToTen(11));
console.log(compareToTen("a"));
console.log(compareToTen(9));
