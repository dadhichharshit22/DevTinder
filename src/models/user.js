const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
    },
    phoneNumber:{
        type: Number,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    }
})


module.exports = mongoose.model("User",userSchema);