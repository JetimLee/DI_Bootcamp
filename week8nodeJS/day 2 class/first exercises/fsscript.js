const fs = require("fs");

// fs.readFile("./data.txt", (error, data) => {
//   if (error) {
//     console.log(`${error} occurred`);
//   } else {
//     console.log(JSON.parse(data.toString())[0].name);
//   }
// });

// const data = fs.readFileSync("./data.txt");

// console.log(data.toString());
// console.log("after reading");

// let newData = { name: "Daniel" };
// fs.appendFile("./data.txt", JSON.stringify(newData), (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(newData);
//   }
// });
//if you do not have the file with append, it will create the file

// let newestData = "Lord Voldemort";
// fs.writeFile("./one", newestData, (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

fs.unlink("./one", (error) => {
  if (error) {
    console.log(error);
  }
});

fs.copyFile("./data.txt", "./data1", (error) => {
  if (error) {
    console.log(error);
  }
});
