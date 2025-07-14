import jwt,{JwtPayload} from "jsonwebtoken";
import {Response,NextFunction} from "express";

// for authenticating the jwt token at the time of login status check
export const authenticateJWT=(req:any,res:Response,next:NextFunction)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader) {
        res.status(401).json({msg:"No Token Provided!"});
        return;

    } 

    // extracting the real token from the authorization header
    const token=authHeader.split(" ")[1];
    jwt.verify(token,process.env.JWT_SECRET!, (err: jwt.VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
      if (err) return res.status(403).json({ msg: "Invalid Token!" });

      req.user = decoded; // You can type this properly by extending Express.Request

      next();
    })

}


// for authorizing the user role
export const authorizeRoles=(...roles:string[])=>{
    return (req:any,res:Response,next:NextFunction)=>{
        if(!roles.includes(req.user.role)){
           res.status(403).json({msg:"Access Denied!"});
           return;
        }

        next();
    }

}