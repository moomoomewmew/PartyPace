///connects to database and starts server
import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongoDB.MongoClient 
const port = process.env.PORT || 3001
MongoClient.connect(
process.env.USERS_URI,
{
    poolSize: 100
    wtimeout: 3000
    useNewUrlParse: true }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
})

///////
