let article = document.getElementsByTagName("article")[0];

article.removeChild(article.lastElementChild);

let form = document.forms[0];
let btn = form.elements.submit;
let h1 = document.getElementsByTagName("h1")[0];

let random = Math.floor(Math.random() * 100) + 1;
h1.style.fontSize = `${random}rem`;
let h2 = document.getElementsByTagName("h2")[0];

let h3 = document.getElementsByTagName("h3")[0];

let boldButton = document.getElementsByTagName("button")[0];
let p = document.querySelectorAll("p");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

const checkInputs = () => {
  if (fname.value === "" && lname.value === "") {
    alert(`the inputs are empty`);
  } else {
    let div = document.querySelector(".usersAnswer");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let text = document.createTextNode(`${fname.value} ${lname.value}`);

    div.appendChild(table);
    table.appendChild(tbody);
    tbody.appendChild(tr);
    tr.appendChild(text);
    console.log(fname.value, lname.value, "sucess");
  }
};

const turnPBold = (event) => {
  for (let i = 0; i < p.length; i++) {
    p[i].style.fontWeight = "bold";
  }
};

const changeH2 = (event) => {
  h2.style.backgroundColor = "red";
  event.preventDefault();
};

const hideH3 = (event) => {
  h3.style.display = "none";
};

btn.addEventListener("click", checkInputs);

btn.addEventListener("click", changeH2);

h3.addEventListener("click", hideH3);

boldButton.addEventListener("click", turnPBold);
