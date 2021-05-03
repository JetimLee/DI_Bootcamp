const searchButton = document.getElementById("searchBtn");
console.log(searchButton);
const root = document.getElementById("root");
const searchField = document.getElementById("searchBar");
const clearButton = document.getElementById("clear");

const loadUserInput = () => {
  let request;
  const searchFieldValue = document.getElementById("searchBar").value;
  console.log(searchFieldValue);
  let api = `https://api.giphy.com/v1/gifs/search?q=${searchFieldValue}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
  request = new XMLHttpRequest();

  request.open("GET", api);
  request.responseType = "json";
  request.withCredentials = false;
  request.onload = () => {
    let actualData = request.response;
    console.log(actualData.data);
    createAGiph(actualData.data);
  };
  request.send();
};

const clearAllGifs = () => {
  root.innerHTML = "";
};
clearButton.addEventListener("click", clearAllGifs);
const createAGiph = (gifs) => {
  // response = JSON.parse(response);
  // let gifs = response.data;
  gifs.forEach((item) => {
    let imageContainer = document.createElement(`div`);
    imageContainer.classList.add("imageContainer");
    root.append(imageContainer);
    let gifImage = document.createElement("img");
    imageContainer.append(gifImage);
    gifImage.src = item.images.fixed_height.url;
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.innerText = "delete";
    imageContainer.append(deleteButton);
    deleteButton.addEventListener("click", () => {
      imageContainer.removeChild(gifImage);
      imageContainer.removeChild(deleteButton);
    });
  });

  // let imagesSources = gifs.map((el) => {
  //
  // });
  // return imagesSources;
};
searchButton.addEventListener("click", loadUserInput);
