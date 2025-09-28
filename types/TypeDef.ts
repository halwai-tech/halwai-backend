import { Document, Types } from "mongoose";
import {DishType} from "../utils/enum.js";

export type UserRole = "admin" | "halwai" | "user";

// User Interface
export interface IUser extends Document {
  username: string;
  email: string;
  phone: string;   
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// category interface
export interface EventCategory extends Document {
  eventCategoryName: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

// item interface
export interface Item extends Document {
  itemName: string;
  unit: "per kg" | "per piece" | "per plate";
  priceRange: {
    max: number;
    min: number;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// IBookedItem Interface for using in the Halwai Event Booking Interface
export interface IBookedItem {
  item: Types.ObjectId;
  quantity: number;
  price: number; // final agreed price per unit at booking time
}

// IEventBooking interface for Halwai Booking for Event
export interface IEventBooking extends Document {
  eventId: Types.ObjectId;
  eventDate: Date;
  servingTime: string;
  numberOfPersons: number;
  totalCharges: number;
  discount: number;
  taxes: number;
  miscCharges: number;
  isSelfCooked: boolean;
  items: IBookedItem[];
  paymentStatus: "paid" | "pending" | "failed";
  orderStatus: "pending" | "accepted" | "rejected" | "completed";
  rejectionReason?: string;
  customerId: Types.ObjectId;
  halwaiId: Types.ObjectId;
  specialInstructions?: string;
  venueAddress: string;
}

export interface IEvent extends Document {
  eventName: string;
  description?: string;
  image?: string;
  categories: Types.ObjectId[];
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICuisine extends Document {
  name: string;
  description: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}



// Dish interface for Dish Schema
export interface IDish extends Document {
  name: string;
  cuisine:Types.ObjectId;
  categories: Types.ObjectId[];
  ingredients: string[];
  isVegetarian: DishType;
  price: number;
  image?: string;
  description?: string;
  isRecommended: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Dish Category interface for DistCategory Schema
export interface IDishCategory extends Document{
  categoryName:string;
}

// Contact From Enquiry Schema
export interface IContactEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  eventDate: Date;
  guestCount: number;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}
