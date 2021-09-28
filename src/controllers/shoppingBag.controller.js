const express = require("express");
const router = express.Router();

const ShoppingBag = require("../models/shoppingBag.model");

//Get all the documents in the Shopping Bag collection
router.get("", async (req, res) => {
  const items = await ShoppingBag.find().populate("user_id").lean().exec();
  res.status(200).send({ items });
});

//Post a new document in the Shopping Bag Collection
router.post("", async (req, res) => {
  const item = await ShoppingBag.create(req.body);
  res.status(201).send({ item });
});

module.exports = router;
