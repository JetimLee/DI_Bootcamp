const reverseInt = (n) => {
  let reversedNumber = n.toString().split("").reverse().join("");

  return parseInt(reversedNumber) * Math.sign(n);
  //if the number entered is a negative, math.sign will give you -1, if it's positive it will give you 1
};

console.log(reverseInt(15));
console.log(reverseInt(-51));
console.log(reverseInt(-5));
console.log(reverseInt(500));
