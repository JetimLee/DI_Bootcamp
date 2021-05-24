const express = require("express");

const application = express();
const port = 3003;

application.get("/", (request, response) => {
  response.send("hello there general kenobi");
});

application.listen(port, () => {
  console.log(`server running on port ${port}`);
});
