import mongoose, { Schema, Model } from "mongoose";
import { Category } from "../types/TypeDef";

const categorySchema: Schema<Category> = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Category:Model<Category>=mongoose.model<Category>("Category",categorySchema);
export default Category;