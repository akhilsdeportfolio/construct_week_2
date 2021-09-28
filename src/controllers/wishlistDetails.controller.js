

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

    const wishlist_details=await WishlistDetails.find().lean().exec()

    return res.send({wishlist_details})
})


//     3. PATCH

router.patch("/:id",async(req,res)=>{

    const wishlist_details=await WishlistDetails.findById(req.params.id,req.body,{new:true}).lean().exec()

    return res.send({wishlist_details})
})


//     4.  DELETE


router.delete("/:id",async(req,res)=>{

    const wishlist_details=await WishlistDetails.findByIdAndDelete(req.params.id).lean().exec()

    return res.send({wishlist_details})
})



module.exports=router;