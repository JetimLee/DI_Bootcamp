const { response } = require("express");
const express = require("express");
const request = require("request-promise");
//used to make api requests

const app = express();
const PORT = 4000 || process.env.PORT;

const baseURL = `http://api.scraperapi.com?api_key=${API_KEY}&autoparse=true`;

const generateScraperUrl = (apikey) =>
  `http://api.scraperapi.com?api_key=${apikey}&autoparse=true`;
//this parses json input, replacing body parser
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Welcome to Amazon scraper API");
});

//This will get product details
app.get(`/products/:productId?api_key`, async (req, resp) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScraperUrl(
        api_key
      )}&url=https://www.amazon.com/gp/product/${productId}`
    );
    resp.json(JSON.parse(response));
  } catch (error) {
    resp.json(error);
  }
});

//get product reviews here

app.get(`/products/:productId/reviews`, async (req, resp) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScraperUrl(
        api_key
      )}&url=https://www.amazon.com/product-reviews/${productId}`
    );
    resp.json(JSON.parse(response));
  } catch (error) {
    resp.json(error);
  }
});

//get product offers

app.get(`/products/:productId/offers`, async (req, resp) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScraperUrl(
        api_key
      )}&url=https://www.amazon.com/gp/offer-listing/${productId}`
    );
    resp.json(JSON.parse(response));
  } catch (error) {
    resp.json(error);
  }
});

//get search results

app.get(`/search/:searchQuery`, async (req, resp) => {
  const { searchQuery } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScraperUrl(
        api_key
      )}&url=https://www.amazon.com/s?k=${searchQuery}`
    );
    resp.json(JSON.parse(response));
  } catch (error) {
    resp.json(error);
  }
});
app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
