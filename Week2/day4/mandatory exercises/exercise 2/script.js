let Quarters = 0.25;
let Dimes = 0.1;
let Nickels = 0.05;
let Pennies = 0.01;
let television = {
  name: "Samsung flatscreen",
  price: 85,
};

let changeInPocket = [Quarters * 25, Dimes * 10, Nickels * 5, Pennies * 11];

const checkIfEnough = (item, arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total >= item.price) {
    console.log(`you have enough money to buy ${item.name}, yay`);
  } else {
    console.log(
      `sorry, you're broke, you don't have enough money for ${item.name}`
    );
  }
};

checkIfEnough(television, changeInPocket);
