const mongoose = require("mongoose");

let addressSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  address_type: { type: String, required: true },
  address_location: { type: String, required: true },
});

let Addresses = mongoose.model("address", addressSchema);

module.exports = Addresses;
