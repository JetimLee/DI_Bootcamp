const getStarWars = async () => {
  let response = await fetch("https://swapi.dev/api/starships/9/");
  return response;
};

getStarWars()
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
