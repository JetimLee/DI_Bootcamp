'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((movement, index) => {
    const type = movement > 0 ? `deposit` : `withdrawal`;

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__value">${movement}</div>
  </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

displayMovements(account1.movements);

// const user = 'Steven Thomas Williams';
// const username = user.toLocaleLowerCase().split(' ');
// console.log(username);

// let initials = username.map(el => {
//   return el[0].toUpperCase();
// });
// console.log(initials);

const createUsernames = arr => {
  arr.forEach(el => {
    el.username = el.owner //adding a property to each object, setting it equal to .owner property of the object
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase();
  });
};
createUsernames(accounts);
console.log(accounts);

const movements = account1.movements;

const getBalance = arr => {
  const balance = arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
  labelBalance.textContent = `${balance} EUR`;

  return balance;
};

getBalance(movements);

const calcDisplaySummary = movements => {
  const incomes = movements
    .filter(el => el > 0)
    .reduce((accumulator, current) => accumulator + current, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = movements
    .filter(el => el < 0)
    .reduce((accumulator, current) => accumulator + current, 0);
  console.log(`out ${Math.abs(out)}`);
  labelSumOut.textContent = `${Math.abs(out)} eur`;

  const interest = movements
    .filter(el => el > 0)
    .map(el => el * 0.012)
    .filter((el, i, arr) => {
      console.log(arr);
      return el > 1;
    })
    .reduce((accumulator, current) => accumulator + current, 0);
  labelSumInterest.textContent = interest;
};

calcDisplaySummary(movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(0, 3));
// console.log(arr.slice(1, -1));
//does not mutate the array, returns a new array with the extracted parts
//SPLICE does mutate the array
// console.log(arr);
// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr); //here you can see the array has been mutated
// /////////////////////////////////////////////////

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['e', 'd', 'c', 'b', 'a'];
// console.log(arr2.reverse()); //does mutate original array

// //concat - joins two arrays

// const letters = arr.concat(arr2); //concat does not mutate original array
// //same as
// console.log([...arr, ...arr2]);
// console.log(letters);

// //join

// console.log(letters.join(' - '));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const printMessages = arr => {
//   arr.forEach((element, index, array) => {
//     if (element > 0) {
//       console.log(`action ${index + 1} user deposited ${element}`);
//     } else {
//       console.log(`action ${index + 1} user withdrew ${Math.abs(element)}`); //math.abs removes the sign
//     }
//   });
// };

// printMessages(movements);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach((value, key, map) => {
//   console.log(`${value}: ${key}`);
// });

//with a set

const currenciesUnique = new Set([
  'USD',
  'GDP',
  'NIS',
  'USD',
  'NIS',
  'EUR',
  'EUR',
]);

//returns only unique values

// console.log(currenciesUnique);

// currenciesUnique.forEach((value, _, map) => {
//   console.log(`${value}: ${value}`); //set doesn't have keys or indexes, so this prints the same thing
//   //underscore is a throw away variable
// });

// //challenge
// function checkDogs(arr1, arr2) {
//   let newArr1 = arr1.slice(1, -2); //shallow clone, best practice is not to mutate a parameter
//   console.log(newArr1);
//   let joinedArray = newArr1.concat(arr2);
//   console.log(joinedArray);
//   joinedArray.forEach(el => {
//     el >= 3 ? console.log(`${el} adult`) : console.log(`${el} not an adult`);
//   });
// }

// let firstArray = [3, 5, 2, 12, 7];
// let secondArray = [4, 1, 15, 8, 3];

// // checkDogs(firstArray, secondArray);

// let newestFirstArray = [9, 16, 6, 8, 3];
// let newestSecondArray = [10, 5, 6, 1, 4];

// checkDogs(newestFirstArray, newestSecondArray);

const eurToUsd = 1.1;

let convertedFromEurToUSD = movements.map(element => {
  return element * eurToUsd;
});
//more in line with functional programming

// console.log(convertedFromEurToUSD);

//sort of the same thing, just longer.
//map uses a function to create a new function, the for of method solves the problem using a declared array
// const movementsUSDFor = [];
// for (const mov of movements) {
//   movementsUSDFor.push(mov);
// }
// console.log(movementsUSDFor);

// const movementDescriptions = movements.map((mov, i) => {
//   if (mov > 0) {
//     return `action ${i + 1} user deposited ${mov}`;
//   } else {
//     return `action ${i + 1} user withdrew ${Math.abs(mov)}`;
//   }
// });

// console.log(movementDescriptions);

// const deposits = movements.filter((el, i, arr) => {
//   return el > 0;
// });
// const withdrawals = movements.filter(el => {
//   return el < 0;
// });

// console.log(`here are deposits ${deposits}`);
// console.log(`here are withdrawals ${withdrawals}`);

//reduce method, adds up all elements in an array
//accumulator is like a snowball

// const balance = movements.reduce((accumulator, current, i, arr) => {
//   console.log(`Iteration #${i}: ${accumulator}`);
//   return accumulator + current;
// }, 0); //accumulator is initalized at 0 because that's where we want to start counting

// console.log(`balance ${balance}`);

//getting the maximum value
//reduce is for boiling down to a single value, but it doesn't have to be a sum

// const getMax = arr => {
//   let maximum = arr.reduce((accumulator, current) => {
//     if (accumulator > current) {
//       return accumulator;
//     } else {
//       return current;
//     }
//   }, arr[0]); //start here because this would not work in finding the minimim
//   return maximum;
// };

// console.log(getMax(movements));

// const getMinimum = arr => {
//   let minimum = arr.reduce((accumulator, current) => {
//     if (accumulator < current) {
//       return accumulator;
//     } else {
//       return current;
//     }
//   }, arr[0]);
//   return minimum;
// };

// console.log(getMinimum(account2.movements));

// //coding challenge 2

// const calcAverageHumanAge = arr => {
//   const humanAgeArray = arr.map(el => {
//     if (el <= 2) {
//       return el * 2;
//     } else {
//       return 16 + el * 4;
//     }
//   });
// let humanAgeArray = [];
// arr.forEach(el => {
//   if (el <= 2) {
//     humanAgeArray.push(el * 2);
//   } else {
//   //     humanAgeArray.push(16 + el * 4);
//   //   }
//   // });
//   console.log(`human age array ${humanAgeArray}`);
//   const under18 = humanAgeArray.filter((el, i) => {
//     return el > 18;
//   });
//   console.log(`over age 18 array ${under18}`);
//   const totalAges = under18.reduce((accumulator, current) => {
//     return accumulator + current;
//   }, 0);
//   console.log(`total ages ${totalAges}`);
//   const ageAverages = totalAges / under18.length;
//   console.log(`age average is ${ageAverages}`);
// };

// let data1 = [5, 2, 4, 1, 15, 8, 3];
// let data2 = [16, 6, 10, 5, 6, 1, 4];

// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);

const totalDepositsInUSD = movements
  .filter(move => move > 0)
  .map(mov => mov * eurToUsd)
  .reduce((accumulator, current) => accumulator + current, 0);

console.log(`total ${totalDepositsInUSD}`);

//can chain many different methods, so long as they return new arrays, after reduce tho you cannot chain a method as it returns a value and not an array
