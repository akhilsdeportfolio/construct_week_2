const express = require("express");

const router = express.Router();

const ProductCategory = require("../models/productCategoryModel");



//CREATE ProductCategorys 

router.post("/",async (req,res)=>{

    let productCategory = await ProductCategory.create(req.body);

    res.status(201).send({productCategory});     
});


// GET ALL productCategorys

router.get("/",async (req,res)=>{

     let productCategories = await ProductCategory.find().lean();

     res.status(200).send({productCategories});
});


//GET ProductCategory by ID

router.get("/:id",async (req,res)=>{

    let productCategory = await ProductCategory.findById(req.params.id).lean();

    res.status(200).send({productCategory});
});


//update ProductCategory by ID

router.patch("/:id",async (req,res)=>{


     let updatedproductCategory = await ProductCategory.findByIdAndUpdate(req.params.id,req.body,{new:true});

     res.status(200).send({updatedproductCategory});

});


//delete ProductCategory by ID

router.delete("/:id",async (req,res)=>{


     let deletedproductCategory = await ProductCategory.findByIdAndDelete(req.params.id);

     res.status(200).send({deletedproductCategory});

});

module.exports=router;








