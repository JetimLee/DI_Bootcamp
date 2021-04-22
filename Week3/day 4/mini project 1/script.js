const body = document.getElementsByTagName("body")[0];

const clearButton = document.getElementsByTagName("button")[0];
const colorSelector = document.getElementById("colorSelector");

const colorGrid = document.querySelector(".grid2");

const parentContainer = document.querySelector(".parentContainer");
console.log(parentContainer);

parentContainer.addEventListener("click", () => {
  console.log("clicked parent");
});
let holdColor;

//creating the empty boxes
for (let i = 0; i < 2418; i++) {
  let coloringBoxes = document.createElement("div");
  coloringBoxes.classList.add("blankBox");
  colorGrid.appendChild(coloringBoxes);
  coloringBoxes.style.backgroundColor = "white";
  coloringBoxes.addEventListener("click", (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = holdColor;
    console.log("clicked");
  });
}

const colorTheBoxes = () => {
  coloringBoxes;
};

const reset = () => {
  for (blank of colorGrid.children) {
    blank.style.backgroundColor = "white";
  }
  console.log("switched");
};

console.log(colorSelector.children);

let colors = colorSelector.children;
console.log(`${colors} this is colors`);

const colorClick = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", (e) => {
      let bg = e.target.style.backgroundColor;
      holdColor = bg;
      console.log("clicked");
    });
  }
};

colorClick(colors);

clearButton.addEventListener("click", reset);
