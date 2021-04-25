const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

const addingRandomThings = (arr) => {
  let myNewArray = [];
  arr.forEach((element) => {
    myNewArray.push(element.username + `!`);
  });
  console.log(myNewArray);
  return myNewArray;
};

addingRandomThings(gameInfo);

const biggerThan5 = (arr) => {
  let scoreArray = [];
  arr.forEach((element) => {
    console.log(element.score);
    element.score > 5
      ? scoreArray.push(element.score)
      : console.log(element.score);
  });
  console.log(scoreArray);
};

biggerThan5(gameInfo);
