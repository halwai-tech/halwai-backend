import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
export const register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists!" });
            return;
        }
        const hashedPassord = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassord,
            role,
        });
        await newUser.save();
        const token = generateToken({
            _id: newUser._id,
            role: newUser.role,
        });
        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
            },
        });
    }
    catch (error) {
        console.error("Registration Error: ", error);
        res.status(500).json({ message: "Sometime went wrong!" });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid Credentials!" });
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid Credentials!" });
            return;
        }
        const token = generateToken({
            _id: user._id,
            role: user.role,
        });
        res.status(200).json({
            message: "Login Successfull",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
        });
    }
    catch (error) {
        console.error("Login Error: ", error);
        res.status(500).json({ message: "Something Went Wrong!" });
    }
};
