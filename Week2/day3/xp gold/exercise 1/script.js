let building = {
  number_levels: 4,
  number_of_apt_by_level: {
    1: 3,
    2: 4,
    3: 9,
    4: 2,
  },
  name_of_tenants: ["Sarah", "Dan", "David"],
  number_of_rooms_and_rent: {
    Sarah: [3, 990],
    Dan: [4, 1000],
    David: [1, 500],
  },
};

console.log(building["number_levels"]);
console.log(
  building.number_of_apt_by_level[1],
  building.number_of_apt_by_level[3]
);
console.log(building.number_of_rooms_and_rent.Dan[0]);

let danRent = building.number_of_rooms_and_rent.Dan[1];
let sarahRent = building.number_of_rooms_and_rent.Sarah[1];
let davidRent = building.number_of_rooms_and_rent.David[1];

while (sarahRent + davidRent > danRent) {
  danRent++;
}
console.log(danRent);
