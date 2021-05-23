// In a new file called date.js, create a function that returns the amount of time left from now until January 1st. Export this function.

// In the file script.js display the result of the function created in date.js.

// (Example: the 1st January is in 10 days and 10:34:01hours)

const getTimeLeftUntilJanuary = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const remaining = `There are ${days} days, ${hours} hours, and ${minutes} minutes left from now till ${endtime}`;
  return {
    remaining,
  };
};

// const deadline = "2022-01-01";

const returnNumberOfMinutesLived = (birthDate) => {
  let difference = Date.parse(new Date()) - Date.parse(birthDate);
  difference /= 1000;
  difference /= 60;
  return Math.abs(Math.round(difference));
};

const untilNextHoliday = (nextHoliday) => {
  let difference = Date.parse(nextHoliday) - Date.parse(new Date());
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let statement = `The next holiday of Rosh HaShanah is in ${days} days`;

  return statement;
};

module.exports = {
  countdown: getTimeLeftUntilJanuary,
  birthCountdown: returnNumberOfMinutesLived,
  nextHoliday: untilNextHoliday,
};
