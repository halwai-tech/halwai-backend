import {Document,Types} from "mongoose";

export type UserRole="admin" | "halwai" | "user";

// User Interface
export interface IUser extends Document{
    username:string;
    email:string;
    password:string;
    role:UserRole;
    createdAt:Date,
    updatedAt:Date
}

// category interface
export interface Category extends Document{
    categoryName:string;
    createdAt:Date;
    updatedAt:Date;
}

// item interface
export interface Item extends Document{
    itemName:string;
    category:Types.ObjectId;
    unit: "per kg" | "per piece" | "per plate";
    priceRange:{
        max:number;
        min:number;
    };
    isActive:boolean;
    createdAt:Date;
    updatedAt:Date;
}

// IBookedItem Interface for using in the Halwai Event Booking Interface
export interface IBookedItem{
    item:Types.ObjectId;
    quantity:number;
    price:number; // final agreed price per unit at booking time
}

// IEventBooking interface for Halwai Booking for Event
export interface IEventBooking extends Document{
    eventName:string;
    eventDate:Date;
    servingTime:string;
    numberOfPersons:number;
    totalCharges:number;
    discount:number;
    taxes:number;
    miscCharges:number;
    isSelfCooked:boolean;
    items:IBookedItem[];
    paymentStatus: "paid" | "pending" | "failed";
    orderStatus: "pending" | "accepted" | "rejected" | "completed";
    rejectionReason?:string;
    customerId:Types.ObjectId;
    halwaiId:Types.ObjectId;
    specialInstructions?:string;
    venueAddress:string;


}