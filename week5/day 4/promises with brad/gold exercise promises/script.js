const urls = [
  "https://swapi.dev/api/people/1",
  "https://swapi.dev/api/people/2",
  "https://swapi.dev/api/people/3",
  "https://swapi.dev/api/people/4",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((res) => res.json());
  })
)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

const screwedUpURLS = [
  "https://swapi.dev/api/lolz",
  "https://swapi.dev/api/people/2",
  "https://swapi.dev/api/people/3",
  "https://swapi.dev/api/people/4",
];

Promise.all(
  screwedUpURLS.map((url) => {
    return fetch(url).then((res) => res.json());
  })
)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
