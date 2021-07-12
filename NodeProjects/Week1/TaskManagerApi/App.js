const express = require("express");
require("./db/connect");
const tasks = require("./routes/tasks");

const app = express();

//here i use routes to prevent the server file from becoming seriously bloaded
const PORT = process.env.PORT || 4001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("hello");
});

app.use("/api/v1/tasks", tasks);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
