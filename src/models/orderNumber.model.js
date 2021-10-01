const mongoose = require("mongoose");
let orderNumberSchema = new mongoose.Schema({
  order_number: { type: Number, trim: true, required: true },
});

let OrderNumber = mongoose.model("order_numbers", orderNumberSchema);

module.exports = OrderNumber;
