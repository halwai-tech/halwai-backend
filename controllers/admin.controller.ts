import { Request, Response } from "express";
import Category from "../models/Category.model";
import Item from "../models/Item.model";

// Adding New Category
export const addCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;

    const category = new Category({
      categoryName,
    });

    await category.save();
    res.status(201).json({ message: "Added New Category Successfully.",data:category });
  } catch (error) {
    console.error("Error in Admin Controller: ", error);
    res.status(500).json({ message: error });
  }
};


// Adding New Item
export const addItem=async (req:Request,res:Response)=>{
   try{
         const {itemName,category,unit,priceRange,isActive} =req.body;

         const newItem=new Item({
            itemName,
            category,
            unit,
            priceRange,
            isActive
         });

         await newItem.save();
         res.status(201).json({message:"New Item Added Successfully!",data:newItem});

   }
   catch(error){
      console.error("Error in admin controller addItem: ",error);
      res.status(500).json({message:error});
   }


}

// get All Category
export const getAllCategory=async (req:Request,res:Response)=>{
    let category=await Category.find({});
    res.status(200).json({message:"All Category Fetched Successfully.",data:category});
}

// get all items
export const getAllItems=async (req:Request,res:Response)=>{
    try{
           const allItems=await Item.find({});
           res.status(200).json({message:"All Items Fetched Succesfully.",data:allItems});
    }
    catch(error){
        console.error("There is an error in admin controller get all items: ",error);
        res.status(500).json({message:error});
    }
}




