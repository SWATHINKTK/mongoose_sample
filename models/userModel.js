const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// const schema = mongoose.model('userdetails',userschema)
module.exports = mongoose.model('userdetails',userschema);