const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RideSchema = new Schema(
    {
        title: {type: String, required: true},
        location: { type: String, required: true },
        description: { type: String, required: true },
        pace: { type: String, required: true },
        who: { type: String, required: true },
        when: { type: String, required: true }
    },
    { timestamp: true },
)

module.exports = mongoose.model('rides', RideSchema)