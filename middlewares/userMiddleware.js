const { User } = require("../models/userModel");
const { handlerAsync } = require("../utils/handlerAsync");
const { ErrorMessage } = require('../utils/errorMessage')

const userExist = handlerAsync(async (req, res, next) => {
    const { id } = req.params

    const user = await User.findOne({where: { id, status: 'active'}})

    if(!user){
        return next(new ErrorMessage('user not found', 404))
    }

    req.user = user
    next()
})

module.exports = { userExist }