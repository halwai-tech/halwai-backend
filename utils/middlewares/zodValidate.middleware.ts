// for validating any request with zod
import {Request, Response, NextFunction} from "express";
import { ZodSchema } from "zod";

export const validate=(schema:ZodSchema<any>)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const result=schema.safeParse(req.body);

        if(!result.success){
             res.status(400).json({
                errors:result.error.errors.map((e)=>({
                    path:e.path.join("."),
                    message:e.message
                }))
            })

            return;
        }

        req.body=result.data;  //Replaced with parsed data
        next();
    }
}