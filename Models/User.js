const mongoose = require('mongoose')
const userSchema =  new mongoose.Schema({
    id : Number,
    Topic : String,
    State: String,
    City: String,
    Year_of_build : Number,
    Description: String,
    img: String 
})

const userModel = mongoose.model("Data" , userSchema)

module.exports = userModel