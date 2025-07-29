import mongoose, { Mongoose, Schema } from "mongoose";
import { IBookedItem,IEventBooking } from "../types/TypeDef.js";

const BookedItemSchema = new Schema<IBookedItem>({
  item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});


const EventBookingSchema=new Schema<IEventBooking>({
    eventName:{type:String, required:true},
    eventDate:{type:Date, required:true},
    servingTime:{type:String, required:true},
    numberOfPersons:{type:Number, required:true},
    totalCharges:{type:Number,required:true},
    discount:{type:Number, default:0},
    taxes:{type:Number, default:0},
    miscCharges:{type:Number, default:0},
    isSelfCooked:{type:Boolean, default:false},
    items:{type:[BookedItemSchema],required:true},
    paymentStatus:{type:String, enum:['paid', 'pending', 'failed'],default:"pending"},
    orderStatus:{type:String,enum:['pending', 'accepted', 'rejected', 'completed'], default:"pending"},
    rejectionReason:{type:String,required:function (this:IEventBooking){
        return this.orderStatus==="rejected"
    }},
    customerId:{type:Schema.Types.ObjectId, required:true},
    halwaiId:{type:Schema.Types.ObjectId, required:true},
    specialInstructions:{type:String},
    venueAddress:{type:String, required:true},


},{timestamps:true});

const EventBooking=mongoose.model<IEventBooking>("EventBooking",EventBookingSchema);

export default EventBooking;

