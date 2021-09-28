const express = require("express");

const router = express.Router();

const ProductSubCategory = require("../models/productSubCategoryModel");


//CREATE ProductSubCategorys 

router.post("/",async (req,res)=>{

    let productSubCategory = await ProductSubCategory.create(req.body);

    res.status(201).send({productSubCategory});     
});


// GET ALL productSubCategorys

router.get("/",async (req,res)=>{

     let productSubCategories = await ProductSubCategory.find().lean();

     res.status(200).send({productSubCategories});
});


//GET ProductSubCategory by ID

router.get("/:id",async (req,res)=>{

    let productSubCategory = await ProductSubCategory.findById(req.params.id).lean();

    res.status(200).send({productSubCategory});
});


//update ProductSubCategory by ID

router.patch("/:id",async (req,res)=>{


     let updatedproductSubCategory = await ProductSubCategory.findByIdAndUpdate(req.params.id,req.body,{new:true});

     res.status(200).send({updatedproductSubCategory});

});


//delete ProductSubCategory by ID

router.delete("/:id",async (req,res)=>{


     let deletedproductSubCategory = await ProductSubCategory.findByIdAndDelete(req.params.id);

     res.status(200).send({deletedproductSubCategory});

});

module.exports=router;








