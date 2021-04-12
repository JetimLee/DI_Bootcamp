year1 = 8;
year2 = 0;
yearToSolve = 0;

for (yearToSolve = 0; year1 / year2 != 2; yearToSolve++) {
  if (year1 / year2 != 2) {
    year1++;
    year2++;
  }
}

console.log(year1);
console.log(year2);
console.log(yearToSolve);
