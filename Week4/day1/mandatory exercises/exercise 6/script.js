// In this exercise, you have to decide which type of variables you have to use:

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 50000;

let moneyStuff = ["+200", "-300", "+8", "+100"];

const getEndOfMonth = (arr) => {
  let vat = 0.17;
  let expenses;
  let negativeIncrease;
  let newLoss;
  let taxes;
  let newExpenses;
  for (let i = 0; i < arr.length; i++) {
    expenses = parseInt(arr[i]);
    if (expenses < 0) {
      negativeIncrease = expenses * -vat;
      newLoss = negativeIncrease - arr[i];
      console.log(newLoss);
    } else {
      taxes = expenses * vat;
      newExpenses = expenses - taxes;
      console.log(newExpenses);
    }
    taxes = expenses * vat;
    newExpenses = expenses - taxes;
  }
  alert(`Your new balance is ${bankAmount + newExpenses - newLoss}`);
};

getEndOfMonth(moneyStuff);
