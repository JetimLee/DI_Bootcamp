let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

for (const key in details) {
  console.log(`${key} ${details[key]}`);
}
