let string = prompt("enter a number to count down from");
let numberOfBeers = parseFloat(string); //my number

const bottlesOfBeer = () => {
  let numberOfBeersToTakeDown = 1;
  for (let i = numberOfBeers; i > 0; i--) {
    console.log("im looping");
    if (numberOfBeers <= 0 || numberOfBeers < 0) {
      break;
    }
    let bottles = "bottles";
    let them = "them";
    if (numberOfBeersToTakeDown == 1 || numberOfBeers == 1) {
      bottles = "bottle";
      them = "it";
    } else {
      them = "them";
    }
    console.log(`${numberOfBeers} bottles of beer on the wall`);
    console.log(`${numberOfBeers} bottles of beer`);

    console.log(`take ${numberOfBeersToTakeDown} down, pass ${them} around`);
    numberOfBeers = numberOfBeers - numberOfBeersToTakeDown;
    console.log(`${numberOfBeers} bottles of beer on the wall`);
    numberOfBeersToTakeDown++;
    if (numberOfBeers <= 0 || numberOfBeers < 0) {
      break;
    }
    if (numberOfBeers - numberOfBeersToTakeDown < 0) {
      numberOfBeers = 0;
      break;
    }
  }
  console.log(
    `${numberOfBeers} bottles of beer on the wall, no more beer, we can't go negative!`
  );
};

bottlesOfBeer(numberOfBeers);
