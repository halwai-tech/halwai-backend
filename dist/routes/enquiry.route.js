import express from "express";
import { addProfessionalChefEnquiry, getAllEnquiry, getProfessionalChefEnquiry } from "../controllers/enquiry.controller.js";
import { addMonthlyChefEnquiry, getMonthlyChefEnquiry } from "../controllers/enquiry.controller.js";
import { addDomesticChefEnquiry, getDomesticChefEnquiry, submitContactDetails } from "../controllers/enquiry.controller.js";
import { validate } from "../utils/middlewares/zodValidate.middleware.js";
import { AddDomesticChefEnquirySchema, ContactFormSchema } from "../utils/validators/enquiry.validation.js";
const router = express.Router();
// ProfessionChef Enquiry Route Start
router.post("/professional-chef-enquiry", addProfessionalChefEnquiry);
router.get("/professional-chef-enquiry", getProfessionalChefEnquiry);
// professionalChef Enquiry Route End
// monthly chef enquiry start
router.post("/monthly-chef-enquiry", addMonthlyChefEnquiry);
router.get("/monthly-chef-enquiry", getMonthlyChefEnquiry);
// monthly chef enquiry end
// domestic chef  enquiry start
router.post("/domestic-chef-enquiry", validate(AddDomesticChefEnquirySchema), addDomesticChefEnquiry);
router.get("/domestic-chef-enquiry", getDomesticChefEnquiry);
// domestic chef enquiry end
// contact form api start
router.post("/contact-form-enquiry", validate(ContactFormSchema), submitContactDetails);
// contact form api end
// get all enquiry
router.get("/all-enquiry", getAllEnquiry);
export default router;
