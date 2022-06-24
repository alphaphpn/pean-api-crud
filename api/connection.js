const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Password@2022#",
    database: "postgres"
})

module.exports = client