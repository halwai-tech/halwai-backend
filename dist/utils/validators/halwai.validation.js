import { z } from "zod";
export const AddHalwaiFormSchema = z.object({
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
