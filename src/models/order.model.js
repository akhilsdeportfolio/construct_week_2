const mongoose = require("mongoose");
let orderNumberSchema = new mongoose.Schema({
  order_number: { type: Number, trim: true, required: true },
});

let OrderNumber = mongoose.model("next", orderNumberSchema);

module.exports = OrderNumber;
