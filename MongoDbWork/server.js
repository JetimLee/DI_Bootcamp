const express = require("express");

const createProducts = require("./mongo").createProduct;
const getProducts = require("./mongo").getProducts;
const mongoPractice = require("./mongo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/products", createProducts);
app.get("/products", getProducts);

app.listen(3000, () => {
  console.log(`app running on port 3000`);
});
