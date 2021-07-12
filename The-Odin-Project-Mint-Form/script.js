console.log(`working`);
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phoneNumber");
let passwordInput = document.getElementById("password");

// console.log(emailInput, phoneInput, passwordInput);

let checkEmail = (e) => {
  console.log(emailInput.value);
  if (emailInput.value === "") {
    emailInput.style.border = "1px solid red";
    emailInput.placeholder = "Please put in an email";
  } else {
    emailInput.style.border = "1px solid #b1b1b1 ";
  }
  console.log(emailInput.value === "");
};

let checkPassword = (e) => {
  let passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (passwordRegex.test(passwordInput.value)) {
    console.log("ok");
  } else {
    console.log("not ok");
  }
};

passwordInput.addEventListener("keyup", (e) => {
  checkPassword();
});
passwordInput.addEventListener("click", (e) => {
  checkPassword();
});
emailInput.addEventListener("keyup", (e) => {
  checkEmail();
});
emailInput.addEventListener("click", () => {
  checkEmail();
});
