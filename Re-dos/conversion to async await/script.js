fetch("https://swapi.dev/api/starships/9/")
  .then((response) => response.json())
  .then(console.log);

const convertedPromise = async () => {
  let starWars = await fetch("https://swapi.dev/api/starships/9/");
  return starWars.json();
};

convertedPromise();

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  // calling will be console logged first, then resolved
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
