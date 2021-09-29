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

//delete Brand by ID

router.delete("/:id",async (req,res)=>{


     let deletedbrand = await Brand.findByIdAndDelete(req.params.id);

     res.status(200).send({deletedbrand});

});

module.exports=router;








