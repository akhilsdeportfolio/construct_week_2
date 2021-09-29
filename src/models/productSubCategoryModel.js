
const mongoose = require("mongoose")

const productSubCategorySchema = new mongoose.Schema(
    {
        sub_category_name: { type: String, trim:true, required: true },
        product_category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product_category",
            required: true,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const ProductSubCategory = mongoose.model("product_sub_category", productSubCategorySchema);

module.exports = ProductSubCategory;


