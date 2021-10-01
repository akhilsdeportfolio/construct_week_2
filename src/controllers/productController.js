const express = require("express");

const router = express.Router();

const Product = require("../models/productModel");

const Brand = require("../models/brandModel");


//CREATE product

router.post("/",async (req,res)=>{

    let product = await Product.create(req.body);

    res.status(201).send({product});     
});


// GET ALL product

router.get("/",async (req,res)=>{

     let products = await Product.find().populate("brand_id").lean();

     return res.render('productPage.ejs', {
          products: products,
        });
});


router.get("/all",async (req,res)=>{

     let products = await Product.find().populate("brand_id").lean();

     res.status(200).send(products);
});

router.get("/filters",async (req,res)=>{


     console.log(req.query)

     let brands = await Brand.find({ brand_name : req.query.brands } ).populate().lean();  

     let products = await Product.find({ brand_id: brands[0]._id }).populate("brand_id").lean();     

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


//GET product by ID



router.get("/:sortBy/sort",async (req,res)=>{

     let products = await Product.find().populate("brand_id").sort({"price":req.params.sortBy}).lean();     
 
     return res.render('productPage.ejs', {
          products: products,
        });
 });


//  router.get("/filter/:brand",async (req,res)=>{


//      let brands = await Brand.find({ brand_name : req.params.brand } ).populate().lean();  

//      let products = await Product.find({ brand_id: brands[0]._id }).populate("brand_id").lean();     

//      return res.render('productPage.ejs', {
//           products: products,
//         });
//  });

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








