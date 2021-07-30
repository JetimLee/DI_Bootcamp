const express = require("express");

const app = express();

const port = 9000;

const friends = [
  {
    id: 0,
    name: "gavin coulson",
  },
  {
    id: 1,
    name: "brian coulson",
  },
  {
    id: 2,
    name: "jessica coulson",
  },
  {
    id: 3,
    name: "corbin coulson",
  },
];

app.use((req, resp, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
//parses the data from clientside
app.use(express.json());

app.get("/", (req, resp) => {
  resp.json(friends);
});
app.post("/", (req, resp) => {
  const { name } = req.body;
  if (!name) {
    resp.status(400).json({ message: "must enter a name!" });
  } else {
    const newFriend = {
      name,
      id: friends.length,
    };
    friends.push(newFriend);
    resp.status(200).json(newFriend);
  }
});

app.get("/friend/:friendId", (req, resp) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (!friend) {
    resp.status(404).json({ message: `No friend with that id found` });
  } else {
    resp.status(200).json(friend);
  }
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
