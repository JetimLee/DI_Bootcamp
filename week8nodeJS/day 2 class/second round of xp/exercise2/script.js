const express = require("express");

const expressServer = express();

expressServer.get("/", (request, response) => {
  response.send("hello there");
});

expressServer.get("/example", (request, response) => {
  response.send("hitting example");
});

expressServer.get("/example/:id", (request, response) => {
  console.log(request.params);
  response.send("example with route params");
});
expressServer.listen(3001, () => {
  console.log("listening on port 3001");
});

expressServer.get("/:id", (request, response) => {
  console.log(request.params);
  response.send("another example with params");
});

expressServer.listen(3002, () => {
  console.log(`listening on port 3002`);
});
