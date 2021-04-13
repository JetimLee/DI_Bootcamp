let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let userName = prompt(`Please enter your name`);

if (userName in guestList) {
  console.log(`Hi, I am ${userName} and I am from ${guestList[userName]}`);
} else {
  console.log(`i am a guest`);
}

// for (const property in guestList) {
//   if (userName == property) {
//     console.log(`Hello, I am ${property} and I am from ${guestList[property]}`);
//     break;
//   } else {
//     console.log(`I am a guest!`);
//   }
// }
