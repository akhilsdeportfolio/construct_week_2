const express = require("express");

const router = express.Router();

const Product = require("../models/productModel");


//CREATE product

router.post("/",async (req,res)=>{

    let product = await Product.create(req.body);

    res.status(201).send({product});     
});


// GET ALL product

router.get("/",async (req,res)=>{

     let products = await Product.find().lean();

     // res.status(200).send({products});

     return res.render('productPage.ejs', {
          products: products,
        });
});


//GET product by ID

router.get("/:id",async (req,res)=>{

    let product = await Product.findById(req.params.id).lean();

//     res.status(200).send({product});

    return res.render('individualProduct.ejs', {
     product: product,
   });
});


//update product by ID

router.patch("/:id",async (req,res)=>{


     let updatedproduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});

     res.status(200).send({updatedproduct});

});


//delete product by ID

router.delete("/:id",async (req,res)=>{


     let deletedproduct = await Product.findByIdAndDelete(req.params.id);

     res.status(200).send({deletedproduct});

});

module.exports=router;







© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
