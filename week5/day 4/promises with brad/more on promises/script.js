//fetch returns a promise
const urls = [
  `https://jsonplaceholder.typicode.com/posts`,
  `https://jsonplaceholder.typicode.com/users`,
  `https://jsonplaceholder.typicode.com/albums`,
];

Promise.all(
  urls.map((url) => {
    console.log(fetch(url).then((res) => res.json()));

    return fetch(url).then((res) => res.json());
  })
)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

//promise.all affects all promises that are inside of the paranthesis
//if one gets rejected, they all get rejected - all or nothing
//promise.allSettled shows all after they're settled
