const parse = require("csv-parse");
const fs = require("fs");

const planets = [];
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
const getPlanets = async () => {
  await fs
    .createReadStream("kepler_data.csv")
    .pipe(parse({ comment: "#", columns: true }))
    .on("data", (data) => {
      if (isHabitablePlanet(data)) {
        planets.push(data);
      }
    })
    .on("error", (error) => {
      console.log(error);
    })
    .on("end", () => {
      //will give you back a buffer, which is the raw data represented in bits and bytes
      console.log(
        planets.map((planet) => {
          return planet["kepler_name"];
        })
      );
      console.log("done reading file");
    });
};

getPlanets();

// parse();
