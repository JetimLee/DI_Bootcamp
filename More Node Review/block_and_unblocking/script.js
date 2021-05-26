//non blocking, async way of writing a file
const fs = require("fs");

// fs.readFile("./txt/start.txt", (error, data) => {
//   if (error) {
//     console.log(erro);
//   } else {
//     console.log(data.toString());
//   }
// });
fs.readFile("./txt/start.txt", (error, data1) => {
  if (error) {
    console.log(error);
  } else {
    fs.readFile(`./txt/${data1}.txt`, (error, data2) => {
      console.log(data2.toString());
    });
  }
});

console.log("will read file!");
