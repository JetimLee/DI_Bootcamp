const express = require("express");
const cors = require("cors");

const expressServer = express();
expressServer.use(cors());
const bodyParser = require("body-parser");

expressServer.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
expressServer.use(bodyParser.json());

expressServer.get("/", (request, response) => {
  const user = {
    firstname: "joe",
    lastname: "doe",
  };
  response.send(user);
});

expressServer.listen(3011, () => {
  console.log(`server running on port 3010`);
});

expressServer.post("/", (request, response) => {
  console.log(request.body);
  const user = {
    firstname: "joe",
    lastname: "doe",
  };
  response.send(user);
});
