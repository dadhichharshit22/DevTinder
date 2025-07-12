const express = require('express');

const app = express();

// RequestHandler
app.use("/",(req,res)=>{
    console.log("Namaste akshay bhaiya");
})

app.use("/test",(req,res)=>{
    console.log("hello hello hello hello ");
})

app.use("/hello",function(req,res){
    console.log("Helloe from the server");
})

app.listen(3000,()=>{
    console.log("Server is running on the port number 3000...");
});