const multiplesOf23 = () => {
  let sum = 0;
  for (let i = 0; i < 500; i++) {
    if (i % 23 === 0) {
      sum += i;
      console.log(i);
    }
  }
  console.log(sum);
};

multiplesOf23(23);
