const express = require("express");

const expressServer = express();

// const path = require("path");

//set static folder and point application to it

expressServer.use(express.static(__dirname + "/public"));

expressServer.listen(3003, () => {
  console.log("server is running on port 3003");
});
