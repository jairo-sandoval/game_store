const { db } = require('../utils/database')
const { DataTypes } = require('sequelize') 

const GamesInConsoles = db.define('review', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    gameId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    consoleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    status: {
        allowNull: false,
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
})

module.exports = { GamesInConsoles }