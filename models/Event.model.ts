

import mongoose, { Schema, Model } from "mongoose";
import {IEvent} from "../types/TypeDef.js";

const eventSchema: Schema<IEvent> = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const Event: Model<IEvent> = mongoose.model<IEvent>("Event", eventSchema);
export default Event;
