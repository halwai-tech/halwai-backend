import mongoose from 'mongoose';
const MonthlyChefEnquirySchema = new mongoose.Schema({
    people: String,
    startDate: Date,
    genderPreference: String,
    whatsapp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const MonthlyChefEnquiry = mongoose.model('MonthlyChefEnquiry', MonthlyChefEnquirySchema);
export default MonthlyChefEnquiry;
