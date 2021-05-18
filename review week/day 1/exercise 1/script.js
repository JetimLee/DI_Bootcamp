console.log("yo");
const root = document.getElementById("root");

let myUl = document.createElement("ul");
root.append(myUl);

let arrayToDisplay = [];

const createMyStuff = () => {
  const myBtn = document.createElement("button");
  myBtn.innerText = "hello";
  root.append(myBtn);
  const newBtn = document.createElement("button");
  newBtn.innerText = "new button";

  root.append(newBtn);

  myBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    root.append(input);
    input.addEventListener("keyup", () => {
      console.log(input.value);
    });
    const addBtn = document.createElement("button");
    addBtn.innerText = "add";
    root.append(addBtn);
    addBtn.addEventListener("click", function () {
      myUl.innerHTML = "";
      arrayToDisplay.push(input.value);
      console.log(arrayToDisplay);
      addingStuffToArray(arrayToDisplay).forEach((el) => {
        let li = document.createElement("li");
        li.innerText = el;
        myUl.append(li);
      });
      addingStuffToArray(arrayToDisplay);
    });
  });
};
createMyStuff();

const addingStuffToArray = (array) => {
  let myNewArray = array.map((el) => {
    return `${el} my great item`;
  });
  return myNewArray;
};

//homework

const cars = [
  { brand: "porsche", price: "10000" },
  { brand: "audi", price: "20000" },
];

//add another key value where it'll be price plus vat, using array.map
