const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        location: { type: String, required: true },
        pace: { type: String, required: true },
        leader: { type: Boolean, required: true }
    },
    { timestamp: true },
)

module.exports = mongoose.model('users', User)