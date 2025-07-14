import jwt from "jsonwebtoken";
import {Types} from "mongoose";

export const generateToken=(user:{_id:Types.ObjectId,role:string})=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET!,{expiresIn:"1d"});

}