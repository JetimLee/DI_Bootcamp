const nameArea = document.getElementById("name");
const heightArea = document.getElementById("height");
const birthYear = document.getElementById("birthYear");
const homeWorld = document.getElementById("homeWorld");
const button = document.getElementById("btn");
const container = document.getElementById("textContainer");
const loader = document.getElementById("loader");
const loadingP = document.createElement("p");
loadingP.classList.add("loading");

const generateRandomInformation = (obj) => {
  loader.style.display = "none";

  nameArea.innerText = obj.name;
  heightArea.innerText = obj.height;
  birthYear.innerText = obj.birth_year;
  container.style.backgroundColor = "black";
  loadingP.style.display = "none";
};

const homeWorldName = async (obj) => {
  let response = await fetch(obj.homeworld)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
  homeWorld.innerText = response.name;
};

const updateInformation = async () => {
  loadingP.innerText = "LOADING!";
  container.innerHTML.display = "none";
  loader.style.display = "block";
  container.style.backgroundColor = "#2B7B8C";
  container.prepend(loadingP);
  loadingP.innerText = "LOADING!";
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

  return response.json();
};

getStarWars()
  .then((data) => {
    results = data;

    generateRandomInformation(results);
    homeWorldName(results);
  })
  .catch((error) => {
    console.log(`an error occurred ${error}`);
  });

const load = () => {
  container.innerHTML.display = "hidden";
  loader.style.display = "block";
  container.style.backgroundColor = "#2B7B8C";
  container.prepend(loadingP);
  loadingP.innerText = "LOADING!";
};

window.addEventListener("load", load);
