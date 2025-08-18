import mongoose from "mongoose";
const eventCategorySchema = new mongoose.Schema({
    eventCategoryName: { type: String, required: true, unique: true },
    image: { type: String }
}, { timestamps: true });
const EventCategory = mongoose.model("Category", eventCategorySchema);
export default EventCategory;
