const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//first step in configuring your HTTP request
//takes two arguments, the method you want to use and the URL

//can also do xhr.responseType = 'json'; and it will be automatically parsed

xhr.onload = () => {
  //returns JSON data from a server, cannot store and manipulate it. not a usable array
  //in order to use it you have to convert the JSON into a javascript object using parse/stringify

  const listOfPosts = JSON.parse(xhr.response);
  console.log(listOfPosts);
  //returns a javascript array with which you can work

  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
};

xhr.send();
