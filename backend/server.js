const express = require('express');
const cors = require("cors")
const users = require("./routes/index.js")
const db = require('./db');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/users", users)
app.use("*",  (req, res) => res.status(404).json({ error: "not found"}))

app.listen(3001, () => {
    console.log(`listening on port 3001`)
})
