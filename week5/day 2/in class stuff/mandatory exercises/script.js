const xhr = new XMLHttpRequest();

//constructor has no arguments

xhr.open("GET", "https://api.github.com/users/JetimLee");

xhr.onload = () => {
  //returns JSON data from a server, cannot store and manipulate it. not a usable array
  //in order to use it you have to convert the JSON into a javascript object using parse/stringify

  const myObject = JSON.parse(xhr.response);
  console.log(myObject);
};

xhr.send();

//xhr.onload - waits for the response

//xhr.onerror - waits for a response

const newXHR = new XMLHttpRequest();

newXHR.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);

newXHR.onload = () => {
  const data = JSON.parse(newXHR.response);
  console.log(data);
};

newXHR.send();

let myXhr = new XMLHttpRequest();
myXhr.open("GET", "https://jsonplaceholder.typicode.com/users");
myXhr.onload = function () {
  console.log(myXhr.response);
};

myXhr.send();
