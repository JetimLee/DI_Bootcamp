let li = document.getElementsByTagName("li");

let myUL = document.getElementsByClassName("list");

const changeLI = () => {
  let ul = document.getElementsByTagName("ul");
  console.log(ul);
  for (let i = 0; i < ul.length; i++) {
    li[0].innerText = "gavin";
    li[1].innerText = "Richard";
    li[2].innerText = "gavin";
  }
};

const createGreetingLI = () => {
  for (let i = 0; i < myUL.length; i++) {
    let newLI = document.createElement("li");
    let newText = document.createTextNode("hey students");
    newLI.appendChild(newText);
    myUL[i].appendChild(newText);
  }
};

createGreetingLI();
changeLI();
