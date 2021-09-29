

        // description: { type: String, trim:true, required: true }, done details
        // price: { type: Number, trim:true, required: true }, 
        // images: [{ type: String, trim:true, required: true }],
        // about: { type: String, trim:true, required: true }, 
        // rating:{ type: Number, trim:true, required: true }

// {
//     name: "Stay Home No. 5 Unframed Wall Art",
//     brand: "Deny Designs", done
//     price: 1604, done
//     image1: ["https://n.nordstrommedia.com/id/sr3/27b60e77-02e6-429a-8ded-f0d98a503bfb.jpeg?h=365&w=240&dpr=2"], done
//     about: "Create a relaxing mood in your home with the evocative graphic on this framed wall art printed with archival, fade-resistant inks for lasting quality.",
//     details: "<li>Art by Domonique Brown</li><li>Hanging hardware included</li><li>Acid- and lignin-free archival paper/wood</li><li>Made in the USA</li><li>Item #6289066</li>",
//     color: "Green", done
//     type: "Decorative Accents", done
// }


const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        product_sub_category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product_sub_category",
            required: true,
        },
        brand_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "brand",
            required: true,
        },
        price_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "price",
            required: true,
        },
        name: { type: String, trim:true, required: true },
        color: { type: String, trim:true, required: true },
        details: { type: String, trim:true, required: true },
        price: { type: Number, trim:true, required: true },
        images: [{ type: String, trim:true, required: true }],
        description: { type: String, trim:true, required: true },
        rating:{ type: Number, trim:true, required: true }
    },
    { 
        versionKey: false,
        timestamps: true,
    }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;


