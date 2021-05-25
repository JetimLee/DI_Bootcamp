const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
// const path = require("path");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

server.use("/", express.static(__dirname + "/public"));

// server.get("/", (req, res) => {
//   res.send("hello");
// });

server.post("/add", (req, res) => {
  console.log(req.body);
  let userArray = [];

  const userJSON = fs.readFileSync("./users");
  console.log(userJSON);
  let userJsonString = userJSON.toString();
  console.log(userJsonString);
  userArray = JSON.parse(userJsonString);
  console.log(userArray);
  userArray.push(req.body);

  fs.writeFile("./users", JSON.stringify(userArray), (error) => {
    if (error) {
      console.log(error);
    }
  });

  res.send({ message: "ok" });
});

server.get("/showUsers", (req, res) => {
  let userArray = [];

  const userJSON = fs.readFileSync("./users");
  console.log(userJSON);
  let userJsonString = userJSON.toString();
  console.log(userJsonString);
  userArray = JSON.parse(userJsonString);
  res.send(userArray);
});

server.listen(5000, () => {
  console.log(`server listening on port 5000`);
});

//can also do server.set('port,5000)
//server.listen(server.get('port')()=>{console.log('whatever')})
