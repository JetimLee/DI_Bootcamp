let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

let newGroceries = JSON.stringify(groceries);
let newestGroceries = JSON.parse(newGroceries);
groceries.totalPrice = "$35";
groceries["other"]["payed"] = false;

console.log(groceries);
console.log(newestGroceries);

//i do not see any changes in my clones because i deep cloned the original object
