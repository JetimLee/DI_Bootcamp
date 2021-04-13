let colors = ["blue", "green", "black", "red"];
let suffixes = ["1st", "2nd", "3rd", "4th"];

for (i = 0; i < colors.length; i++) {
  console.log(`my #${colors.indexOf(colors[i]) + 1} choice is ${colors[i]}`);
}

// for (i = 0; i < colors.length && i < suffixes.length; i++) {
//   console.log(`my ${suffixes[i]} choice is ${colors[i]}`);
// }
