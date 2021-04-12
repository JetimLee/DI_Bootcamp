userLanguage = prompt("What language do you speak?".toLowerCase());

switch (userLanguage.toLowerCase()) {
  case "french":
    console.log("Bonjour!");
    break;
  case "english":
    console.log("Hello there!");
    break;
  case "hebrew":
    console.log("Shalom!");
    break;
  default:
    alert(`01110011 01101111 01110010 01110010 01111001`);
}
