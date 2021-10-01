const express = require("express");
const router = express.Router();

const Order = require("../models/order.model");

router.get("/:id", async (req, res) => {
    const item = await Order.findById(req.params.id).lean().exec();

    res.send({ item });
});

router.get("/users/:id", async (req, res) => {
    const items = await Order.find({ user_id: req.params.id }).lean().exec();

    res.send({ items });
})

router.post("", async (req, res) => {
    const item = await Order.create(req.body);
    res.send({ item });
});



module.exports = router;
