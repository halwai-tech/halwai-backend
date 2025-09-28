import mongoose,{Schema,Model} from "mongoose";
import { IDish } from "../types/TypeDef.js";
import { DishType } from "../utils/enum.js";

const dishSchema:Schema<IDish>=new Schema<IDish>({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  cuisine: [{
    type: Schema.Types.ObjectId,
    ref: 'Cuisine',
  }],

  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }],

  ingredients: [{
    type: String,
    trim: true,
  }],

  isVegetarian: {
    type: String,
    enum: Object.values(DishType),
    required: true,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  image: {
    type: String,
  },

  description: {
    type: String,
    trim: true,
  },

  isRecommended: {
    type: Boolean,
    default: false,
  },
 
  },
  { timestamps: true }
);

const Dish:Model<IDish>=mongoose.model("Dish",dishSchema);
export default Dish;
