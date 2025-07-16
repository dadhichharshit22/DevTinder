const express = require('express');
const {adminauth} = require('./middleware/auth');

const app = express();

app.use("/getuser",(err,req,res,next)=>{
    try{

        // write the logic for fetching the data from DB and show on it;
        throw new Error("dewjd");
        res.send("get user data");
    }
    catch(err){
        res.status(500).send("Some error contact support team");
    }
})

app.use("/",(err,req,res,next)=>{
    if(err){
        console.log("Some error is comming or not");
    }
})

app.listen(3000,()=>{
    console.log("Server is running on the port number 3000...");
});