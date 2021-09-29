
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        product_sub_category_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "product_sub_category",
            required: true,
        }],
        brand_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "brand",
            required: true,
        },
        color_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "color",
            required: true,
        }],
        description: { type: String, trim:true, required: true },
        price: { type: Number, trim:true, required: true },
        images: [{ type: String, trim:true, required: true }],
        size: [{ type: String, trim:true, required: true }],
        specification: { type: String, trim:true, required: true },
        rating:{ type: Number, trim:true, required: true }
    },
    { 
        versionKey: false,
        timestamps: true,
    }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;


