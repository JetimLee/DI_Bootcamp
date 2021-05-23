const { myNumber, getDate } = require("./main.js");
let mainJS = require(`./main.js`);

const http = require("http");
const { hostname } = require("os");

const myServer = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`<p>Hello from the front end!</p>`);
  response.write(`<p>Hello again! It is currently ${getDate()}</p>`);
  response.write(`<h1>Hello from the front end!</h1>`);

  response.end();
});

myServer.listen(3000, `127.0.0.1`, () => {
  console.log(`node server running on port 3000`);
});

const b = 5;
console.log(myNumber + b);
