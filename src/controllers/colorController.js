const express = require("express");

const router = express.Router();

const Color = require("../models/colorModel");


//CREATE Brand

router.post("/",async (req,res)=>{

    let color = await Color.create(req.body);

    res.status(201).send({color});     
});


// GET ALL Brands

router.get("/",async (req,res)=>{

     let colors = await Color.find().lean();

     res.status(200).send({colors});
});


//GET Brand by ID

router.get("/:id",async (req,res)=>{

    let color = await Color.findById(req.params.id).lean();

    res.status(200).send({color});
});


//update Brand by ID

router.patch("/:id",async (req,res)=>{


     let updatedcolor = await Color.findByIdAndUpdate(req.params.id,req.body,{new:true});

     res.status(200).send({updatedcolor});

});


//delete Brand by ID

router.delete("/:id",async (req,res)=>{


     let deletedcolor = await Color.findByIdAndDelete(req.params.id);

     res.status(200).send({deletedcolor});

});

module.exports=router;








