const express = require('express');
const {adminauth} = require('./middleware/auth');

const app = express();

// app.use("/admin",(req,res,next)=>{
//     const token = "xyz23";
//     const isAdmin = token === "xyz";
//     if(!isAdmin){
//         res.status(401).send("Unauthorized user");
//     }
//     next();
// })
//app.use("/admin",adminauth);

app.get("/admin/getdata",adminauth,(req,res)=>{
    res.send("Get all the data");
});

app.delete("/admin/deleteuser",(req,res)=>{
    res.send("delete the user");
});

// Advanced Routes 
app.get("/abc",(req,res)=>{
    res.send({
        firstName:"Akshay",
        lastName:"Saini"
    });
});

app.listen(3000,()=>{
    console.log("Server is running on the port number 3000...");
});