const root = document.getElementById("root");
const loadUserInput = () => {
  let request;

  let api = `https://api.giphy.com/v1/gifs/search?q=random&rating=g&limit=50&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
  request = new XMLHttpRequest();

  request.open("GET", api);
  request.responseType = "json";
  request.withCredentials = false;
  request.onload = () => {
    let actualData = request.response;
    console.log(actualData.data);
    createAGif(actualData.data);
  };
  request.send();
};

const createAGif = (arr) => {
  arr.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("imageContainer");
    root.append(div);
    let gif = document.createElement("img");
    div.append(gif);
    gif.src = item.images.fixed_height.url;
  });
};

loadUserInput();
