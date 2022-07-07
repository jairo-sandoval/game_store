const { handlerAsync } = require("../utils/handlerAsync");
const {Games} = require('../models/gamesModel');

const gameExists = handlerAsync(async(req, res, next) => {
    const { id } = req.params

    const game = await Games.findOne({where: {
        id,
        status: 'active'
    }})

    if(!game){
        return res.status(404).json({
            status: "error",
            message: "the id of game does not exist "
        })
    }

    req.game = game
    next()
})

module.exports = { gameExists}



