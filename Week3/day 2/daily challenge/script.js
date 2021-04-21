let input = document.getElementsByTagName("input");
const btn = document.getElementById("lib-button");
let story = document.getElementById("story");

const madLib = () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      alert("fill all inputs");
      return;
    } else {
      story.textContent = ` ${input[0].value} ${input[1].value} ${input[2].value} ${input[3].value} ${input[4].value}`;
    }
  }
};

btn.addEventListener("click", madLib);
