const Pool = require('pg').Pool
require('dotenv').config()


// process.env is from .env file
const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: 'todoapp',
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
})

module.exports = pool