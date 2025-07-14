import { Router } from "express";
import { AddCategorySchema, AddItemSchema } from "../utils/validators/admin.validation";
import { validate } from "../utils/middlewares/zodValidate.middleware";
import { addCategory, addItem, getAllCategory, getAllItems } from "../controllers/admin.controller";
import { authenticateJWT, authorizeRoles } from "../utils/middlewares/auth.middleware";
// admin Router
const adminRouter = Router();
// add Category 
adminRouter.post("/add-category", authenticateJWT, authorizeRoles("admin"), validate(AddCategorySchema), addCategory);
// add Item
adminRouter.post("/add-item", authenticateJWT, authorizeRoles("admin"), validate(AddItemSchema), addItem);
// get all Categories
adminRouter.get("/all-category", getAllCategory);
// get all Items
adminRouter.get("/all-items", getAllItems);
export default adminRouter;
