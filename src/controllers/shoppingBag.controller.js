const express = require("express");
const router = express.Router();

const ShoppingBag = require("../models/shoppingBag.model");

//Get all the documents in the Shopping Bag collection
router.get("", async (req, res) => {
  const items = await ShoppingBag.find().populate("user_id").lean().exec();
  res.render("shoppingBag.view.ejs", {
    items,
  });
  //res.status(200).send({ items });
});

//Post a new document in the Shopping Bag Collection
router.post("", async (req, res) => {
  const item = await ShoppingBag.create(req.body);
  res.status(201).send({ item });
});

//Get a shopping bag according to the user_id
router.get("/:id", async (req, res) => {
  const item = await ShoppingBag.find({ user_id: { $eq: req.params.id } })
    .populate("user_id")
    .lean()
    .exec();
  res.status(200).send({ item });
});

module.exports = router;
