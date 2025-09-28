import { z } from "zod";
// register schema for registration
export const RegisterSchema = z.object({
    username: z.string().min(2, "Name is Too Short!"),
    email: z.string().email("Invalid Email Addredd!"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    password: z.string().min(6, "Password should be atleast 6 characters!"),
    role: z.enum(["admin", "halwai", "user"])
});
// login schema for logging in the user
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
});
