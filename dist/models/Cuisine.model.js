import mongoose from "mongoose";
const cuisineSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    image: String,
}, { timestamps: true });
const Cuisine = mongoose.model("Cuisine", cuisineSchema);
export default Cuisine;
