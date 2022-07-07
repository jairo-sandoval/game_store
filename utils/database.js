const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')

dotenv.config({path: './config.env'})

const db = new Sequelize({
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
})

module.exports = { db }