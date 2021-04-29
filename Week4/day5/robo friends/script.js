const parentCardContainer = document.getElementById("masterContainer");

const body = document.getElementById("theDamnBody");

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

const getImageSource = (arr) => {
  let imageSources = arr.map((element) => {
    return element.image;
  });
  return imageSources;
};
const getNames = (arr) => {
  let names = arr.map((element) => {
    return element.name;
  });
  return names;
};

const getEmails = (arr) => {
  let emailSources = arr.map((element) => {
    return element.email;
  });
  return emailSources;
};

const displayCards = (arr) => {
  const newDisplay = arr
    .map((element) => {
      return `<div class="profileCard">
          <div class="imageContainer">
          <img src=${element.image}></img>
           <div class="nameContainer">
          <h2>${element.name}</h2>
          <p>${element.email}</p>
          </div>
          </div>
          </div>`;
    })
    .join("");
  parentCardContainer.innerHTML = newDisplay;
};

const generateTopArea = () => {
  const header = document.createElement("header");
  body.prepend(header);
  header.classList.add("header2");
  const logo = document.createElement("div");
  header.append(logo);
  logo.classList.add("logo");
  const robofriends = document.createElement("h2");
  logo.append(robofriends);
  robofriends.innerText = "Robofriends";
  const searchBarDiv = document.createElement("div");
  header.append(searchBarDiv);
  const searchThing = document.createElement("input");
  searchBarDiv.append(searchThing);
  searchThing.placeholder = "search robots...";
  searchThing.classList.add("searchBar");
};

const generateCards = () => {
  generateTopArea();
  const searchBar = document.getElementsByClassName("searchBar")[0];
  console.log(searchBar);
  for (i = 0; i < robots.length; i++) {
    let profileCard = document.createElement("div");
    profileCard.classList.add("profileCard");
    parentCardContainer.append(profileCard);
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("imageContainer");
    profileCard.append(imageContainer);
    let robotImage = document.createElement("img");
    robotImage.src = getImageSource(robots)[i];
    imageContainer.append(robotImage);
    let nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");
    imageContainer.append(nameContainer);
    let name = document.createElement("h2");
    nameContainer.append(name);
    name.innerText = getNames(robots)[i];
    let emailBlock = document.createElement("p");
    nameContainer.append(emailBlock);
    emailBlock.innerText = getEmails(robots)[i];
  }
  searchBar.addEventListener("keyup", (e) => {
    const searchInput = e.target.value;
    console.log(searchInput);
    const filteredNames = robots.filter((element) => {
      return element.name.toLowerCase().includes(searchInput);
    });
    console.log(filteredNames);
    displayCards(filteredNames);
  });
};

generateCards();
