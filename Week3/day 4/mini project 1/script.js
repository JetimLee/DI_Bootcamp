const body = document.getElementsByTagName("body")[0];

const clearButton = document.getElementsByTagName("button")[0];
const colorSelector = document.getElementById("colorSelector");
const colorOptions = document.querySelectorAll(".colorPicker");
console.log(colorOptions);
const colorGrid = document.querySelector(".grid2");

const parentContainer = document.querySelector(".parentContainer");

let backgroundColors = [
  "peru",
  "violet",
  "orange",
  "lightblue",
  "purple",
  "olive",
  "pink",
  "salmon",
  "red",
  "yellow",
  "palegreen",
  "burlywood",
  "orangered",
  "seagreen",
  "slategrey",
  "sienna",
  "sandybrown",
  "brown",
  "lightseagreen",
  "lightgreen",
  "white",
  "darkblue",
];

let colors = colorSelector.children;

const assignBackgroundColors = () => {
  for (let i = 0; i < colors.length - 1; i++) {
    colorOptions[i].style.backgroundColor = backgroundColors[i];
  }
};

//creating the empty boxes
for (let i = 0; i < 2000; i++) {
  let coloringBoxes = document.createElement("div");
  coloringBoxes.classList.add("blankBox");
  colorGrid.appendChild(coloringBoxes);
  coloringBoxes.style.backgroundColor = "white";
  coloringBoxes.addEventListener("click", (e) => {
    e.target.style.backgroundColor = holdColor;
  });
}

const reset = () => {
  for (blank of colorGrid.children) {
    blank.style.backgroundColor = "white";
    holdColor = "white";
  }
};
console.log(colorGrid.children);

const colorClick = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", (e) => {
      console.log(e.target);
      let bg = e.target.style.backgroundColor;
      holdColor = bg;
    });
  }
};

colorClick(colors);

assignBackgroundColors();

clearButton.addEventListener("click", reset);
