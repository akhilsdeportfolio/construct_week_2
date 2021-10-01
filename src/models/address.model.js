const mongoose = require("mongoose");

let addressSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    address: { type: String, required: true },
    address2: { type: String, required: false },
    postal_code: { type: Number, required: true },
    city: { type: String, required: true },
    region: { type: String, require: false },
    phone: { type: Number, required: true },
    country: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let Addresses = mongoose.model("address", addressSchema);

module.exports = Addresses;
