function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

/* 

What is the returned value when moveCommand("forward") - you encounter a monster
What is the returned value when moveCommand("back") - you arrived home
What is the returned value when moveCommand("right") - you found a river
What is the returned value when moveCommand("left") - you run into a troll

*/
