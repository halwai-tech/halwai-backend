import User from "../models/User.model.js";
export const getAllUsers = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 1;
        // calculate how many to skip
        const skip = (page - 1) * limit;
        // fetch users with pagination
        const users = await User.find({}).skip(skip).limit(limit).sort({ createdAt: -1 });
        // count total users for pagination metadata
        const totalUsers = await User.countDocuments();
        res.status(200).json({
            success: true,
            message: "Users Fetched Successfully!",
            currentPage: page,
            totalPages: Math.ceil(totalUsers / limit),
            totalUsers,
            count: users.length,
            data: users
        });
    }
    catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching users",
            error: error.message,
        });
    }
};
export const getUsersByRoles = async (req, res) => {
    try {
        const { role } = req.params;
        // Validate role
        if (!role || !["admin", "user", "halwai"].includes(role)) {
            res.status(400).json({ message: "Invalid Role Provided!" });
        }
        // Extract and convert pagination parameters
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const skip = (page - 1) * limit;
        // Fetch total documents count
        const totalUsers = await User.countDocuments({ role });
        // Fetch paginated data
        const users = await User.find({ role })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });
        // Pagination metadata
        const totalPages = Math.ceil(totalUsers / limit);
        res.status(200).json({
            success: true,
            message: "Users fetched successfully!",
            currentPage: page,
            totalPages,
            totalUsers,
            count: users.length,
            data: users,
        });
    }
    catch (error) {
        console.error("Error fetching users by role:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching users by role",
            error: error.message,
        });
    }
};
