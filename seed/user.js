const db = require('../db')
const user = require('../models/users.js')

// Connect to the database
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const userMain = async () => {
    const userData = [
        { username: "RodneyTheCat", password: "Ilovekibbles", location: "Colorado Springs", pace: "party-pace", leader: true },
        { username: "MewTheCat", password: "Ilovekibbles", location: "Colorado Springs", pace: "race-pace", leader: false },
        { username: "GingerTheCat", password: "Ilovekibbles", location: "Atlanta", pace: "medium-pace", leader: true },
        { username: "TheNewCat", password: "Ilovekibbles", location: "Baltimore", pace: "medium-pace", leader: false },
    ]

    await user.insertMany(userData)
    console.log("Created some users!")
}
const run = async () => {
    await userMain()
    db.close()
}

run()