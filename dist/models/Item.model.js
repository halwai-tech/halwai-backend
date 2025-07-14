import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
    itemName: { type: String, required: true, unique: true, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    unit: { type: String, enum: ["per kg", "per piece", "per plate"], required: true },
    priceRange: { min: { type: Number, required: true }, max: { type: Number, required: true } },
    isActive: { type: Boolean, default: true, required: true },
}, { timestamps: true });
const Item = mongoose.model("Item", itemSchema);
export default Item;
