



const express=require("express")

const Wishlist = require("../models/wishlist.model")

const router=express.Router()





//-----------------CRUD API Requests--------------\\

//    1. POST




router.post("",async(req,res)=>{

    const wishlist=await Wishlist.create(req.body)
   

    return res.send({wishlist})
})


router.get("/user/:id",async(req,res)=>{

    const wishlist=await Wishlist.find({user_id:req.params.id}).lean().exec()
    console.log(wishlist)

    res.send(wishlist[0]);
})


//    2. GET

router.get("",async(req,res)=>{

    const wishlist=await Wishlist.find().populate("user_id").lean().exec()
    console.log(wishlist)

    return res.render("wishlist_users",{

        wishlist:wishlist
       
    })
})



router.delete("/remove/:id",async(req,res)=>{

    const wishlist=await Wishlist.findByIdAndDelete(req.params.id).lean().exec()

    return res.render("wishlist_delete.ejs",{

        wishlist:wishlist
    })
})


//     3. PATCH

router.patch("/:id",async(req,res)=>{

    const wishlist=await Wishlist.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

    return res.send({wishlist})
})


//     4.  DELETE



module.exports=router;