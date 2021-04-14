promptedAmount = prompt(`enter how much the bill was`);
amount = Number(promptedAmount);

const tipCalculator = (amount) => {
  let tip = 0;
  if (amount < 50) {
    tip = amount * 0.2;
  } else if (amount >= 50 && amount <= 200) {
    tip = amount * 0.15;
  } else {
    tip = amount * 0.1;
  }
  let sum = (amount += tip);
  console.log(`the tip is ${tip} and the sum is ${sum}`);
};

tipCalculator(amount);
