const express = require("express");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
require("dotenv").config();
const notFound = require("./middleware/404");

const app = express();

//here i use routes to prevent the server file from becoming seriously bloaded
const PORT = process.env.PORT || 4001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`connected to db`);
    app.listen(PORT, () => {
      console.log(`server listening on ${PORT}`);
    });
  } catch (error) {
    console.log(`could not connect to db ${error}`);
  }
};
startServer();
