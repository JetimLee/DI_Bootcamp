const resolveBySelf = () => {
  setTimeout(() => {
    try {
      throw error;
      let myPromise = new Promise((resolve, reject) => {
        resolve(console.log(`success`));
      });
    } catch (error) {
      console.log(`Oops something went wrong`);
    }
  }, 4000);
};

resolveBySelf();

let myPromise = Promise.resolve("success");
setTimeout(() => {
  console.log(myPromise);
}, 4000);
