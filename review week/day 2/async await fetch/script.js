const myBtn = document.getElementById("myBtn");
const myList = document.getElementById("myList");
const newestBtn = document.getElementById("newestBtn");
const myInput = document.getElementById("myInput");
const myGrid = document.getElementById("grid");

// myInput.addEventListener("keyup", () => {
//   console.log(myInput.value);
// });

// let url = "https://zivuch.github.io/employees.json";

// const getTheStuff = async (url) => {
//   let myFetch = await fetch(url)
//     .then((myFetch) => myFetch.json())
//     .then((data) => data.employees)
//     .catch((error) => console.log(error));
//   console.log(myFetch);
//   return myFetch;
// };

// // const words = [
// //   "spray",
// //   "limit",
// //   "elite",
// //   "exuberant",
// //   "destruction",
// //   "present",
// // ];

// // const result = words.filter((word) => word.includes("a"));
// // console.log(result);

// // const filtering = (array) => {
// //   let myFilteredArray = array.filter((word) => word.includes(myInput.value));
// //   console.log(myFilteredArray);
// // };

// myBtn.addEventListener("click", () => {
//   getTheStuff("https://zivuch.github.io/employees.json").then((data) =>
//     data.forEach((element) => {
//       let li = document.createElement("li");
//       li.innerText = element.firstName;
//       myList.append(li);
//       console.log(element.firstName);
//     })
//   );
// });

// //dont need async await with fetch

// const asyncEmployees = async (url) => {
//   try {
//     let response = await fetch(url);
//     let data = await response.json(); //need to await both the response, and for the data from the json process
//     // console.log(data.employees);
//     return data.employees;
//   } catch (error) {
//     // console.log(error);
//   }
// };

// asyncEmployees("https://zivuch.github.io/employees.json");

// newestBtn.addEventListener("click", () => {
//   filterEmployees();
// });

// const filterEmployees = async () => {
//   let employees = await asyncEmployees(
//     "https://zivuch.github.io/employees.json"
//   );
//   const filteredArray = employees.filter((item) => {
//     return item.firstName.toLowerCase().includes(myInput.value.toLowerCase());
//   });
//   console.log(filteredArray);
// };

// //more exercises on filter

// const getQuran = async () => {
//   try {
//     let response = await fetch(
//       "https://api.quran.com/api/v4/verses/random?language=en&words=true"
//     );
//     let data = await response.json();
//     let translation = data.verse.words;
//     // console.log(translation);
//     return translation;
//   } catch (error) {
//     console.log(error);
//   }
// };

// getQuran();

// const filterQuran = async () => {
//   let quran = await getQuran();
//   quran.forEach((el) => console.log(el.translation.text));
// };
// filterQuran();

let url = "https://www.breakingbadapi.com/api/characters";
const getBreakingBad = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    getBreakingBad(url);
  }
};

getBreakingBad(url);

const generateImages = async () => {
  let arrayOfObjs = await getBreakingBad(url);
  arrayOfObjs.forEach((element) => {
    let nameContainer = document.createElement("span");
    let img = document.createElement("img");
    img.src = element.img;
    myGrid.append(img);
    let imgName = document.createElement("p");
    imgName.innerText = element.name;
    nameContainer.append(imgName);
  });
};

generateImages();

// const generateImages = async () => {
//   let arrayOfObjs = await getBreakingBad(url);
//   let mappedCharacters = arrayOfObjs.map((element) => {
//     return element.img;
//   });
//   console.log(mappedCharacters);
//   return mappedCharacters;
// };
