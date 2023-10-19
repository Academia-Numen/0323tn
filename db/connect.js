const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECT)
        console.log('base de datos activa')
    } catch {
        console.log('error in database')
    }
}

module.exports={connect}