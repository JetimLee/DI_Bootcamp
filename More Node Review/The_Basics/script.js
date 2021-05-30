const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const server = express();

// server.use("/", (req, resp, next) => {
//   console.log("in my first middleware");
//   next();
// });
// server.use("/", (req, resp) => {
//resp.send('something')
//   console.log("in my second Middleware");
// });

server.use("/about", (req, resp) => {
  console.log("second middleware");
  resp.send("<h1>Hello to about me</h1>");
});
server.use("/", (req, resp) => {
  resp.send("<h1>hello from the root</h1>");
});

server.listen(303, () => {
  console.log("server listening on port 303");
});

//LECTURE PARTS

//this is what .use does, next passes a function to the use method, and the next argument then travels onto the next middleware
// server.use((req,resp,next)=>{})

// server.get("/", (resp, req) => {
//   req.send("hello from node");
// });

//this is how middleware works
// server.use((req, resp, next) => {
//   console.log("in the middleware");
//   next();
// });
// server.use((req, resp, next) => {
//   console.log("in the next middleware");
//   resp.send("hello from second middleware");
// });
