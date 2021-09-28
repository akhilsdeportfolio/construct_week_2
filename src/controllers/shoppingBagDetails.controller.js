const { applyActionCode } = require("@firebase/auth");
const { async } = require("@firebase/util");
const express = require("express");
const router = express.Router();

const ShoppingBagDetails = require("../models/shoppingBagDetails.model");

//Get all the documents in the Shopping Bag Details collection
router.get("", async (req, res) => {
  const items = await ShoppingBagDetails.find()
    .populate("product_id")
    .populate({ path: "shopping_bag_id", populate: { path: "user_id" } })
    .lean()
    .exec();

  res.status(200).send({ items });
});

//Post a new document in the Shopping Bag Details Collection
router.post("", async (req, res) => {
  const item = await ShoppingBagDetails.create(req.body);
  res.status(201).send({ item });
});

//Modify a shopping bag document for a particular field
router.patch("/:id", async (req, res) => {
  const item = await ShoppingBagDetails.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  return res.status(202).send({ item });
});

//Delete the shopping bag document from the collection
router.delete("/:id", async (req, res) => {
  const item = await ShoppingBagDetails.findByIdAndDelete(req.params.id);
  return res.status(203).send({ item });
});

module.exports = router;
