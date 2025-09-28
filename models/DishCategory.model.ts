import mongoose, { Schema, Model } from "mongoose";
import { IDishCategory } from "../types/TypeDef.js";
const dishCategorySchema:Schema<IDishCategory> = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
  },
});

const DishCategory:Model<IDishCategory>=mongoose.model("DishCategory",dishCategorySchema);
export default DishCategory;