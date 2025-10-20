import mongoose, { Schema } from "mongoose";
export const AddHalwaiSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    image: { type: String },
}, { timestamps: true });
const Halwai = mongoose.model("Halwai", AddHalwaiSchema);
export default Halwai;
