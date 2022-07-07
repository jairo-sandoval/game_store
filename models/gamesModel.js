const { db } = require('../utils/database')
const { DataTypes } = require('sequelize') 

const Games = db.define('games', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    genre: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    status: {
        allowNull: false,
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
})

module.exports = { Games }
