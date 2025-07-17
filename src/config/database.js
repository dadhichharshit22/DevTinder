const mongoose = require('mongoose');

// mongoose.connect("
// mongodb+srv://dadhichharshit222002:AGyIRI2f1TzvQkGw@namastenode.iozheky.mongodb.net
// ");  -> this can be used for connection and return a promise thatwise we used a async function 


const connectDB = async()=>{
    await mongoose.connect(
        "mongodb+srv://dadhichharshit222002:AGyIRI2f1TzvQkGw@namastenode.iozheky.mongodb.net/devTinder"
    );
};
module.exports = connectDB;
