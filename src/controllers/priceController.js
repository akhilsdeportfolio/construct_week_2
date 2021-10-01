const express = require("express");

const router = express.Router();

const Price = require("../models/priceModel");


//CREATE Brand

router.post("/",async (req,res)=>{

    let price = await Price.create(req.body);

    res.status(201).send({price});     
});


// GET ALL Brands

router.get("/",async (req,res)=>{

     let prices = await Price.find().lean();

     res.status(200).send({prices});
});

//delete Brand by ID

router.delete("/:id",async (req,res)=>{


     let deletedprice = await Price.findByIdAndDelete(req.params.id);

     res.status(200).send({deletedprice});

});

module.exports=router;










