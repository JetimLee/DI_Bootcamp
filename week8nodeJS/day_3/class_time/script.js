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
  // console.log(req.body);
  let itemArray = [];

  const shoppingJSON = fs.readFileSync("./shoppingLIst");
  console.log(shoppingJSON);
  let shoppingJsonString = shoppingJSON.toString();
  console.log(shoppingJSON);
  shoppingArray = JSON.parse(shoppingJsonString);
  console.log(itemArray);
  itemArray.push(req.body);

  fs.writeFile("./shoppingList", JSON.stringify(itemArray), (error) => {
    if (error) {
      console.log(error);
    }
  });

  res.send({ message: "ok" });
});

server.get("/showItems", (req, res) => {
  console.log("trying to show items");
  const shoppingJSON = fs.readFileSync("./shoppingList");
  let shoppingList = shoppingJSON.toString();

  res.send(shoppingList);
});

server.listen(5000, () => {
  console.log(`server listening on port 5000`);
});

//can also do server.set('port,5000)
//server.listen(server.get('port')()=>{console.log('whatever')})
