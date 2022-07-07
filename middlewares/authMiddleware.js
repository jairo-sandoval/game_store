const { handlerAsync } = require("../utils/handlerAsync");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const { User } = require("../models/userModel");
const { ErrorMessage } = require("../utils/errorMessage");

dotenv.config({path: './config.env'})

const protectSession = handlerAsync(async(req, res, next) => {
    let token; 
    const tokenValid = req.headers.authorization

    if(tokenValid && tokenValid.startsWith('Bearer')){
        token = tokenValid.split(' ')[1]
    }

    if(!token){
        return res.status(403).json({
            status: "error",
            message: 'token empty or not type Bearer'
        })
    }

    const userVerified = await jwt.verify(token, process.env.JWT_SECRET)
    
    const user = await User.findOne({where: {id: userVerified.id, status: 'active'}})
    if(!user){
        return next( new ErrorMessage('This account does not exist', 403))
    }

    req.sessionUser = user
    next()
})

const protectUserAccount = (req, res, next) => {
    const { user, sessionUser} = req

    if(user.id !== sessionUser.id){
        return next(new ErrorMessage("You aren't owner of this account", 203))
    }

    next()
}

module.exports = { protectSession, protectUserAccount }