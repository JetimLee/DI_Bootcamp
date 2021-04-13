let family = {
  name: "Gavin",
  profession: "developer",
  sex: "male",
};

for (const key in family) {
  console.log(key);
}

for (const value in family) {
  console.log(family[value]);
}
