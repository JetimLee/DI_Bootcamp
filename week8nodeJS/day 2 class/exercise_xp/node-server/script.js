const http = require("http");

const myServer = http.createServer((request, response) => {
  response.setHeader(`Content-Type`, "text/html");
  response.write(`<p>Hello there</p>`);
  response.write(`<h1>second response</h1>`);
  response.write(`<h2>third response</h1>`);
});

const newServer = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");
  let data = {
    firstname: "john",
    lastname: "doe",
  };
  response.end(JSON.stringify(data));
});

myServer.listen(3001);

newServer.listen(3002);

//part one and two here
