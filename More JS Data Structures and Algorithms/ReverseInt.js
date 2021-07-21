const reverseInt = (n) => {
  if (n.toString().split("").length === 0) {
    console.log(n);
    return;
  }
  const stringOfNumbers = n.toString().split("").reverse().join("");
  //have to convert the number first to a a string, then the process is the same as reversing a string
  console.log(stringOfNumbers);
};

reverseInt(15);
reverseInt(1);
reverseInt(0);
reverseInt(-2);
reverseInt(-20);
