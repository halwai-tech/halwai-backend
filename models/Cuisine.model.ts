import mongoose, {Schema, Model} from "mongoose";
import {ICuisine} from "../types/TypeDef.js";
const cuisineSchema:Schema<ICuisine>=new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: String,
    image: String,
  },
  { timestamps: true }
);

const Cuisine:Model<ICuisine>=mongoose.model("Cuisine",cuisineSchema);

export default Cuisine;