const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

env.config();

const app = express();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log(`database connected`)
);

//app.use(express.json()) is the body parser
app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log(`server is up and running`));
