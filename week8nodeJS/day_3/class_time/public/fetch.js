const myButton = document.getElementById("myButton");
const item = document.getElementById("item");
const price = document.getElementById("price");
const secondButton = document.getElementById("secondButton");
const root = document.getElementById("root");

const getData = () => {
  console.log("fired");
  fetch("http://localhost:5000/showItems")
    .then((res) => res.json())
    .then((data) => createData(data))
    .catch((error) => console.log(error));
};

const sendData = () => {
  let itemName = item.value;
  let itemPrice = price.value;

  console.log(itemName, itemPrice);
  fetch("http://localhost:5000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemName, itemPrice }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

secondButton.addEventListener("click", () => {
  console.log("also clicked");
  getData();
});

myButton.addEventListener("click", () => {
  console.log("clicked");
  sendData();
});

const createData = (arr) => {
  console.log(arr);
  try {
    arr.forEach((item) => {
      let div = document.createElement("div");
      let name = document.createElement("p");
      let price = document.createElement("p");
      name.textContent = `${item.itemName}: $${item.itemPrice}`;
      price.textContent = item.itemPrice;
      div.append(name);
      root.append(div);
    });
  } catch (e) {
    console.log(e);
  }
};
