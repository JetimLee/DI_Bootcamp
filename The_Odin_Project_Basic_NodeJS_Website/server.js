const express = require("express");
const path = require("path");

const server = express();

server.use(express.static(__dirname + "/public"));

server.get("/", (req, resp) => {
  resp.send("hello from index.html");
});
server.get("/about", (req, resp) => {
  resp.sendFile(__dirname + "/public/about.html");
});
server.get("/contact-me", (req, resp) => {
  resp.sendFile(__dirname + "/public/contact-me.html");
});

server.get("*", (req, resp) => {
  resp.status(404).send("Sorry can't find that!");
});

server.listen(333, () => {
  console.log("server listening on port 333");
});
