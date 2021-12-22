const mongoose = require('mongoose')
const dotenv = require('dotenv')

mongoose
.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/partyPaceDatabase')    
.then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

