import { z } from "zod";
import { DishType } from "../enum.js";
// Add Category Request Validation
export const AddCategorySchema = z.object({
    eventCategoryName: z.string().min(2, "Category Name is Too Short!"),
    image: z.string().url("Invalid image URL").optional(),
});
// Add Item Request Vaidation
export const AddItemSchema = z.object({
    itemName: z.string().min(1, "Item name is required!").trim(),
    unit: z.enum(["per kg", "per piece", "per plate"], {
        required_error: "Unit is required!",
        invalid_type_error: "Invalid Unit Type!",
    }),
    priceRange: z.object({
        min: z.number({ required_error: "Minimum Price is Required!" }),
        max: z.number({ required_error: "Maximum Price is Required!" }),
    }),
    isActive: z.boolean().default(true),
});
// Add Event Request Validation
export const AddEventSchema = z.object({
    eventName: z.string().min(1, "Event name is required").trim(),
    description: z.string().optional(),
    image: z.string().url("Invalid image URL").optional(),
    categories: z
        .string()
        .transform((val) => JSON.parse(val))
        .pipe(z
        .array(z.string().refine((val) => val.length === 24, {
        message: "Each category ID must be a valid 24-character ObjectId",
    }))
        .min(1, "At least one category is required")),
    tags: z
        .string()
        .optional()
        .transform((val) => (val ? JSON.parse(val) : []))
        .pipe(z.array(z.string().min(1))),
});
// Add Cusine Request Schema
export const AddCuisineSchema = z.object({
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
    image: z.string().url("Image must be a valid URL").optional(),
});
// Add DishCategory Request Schema
export const AddDishCategorySchema = z.object({
    categoryName: z
        .string({
        required_error: "Dish Category name is required",
        invalid_type_error: "Name must be a string",
    })
        .min(1, "Cuisine name cannot be empty"),
});
// Add DishSchema Request Schema
// ✅ Convert TypeScript enum values to Zod enum
const DishTypeEnum = z.enum([
    DishType.VEGETARIAN,
    DishType.NON_VEGETARIAN,
    DishType.EGGETARIAN,
]);
// Add Dish Schema
export const AddDishSchema = z.object({
    name: z
        .string({
        required_error: "Dish name is required",
        invalid_type_error: "Dish name must be a string",
    })
        .min(1, "Dish name cannot be empty")
        .trim(),
    cuisine: z
        .string()
        .transform((val) => JSON.parse(val))
        .pipe(z
        .array(z.string().refine((val) => val.length === 24, {
        message: "Each category ID must be a valid 24-character ObjectId",
    }))
        .min(1, "At least one category is required")),
    categories: z
        .string()
        .transform((val) => JSON.parse(val))
        .pipe(z
        .array(z.string().refine((val) => val.length === 24, {
        message: "Each category ID must be a valid 24-character ObjectId",
    }))
        .min(1, "At least one category is required")),
    ingredients: z
        .string()
        .transform((val) => JSON.parse(val)) // expecting ingredients as a JSON string
        .pipe(z.array(z.string().min(1, "Ingredient cannot be empty")))
        .optional(),
    isVegetarian: DishTypeEnum,
    price: z
        .number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
    })
        .min(0, "Price must be a positive number"),
    image: z.string().url("Image must be a valid URL").optional(),
    description: z
        .string()
        .optional()
        .transform((val) => val?.trim()),
    isRecommended: z.boolean().optional(),
});
// Add Halwai Schema
export const AddhalwaiSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .max(15, { message: "Phone number cannot exceed 15 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
    address: z.string().min(1, { message: "Address is required" }),
    image: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});
