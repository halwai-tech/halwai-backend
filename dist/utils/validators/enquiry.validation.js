import { z } from "zod";
export const AddDomesticChefEnquirySchema = z.object({
    people: z.string({
        required_error: "Number Of People is mandatory!",
        invalid_type_error: "People must be a string",
    }),
    days: z.string({
        required_error: "Days is mandatory!",
        invalid_type_error: "Days must be a string",
    }),
    visitsPerDay: z.string({
        required_error: "Visits per day is mandatory!",
        invalid_type_error: "Visits per day must be a string",
    }),
    whatsapp: z.string({
        required_error: "WhatsApp is mandatory!",
        invalid_type_error: "WhatsApp must be a string",
    }),
});
export const ContactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
    email: z
        .string()
        .email("Invalid email address"),
    phone: z
        .string()
        .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    eventDate: z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
    guestCount: z
        .number()
        .min(1, "Guest count must be at least 1"),
    message: z
        .string()
        .max(500, "Message must be at most 500 characters")
        .optional(),
});
