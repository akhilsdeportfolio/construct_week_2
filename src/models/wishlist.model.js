const mongoose = require("mongoose");

//---------Schema For WishList-----------\\

const wishlistSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//-------Connect the Schema with Collection---------\\

const Wishlist = mongoose.model("wishlist", wishlistSchema);

module.exports = Wishlist;
