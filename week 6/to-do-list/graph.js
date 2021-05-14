console.log(localStorage);

let storedEndDay = localStorage.endDate;
let storedStartingDay = localStorage.startDate;
console.log(typeof storedStartingDay);
console.log(storedEndDay, storedStartingDay);

// window.addEventListener("load", createChart);
// window.addEventListener("resize", createChart);

const days = document.querySelectorAll(".chart-values li");
const tasks = document.querySelectorAll(".chart-bars li");
