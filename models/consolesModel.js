const { db } = require('../utils/database')
const { DataTypes } = require('sequelize') 

const Consoles = db.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    company: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    status: {
        allowNull: false,
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
})

module.exports = { Consoles }
