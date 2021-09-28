const mongoose = require("mongoose");

let shoppingBagSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    required: true,
    ref: "user",
  },
});

let ShoppingBag = mongoose.model("shopping_bag", shoppingBagSchema);

module.exports = ShoppingBag;
