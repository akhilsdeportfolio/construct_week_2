const express = require("express");
const router = express.Router();

const ShoppingBagDetails = require("../models/shoppingBagDetails.model");
const ShoppingBag = require("../models/shoppingBag.model");

router.get("/:id", async (req, res) => {
  const shoppingBag_id = await ShoppingBag.find(
    (user_id = { $eq: req.params.id })
  )
    .lean()
    .exec();

  return res.render("checkout.view.ejs", {
    shoppingBag_id,
  });
});

module.exports = router;
