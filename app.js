const express = require('express')
const {userRouter} = require('./routes/userRouter')
const { globalErrorHandler } = require('./controllers/errorController')
const { gamesRouter } = require('./routes/gamesRouter')

const app = express()

app.use(express.json())

app.use('/api/v1/users', userRouter)
app.use('/api/v1/games', gamesRouter)

app.all('*', (req, res, next) => {
	next(
		new AppError(
			`${req.method} ${req.originalUrl} not found in this server`,
			404
		)
	);
});

app.use(globalErrorHandler)

module.exports = { app }