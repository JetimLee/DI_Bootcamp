const myDiv = document.getElementById("root");

myDiv.style.display = "none";
const saleEnds = () => {
  let p = document.createElement("p");
  p.innerText = "the sale ends in 10 minutes!";
  myDiv.style.display = "block";
  myDiv.appendChild(p);
};

setTimeout(() => {
  saleEnds();
}, 5000);
