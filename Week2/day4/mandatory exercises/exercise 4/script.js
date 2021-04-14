let amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

let itemToCheck = prompt(
  "please enter an item to see if it is inside of your cart"
);

const checkBasket = (obj) => {
  if (itemToCheck in obj) {
    console.log(`yes, you have ${itemToCheck}`);
  }
};

checkBasket(amazonBasket);
