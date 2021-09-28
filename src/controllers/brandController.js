const express = require("express");

const router = express.Router();

const Brand = require("../models/brandModel");


//CREATE Brand

router.post("/",async (req,res)=>{

    let brand = await Brand.create(req.body);

    res.status(201).send({brand});     
});


// GET ALL Brands

router.get("/",async (req,res)=>{

     let brands = await Brand.find().lean();

     res.status(200).send({brands});
});


//GET Brand by ID

router.get("/:id",async (req,res)=>{

    let brand = await Brand.findById(req.params.id).lean();

    res.status(200).send({brand});
});


//update Brand by ID

router.patch("/:id",async (req,res)=>{


     let updatedbrand = await Brand.findByIdAndUpdate(req.params.id,req.body,{new:true});

     res.status(200).send({updatedbrand});

});


//delete Brand by ID

router.delete("/:id",async (req,res)=>{


     let deletedbrand = await Brand.findByIdAndDelete(req.params.id);

     res.status(200).send({deletedbrand});

});

module.exports=router;








