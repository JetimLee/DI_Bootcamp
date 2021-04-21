let banner = document.getElementById("banner");

let timeRemaining = 10;
const countDown = () => {
  banner.innerText = `the sale ends in ${timeRemaining} seconds`;
  if (timeRemaining === 0) {
    clearInterval(int);
  }
  timeRemaining--;
};

let int = setInterval(countDown, 1000);
