import mongoose, { Schema } from "mongoose";
const BookedItemSchema = new Schema({
    item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
});
const EventBookingSchema = new Schema({
    eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
    eventDate: { type: Date, required: true },
    servingTime: { type: String, required: true },
    numberOfPersons: { type: Number, required: true },
    totalCharges: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    taxes: { type: Number, default: 0 },
    miscCharges: { type: Number, default: 0 },
    isSelfCooked: { type: Boolean, default: false },
    items: { type: [BookedItemSchema], required: true },
    paymentStatus: {
        type: String,
        enum: ["paid", "pending", "failed"],
        default: "pending",
    },
    orderStatus: {
        type: String,
        enum: ["pending", "accepted", "rejected", "completed"],
        default: "pending",
    },
    rejectionReason: {
        type: String,
        required: function () {
            return this.orderStatus === "rejected";
        },
    },
    customerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    halwaiId: { type: Schema.Types.ObjectId, ref: "Halwai", required: true },
    specialInstructions: { type: String },
    venueAddress: { type: String, required: true },
}, { timestamps: true });
const EventBooking = mongoose.model("EventBooking", EventBookingSchema);
export default EventBooking;
