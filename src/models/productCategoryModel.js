
const mongoose = require("mongoose")

const productCategorySchema = new mongoose.Schema(
    {
        category_name: { type: String, trim:true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const ProductCategory= mongoose.model("product_category", productCategorySchema);

module.exports = ProductCategory;


