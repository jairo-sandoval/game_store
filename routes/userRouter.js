const express = require('express')
const { 
    createUser, 
    getAllUsers, 
    login, 
    updateUser, 
    deleteUser ,
} = require('../controllers/userControllers')
const { protectSession, protectUserAccount } = require('../middlewares/authMiddleware')
const { userExist } = require('../middlewares/userMiddleware')

const router = express.Router()


router.post('/login', login)

router.post('/signup', createUser)

//protect session

router.use(protectSession)

router.get('/', getAllUsers)

router.use('/:id', userExist)
    .route('/:id')
    .patch( protectUserAccount ,updateUser)
    .delete(protectUserAccount, deleteUser)

module.exports = { userRouter: router}