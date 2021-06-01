const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const getCountries = require("./database");

// client.connect();
// const getCountries = async () => {
//   await client.connect();
//   const result = await client.query("select * from country", (err, result) => {
//     if (!err) {
//       console.log(result.rows);
//     } else {
//       console.log(err);
//     }

//     client.end();
//   });
// };
console.log("new run");

const app = express();
app.use(cors());

app.get("/getCountries", (req, resp) => {
  getCountries()
    .then((countries) => resp.send(countries))
    .catch((e) => console.log(e));
});

app.listen(4000, () => {
  console.log("server listening on port 4000");
});
