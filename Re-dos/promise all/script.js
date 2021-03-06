const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

let arrayOfPromises = [promise1, promise2, promise3];

const takePromiseArray = (array) => {
  Promise.all(array)
    .then((values) => {
      console.log(values);
    })
    .catch((error) => console.log(error));
};

takePromiseArray(arrayOfPromises);
