const express = require("express");
const router= express.Router();
const User = require("../models/user.model");
const WishList = require("../models/wishlist.model");
const WishListDetails = require("../models/wishlistDetails.model");
const Addresses = require("../models/address.model");
const Orders = require("../models/order.model");
const axios = require("axios").default;



router.get("/:id",async (req,res)=>{
     let userData =await User.find({"_id":req.params.id}).lean().exec();
     console.log(userData);


     axios.get(`http://localhost:5000/orders/users/${req.params.id}`,{          
     }).then((response)=>{
          res.render("myaccount.view.ejs",{user:userData[0],orders:response.data.length,response:response.data.items});
     }).catch((err)=>{
          console.error(err);
     })


   
});

router.get("/:id/wishlist",async (req,res)=>{
     
     let userData =await User.find({"_id":req.params.id}).lean().exec();
     console.log(userData);

        
          let wishListData = await WishList.find({user_id:userData[0]._id}).lean().exec();
          console.log(wishListData);
          let wid=wishListData[0]._id;
          let wishlist_details = await WishListDetails.find({wishlist_id:wid}).populate("product_id").lean().exec();


          console.log(wishlist_details);
          //res.send({user:userData[0],orders:0,wishlist_details});
          res.render("wishlist.view.ejs",{user:userData[0],orders:0,wishlist_details});
    
     
});

router.get("/:id/rewards",async (req,res)=>{
     try{
          let userData =await User.find({"_id":req.params.id}).lean().exec();
     
          console.log(userData);
          res.render("rewards.view.ejs",{user:userData[0],orders:0});
          }
          catch(e)
          {
     
                    res.send(e);
          }
     
});

router.get("/:id/password",async (req,res)=>{
     try{
          let userData =await User.find({"_id":req.params.id}).lean().exec();
     
          console.log(userData);
          res.render("changepassword.view.ejs",{user:userData[0],orders:0});
          }
          catch(e)
          {
     
                    res.send(e);
          }
     
});

router.get("/:id/shipping",async (req,res)=>{
     
          let userData =await User.find({"_id":req.params.id}).lean().exec();
     
          console.log(userData);

          let singleAddress = await Addresses.find({ user_id: { $eq: req.params.id } })
    .lean()
    .exec();

          res.render("shipping.view.ejs",{user:userData[0],orders:0,address: singleAddress,user_id:req.params.id});
          
     
});

module.exports= router;