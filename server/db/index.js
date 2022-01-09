//Sets up communication between PostgresSQL and the app, using the credentials in the .env
//https://node-postgres.com/
const { Pool } = require("pg");
const pool = new Pool();
module.exports = {
  query: (text, params) => pool.query(text, params),
};
