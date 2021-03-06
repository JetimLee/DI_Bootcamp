const mongoose = require("mongoose");

const Product = require("./models/Product");

const URL = `mongodb+srv://jetim:sexy123@cluster0.blpcu.mongodb.net/products_test?retryWrites=true&w=majority`;

//connect returns a promise, so you can chain .then to it

mongoose
  .connect(URL)
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((error) => {
    console.log(`error ${error}`);
  });

const createProduct = async (req, resp, next) => {
  try {
    const createdProduct = new Product({
      name: req.body.name,
      price: req.body.price,
    });
    const result = await createdProduct.save();
    console.log(typeof createdProduct.id);

    resp.json(result);
  } catch (error) {
    console.log(`error ${error}`);
  }
};

const getProducts = async (req, resp, next) => {
  const products = await Product.find().exec();
  resp.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
