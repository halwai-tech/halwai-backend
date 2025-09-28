import { Request, Response } from "express";
import EventCategory from "../models/EventCategory.js";
import Item from "../models/Item.model.js";
import Event from "../models/event.model.js";
import Cuisine from "../models/Cuisine.model.js";
import DishCategory from "../models/DishCategory.model.js";
import { uploadToCloudinary } from "../utils/uploadCloudinary.js";

// ****************** EventCategory Api start
// Adding New Category
export const addEventCategory = async (req: Request, res: Response) => {
  try {
    const { eventCategoryName } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: "Image is required" });
      return;
    }

    // Upload image to cloudinary
    const uploadResult = await uploadToCloudinary(
      file.buffer,
      file.mimetype,
      "halwai-events-category"
    );

    const eventCategory = new EventCategory({
      eventCategoryName,
      image: uploadResult.secure_url,
    });

    await eventCategory.save();
    res.status(201).json({
      message: "Added New Category Successfully.",
      data: eventCategory,
    });
  } catch (error: any) {
    console.error("Error in Admin Controller: ", error.name, error.message);
    res.status(500).json({ message: error });
  }
};

// Get All Categories
export const getAllEventCategory = async (req: Request, res: Response) => {
  try {
    const eventCategory = await EventCategory.find({});
    res.status(200).json({
      message: "All Categories Fetched Successfully.",
      data: eventCategory,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: error });
  }
};

// ******************* EventCategory Api End

// ****************  Item Api start
// Adding New Item
export const addItem = async (req: Request, res: Response) => {
  try {
    const { itemName, category, unit, priceRange, isActive } = req.body;

    const newItem = new Item({
      itemName,
      category,
      unit,
      priceRange,
      isActive,
    });

    await newItem.save();
    res
      .status(201)
      .json({ message: "New Item Added Successfully!", data: newItem });
  } catch (error) {
    console.error("Error in admin controller addItem: ", error);
    res.status(500).json({ message: error });
  }
};

// Get All Items
export const getAllItems = async (req: Request, res: Response) => {
  try {
    const allItems = await Item.find({});
    res
      .status(200)
      .json({ message: "All Items Fetched Successfully.", data: allItems });
  } catch (error) {
    console.error(
      "There is an error in admin controller get all items: ",
      error
    );
    res.status(500).json({ message: error });
  }
};

// *************************** Item Api end

// *************************** Events Api start
// Add Event
export const addEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { eventName, description, categories, tags } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: "Image is required" });
      return;
    }

    // Upload image to cloudinary
    const uploadResult = await uploadToCloudinary(
      file.buffer,
      file.mimetype,
      "halwai-events"
    );

    // Create new event
    const newEvent = new Event({
      eventName,
      description,
      image: uploadResult.secure_url,
      categories,
      tags,
    });

    const savedEvent = await newEvent.save();
    res
      .status(201)
      .json({ message: "Event Added Successfully.", data: savedEvent });
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ message: "Server error while adding event" });
  }
};

// get all Events
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const allEvents = await Event.find({});
    res
      .status(201)
      .json({ message: "All Events Fetched Successfully.", data: allEvents });
  } catch (error) {
    console.error(
      "There is an error in admin controller get all events: ",
      error
    );
    res.status(500).json({ message: error });
  }
};

// ************************** Events Api end

// ***************************** Cuisine Apis start

// add cuisine api
export const addCuisine = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: "Image is required" });
      return;
    }

    // Upload image to cloudinary
    const uploadResult = await uploadToCloudinary(
      file.buffer,
      file.mimetype,
      "cuisines"
    );

    const newCuisine = new Cuisine({
      name,
      description,
      image: uploadResult.secure_url,
    });

    const savedCuisine = await newCuisine.save();
    res
      .status(201)
      .json({ message: "New Cuisine Added Successfully.", data: savedCuisine });
  } catch (error) {
    console.error("Error adding cuisine:", error);
    res.status(500).json({ message: "Server error while adding cuisine" });
  }
};

// get all cuisines api
export const getAllCuisines = async (req: Request, res: Response) => {
  try {
    const allCuisines = await Cuisine.find({});
    res
      .status(201)
      .json({ message: "All Events Fetched Successfully.", data: allCuisines });
  } catch (error) {
    console.log("Error in Fetching Cuisines: ", error);

    res.status(500).json({ message: error });
  }
};

// ****************************************  Cuisine APi end

// ****************************************  DishCategory api start
// Add DishCategory Api
export const addDishCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { categoryName } = req.body;

    // Create new event
    const newDishCategory = new DishCategory({
      categoryName,
    });

    const savedDishCategory = await newDishCategory.save();
    res
      .status(201)
      .json({
        message: "Dish Category Added Successfully.",
        data: savedDishCategory,
      });
  } catch (error) {
    console.error("Error adding Dish Category:", error);
    res
      .status(500)
      .json({ message: "Server error while adding dish category" });
  }
};

// get all DishCategory
export const getAllDishCategory = async (req: Request, res: Response) => {
  try {
    const allDishCategory = await DishCategory.find({});
    res
      .status(201)
      .json({
        message: "All Dish Category Fetched Successfully.",
        data: allDishCategory,
      });
  } catch (error) {
    console.log("Error in Fetching Dish Category: ", error);

    res.status(500).json({ message: error });
  }
};

//  ***************************************  DishCategory api end
