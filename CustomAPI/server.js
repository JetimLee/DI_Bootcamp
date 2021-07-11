const express = require("express");
const request = require("request-promise");
//used to make api requests

const app = express();
const PORT = 4000 || process.env.PORT;

// const API_KEY = "dcdada876e8462417a65ab5b24caeddc";
//this parses json input, replacing body parser
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Welcome to Amazon scraper API");
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});