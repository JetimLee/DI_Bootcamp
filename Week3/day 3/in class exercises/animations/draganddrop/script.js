let element = document.getElementById("box");
element.setAttribute("draggable", "true");

element.addEventListener("dragstart", (event) => {
  event.target.style.backgroundColor = "red";
});

element.addEventListener("dragend", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  let x = event.clientX;
  let y = event.clientY;
  console.log(event);
  event.target.style.left = `${x}px`;
  event.target.style.top = `${y}px`;
  event.target.style.position = "absolute";
});

// let element = document.getElementById("box")
// element.setAttribute('draggable','true');

// element.addEventListener("dragstart", function(event) {
//   event.target.style.backgroundColor = "lightpink";
//   console.log ("drag " +  "X: " + event.clientX  + " Y: " +  event.clientY);
// });

// element.addEventListener("dragend", function(event) {
//     event.target.style.backgroundColor = "lightgreen";
//     let _x = event.clientX;
//     let _y = event.clientY;
//     console.log(event)
//     event.target.style.left = _x + "px";
//     event.target.style.top = _y + "px";
//     event.target.style.position  ="absolute"; //Necessary
//     console.log ("dragend" + "X: " + event.clientX  + " Y: " +  event.clientY );
//   });
