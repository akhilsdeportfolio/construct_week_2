const express = require("express");

const router= express.Router();


router.get("/:id",async (req,res)=>{
     res.render("myaccount.view.ejs",{data:"welcome",orders:0});
});

router.get("/wishlist",async (req,res)=>{
     res.render("wishlist.view.ejs",{data:"welcome",orders:0});
});

router.get("/rewards",async (req,res)=>{
     res.render("rewards.view.ejs",{data:"welcome",orders:0});
});

module.exports= router;