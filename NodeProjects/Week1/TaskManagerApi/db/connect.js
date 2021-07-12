const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://gavin:gavin1993@cluster0.e9mni.mongodb.net/Task-Manager-API?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((error) => console.log(error));
