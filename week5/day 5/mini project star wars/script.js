const nameArea = document.getElementById("name");
const heightArea = document.getElementById("height");
const birthYear = document.getElementById("birthYear");
const homeWorld = document.getElementById("homeWorld");
const button = document.getElementById("btn");

const generateRandomInformation = (obj) => {
  nameArea.innerText = obj.name;
  heightArea.innerText = obj.height;
  birthYear.innerText = obj.birth_year;
};

const homeWorldName = async (obj) => {
  console.log(obj.homeworld);
  let response = await fetch(obj.homeworld).then((response) => response.json());
  homeWorld.innerText = response.name;
};

const updateInformation = async () => {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  let url = `https://swapi.dev/api/people/${randomNumber}/`;
  let response = await fetch(url)
    .then((res) => res.json())
    .then((data) => (results = data));
  generateRandomInformation(results);
  homeWorldName(results);
};

button.addEventListener("click", updateInformation);

const getStarWars = async () => {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  let url = `https://swapi.dev/api/people/${randomNumber}/`;
  let response = await fetch(url);
  console.log(`loading`);
  return response.json();
};

getStarWars()
  .then((data) => {
    results = data;

    generateRandomInformation(results);
    homeWorldName(results);
    console.log(results);
  })
  .catch((error) => {
    console.log(`an error occurred ${error}`);
  });
