const MongoClient = require("mongodb").MongoClient;

const URL = `mongodb+srv://jetim:sexy123@cluster0.blpcu.mongodb.net/products_test?retryWrites=true&w=majority`;

const createProduct = async (req, resp, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(URL);

  try {
    await client.connect();
    const db = client.db();
    //must provide name of collection as an argument
    const result = db.collection(`products`).insertOne(newProduct);
  } catch (error) {
    return resp.json({ message: `data could not be stored ${error}` });
  }
  //must close the connection after opening it
  client.close();
  resp.json(newProduct);
};

const getProducts = async (req, resp, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
