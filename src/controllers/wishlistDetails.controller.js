

const express=require("express")

const WishlistDetails=require("../models/wishlistDetails.model")

const router=express.Router()


//-----------------CRUD API Requests--------------\\

//    1. POST

router.post("",async(req,res)=>{

    const wishlist_details=await WishlistDetails.create(req.body)

    return res.send({wishlist_details})
})


//    2. GET

router.get("",async(req,res)=>{

    const wishlist_details=await WishlistDetails.find().populate("product_id").lean().exec()

    return res.render("wishlistDetails_users.ejs",{

        wishlist_details: wishlist_details
    })
})
//GET wishlist  of user
router.get("/:wishlistId",async(req,res)=>{

    const wishlist_details=await WishlistDetails.find({wishlist_id:req.params.wishlistId}).populate("product_id").lean().exec()

    return res.send({wishlist_details});
})

//     3. PATCH

router.patch("/:id",async(req,res)=>{

    const wishlist_details=await WishlistDetails.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

    return res.send({wishlist_details})
})


//     4.  DELETE


router.get("/delete/:id/:uid",async(req,res)=>{

    const wishlist_details=await WishlistDetails.findByIdAndDelete(req.params.id).lean().exec()

    let url="/myaccount/"+req.params.uid+"/wishlist"
    return res.redirect(url);
})


router.get("/product/:product_id/:wishlist_id",async(req,res)=>{

    const wishlist = await WishlistDetails.find({wishlist_id:req.params.wishlist_id, product_id:req.params.product_id}).lean();

    res.status(200).send(wishlist);

})

module.exports=router;