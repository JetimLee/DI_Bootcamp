console.log("working");
const nameInput = document.getElementById("name");

const locationInput = document.getElementById("location");

const emailInput = document.getElementById("email");

const confirm = document.getElementById("confirmation");
const submitButton = document.getElementById("submitBtn");

let clicked = false;

submitButton.addEventListener("click", (e) => {
  if (clicked === false) {
    e.preventDefault();
    clicked = true;

    confirm.style.display = "block";
    console.log("clicked");
    setTimeout(() => {
      confirm.style.display = "none";
      clicked = false;
    }, 5000);
  } else {
    return;
  }
});
