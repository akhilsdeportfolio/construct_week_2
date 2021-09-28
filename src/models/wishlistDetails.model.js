const mongoose = require("mongoose");

//--------- Schema for Wishlist_details----------------\\

const wishlistDetailsSchema = new mongoose.Schema(
  {
    wishlist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wishlist",
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//-----Connect Schema With Collection----------\\

const WishlistDetails = mongoose.model(
  "wishlist_details",
  wishlistDetailsSchema
);

module.exports = WishlistDetails;
