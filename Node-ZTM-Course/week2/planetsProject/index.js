const parse = require("csv-parse");
const fs = require("fs");

const results = [];
fs.createReadStream("kepler_data.csv")
  .pipe(parse({ comment: "#", columns: true }))
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (error) => {
    console.log(error);
  })
  .on("end", () => {
    console.log(results);
    //will give you back a buffer, which is the raw data represented in bits and bytes
    console.log("done reading file");
  });

// parse();
