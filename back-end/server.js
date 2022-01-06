const express = require('express');
const PORT = 3001;
const bodyParser = require('body-parser');
const morgan = require("morgan");
const db = require("./database/connection");





const app = express();
const users = require("./routes/users");

const { getAllUsers } = require('./database/queries')


//routes

app.get('/', function (req, res) {
 getAllUsers((users) => {
   res.json(users)
 });
});

app.use("/users", users);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log(
    `Listening on port ${PORT} 👍`
  );
});