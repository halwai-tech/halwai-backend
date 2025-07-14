import { z } from "zod";
import mongoose from "mongoose";

// Add Category Request Validation
export const AddCategorySchema = z.object({
  categoryName: z.string().min(2, "Category Name is Too Short!"),
});

// Add Item Request Vaidation
export const AddItemSchema=z.object({
     itemName:z.string().min(1,"Item name is required!").trim(),
     category:z.string().refine((val)=>mongoose.Types.ObjectId.isValid(val),"Invalid Category ObjectId!"),
     unit:z.enum(["per kg","per piece","per plate"],{
        required_error:"Unit is required!",
        invalid_type_error:"Invalid Unit Type!"
     }),
     priceRange:z.object({
        min:z.number({required_error:"Minimum Price is Required!"}),
        max:z.number({required_error:"Maximum Price is Required!"})
     }),
     isActive:z.boolean().default(true)
});

