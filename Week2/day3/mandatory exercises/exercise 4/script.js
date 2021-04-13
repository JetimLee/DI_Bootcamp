let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let userName = prompt(`Please enter your name`);

for (const property in guestList) {
  if (userName == property) {
    console.log(`Hello, I am ${property} and I am from ${guestList[property]}`);
    break;
  } else if (userName != property) {
    console.log(`I am a guest!`);
  }
}
