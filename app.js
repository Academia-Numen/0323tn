const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const cookie = require('cookie-parser')
const session = require('express-session')

require('dotenv').config()

const app = express()



app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use(cookie())
app.use(session({
    secret:process.env.SESSION,
    resave: true,
    saveUninitialized: true
}))


const indexRouter = require('./router/index')
const apiRouer = require('./router/api')
const userRouter = require('./router/user')
const {connect}=require('./db/connect')


app.use('/index',indexRouter)
app.use('/v1',apiRouer)
app.use('/user',userRouter)
connect()



module.exports = app

