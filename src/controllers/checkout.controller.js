const express = require("express");
const router = express.Router();

const ShoppingBagDetails = require("../models/shoppingBagDetails.model");
const ShoppingBag = require("../models/shoppingBag.model");
const Address = require("../models/address.model");
const User = require("../models/payments.model");

router.get("/:id", async (req, res) => {
  const shoppingBag = await ShoppingBag.find({
    user_id: { $eq: req.params.id },
  })
    .lean()
    .exec();

  return res.render("checkout.view.ejs", {
    shoppingBag: shoppingBag[0],
  });
});

module.exports = router;
