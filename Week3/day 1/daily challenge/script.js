const arrayOfPlanets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

const createPlates = (arr) => {
  arr.forEach((planetName, index) => {
    let newPlanet = document.createElement("div");
    newPlanet.className = "planet";
    document.body.appendChild(newPlanet);
    newPlanet.style.backgroundColor = "red";
    if (index == 0) {
      newPlanet.style.backgroundColor = "blue";
    }
    if (index == 1) {
      newPlanet.style.backgroundColor = "purple";
    }
    if (index == 2) {
      newPlanet.style.backgroundColor = "green";
    }
    if (index == 3) {
      newPlanet.style.backgroundColor = "orange";
    }
    if (index == 4) {
      newPlanet.style.backgroundColor = "pink";
    }
    if (index == 5) {
      newPlanet.style.backgroundColor = "yellow";
    }
    if (index == 6) {
      newPlanet.style.backgroundColor = "lightblue";
    }
    if (index == 7) {
      newPlanet.style.backgroundColor = "grey";
    }
    if (index == 8) {
      newPlanet.style.backgroundColor = "brightpink";
    }

    console.log(planetName);
  });
};

createPlates(arrayOfPlanets);
