const express = require("express");

const router = express.Router();
const User = require("../models/user.model");



// GET ALL USERS
router.get("",async (req,res)=>{

     let users = await User.find().lean().exec();
     res.send({users});
});


//CREATE USER POST

router.post("/createUser",async (req,res)=>{
     let createdUser = await User.create(req.body);

     res.send({createdUser});     
});



module.exports=router;








