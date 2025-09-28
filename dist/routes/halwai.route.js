import express from "express";
import { authenticateJWT, authorizeRoles } from "../utils/middlewares/auth.middleware.js";
import multer from "multer";
// halwai routes
const halwaiRouter = express.Router();
// make the middleware for handling image upload
const upload = multer({ storage: multer.memoryStorage() });
// add halwai
halwaiRouter.post("/add-halwai", authenticateJWT, authorizeRoles("halwai"), upload.single("image")
//   validate(AddCategorySchema),
//   addEventCategory
);
export default halwaiRouter;
