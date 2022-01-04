const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const morgan = require("morgan");
const db = require("./database");

const users = require("./routes/users");

//routes

app.get('/', function (req, res) {
  res.send('Hello World')
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