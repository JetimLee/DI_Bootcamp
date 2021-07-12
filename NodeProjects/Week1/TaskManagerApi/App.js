const express = require("express");

const app = express();

const PORT = process.env.PORT || 4001;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("hello");
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
