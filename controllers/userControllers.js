const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const { User } = require('../models/userModel')
const { handlerAsync } = require('../utils/handlerAsync')

dotenv.config({path: './config.env'})

const getAllUsers = handlerAsync(async(req, res, next) => {
    const users = await User.findAll()
    

    res.status(200).json({
        status: 'success', 
        users
    })
})

const createUser = handlerAsync(async(req, res, next) => {
    const { name, email, password} = req.body

    const salt = await bcrypt.genSalt(11)    
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser =  await User.create({ name, email, password: hashPassword})
    
    newUser.password = undefined

    res.status(201).json({
        status: 'success',
        newUser
    })

})

const updateUser = handlerAsync(async(req, res, next) => {
    const { name, email } = req.body
    const { user } = req 

    await user.update({ name, email })

    res.status(200).json({
        status: 'success'
    })
})

const deleteUser = handlerAsync(async(req, res, next) => {
    const { user } = req 

    await user.update({ status: 'disabled'})

    res.status(200).json({
        status: 'success'
    })
})

const login = handlerAsync(async(req, res, next) => {
    const { email, password } = req.body

    const user = await User.findOne({where: {email, status: 'active'}})

    if(!user){
        return res.status(404).json({
            status: "error",
            message: "credentials invalid"
        })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if(!isValidPassword){
        return res.status(404).json({
            status: "error",
            message: "credentials invalid"
        })
    }

    const token =  jwt.sign({ id: user.id}, process.env.JWT_SECRET, {expiresIn: '30d'} )

    res.status(200).json({
        status: "success",
        token
    })
})

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    login,
}




