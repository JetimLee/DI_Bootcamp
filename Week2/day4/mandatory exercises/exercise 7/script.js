const hotelCost = () => {
  let nights = prompt("how many nights are you staying ?");
  let nightPrice = 140;
  let hotelTotal = 0;

  while (isNaN(nights) == true || nights == "") {
    nights = prompt("how many nights are you staying ?");
  }
  hotelTotal = nightPrice * nights;
  console.log(hotelTotal);

  return hotelTotal;
};

const destination = {
  London: 183,
  Paris: 220,
};

const planeRideCost = () => {
  let ticketCost = 0;
  let nonWords = /\d/g;
  let emptyString = /^$/;
  let symbols = /\W+/g;

  let journey = prompt(`What is your destination?`);
  while (
    emptyString.test(journey) == true ||
    nonWords.test(journey) == true ||
    symbols.test(journey) == true
  ) {
    journey = prompt(`What is your destination?`);
  }
  if (journey in destination) {
    console.log(`Enjoy your trip to ${journey}`);
    ticketCost = destination[journey];
    console.log(ticketCost);
  } else {
    ticketCost = 300;
  }
  return ticketCost;
};

const rentalCarCost = () => {
  let amount_per_day = 40;
  let priceToPay = 0;

  let daysToRent = prompt(`How many days do you want to rent your car?`);
  while (isNaN(daysToRent) == true || daysToRent == "") {
    daysToRent = prompt(`How many days do you want to rent your car?`);
  }
  if (daysToRent > 10) {
    let fivePercentDiscount = amount_per_day * daysToRent * 0.05;
    priceToPay = amount_per_day * daysToRent - fivePercentDiscount;
    console.log(priceToPay);
    return priceToPay;
  } else {
    priceToPay = amount_per_day * daysToRent;
    console.log(priceToPay);
  }
  return priceToPay;
};

const total_vacation_cost = () => {
  let totalHotel = hotelCost();
  let totalPlane = planeRideCost();
  let totalCar = rentalCarCost();
  let totalVacation = totalCar + totalHotel + totalPlane;
  console.log(totalVacation);
};
// hotelCost();
// planeRideCost();
// rentalCarCost();
total_vacation_cost();
