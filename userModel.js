const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String, default:''},
    email:{type:String, default:''},
    createdAt:{type:Date, default:Date.now}
})

module.exports= mongoose.model('user',userSchema)