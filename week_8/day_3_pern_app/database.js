const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "jetimlee69!",
  database: "dvdrental",
});

const getCountries = () => {
  client.connect();
  client.query("select * from country", (err, result) => {
    if (!err) {
      console.log(result.rows);
      return result.rows;
    }
    client.end();
  });
  client.on("connect", () => {
    console.log("database connected");
  });
  client.on("end", () => {
    console.log("database connection ended");
  });
};
module.exports = getCountries;
