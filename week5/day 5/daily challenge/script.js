fetch(
  "http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1"
)
  .then((response) => response.json())
  .then((response) => response.currencies) //dig down to the currencies property which is received from the api and turning response into .json
  .then((data) => {
    for (key in data) {
      //i iterate over the object keys
      // console.log(key);
      // console.log(data[key]);
      let options = document.createElement("option"); //new tag for me, this is a tag that goes inside of a selector
      options.setAttribute("value", key);
      options.innerText = `${key} - ${data[key]}`;
      options.setAttribute("id", key);
      document.querySelector("#list_country1").appendChild(options);
    }
  });

//here i am fetching the api and creating tags in the second selector
fetch(
  "http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1"
)
  .then((response) => response.json())
  .then((response) => response.currencies)
  .then((data) => {
    for (key in data) {
      let options = document.createElement("option");
      options.setAttribute("value", key);
      options.innerText = `${key} - ${data[key]}`;
      options.setAttribute("id", key);
      document.querySelector("#list_country2").appendChild(options);
    }
  });

// fetch(
//   "http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1"
// )
//   .then((response) => response.json())
//   .then((response) => response.currencies)
//   .then((data) => console.log(data)); returns an object with abbreviation properties and key values of the domination spelled out

fetch(
  "http://www.apilayer.net/api/live?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1"
)
  .then((response) => response.json())
  .then((response) => response.quotes)
  .then((response) => console.log(response)); //gives values of currencies as compared to USD

document.querySelector("button").onclick = function () {
  let choice1 = document.querySelector("#list_country1").selectedIndex;
  let currency1 = document.querySelector("#list_country1").options[choice1].id;
  let choice2 = document.querySelector("#list_country2").selectedIndex;
  let currency2 = document.querySelector("#list_country1").options[choice2].id;
  let amount = document.querySelector("input").value;
  fetch(
    "http://www.apilayer.net/api/live?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1"
  )
    .then((response) => response.json())
    .then((response) => response.quotes)
    .then((data) => {
      for (key in data) {
        if (key == "USD" + currency1) {
          value1 = data[key];
        }
        if (key == "USD" + currency2) {
          value2 = data[key];
        }
      }
      return [value1, value2];
    })
    .then((values) => {
      document.querySelector("span").textContent =
        (amount * value2) / value1 + " " + currency2;
    });
};
