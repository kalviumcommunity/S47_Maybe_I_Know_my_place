const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    name:{
        type:String
    },
    email: String,
    age: Number,
    token: String,
})

const userModel = mongoose.model("users" , userSchema)

module.exports = userModel