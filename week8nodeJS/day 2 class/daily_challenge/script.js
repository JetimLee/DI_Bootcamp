const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (request, response) => {
//   response.send("hello world");
// });

app.get("/aboutme/:hobby", (req, res) => {
  res.send("kung fu");
});
app.get("*", (req, res) => {
  //star represents all the wrong routes
  res.send("404 page");
});

app.post("/form", function (req, res) {
  console.log(req.body);
  res.send("recieved your request!");
});

app.listen(3004, () => {
  console.log("server is listening on port 3004");
});
