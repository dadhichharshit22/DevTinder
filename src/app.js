const express = require('express');

const app = express();


aap.use("/user",)

// // app.use("/user",(req,res)=>{
// //     res.send("HAHAHAHAHA");
// // })

// //This will only handle GET Call to /user
// app.get("/user",(req,res)=>{
//     res.send({
//         firstName:"Akshay",
//         lastName:"Saini"
//     });
// });


// app.post("/user",(req,res)=>{
//     // this controller or route handler
//     // saving the data DB
//     res.send("Data Successfully saved to the Database");
// })

// app.delete("/user",(req,res)=>{
//     res.send("Delete Successfully");
// })

// // this will match all the http method api calls to /test
// app.use("/test",(req,res)=>{
//     res.send("hello hello hello hello ");
// })

// RequestHandler
// app.use("/hello",function(req,res){
//     res.send("Hello from the server");
// })
// app.use("/",(req,res)=>{
//     res.send("Namaste akshay bhaiya");
// })


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