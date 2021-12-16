const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

let MONGODB_URI = process.env.USERS_URI

mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

