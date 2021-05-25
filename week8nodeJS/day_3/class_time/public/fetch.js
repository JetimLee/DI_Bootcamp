const myButton = document.getElementById("myButton");
const user = document.getElementById("user");
const secondButton = document.getElementById("secondButton");
const root = document.getElementById("root");

const getData = async () => {
  fetch("http://localhost:5000/showUsers")
    .then((res) => res.json())
    .then((data) => createData(data))
    .catch((error) => console.log(error));
};

const sendData = () => {
  let value = user.value;
  console.log(value);
  fetch("http://localhost:5000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value }),
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
  arr.forEach((item) => {
    let div = document.createElement("div");
    div.innerText = item.value;
    root.append(div);
  });
};
