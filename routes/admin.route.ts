import { Router } from "express";
import {
  AddCategorySchema,
  AddItemSchema,
  AddEventSchema,
  AddCuisineSchema,
} from "../utils/validators/admin.validation.js";
import { validate } from "../utils/middlewares/zodValidate.middleware.js";
import {
  addEventCategory,
  addItem,
  addEvent,
  getAllEventCategory,
  getAllItems,
  getAllEvents,
  addCuisine,
  getAllCuisines,
} from "../controllers/admin.controller.js";
import {
  authenticateJWT,
  authorizeRoles,
} from "../utils/middlewares/auth.middleware.js";
import multer from "multer";

// admin Router
const adminRouter = Router();

// make the middleware for handling image upload
const upload = multer({ storage: multer.memoryStorage() });

// +++++++++++++++++++ Event Category Apis start
// add Category
adminRouter.post(
  "/add-event-category",
  authenticateJWT,
  authorizeRoles("admin"),
  upload.single("image"),
  validate(AddCategorySchema),
  addEventCategory
);
// get all Categories
adminRouter.get("/all-event-category", getAllEventCategory);

// +++++++++++++++++++ Event Category Apis end

// ++++++++++++++++++ Item Apis start

// add Item
adminRouter.post(
  "/add-item",
  authenticateJWT,
  authorizeRoles("admin"),
  validate(AddItemSchema),
  addItem
);

// get all Items
adminRouter.get("/all-items", getAllItems);

// ++++++++++++++++++ Item Apis end

// +++++++++++++++++++ Event Apis start
// Adding Event
adminRouter.post(
  "/add-event",
  authenticateJWT,
  authorizeRoles("admin"),
  upload.single("image"),
  validate(AddEventSchema),
  addEvent
);

// Getting All Events
adminRouter.get("/all-events", getAllEvents);

// ++++++++++++++++++ Event Apis end
// add new cuisines api
adminRouter.post(
  "/add-cuisine",
  authenticateJWT,
  authorizeRoles("admin"),
  upload.single("image"),
  validate(AddCuisineSchema),
  addCuisine
);


// get all cuisines api
adminRouter.get("/get-cuisine",getAllCuisines);

// ++++++++++++++++++ Cuisine Apis start


//  +++++++++++++++++ Cuisine APis End

export default adminRouter;
