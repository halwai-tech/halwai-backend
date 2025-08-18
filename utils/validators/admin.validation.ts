import { z } from "zod";
import mongoose from "mongoose";

// Add Category Request Validation
export const AddCategorySchema = z.object({
  eventCategoryName: z.string().min(2, "Category Name is Too Short!"),
  image:z.string().url("Invalid image URL").optional()
});

// Add Item Request Vaidation
export const AddItemSchema=z.object({
     itemName:z.string().min(1,"Item name is required!").trim(),
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



// Add Event Request Validation

export const AddEventSchema = z.object({
  eventName: z.string().min(1, "Event name is required").trim(),
  description: z.string().optional(),

  
  image: z.string().url("Invalid image URL").optional(),

  categories: z
    .string()
    .transform((val) => JSON.parse(val))
    .pipe(
      z
        .array(
          z.string().refine((val) => val.length === 24, {
            message: "Each category ID must be a valid 24-character ObjectId",
          })
        )
        .min(1, "At least one category is required")
    ),

  tags: z
    .string()
    .optional()
    .transform((val) => (val ? JSON.parse(val) : []))
    .pipe(z.array(z.string().min(1)))
});


// Add Cusine Request Schema
export const AddCuisineSchema= z.object({
  name: z
    .string({
      required_error: "Cuisine name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, "Cuisine name cannot be empty"),

  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(1, "Description cannot be empty"),

  image: z
    .string()
    .url("Image must be a valid URL")
    .optional(),
});


