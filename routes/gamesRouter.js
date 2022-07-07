const express = require('express')
const {
    getAllGames,
    createGame,
    updateGame,
    deleteGame,
    reviewGame,
} = require('../controllers/gamesController')
const { gameExists } = require('../middlewares/gamesMiddleware')
const { protectSession } = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/', getAllGames)

router.use(protectSession)

router.post('/reviews/:gameId', reviewGame)

router.post('/', createGame)

router.use('/:id', gameExists)
    .route('/:id')
    .patch(updateGame)
    .delete(deleteGame)




module.exports = { gamesRouter: router}