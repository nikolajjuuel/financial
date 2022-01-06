const client = require("./connection")

const getAllUsers = (cb) => {
    client.query('SELECT * FROM users')
        .then((user) => {
            cb(user.rows);
        })
};

const getUserById = (id) => {
    return client.query(`SELECT * FROM users WHERE id = $1;`, [id])
        .then((user) => {
            return user.rows[0];
        })
}

module.exports = {
    getAllUsers,
    getUserById
}