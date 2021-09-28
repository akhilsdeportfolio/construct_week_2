
const mongoose = require("mongoose")

const colorSchema = new mongoose.Schema(
    {
        color_name: { type: String, trim:true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Color = mongoose.model("color", colorSchema);

module.exports = Color;


