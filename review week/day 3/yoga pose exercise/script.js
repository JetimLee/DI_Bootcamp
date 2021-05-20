const sanskritSelector = document.getElementById("sanskrit");
const englishSelector = document.getElementById("english");
const grid = document.getElementById("grid");

let link = "https://zivuch.github.io/yogaapi.json";
const getTheData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    createYogaImages(data);
    createEnglishNames(data);
    createSanskritNames(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

getTheData(link).then((data) => console.log(data));

englishSelector.addEventListener("change", () => {
  getTheData(link).then((data) => createNewYogaImages(data));
});

sanskritSelector.addEventListener("change", () => {
  getTheData(link).then((data) => createNewYogaImages(data));
});

function createEnglishNames(arr) {
  arr.forEach((element) => {
    let option = document.createElement("option");
    option.innerText = element.english_name;
    englishSelector.append(option);
    // console.log(element.english_name);
  });
}

function createSanskritNames(arr) {
  arr.forEach((element) => {
    let option = document.createElement("option");
    option.innerText = element.sanskrit_name;
    sanskritSelector.append(option);
  });
}

function createYogaImages(arr) {
  arr.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.img_url;
    grid.append(img);
  });
}

function createNewYogaImages(arr) {
  arr.forEach((element) => {
    if (
      element.sanskrit_name == sanskritSelector.value ||
      element.english_name == englishSelector.value
    ) {
      console.log(element.img_url);
      grid.innerHTML = `<img src=${element.img_url}>`;
    }
  });
}
