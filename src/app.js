const express = require('express');
//const {adminauth} = require('./middleware/auth');
const connectDB = require('./config/database.js');
const User = require("./models/user.js");

const app = express();

// Middleware ->convert Json data into js Object
app.use(express.json());

app.post("/signup",async(req,res)=>{

    // // Create a new instance of the User Model
    // const user = new User({
    //     firstName:"Vanshaj",
    //     lastName:"Dadhich",
    //     emailId:"dadhich.harshit222002@gmail.com",
    //     password:"dadhich@1233"
    // })
    const user = new User(
        req.body);
        
     try{
    await user.save();
    res.send("User Successfully added");
     }catch(err){
     res.status(400).send("Error saving the user:",err.message);
     }
   
});
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

