const { db } = require('../utils/database')
const { DataTypes } = require('sequelize') 

const Reviews = db.define('review', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    gameId: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    comment: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    status: {
        allowNull: false,
        defaultValue: 'active',
        type: DataTypes.STRING,
    },
})

module.exports = { Reviews }