let age = [20, 5, 12, 43, 98, 55];
let total = 0;
let largestAge = 0;

for (let i = 0; i < age.length; i++) {
  total += age[i];
}
console.log(total);

for (let i = 0; i < age.length; i++) {
  if (age[i] > largestAge) {
    largestAge = age[i];
  }
}
console.log(largestAge);
