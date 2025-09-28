import ProfessionalChefEnquiry from "../models/ProfessionalChefEnquiry.model.js";
import MonthlyChefEnquiry from "../models/MonthlyChefEnquiry.model.js";
import DomesticChefEnquiry from "../models/DomesticChefEnquiry.model.js";
// Professional Chef Enquiry Start
export async function addProfessionalChefEnquiry(req, res) {
    try {
        const enquiry = new ProfessionalChefEnquiry(req.body);
        await enquiry.save();
        res.status(201).json({ message: 'Professional Chef Enquiry saved', enquiry });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: String(err) });
        }
    }
}
export async function getProfessionalChefEnquiry(req, res) {
    try {
        const enquiries = await ProfessionalChefEnquiry.find().sort({ createdAt: -1 });
        res.json(enquiries);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: String(err) });
        }
    }
}
// Professional Chef Enquiry End
// Monthly Chef Enquiry Start
export async function addMonthlyChefEnquiry(req, res) {
    try {
        const enquiry = new MonthlyChefEnquiry(req.body);
        await enquiry.save();
        res.status(201).json(enquiry);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: String(err) });
        }
    }
}
export async function getMonthlyChefEnquiry(req, res) {
    try {
        const enquiries = await MonthlyChefEnquiry.find().sort({ createdAt: -1 });
        res.json(enquiries);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: String(err) });
        }
    }
}
// Monthly Chef Enquiry End
// Domestic Chef Enquiry Start
export async function addDomesticChefEnquiry(req, res) {
    try {
        const enquiry = new DomesticChefEnquiry(req.body);
        await enquiry.save();
        res.status(201).json(enquiry);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: String(err) });
        }
    }
}
export async function getDomesticChefEnquiry(req, res) {
    try {
        const enquiries = await DomesticChefEnquiry
            .find().sort({ createdAt: -1 });
        res.json(enquiries);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: String(err) });
        }
    }
}
// Domestic Chef Enquiry End
