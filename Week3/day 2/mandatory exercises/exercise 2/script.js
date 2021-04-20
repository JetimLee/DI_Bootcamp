const myBody = document.getElementsByTagName("body")[0];

let bold = document.getElementsByTagName("strong");

let p = document.getElementsByTagName("p")[0];
console.log(p);

const boldItems = () => {
  for (let i = 0; i < bold.length; i++) {
    console.log(bold[i].innerText);
  }
};

const blueHighlighter = () => {
  for (let i = 0; i < bold.length; i++) {
    bold[i].style.color = "blue";
  }
};

const backToBlack = () => {
  for (let i = 0; i < bold.length; i++) {
    bold[i].style.color = "black";
  }
};

p.addEventListener("mouseover", blueHighlighter);
p.addEventListener("mouseout", backToBlack);
