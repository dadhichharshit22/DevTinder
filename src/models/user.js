const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type: Number,
        required:true
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"]){
                throw new Error("Gender data is not a valid");
            }
        },
    },
    photoUrl:{
        type:String,
        default:"https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg",
    },
    about:{
        type:String,
        default: "This is Default About Section for the User",
    },
    skills:{
        type: [String],
    },
},
    {
        timestamps:true
    }
    
);


module.exports = mongoose.model("User",userSchema);