const dotenv  = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const app = express()
const connectTODb = require('./db/db') 
const cookieParser = require('cookie-parser')

const userRouter = require('./routes/user.routes')
connectTODb()

app.use(cors())

cookieParser()

app.get("/", (req,res)=>{
    res.send("Hello WOrld")
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users',userRouter)

module.exports = app