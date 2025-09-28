import mongoose from 'mongoose';
const DomesticEnquiryChefSchema = new mongoose.Schema({
    people: String,
    days: String,
    visitsPerDay: String,
    whatsapp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
export default mongoose.model('DomesticChefEnquiry', DomesticEnquiryChefSchema);
