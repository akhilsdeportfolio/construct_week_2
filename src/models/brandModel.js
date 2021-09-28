
const mongoose = require("mongoose")

const brandSchema = new mongoose.Schema(
    {
        brand_name: { type: String, trim:true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;


