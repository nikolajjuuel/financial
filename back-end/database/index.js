const pg = require('pg');
require("dotenv").config();

const Client = pg.Client;

console.log('**DB')

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};


const client = new Client(config);

client.connect(() => {
    console.log('connected to the database');
});

client.query('SELECT * FROM users')
    .then((result) => {
        console.log(result.rows);
        client.end();
    }
    );

module.exports = client;
