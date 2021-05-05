let numbers = /\d/g;

const compareToTen = (num) => {
  let numberCheck = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numbers.test(num) == true && num >= 10) {
        resolve(`${num} is a number greater than 10`);
      } else if (num < 10) {
        reject(`${num} is less than 10, error`);
      } else if (numbers.test(num) != true) {
        reject(`${num} isn't a number!`);
      }
    }, 2000);
  });
  return numberCheck;
};

const compareToTenn = (num) => {
  let p = new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("bal bla bla");
    } else {
      reject("ha ha ha");
    }
  });
  return p;
};

compareToTen(11)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

compareToTenn(11)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

compareToTen(9)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

compareToTen("a")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
