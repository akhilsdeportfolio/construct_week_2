const express = require("express");
const router = express.Router();

const OrderNumber = require("../models/orderNumber.model");

router.get("/:id", async (req, res) => {
  const item = await OrderNumber.findById(req.params.id).lean().exec();

  res.send({ item });
});

router.post("", async (req, res) => {
  const item = await OrderNumber.create(req.body);

  res.send({ item });
});

router.patch("/:id", async (req, res) => {
  const item = await OrderNumber.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.send({ item });
});

module.exports = router;
