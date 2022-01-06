const express = require('express');
const PORT = 3001;
const bodyParser = require('body-parser');
const morgan = require("morgan");


const app = express();
const users = require("./routes/users");

const { getAllUsers, getUserById } = require('./database/queries')


//routes

app.get('/', function (req, res) {
 getAllUsers((users) => {
   res.json(users)
 });
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log('IDDDD', id)

  getUserById(id)
    .then((user) => {
      res.json(user);
    }
    )
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