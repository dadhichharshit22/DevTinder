const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: Number,
        required:true
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    }
})


module.exports = mongoose.model("User",userSchema);