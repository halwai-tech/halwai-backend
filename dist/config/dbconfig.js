import mongoose from "mongoose";
export const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        throw new Error("MONGO_URI is not defined in environment variables");
    }
    try {
        await mongoose.connect(mongoUri);
        console.log("✅ MongoDB connected successfully");
    }
    catch (err) {
        console.error("❌ MongoDB connection error:", err);
        throw err;
    }
};
