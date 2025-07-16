const adminauth = (req,res,next)=>{
      const token = "xyz";
    const isAdmin = token === "xyz";
    if(!isAdmin){
        res.status(401).send("Unauthorized user");
    }
    next();
}

module.exports = {
    adminauth
}