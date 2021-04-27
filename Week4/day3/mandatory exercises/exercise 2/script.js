let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const sayHello = (arr) => {
  const newArray = arr.map((item) => {
    return `Hello ${item.firstName}`;
  });
  return newArray;
};

console.log(sayHello(users));

// let users = ["eli", "gavin", "hadas", "josh"];

// //map creates a new array

// const newUsers = users.map((item) => {
//   return `${item}@gmail.com`;
// });

const sayCongratulations = (arr) => {
  const filteredArr = arr.filter((item) => {
    return item.role.includes("Full Stack Resident");
  });
  for (i = 0; i < filteredArr.length; i++) {
    console.log(`Congratulations ${filteredArr[i]["firstName"]}`);
  }
  return filteredArr;
};

console.log(sayCongratulations(users));
// const sayCongratulations = (arr) => {
//   const filteredArr = arr.filter((item) => {
//     return item.role.includes("Full Stack Resident");
//   });
//   return filteredArr;
// };

// sayCongratulations(users);
// const includes = dragons.filter((item) => item.includes("Sa"));
