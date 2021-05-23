const axios = require("axios");

const num = 2;
const name = "Zivush";

const getCustomerID = () => {
  return `hello from the function ${num} ${name}`;
};

const anotherFunction = () => {
  return "gavin rocks at node JS";
};

async function getTheData() {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.log(`${error} an error occurred`);
  }
}

// getTheData().then((data) => data);

module.exports = {
  id: num,
  theName: name,
  getCustomerData: getCustomerID,
  gavin: anotherFunction,
  getData: getTheData,
};
