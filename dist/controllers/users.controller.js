import User from "../models/User.model.js";
export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json({ data: users });
};
export const getUsersByRoles = async (req, res) => {
    try {
        const { role } = req.params;
        if (!role || !(["admin", "user", "halwai"].includes(role))) {
            res.status(400).json({ message: "Invalid Role Provided!" });
        }
        const users = await User.find({ role });
        res.status(200).json({ data: users });
    }
    catch (error) {
        console.error("There is an error in the get user by role controller", error);
        res.status(500).json({ message: error });
    }
};
