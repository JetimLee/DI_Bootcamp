let btn = document.getElementById("submit");

const calculateVolume = (event) => {
  event.preventDefault();

  let radius = document.getElementById("radius").value;
  radius = (4 / 3) * 3.14 * radius * radius * radius;
  let volume = document.getElementById("volume").value;
  document.getElementById("volume").value = radius;
  console.log(radius);
};

btn.addEventListener("click", calculateVolume);
