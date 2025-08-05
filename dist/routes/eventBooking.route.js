import { Router } from "express";
import { createBooking } from "../controllers/eventBooking.controller.js";
const eventBookingRouter = Router();
eventBookingRouter.post("/", createBooking);
export default eventBookingRouter;
