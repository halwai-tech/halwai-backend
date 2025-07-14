import {Router} from "express";
import {AddCategorySchema,AddItemSchema} from "../utils/validators/admin.validation.js";
import {validate} from "../utils/middlewares/zodValidate.middleware.js";
import {addCategory,addItem,getAllCategory,getAllItems} from "../controllers/admin.controller.js";
import {authenticateJWT,authorizeRoles} from "../utils/middlewares/auth.middleware.js";

// admin Router
const adminRouter=Router();

// add Category 
adminRouter.post("/add-category",authenticateJWT,authorizeRoles("admin"),validate(AddCategorySchema),addCategory);

// add Item
adminRouter.post("/add-item",authenticateJWT,authorizeRoles("admin"),validate(AddItemSchema),addItem);

// get all Categories
adminRouter.get("/all-category",getAllCategory);

// get all Items
adminRouter.get("/all-items",getAllItems);

export default adminRouter;