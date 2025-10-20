import mongoose, { Schema, Model } from "mongoose";
import { IAddHalwai } from "../types/TypeDef";


export const AddHalwaiSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    image: { type: String }, 
  },
  { timestamps: true }
);

const Halwai:Model<IAddHalwai>=mongoose.model<IAddHalwai>("Halwai", AddHalwaiSchema);
export default Halwai;
