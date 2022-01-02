const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.get('/', function (req, res) {
  res.send('Hello World')
})

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.listen(3001, () => {
    console.log(
      `Listening on port 3001 👍`
    );
  });