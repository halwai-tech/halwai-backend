import {Document,Types} from "mongoose";

export type UserRole="admin" | "halwai" | "user";

export interface IUser extends Document{
    username:string;
    email:string;
    password:string;
    role:UserRole;
    createdAt:Date,
    updatedAt:Date
}

export interface Category extends Document{
    categoryName:string;
    createdAt:Date;
    updatedAt:Date;
}

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