import mongoose, { Schema, Model } from "mongoose";
import { EventCategory } from "../types/TypeDef.js";

const eventCategorySchema: Schema<EventCategory> = new mongoose.Schema(
  {
    eventCategoryName: { type: String, required: true, unique: true },
    image:{type:String}
  },
  { timestamps: true }
);

const EventCategory:Model<EventCategory>=mongoose.model<EventCategory>("Category",eventCategorySchema);
export default EventCategory;