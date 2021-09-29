



const express=require("express")

const Wishlist = require("../models/wishlist.model")

const router=express.Router()


//-----------------CRUD API Requests--------------\\

//    1. POST

router.post("",async(req,res)=>{

    const wishlist=await Wishlist.create(req.body)
   

    return res.send({wishlist})
})


//    2. GET

router.get("",async(req,res)=>{

    const wishlist=await Wishlist.find().populate("user_id").lean().exec()
    console.log(wishlist)

    return res.render("wishlist_users",{

        wishlist:wishlist
       
    })
})


//     3. PATCH

router.patch("/:id",async(req,res)=>{

    const wishlist=await Wishlist.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

    return res.send({wishlist})
})


//     4.  DELETE


router.delete("/:id",async(req,res)=>{

    const wishlist=await Wishlist.findByIdAndDelete(req.params.id).lean().exec()

    return res.render("wishlist_delete.ejs",{

        wishlist:wishlist
    })
})

module.exports=router;