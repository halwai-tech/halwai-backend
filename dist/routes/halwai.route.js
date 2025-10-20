import express from "express";
import { validate } from "../utils/middlewares/zodValidate.middleware.js";
import multer from "multer";
import { AddHalwaiFormSchema } from "../utils/validators/halwai.validation.js";
import { addNewHalwai } from "../controllers/halwai.controller.js";
// halwai routes
const halwaiRouter = express.Router();
// make the middleware for handling image upload
const upload = multer({ storage: multer.memoryStorage() });
// add halwai
halwaiRouter.post("/add-halwai", 
// authenticateJWT,
// authorizeRoles("halwai"),
upload.single("image"), validate(AddHalwaiFormSchema), addNewHalwai);
export default halwaiRouter;
