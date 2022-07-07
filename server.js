const { db } = require('./utils/database')
const { app } = require('./app')
const { User } = require('./models/userModel')
const { Reviews } = require('./models/reviewModel')
const { Games } = require('./models/gamesModel')
const { Consoles } = require('./models/consolesModel')
const { GamesInConsoles } = require('./models/gamesInConsoles')


//relations
User.hasMany(Reviews, {foreignKey: 'userId'})
Reviews.belongsTo(User)

Games.hasMany(Reviews, {foreignKey: 'gamesId'})
Reviews.belongsTo(Games)

Consoles.belongsToMany(Games, { through: GamesInConsoles });
Games.belongsToMany(Consoles, { through: GamesInConsoles });

db.authenticate()
    .then(() => console.log('database authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('database synced'))
    .catch((err) => console.log(err))

const PORT = 3800

app.listen(PORT)
