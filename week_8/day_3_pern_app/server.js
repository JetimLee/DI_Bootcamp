const express = require("express");
const bodyparser = require("body-parser");
const client = require("./database");

client.connect();

async () => {
  await client.connect();
  const result = await client.query("select * from country", (err, result) => {
    if (!err) {
      console.log(result.rows);
    } else {
      console.log(err);
    }

    client.end();
  });
};

const app = express();

app.get("/", (req, resp) => {
  resp.send("hello from node");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
