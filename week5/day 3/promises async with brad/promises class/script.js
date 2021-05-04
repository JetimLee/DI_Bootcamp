//promises are either fulfilled, rejected, or pending

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("worked");
  } else {
    reject("error, it broke");
  }
});

promise
  .then((result) => `${result}!`)
  .then((result2) => {
    throw Error;
    console.log(result2);
  })
  .catch(() => console.log(`an error occurred`));

//.catch catches any error that happens between the chains
//only checks if anything before it fails
