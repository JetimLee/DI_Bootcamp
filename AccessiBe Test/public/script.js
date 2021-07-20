const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
//hamburger is the mobile navigation button
//navMenu is the ul element for navigation, it holds all of the links

const userForm = document.getElementById("userForm");
const sendBtn = document.getElementById("send-btn");
//user inputted values
const userNumber = document.getElementById("telephoneNumber");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

//global variables for user info
let inputtedPhone = userNumber.value;
let inputtedName = userName.value;
let inputtedEmail = userEmail.value;

//mobile nav functionality
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  //show class displays all of the links inside of the ul
});

//storing user inputted data into global variables
userNumber.addEventListener("keyup", (e) => {
  let invalidChars = /[^0-9]/gi;
  if (invalidChars.test(e.target.value)) {
    e.target.value = e.target.value.replace(invalidChars, "");
    userNumber.style.border = "1px solid red";
    userNumber.placeholder = "Please input only numbers";
  } else {
    inputtedPhone = e.target.value;
    userNumber.style.border = "1px solid black";
  }
});
userName.addEventListener("keyup", (e) => {
  inputtedName = e.target.value;
});
userEmail.addEventListener("keyup", (e) => {
  inputtedEmail = e.target.value;
});

//post request with inputted data
const sendUserData = async () => {
  const url = " https://jsonplaceholder.typicode.com/users ";
  const user = { inputtedEmail, inputtedName, inputtedPhone };
  try {
    sendBtn.innerText = "Sending";
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      method: "post",
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);

    //checking to see if the send was succesful and if so, changing send to sent
    if (response.ok) {
      sendBtn.innerText = "Sent!";
      userEmail.value = "";
      userName.value = "";
      userNumber.value = "";
      userNumber.placeholder = "Phone";
    }

    return data;
  } catch (error) {
    console.log(`an error occurred ${error}`);
    return;
  }
};
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    await sendUserData();
  } catch (error) {
    console.log(`an error occurred when submitting ${error}`);
    return;
  }
});
