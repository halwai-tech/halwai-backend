import mongoose, { Schema, Document, Model } from "mongoose";
import { IContactEnquiry } from "../types/TypeDef.js";


const ContactEnquirySchema: Schema<IContactEnquiry> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^\d{10}$/, // exactly 10 digits
    },
    eventDate: {
      type: Date,
      required: true,
    },
    guestCount: {
      type: Number,
      required: true,
      min: 1,
    },
    message: {
      type: String,
      maxlength: 500,
      default: "",
    },
  },
  { timestamps: true }
);

const ContactEnquiry: Model<IContactEnquiry> = mongoose.model<IContactEnquiry>(
  "ContactEnquiry",
  ContactEnquirySchema
);

export default ContactEnquiry;
