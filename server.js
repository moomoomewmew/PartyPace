const express = require('express');
const cors = require("cors")
const users = require("./routes/index.js")
const rides = require("./routes/rides.js")
const db = require('./db');
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use("/api/v1/users", users)
app.use("/api/v1/rides", rides)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use("*",  (req, res) => res.status(404).json({ error: "not found"}))

app.listen(PORT, () => {
    console.log(`listening on port 3001`)
})
