import mongoose from "mongoose";
const dishCategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
    },
});
const DishCategory = mongoose.model("DishCategory", dishCategorySchema);
export default DishCategory;
