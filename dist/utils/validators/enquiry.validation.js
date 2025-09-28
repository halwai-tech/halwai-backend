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
