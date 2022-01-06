const client = require("./index")

const getAllUsers = (cb) => {
    client.query('SELECT * FROM users')
    .then((user) => {
        cb(user.rows);
    })
}

module.exports = {
    getAllUsers,
}