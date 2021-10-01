const express = require("express");

const router = express.Router();
const User = require("../models/user.model");
const WishList = require("../models/wishlist.model");
const axios = require("axios").default;


// GET ALL USERS
router.get("/all", async (req, res) => {
  let users = await User.find().lean().exec();
  res.send({userDetails:users });
});




router.post("/login",async (req,res)=>{


    console.log(req.body);

    let username = req.body.email.trim();
    let pass = req.body.password.trim();
    //console.log(username);
    //console.log(pass);

      let user = await User.find({$and:[{email:{$eq:username}},{password:{$eq:pass}}]},{"__id":1,"email":1}).lean().exec();
      console.log(user);

      //res.send(user); 
      //if(user.length > 0)
        //res.render("myaccount.view.ejs",{user:user[0],orders:0});
      //else
        //res.send("login failed");


        if(user.length > 0)
        {
          res.send({"status":true,user:user[0]});

          

        }
        else
        {
          res.send({"status":flase,error:"please enter password and email correctly and try again"});
        }

        //res.send(user);


})



router.post("/isUserPresent", async (req, res) => {
  let query = req.body.email.trim();
  console.log(query);
  let users = await User.find({email:{$eq:query}}).count();
  console.log("users present "+users);
  if(users > 0) 
    res.render("signin.veiw.ejs",{email:query.trim()});
  else
    res.render("signup.veiw.ejs",{email:query.trim()});
});




//CREATE USER POST




router.post("/createUser", async (req, res) => {
  let createdUser = await User.create(req.body);
  // create shopping id 


  // create wishid 


  axios.post('http://localhost:5000/wishlist', {
    user_id:createdUser._id
  })
  .then(function (response) {
    console.log(response.data);
    res.send({createdUser,wishlist:response.data});
  })
  .catch(function (error) {
    console.log(error);
  });
  
  


  
});

router.patch("/updateUser/:id", async (req, res) => {
  let updateUserData = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.send({ updateUserData });
});

router.delete("/delete/:id", async (req, res) => {
  let deleteUserData = await User.findByIdAndDelete(req.params.id);

  res.send({ deleteUserData });
});
module.exports = router;
