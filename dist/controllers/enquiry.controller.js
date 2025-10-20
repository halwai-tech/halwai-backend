import ProfessionalChefEnquiry from "../models/ProfessionalChefEnquiry.model.js";
import MonthlyChefEnquiry from "../models/MonthlyChefEnquiry.model.js";
import DomesticChefEnquiry from "../models/DomesticChefEnquiry.model.js";
import ContactEnquiry from "../models/ContactEnquiry.model.js";
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
// Submit Contact Form Enquiry Start
export async function submitContactDetails(req, res) {
    try {
        // req.body is already validated by route-level middleware
        const enquiry = await ContactEnquiry.create(req.body);
        res.status(200).json({
            message: "Your message has been received!",
            enquiry,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: String(error) });
        }
    }
}
// Submit Contact Form Enquiry End
export async function getAllEnquiry(req, res) {
    try {
        // Extract independent page values for each type
        const domesticPage = parseInt(req.query.domesticPage) || 1;
        const monthlyPage = parseInt(req.query.monthlyPage) || 1;
        const professionalPage = parseInt(req.query.professionalPage) || 1;
        // Optional: one shared limit, or you can split into domesticLimit etc.
        const limit = parseInt(req.query.limit) || 10;
        // Calculate skips individually
        const domesticSkip = (domesticPage - 1) * limit;
        const monthlySkip = (monthlyPage - 1) * limit;
        const professionalSkip = (professionalPage - 1) * limit;
        // Count total documents
        const [domesticCount, monthlyCount, professionalCount] = await Promise.all([
            DomesticChefEnquiry.countDocuments(),
            MonthlyChefEnquiry.countDocuments(),
            ProfessionalChefEnquiry.countDocuments(),
        ]);
        // Fetch paginated data in parallel
        const [domestic, monthly, professional] = await Promise.all([
            DomesticChefEnquiry.find()
                .sort({ createdAt: -1 })
                .skip(domesticSkip)
                .limit(limit),
            MonthlyChefEnquiry.find()
                .sort({ createdAt: -1 })
                .skip(monthlySkip)
                .limit(limit),
            ProfessionalChefEnquiry.find()
                .sort({ createdAt: -1 })
                .skip(professionalSkip)
                .limit(limit),
        ]);
        // Send structured response
        res.json({
            success: true,
            pagination: {
                domestic: {
                    page: domesticPage,
                    total: domesticCount,
                    totalPages: Math.ceil(domesticCount / limit),
                },
                monthly: {
                    page: monthlyPage,
                    total: monthlyCount,
                    totalPages: Math.ceil(monthlyCount / limit),
                },
                professional: {
                    page: professionalPage,
                    total: professionalCount,
                    totalPages: Math.ceil(professionalCount / limit),
                },
            },
            data: {
                domestic,
                monthly,
                professional,
            },
        });
    }
    catch (error) {
        console.error('Error fetching enquiries:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}
