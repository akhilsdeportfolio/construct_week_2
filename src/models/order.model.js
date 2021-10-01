const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, trim: true, required: true, ref: "users" },
    products: [{ type: mongoose.Schema.Types.Mixed, trim: true, required: true }],
    total_price: { type: Number, trim: true, required: true },
    items_total_price: { type: Number, trim: true, required: true },
    shipping_price: { type: Number, trim: true, required: true },
    duties_tax: { type: Number, trim: true, required: true },
    delivery_address: { type: String, trim: true, required: true },
    delivery_method: { type: String, trim: true, required: true },
    order_number: { type: Number, trim: true, required: true }
}, {
    versionKey: false,
    timestamps: true
});

let Order = mongoose.model("orders", orderSchema);

module.exports = Order;
