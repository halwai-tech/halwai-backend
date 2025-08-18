import mongoose,{Schema,Model} from "mongoose";
import { IDish } from "../types/TypeDef";

const dishSchema:Schema<IDish>=new mongoose.Schema(
     {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    imageUrl: String,
    isAvailable: { type: Boolean, default: true },
    cuisineIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cuisine" }], 
  },
  { timestamps: true }
);

const Dish:Model<IDish>=mongoose.model("Dish",dishSchema);
export default Dish;
