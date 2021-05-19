const root = document.getElementById("root");
const searchField = document.createElement("input");
const searchfield2 = document.createElement("input");
const searchButton = document.createElement("button");
searchButton.innerText = "search!";
root.append(searchField);
root.append(searchButton);
root.append(searchfield2);
searchField.placeholder = "first name";
searchfield2.placeholder = "second name";
const nameContainer = document.createElement("div");
nameContainer.classList.add(".nameContainer");
const name1 = document.createElement("h1");
const name2 = document.createElement("h1");
root.append(nameContainer);
nameContainer.append(name1, name2);
nameContainer.style.backgroundColor = "pink";

const getTheStuff = async (url) => {
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ba4689c2b7msh3e2c25d27cbd448p10bdb4jsn06da0d93a122",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      },
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`${error} an error has occurred`);
  }
};

searchButton.addEventListener("click", () => {
  let url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${searchField.value}&sname=${searchfield2.value}`;
  getTheStuff(url);
  name1.innerText = searchField.value;
  name2.innerText = searchfield2.value;
});
