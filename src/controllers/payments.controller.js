const express = require("express");

const Payments = require("../models/payments.model");


const  router = express.Router();
router.get("/:uid",async (req,res)=>{
          let payments=await Payments.find({"user_id":{$eq:req.params.uid}}).lean().exec();
          res.send({payments});
});



router.post("",async (req,res)=>{
     let payments=await Payments.create(req.body);
     res.send({payments});
});


module.exports=router;