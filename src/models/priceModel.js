
const mongoose = require("mongoose")

const priceSchema = new mongoose.Schema(
    {
        price_range: { type: String, trim:true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Price = mongoose.model("price", priceSchema);

module.exports = Price;


