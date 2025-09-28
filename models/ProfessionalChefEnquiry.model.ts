import mongoose,{Schema,Model} from "mongoose";

const MealSchema = new mongoose.Schema({
  name: String,
  count: Number,
});

const DailyBookingSchema = new mongoose.Schema({
  date: Date,
  guests: Number,
  meals: [MealSchema],
});

const ProfessionalChefEnquirySchema = new mongoose.Schema({
  occasion: { type: String, required: true },
  burnersInKitchen: Number,
  selectedDates: [DailyBookingSchema],
   whatsapp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ProfessionalChefEnquiry=mongoose.model('ProfessionalChefEnquiry', ProfessionalChefEnquirySchema);

export default ProfessionalChefEnquiry;