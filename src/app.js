const express = require('express');
//const {adminauth} = require('./middleware/auth');
const connectDB = require('./config/database.js');

const app = express();

connectDB()
.then(()=>{
    console.log("Database connection established....");
    app.listen(3000,()=>{
    console.log("Server is running on the port number 3000...");
});
})
.catch((err)=>{
 console.error("Database connot be connected!!");
})

