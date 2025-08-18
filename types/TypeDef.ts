import { Document, Types } from "mongoose";

export type UserRole = "admin" | "halwai" | "user";

// User Interface
export interface IUser extends Document {
  username: string;
  email: string;
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

export interface IDish extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  cuisineIds: Types.ObjectId[];
    createdAt?: Date;
  updatedAt?: Date;
}
