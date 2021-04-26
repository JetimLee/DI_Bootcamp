const createA = (n) => {
  // my outer loop
  for (var i = 0; i < n; i++) {
    for (var j = 0; j <= Math.floor(n / 2); j++) {
      // prints two columns
      if (
        ((j == 0 || j == Math.floor(n / 2)) && i != 0) ||
        (i == 0 && j != 0 && j != Math.floor(n / 2)) ||
        i == Math.floor(n / 2)
      ) {
        document.write("*");
      } else document.write("  ");
    }
    document.write("<br>");
  }
};
// Driver Function
createA(7);
