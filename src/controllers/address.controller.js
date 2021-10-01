const express = require("express");
const router = express.Router();

const Addresses = require("../models/address.model");



router.get("/del/:id/user/:uid", async (req, res) => {
  let deleteAddress = await Addresses.findByIdAndDelete(req.params.id);
  let url ="/myaccount/"+req.params.uid+"/shipping"
  res.redirect(url);
});

//get all the address details
router.get("", async (req, res) => {
  let address = await Addresses.find().lean().exec();
  res.render("address.view.ejs", {
    address: address,
  });
});
// post user address
router.post("", async (req, res) => {
  let createdAddress = await Addresses.create(req.body);
  res.send({ status:true,createdAddress });
});

// delete user address

//update a particular address
router.patch("/updateAddress/:id", async (req, res) => {
  let updateAddress = await Addresses.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.send({ updateAddress });
});

// get a particular user address
  router.get("/dataAdd/:id", async function (req, res) {
    let singleAddress = await Addresses.find({ user_id: { $eq: req.params.id } })
      .lean()
      .exec();
    res.send(singleAddress)
  })

// get a particular user address
router.get("/:id", async function (req, res) {
  let singleAddress = await Addresses.find({ user_id: { $eq: req.params.id } })
    .lean()
    .exec();

  console.log(req.params.id);

  res.render("address.view.ejs", {
    address: singleAddress,user_id:req.params.id
  });
});
  //res.send(singleAddress);

  


module.exports = router;
