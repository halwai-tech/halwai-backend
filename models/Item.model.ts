import mongoose,{Schema,Model,Types} from "mongoose";
import {Item} from "../types/TypeDef.js";


const itemSchema:Schema<Item>=new mongoose.Schema({
    itemName:{type:String,required:true,unique:true,trim:true},
    unit:{type:String,enum:["per kg","per piece","per plate"],required:true},
    priceRange:{min:{type:Number,required:true},max:{type:Number,required:true}},
    isActive:{type:Boolean,default:true,required:true},

},{timestamps:true});

const Item:Model<Item>=mongoose.model<Item>("Item",itemSchema);
export default Item;