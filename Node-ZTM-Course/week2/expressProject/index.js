const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, resp) => {
  resp.send("hello there!");
});
app.get("/messages", (req, resp) => {
  resp.send("this is messages");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
