const { handlerAsync } = require("../utils/handlerAsync");
const { Games } = require('../models/gamesModel');
const { Reviews } = require("../models/reviewModel");

const createGame = handlerAsync(async(req, res, next) => {
    const { title, genre } = req.body

    const newGame = await Games.create({title, genre})

    res.status(201).json({
        status: "success",
        newGame
    }) 
})

const getAllGames = handlerAsync(async(req, res, next) => {
    const games = await Games.findAll();
    
    res.status(200).json({
        status: 'success',
        games
    })
})

const updateGame = handlerAsync(async(req, res, next) => {
    const { game } = req
    const { title, genre } = req.body


    await game.update({title, genre})
    
    res.status(200).json({
        status: "success"
    }) 
})

const deleteGame = handlerAsync(async(req, res, next) => {
    const { game } = req

    await game.update({status: 'disable'})
    
    res.status(200).json({
        status: "success"
    }) 
})

const reviewGame = handlerAsync(async(req, res, next) => {
    const { sessionUser } = req
    const { gameId } = req.params
    const { comment } = req.body

    const review = await Reviews.create({
        userId: sessionUser.id, gameId, comment
    })

    res.status(201).json({
        status:"success",
        review
    })
})

module.exports = {
    createGame, 
    getAllGames,
    updateGame,
    deleteGame,
    reviewGame
}