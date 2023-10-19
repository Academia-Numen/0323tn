const {Schema, model}= require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        requied: true
    },
    email: {
        type: String,
        requied: true
    },
    password: {
        type: String,
        requied: true
    },
})


const User = model('User',schema)
module.exports = {User}