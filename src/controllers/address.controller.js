const express = require("express");
const router = express.Router();

const Addresses = require("../models/address.model");

//get all the address details
router.get("", async (req, res) => {
  let address = await Addresses.find().lean().exec(); 
  res.render('address.view.ejs', {
    address: address
  } );
});

// post user address
router.post("", async (req, res) => {
  let createdAddress = await Addresses.create(req.body);
  res.send({ createdAddress });
});

// delete user address
router.delete("/delete/:id", async (req, res) => {
  let deleteAddress = await Addresses.findByIdAndDelete(req.params.id);
  res.send({ deleteAddress });
});

//update address 
router.patch("/updateAddress/:id", async (req, res) => {
  let updateAddress = await Addresses.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.send({ updateAddress });
});

module.exports = router;
