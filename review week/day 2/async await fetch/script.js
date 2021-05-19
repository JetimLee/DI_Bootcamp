const myBtn = document.getElementById("myBtn");
const myList = document.getElementById("myList");
const newestBtn = document.getElementById("newestBtn");
const myInput = document.getElementById("myInput");

myInput.addEventListener("keyup", () => {
  console.log(myInput.value);
});

let url = "https://zivuch.github.io/employees.json";

const getTheStuff = async (url) => {
  let myFetch = await fetch(url)
    .then((myFetch) => myFetch.json())
    .then((data) => data.employees)
    .catch((error) => console.log(error));
  console.log(myFetch);
  return myFetch;
};

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter((word) => word.includes("a"));
// console.log(result);

// const filtering = (array) => {
//   let myFilteredArray = array.filter((word) => word.includes(myInput.value));
//   console.log(myFilteredArray);
// };

myBtn.addEventListener("click", () => {
  getTheStuff("https://zivuch.github.io/employees.json").then((data) =>
    data.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element.firstName;
      myList.append(li);
      console.log(element.firstName);
    })
  );
});

//dont need async await with fetch

const asyncEmployees = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json(); //need to await both the response, and for the data from the json process
    console.log(data.employees);
    return data.employees;
  } catch (error) {
    // console.log(error);
  }
};

asyncEmployees("https://zivuch.github.io/employees.json");

newestBtn.addEventListener("click", () => {
  filterEmployees();
});

const filterEmployees = async () => {
  let employees = await asyncEmployees(
    "https://zivuch.github.io/employees.json"
  );
  const filteredArray = employees.filter((item) => {
    return item.firstName.toLowerCase().includes(myInput.value.toLowerCase());
  });
  console.log(filteredArray);
};

//more exercises on filter
