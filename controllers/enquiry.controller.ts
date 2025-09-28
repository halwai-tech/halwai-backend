import ProfessionalChefEnquiry from "../models/ProfessionalChefEnquiry.model.js";
import MonthlyChefEnquiry from "../models/MonthlyChefEnquiry.model.js"
import DomesticChefEnquiry from "../models/DomesticChefEnquiry.model.js";
import ContactEnquiry from "../models/ContactEnquiry.model.js";
import {Request,Response} from "express";
// Professional Chef Enquiry Start

export async function addProfessionalChefEnquiry(req:Request,res:Response){
    
  try {
    const enquiry = new ProfessionalChefEnquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: 'Professional Chef Enquiry saved', enquiry });
  } catch (err) {
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: String(err) });
  }
}

}


export async function getProfessionalChefEnquiry(req:Request,res:Response){
 try {
    const enquiries = await ProfessionalChefEnquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: String(err) });
  }
}
}


// Professional Chef Enquiry End

// Monthly Chef Enquiry Start

export async function addMonthlyChefEnquiry(req:Request,res:Response){
    try {
    const enquiry = new MonthlyChefEnquiry(req.body);
    await enquiry.save();
    res.status(201).json(enquiry);
  }catch (err) {
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: String(err) });
  }
}
}

export async function getMonthlyChefEnquiry(req:Request,res:Response){
    try {
    const enquiries = await MonthlyChefEnquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: String(err) });
  }
}
}


// Monthly Chef Enquiry End

// Domestic Chef Enquiry Start
export async function addDomesticChefEnquiry(req:Request,res:Response){
    try {
    const enquiry = new DomesticChefEnquiry(req.body);
    await enquiry.save();
    res.status(201).json(enquiry);
  } catch (err) {
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: String(err) });
  }
}
}

export async function getDomesticChefEnquiry(req:Request,res:Response){
    try {
    const enquiries = await DomesticChefEnquiry
    .find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: String(err) });
  }
}
}



// Domestic Chef Enquiry End

// Submit Contact Form Enquiry Start
export async function submitContactDetails(req: Request, res: Response) {
  try {
    // req.body is already validated by route-level middleware
    const enquiry = await ContactEnquiry.create(req.body);

    res.status(200).json({
      message: "Your message has been received!",
      enquiry,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: String(error) });
    }
  }
}
// Submit Contact Form Enquiry End