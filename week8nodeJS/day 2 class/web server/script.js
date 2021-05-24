// const http = require("http");

// const server = http.createServer((request, response) => {
//   response.setHeader(`Content-Type`, "application/json");
//   let user = {
//     name: "Gavin",
//   };
//   response.end(JSON.stringify(user));
// });

// server.listen(3000);

//with express

const exp = require("express");

const app = exp();

app.use("/", exp.static(__dirname + "/public"));

app.get("/login", (req, res) => {
  console.log(req.query);
  res.send("login get");
});

// app.post("/login", (req, res) => {
//   console.log(req.query);
//   res.send("login post");
// });

// app.post("/login", (req, res) => {
//   console.log(req);
// });
// app.post("/login", (req, res) => {
//   console.log(req);
//   res.send("login post");
// });

app.listen(3000);
