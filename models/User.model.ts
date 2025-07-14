import mongoose,{Schema,Model} from "mongoose";
import {IUser} from "../types/TypeDef";

const userSchema:Schema<IUser>=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        trim:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
       type:String,
       required:true,
       minlength:6

    },
    role:{
        type:String,
        enum:["admin","halwai","user"],
        default:"user"
    }
},{
    timestamps:true
});

const User:Model<IUser>=mongoose.model<IUser>("User",userSchema);
export default User;
