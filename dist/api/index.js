import express from 'express';
import { connectDB } from "../config/dbconfig.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
import authRoute from "../routes/auth.route.js";
import adminRoute from "../routes/admin.route.js";
import enquiryRoute from "../routes/enquiry.route.js";
import usersRouter from "../routes/users.route.js";
import eventBookingRouter from "../routes/eventBooking.route.js";
import halwaiRouter from "../routes/halwai.route.js";
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
connectDB().catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
});
// health check Route
app.get('/', (req, res) => {
    res.send('✅ Halwai backend running!, Server is runing Healthy!');
});
// api routes
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/users", usersRouter);
app.use("/api/event-book", eventBookingRouter);
app.use("/api/enquiry", enquiryRoute);
app.use("/api/halwai", halwaiRouter);
// ✅ Local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
}
// ✅ For Vercel: export the app directly
export default app;
