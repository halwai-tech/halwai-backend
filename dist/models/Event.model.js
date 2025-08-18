import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
    ],
    tags: [{ type: String }],
}, { timestamps: true });
const Event = mongoose.model("Event", eventSchema);
export default Event;
