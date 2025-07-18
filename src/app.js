const express = require('express');
//const {adminauth} = require('./middleware/auth');
const connectDB = require('./config/database.js');
const User = require("./models/user.js");
const { ReturnDocument } = require('mongodb');

const app = express();

// Middleware ->convert Json data into js Object
app.use(express.json());

// find the user from the database
app.get("/user",async (req,res)=>{
   // console.log(req.body);
    const userEmail = req.body.emailId;
   // console.log(userEmail);
    try{
    const user = await User.find();
   // console.log(user);
   if(user.length===0){
    res.status(404).send("User not found");
   }
    res.send(user);
    }catch(err){
        res.status(400).send("Something Went Wrong");
    }
})

// get a the all user data from the database
app.get("/feed",async (req,res) =>{
    try{
       const users = await User.find({});
       res.send(users);
    }catch(err){
        console.log("Something went wrong");
        res.status(400).send("No user Found");
    }
   

})

app.get("/user",async (req,res)=>{
   // console.log(req.body);
    const userEmail = req.body.emailId;
   // console.log(userEmail);
    try{
    const user = await User.find({emailId:userEmail});
   // console.log(user);
   if(user.length===0){
    res.status(404).send("User not found");
   }
    res.send(user);
    }catch(err){
        res.status(400).send("Something Went Wrong");
    }
})


// delete  a user from the database
app.delete("/user",async (req,res)=>{
    const userId = req.body.userId;
    console.log(userId);
    try{
      
     // const user = User.findByIdAndDelete({_id:userId});
      const user = await User.findByIdAndDelete(userId);
      console.log(user);
      res.send("User Successfully Deleted");
    }catch(err){
        res.send("Something went Wrong");
    }
})

// send a data of user to database
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

// Update the user data from the database
app.patch("/user",async (req,res)=>{
    const userId = req.body.userId;
    console.log(userId);
    const data = req.body;
    console.log(data);
    try{

        await User.findByIdAndUpdate({_id:userId},data,{ReturnDocument:"Before"});
        res.send("User Successfully Update");
    }catch(err){
        res.status(404).send("Something went Wrong");
    }
})


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

