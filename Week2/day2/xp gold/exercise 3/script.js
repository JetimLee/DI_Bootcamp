verb = prompt(`enter a verb!`);

if (verb.length >= 3 && verb.includes(`ing`) != true) {
  console.log(`${verb}ing`);
} else if (verb.length >= 3 && verb.includes(`ing`) == true) {
  console.log(`${verb}ly`);
} else if (verb.length < 3) {
  console.log(`${verb}`);
}
