import { Request, Response } from "express";
import Halwai from "../models/Halwai.model.js";
import { uploadToCloudinary } from "../utils/uploadCloudinary.js";

export const addNewHalwai = async (req: Request, res: Response) => {
  try {
    const { name, phone, address } = req.body;
    const file = req.file;

    let uploadResult;

    if (file) {
      // Upload image to Cloudinary
      uploadResult = await uploadToCloudinary(file.buffer, file.mimetype, "halwaiProfile");
    }

    // Check duplicate phone number
    const existing = await Halwai.findOne({ phone });
    if (existing) {
       res.status(400).json({
        success: false,
        message: "Phone number already exists for another Halwai",
      });
    }

    const newHalwai = new Halwai({
      name,
      phone,
      address,
      image: uploadResult?.secure_url,
    });

    await newHalwai.save();

    res.status(201).json({
      success: true,
      message: "Halwai added successfully",
      data: newHalwai,
    });
  } catch (error: any) {
    console.error("Add Halwai Error:", error);
     res.status(500).json({
      success: false,
      message: "Server error while adding Halwai",
      error: error.message,
    });
  }
};
