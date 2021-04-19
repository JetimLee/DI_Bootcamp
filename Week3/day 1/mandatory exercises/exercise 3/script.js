// document.getElementById("myDiv").style.backgroundColor = "lightblue";
let myDiv = document.getElementsByTagName("div");
myDiv[0].style.backgroundColor = "lightblue";

// let myUL = document.getElementById("myList");

// myUL.removeChild(myUL.childNodes[1]);
// let pete = myUL.childNodes[2];
// pete.style.border = "black 3px solid";

let myList = document.getElementsByTagName("ul")[0];
console.log(myList);

myList.removeChild(myList.childNodes[1]);
let pete = myList.childNodes[2];
pete.style.border = "black 3px solid";

let myBody = document.getElementsByTagName("body")[0];
myBody.style.fontSize = "10rem";
