const { db } = require('../utils/database')
const { DataTypes } = require('sequelize') 

const User = db.define('user', {
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
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    status: {
        allowNull: false,
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
})

module.exports = { User }
