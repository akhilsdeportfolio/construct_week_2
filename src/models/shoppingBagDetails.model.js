const mongoose = require("mongoose");

let shoppingBagDetailsSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      trim: true,
      ref: "product",
      required: true,
    },
    shopping_bag_id: {
      type: mongoose.Schema.Types.ObjectId,
      trim: true,
      ref: "shopping_bag",
      required: true,
    },
    quantity: { type: Number, trim: true, required: true },
    ordered_flag: { type: Boolean, trim: true, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let ShoppingBagDetails = mongoose.model(
  "shopping_bag_details",
  shoppingBagDetailsSchema
);

module.exports = ShoppingBagDetails;
